"use client";

import { useState, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Image as ImageIcon, Upload, Download } from "lucide-react";

const MAX_SIZE_MB = 10;
const DEFAULT_MAX_WIDTH = 1920;
const ACCEPT = "image/png,image/jpeg,image/webp";

export function ImageCompressorClient() {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [result, setResult] = useState<{
    url: string;
    blob: Blob;
    originalSize: number;
    newSize: number;
  } | null>(null);
  const [quality, setQuality] = useState(80);
  const [maxWidth] = useState(DEFAULT_MAX_WIDTH);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<"compress" | "batch">("compress");
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const clearPreview = useCallback(() => {
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setPreviewUrl(null);
  }, [previewUrl]);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    setResult(null);
    setError(null);
    clearPreview();
    if (!f) {
      setFile(null);
      return;
    }
    if (!f.type.startsWith("image/")) {
      setError("Please select an image file (PNG, JPG, or WebP).");
      setFile(null);
      return;
    }
    if (f.size > MAX_SIZE_MB * 1024 * 1024) {
      setError(`File must be under ${MAX_SIZE_MB}MB.`);
      setFile(null);
      return;
    }
    setFile(f);
    setPreviewUrl(URL.createObjectURL(f));
  }

  function onDrop(e: React.DragEvent) {
    e.preventDefault();
    setDragActive(false);
    const f = e.dataTransfer.files?.[0];
    if (!f) return;
    setResult(null);
    setError(null);
    clearPreview();
    if (!f.type.startsWith("image/")) {
      setError("Please select an image file (PNG, JPG, or WebP).");
      return;
    }
    if (f.size > MAX_SIZE_MB * 1024 * 1024) {
      setError(`File must be under ${MAX_SIZE_MB}MB.`);
      return;
    }
    setFile(f);
    setPreviewUrl(URL.createObjectURL(f));
    if (inputRef.current) {
      const dt = new DataTransfer();
      dt.items.add(f);
      inputRef.current.files = dt.files;
    }
  }

  function onDragOver(e: React.DragEvent) {
    e.preventDefault();
    setDragActive(true);
  }

  function onDragLeave() {
    setDragActive(false);
  }

  function compressImage(): Promise<Blob> {
    return new Promise((resolve, reject) => {
      if (!file) {
        reject(new Error("No file"));
        return;
      }
      const qualityNormalized = quality / 100;
      const img = new Image();
      const url = URL.createObjectURL(file);
      img.onload = () => {
        URL.revokeObjectURL(url);
        const canvas = document.createElement("canvas");
        let { width, height } = img;
        if (width > maxWidth || height > maxWidth) {
          if (width > height) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          } else {
            width = Math.round((width * maxWidth) / height);
            height = maxWidth;
          }
        }
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          reject(new Error("Canvas not supported"));
          return;
        }
        ctx.drawImage(img, 0, 0, width, height);
        canvas.toBlob(
          (blob) => {
            if (blob) resolve(blob);
            else reject(new Error("Compression failed"));
          },
          "image/jpeg",
          qualityNormalized
        );
      };
      img.onerror = () => {
        URL.revokeObjectURL(url);
        reject(new Error("Failed to load image"));
      };
      img.src = url;
    });
  }

  async function handleCompress() {
    if (!file) {
      setError("Please select an image first.");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const blob = await compressImage();
      const url = URL.createObjectURL(blob);
      setResult({
        url,
        blob,
        originalSize: file.size,
        newSize: blob.size,
      });
    } catch (e) {
      setError(e instanceof Error ? e.message : "Compression failed.");
    } finally {
      setLoading(false);
    }
  }

  function downloadResult() {
    if (!result) return;
    const a = document.createElement("a");
    a.href = result.url;
    a.download =
      file?.name?.replace(/\.[^.]+$/, "") + "-compressed.jpg" || "compressed.jpg";
    a.click();
  }

  const savedPercent = result
    ? Math.round(
        ((result.originalSize - result.newSize) / result.originalSize) * 100
      )
    : null;

  const formatSize = (bytes: number) => {
    if (bytes >= 1024 * 1024) {
      return (bytes / 1024 / 1024).toFixed(2) + " MB";
    }
    return (bytes / 1024).toFixed(1) + " KB";
  };

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="flex border-b border-border">
        <button
          type="button"
          onClick={() => setActiveTab("compress")}
          className={cn(
            "relative py-3 px-4 text-sm font-medium transition-colors",
            activeTab === "compress"
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}
          aria-selected={activeTab === "compress"}
          role="tab"
        >
          Compress
          {activeTab === "compress" && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
          )}
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("batch")}
          className={cn(
            "relative py-3 px-4 text-sm font-medium transition-colors",
            activeTab === "batch"
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}
          aria-selected={activeTab === "batch"}
          role="tab"
        >
          Batch Compress
          {activeTab === "batch" && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
          )}
        </button>
      </div>

      {activeTab === "batch" ? (
        <div className="bg-card border border-border rounded-2xl p-8 text-center">
          <p className="text-muted-foreground">
            Batch compression coming soon!
          </p>
        </div>
      ) : (
        <>
          {/* Input Card - Figma: bg-card border rounded-2xl p-8 */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="text-xl mb-4 text-foreground">Upload Image</h3>

            <input
              ref={inputRef}
              type="file"
              accept={ACCEPT}
              onChange={handleFileChange}
              className="hidden"
              id="file-upload"
              aria-describedby="upload-hint"
            />
            <div
              role="button"
              tabIndex={0}
              onClick={() => inputRef.current?.click()}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  inputRef.current?.click();
                }
              }}
              onDrop={onDrop}
              onDragOver={onDragOver}
              onDragLeave={onDragLeave}
              className={cn(
                "border-2 border-dashed border-border rounded-xl p-12 text-center hover:border-primary/50 transition-colors cursor-pointer",
                dragActive && "border-primary/50 bg-primary/5"
              )}
              aria-label="Upload image"
            >
              <span className="block pointer-events-none">
                <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                <p className="text-foreground mb-2">
                  Click to upload or drag and drop
                </p>
                <p id="upload-hint" className="text-sm text-muted-foreground">
                  PNG, JPG, or WebP (max {MAX_SIZE_MB}MB)
                </p>
              </span>
            </div>

            {previewUrl && (
              <div className="mt-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={previewUrl}
                  alt="Preview"
                  className="max-w-full h-auto rounded-xl"
                />
              </div>
            )}

            <div className="mt-6">
              <label
                htmlFor="quality-slider"
                className="block mb-3 text-foreground"
              >
                Quality: {quality}%
              </label>
              <input
                id="quality-slider"
                type="range"
                min={1}
                max={100}
                value={quality}
                onChange={(e) => setQuality(Number(e.target.value))}
                className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                aria-label="Compression quality"
              />
              <div className="flex justify-between text-sm text-muted-foreground mt-2">
                <span>Lower quality</span>
                <span>Higher quality</span>
              </div>
            </div>
          </div>

          {/* Action Buttons - outside card, Figma: flex flex-col sm:flex-row gap-4 */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={handleCompress}
              disabled={!file || loading}
              aria-busy={loading}
              className="flex-1 gap-2"
            >
              <ImageIcon className="w-5 h-5" />
              {loading ? "Compressing…" : "Compress Image"}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={downloadResult}
              disabled={!result}
              className="flex-1 gap-2"
            >
              <Download className="w-5 h-5" />
              Download
            </Button>
          </div>

          {error && (
            <p className="text-sm text-destructive" role="alert">
              {error}
            </p>
          )}

          {/* Result Card - Figma: bg-muted/50 border rounded-2xl p-8, grid of 3 cards */}
          {(file || result) && (
            <div className="bg-muted/50 border border-border rounded-2xl p-8">
              <h3 className="text-xl mb-4 text-foreground">Results</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-card rounded-xl p-4">
                  <p className="text-sm text-muted-foreground mb-1">
                    Original Size
                  </p>
                  <p className="text-2xl text-foreground">
                    {file ? formatSize(file.size) : "—"}
                  </p>
                </div>
                <div className="bg-card rounded-xl p-4">
                  <p className="text-sm text-muted-foreground mb-1">
                    Compressed Size
                  </p>
                  <p className="text-2xl text-primary">
                    {result ? formatSize(result.newSize) : "—"}
                  </p>
                </div>
                <div className="bg-card rounded-xl p-4">
                  <p className="text-sm text-muted-foreground mb-1">Saved</p>
                  <p className="text-2xl text-accent">
                    {savedPercent != null ? `${savedPercent}%` : "—"}
                  </p>
                </div>
              </div>
              {result && (
                <div className="mt-6">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={result.url}
                    alt="Compressed preview"
                    className="max-w-full h-auto rounded-xl"
                  />
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}
