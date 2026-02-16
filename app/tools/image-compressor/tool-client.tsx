"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const MAX_SIZE_MB = 10;
const DEFAULT_QUALITY = 0.8;
const DEFAULT_MAX_WIDTH = 1920;

export function ImageCompressorClient() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<{ url: string; blob: Blob; originalSize: number; newSize: number } | null>(null);
  const [quality, setQuality] = useState(DEFAULT_QUALITY);
  const [maxWidth, setMaxWidth] = useState(DEFAULT_MAX_WIDTH);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    setResult(null);
    setError(null);
    if (!f) {
      setFile(null);
      return;
    }
    if (!f.type.startsWith("image/")) {
      setError("Please select an image file (JPEG, PNG, WebP, etc.).");
      setFile(null);
      return;
    }
    if (f.size > MAX_SIZE_MB * 1024 * 1024) {
      setError(`File must be under ${MAX_SIZE_MB}MB.`);
      setFile(null);
      return;
    }
    setFile(f);
  }

  function compressImage(): Promise<Blob> {
    return new Promise((resolve, reject) => {
      if (!file) {
        reject(new Error("No file"));
        return;
      }
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
          quality
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
    a.download = file?.name?.replace(/\.[^.]+$/, "") + "-compressed.jpg" || "compressed.jpg";
    a.click();
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Compress your image</CardTitle>
        <p className="text-sm text-muted-foreground">
          Upload an image, choose quality and max width, then compress. No data is sent to any server.
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="image-upload">Select image</Label>
          <Input
            id="image-upload"
            ref={inputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            aria-describedby="image-upload-hint"
          />
          <p id="image-upload-hint" className="text-xs text-muted-foreground">
            Max {MAX_SIZE_MB}MB. JPEG, PNG, WebP supported.
          </p>
        </div>

        {file && (
          <>
            <div className="space-y-2">
              <Label htmlFor="quality">Quality (0.1 – 1)</Label>
              <Input
                id="quality"
                type="number"
                min={0.1}
                max={1}
                step={0.1}
                value={quality}
                onChange={(e) => setQuality(Number(e.target.value))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="max-width">Max width (px)</Label>
              <Input
                id="max-width"
                type="number"
                min={100}
                max={4000}
                value={maxWidth}
                onChange={(e) => setMaxWidth(Number(e.target.value))}
              />
            </div>
            <Button
              onClick={handleCompress}
              disabled={loading}
              aria-busy={loading}
            >
              {loading ? "Compressing…" : "Compress image"}
            </Button>
          </>
        )}

        {error && (
          <p className="text-sm text-destructive" role="alert">
            {error}
          </p>
        )}

        {result && (
          <div className="space-y-3 rounded-lg border border-border p-4">
            <p className="text-sm font-medium">Result</p>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span>Original: {(result.originalSize / 1024).toFixed(1)} KB</span>
              <span>Compressed: {(result.newSize / 1024).toFixed(1)} KB</span>
              <span>
                Saved: {(((result.originalSize - result.newSize) / result.originalSize) * 100).toFixed(0)}%
              </span>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={result.url}
              alt="Compressed preview"
              className="max-h-48 rounded border border-border object-contain"
            />
            <Button variant="outline" onClick={downloadResult}>
              Download compressed image
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
