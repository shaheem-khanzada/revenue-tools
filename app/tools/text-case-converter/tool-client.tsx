"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type CaseType = "upper" | "lower" | "title" | "sentence";

function toTitleCase(str: string): string {
  return str.replace(/\b\w/g, (c) => c.toUpperCase());
}

function toSentenceCase(str: string): string {
  return str.replace(/(^\s*\w|\.\s*\w)/g, (c) => c.slice(-1).toUpperCase());
}

export function TextCaseConverterClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [activeCase, setActiveCase] = useState<CaseType | null>(null);

  function convert(type: CaseType) {
    if (!input.trim()) {
      setOutput("");
      setActiveCase(null);
      return;
    }
    setActiveCase(type);
    switch (type) {
      case "upper":
        setOutput(input.toUpperCase());
        break;
      case "lower":
        setOutput(input.toLowerCase());
        break;
      case "title":
        setOutput(toTitleCase(input.toLowerCase()));
        break;
      case "sentence":
        setOutput(toSentenceCase(input.toLowerCase()));
        break;
    }
  }

  function copyToClipboard() {
    if (!output) return;
    navigator.clipboard.writeText(output);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Convert text case</CardTitle>
        <p className="text-sm text-muted-foreground">
          Paste your text and choose uppercase, lowercase, title case, or sentence case.
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="case-input">Your text</Label>
          <Textarea
            id="case-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type or paste text here..."
            rows={4}
            className="resize-y"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <Button
            variant={activeCase === "upper" ? "default" : "outline"}
            size="sm"
            onClick={() => convert("upper")}
          >
            UPPERCASE
          </Button>
          <Button
            variant={activeCase === "lower" ? "default" : "outline"}
            size="sm"
            onClick={() => convert("lower")}
          >
            lowercase
          </Button>
          <Button
            variant={activeCase === "title" ? "default" : "outline"}
            size="sm"
            onClick={() => convert("title")}
          >
            Title Case
          </Button>
          <Button
            variant={activeCase === "sentence" ? "default" : "outline"}
            size="sm"
            onClick={() => convert("sentence")}
          >
            Sentence case
          </Button>
        </div>

        {output && (
          <div className="space-y-2">
            <Label htmlFor="case-output">Result</Label>
            <Textarea
              id="case-output"
              readOnly
              value={output}
              rows={4}
              className="resize-y bg-muted/50"
            />
            <Button variant="outline" size="sm" onClick={copyToClipboard}>
              Copy result
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
