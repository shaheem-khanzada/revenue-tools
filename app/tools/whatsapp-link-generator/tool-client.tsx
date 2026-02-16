"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

function formatPhone(phone: string): string {
  return phone.replace(/\D/g, "");
}

function buildWhatsAppUrl(phone: string, message: string): string {
  const num = formatPhone(phone);
  const base = "https://wa.me/";
  const query = message.trim() ? `?text=${encodeURIComponent(message)}` : "";
  return num ? `${base}${num}${query}` : "";
}

export function WhatsAppLinkGeneratorClient() {
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [link, setLink] = useState("");
  const [copied, setCopied] = useState(false);

  function generate() {
    const url = buildWhatsAppUrl(phone, message);
    setLink(url);
  }

  function copyLink() {
    if (!link) return;
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create WhatsApp link</CardTitle>
        <p className="text-sm text-muted-foreground">
          Enter a phone number (with country code, no + or 0) and optional message. Get a wa.me link to open WhatsApp chat.
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="wa-phone">Phone number (with country code)</Label>
          <Input
            id="wa-phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="e.g. 14155551234"
            aria-describedby="wa-phone-hint"
          />
          <p id="wa-phone-hint" className="text-xs text-muted-foreground">
            Numbers only; include country code (e.g. 1 for USA, 44 for UK).
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="wa-message">Pre-filled message (optional)</Label>
          <Textarea
            id="wa-message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Hello, I wanted to ask..."
            rows={3}
            className="resize-y"
          />
        </div>

        <Button onClick={generate}>Generate link</Button>

        {link && (
          <div className="space-y-2 rounded-lg border border-border p-4">
            <Label>Your WhatsApp link</Label>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <Input readOnly value={link} className="font-mono text-sm" />
              <Button variant="outline" onClick={copyLink}>
                {copied ? "Copied!" : "Copy link"}
              </Button>
            </div>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary underline"
            >
              Open in WhatsApp
            </a>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
