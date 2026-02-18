/** Long-form "How it works" content for JSON to CSV. Locale-ready: add en/ar keys later. */
export function JsonToCsvHowItWorks() {
  return (
    <div className="space-y-3 text-muted-foreground text-sm">
      <p>
        Paste valid JSON in the input box—usually an array of objects, e.g. [{"{"} &quot;name&quot;: &quot;Alice&quot;,
        &quot;age&quot;: 30{"}"}, ...]. Click &quot;Convert to CSV&quot;. The first object&apos;s keys become the CSV header;
        each object&apos;s values become a row. Commas and newlines inside values are escaped so the CSV is valid. You
        can copy the result or download it as a .csv file. Conversion runs in your browser; nothing is sent to a
        server.
      </p>
      <p>
        Use this for API responses, export scripts, or any JSON data you need in spreadsheet form. No account
        required.
      </p>
    </div>
  );
}
