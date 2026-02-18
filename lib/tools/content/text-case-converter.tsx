/** Long-form "How it works" content for Text Case Converter. Locale-ready: add en/ar keys later. */
export function TextCaseConverterHowItWorks() {
  return (
    <div className="space-y-3 text-muted-foreground text-sm">
      <p>
        Paste or type your text in the box, then click one of the case buttons. UPPERCASE converts every letter to
        capitals; lowercase does the opposite. Title Case capitalizes the first letter of each word. Sentence case
        capitalizes the first letter of each sentence. The result appears immediately and can be copied with one
        click. All processing happens in your browser—nothing is sent to a server.
      </p>
      <p>
        Use this for headings, titles, labels, or any text that needs consistent capitalization. No account or
        download required.
      </p>
    </div>
  );
}
