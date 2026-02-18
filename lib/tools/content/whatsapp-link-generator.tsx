/** Long-form "How it works" content for WhatsApp Link Generator. Locale-ready: add en/ar keys later. */
export function WhatsAppLinkGeneratorHowItWorks() {
  return (
    <div className="space-y-3 text-muted-foreground text-sm">
      <p>
        Enter the phone number with country code (digits only, e.g. 14155551234 for USA). Optionally add a
        pre-filled message. Click &quot;Generate link&quot; to get a wa.me URL. Anyone who opens that link on a device with
        WhatsApp installed will start a chat with that number; if you added a message, it appears in the compose
        box. Use this for &quot;Contact us on WhatsApp&quot; buttons, email signatures, or QR codes. No account or app
        needed to generate the link—only to open it.
      </p>
      <p>
        All processing is done in your browser. We don&apos;t store phone numbers or messages.
      </p>
    </div>
  );
}
