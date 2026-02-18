/** Long-form "How it works" content for Image Compressor. Locale-ready: add en/ar keys later. */
export function ImageCompressorHowItWorks() {
  return (
    <div className="space-y-3 text-muted-foreground text-sm">
      <p>
        Our image compressor runs entirely in your browser. You select an image, set a quality level (0.1 to 1) and
        optional max width. Click &quot;Compress image&quot; and the tool resizes and re-encodes the image as JPEG
        to reduce file size. No data is uploaded to any server, so your photos stay private.
      </p>
      <p>
        Lower quality and a smaller max width produce smaller files; higher quality keeps more detail. Use this for
        web images, email attachments, or saving storage. The result can be downloaded immediately.
      </p>
    </div>
  );
}
