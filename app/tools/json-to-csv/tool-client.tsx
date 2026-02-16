"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

function escapeCsvCell(val: string): string {
  if (/[",\n\r]/.test(val)) {
    return `"${val.replace(/"/g, '""')}"`;
  }
  return val;
}

function jsonToCsv(jsonStr: string): { csv: string; error: string | null } {
  try {
    const data = JSON.parse(jsonStr);
    const rows = Array.isArray(data) ? data : [data];
    if (rows.length === 0) return { csv: "", error: "Array is empty." };

    const first = rows[0];
    const keys = typeof first === "object" && first !== null ? Object.keys(first) : [];
    if (keys.length === 0) return { csv: "", error: "No keys found in first object." };

    const header = keys.map(escapeCsvCell).join(",");
    const body = rows
      .map((row: Record<string, unknown>) =>
        keys.map((k) => escapeCsvCell(String(row[k] ?? ""))).join(",")
      )
      .join("\n");
    return { csv: header + "\n" + body, error: null };
  } catch (e) {
    return { csv: "", error: e instanceof Error ? e.message : "Invalid JSON." };
  }
}

export function JsonToCsvClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState<string | null>(null);

  function convert() {
    setError(null);
    if (!input.trim()) {
      setOutput("");
      return;
    }
    const { csv, error: err } = jsonToCsv(input);
    setError(err);
    setOutput(csv);
  }

  function copyCsv() {
    if (!output) return;
    navigator.clipboard.writeText(output);
  }

  function downloadCsv() {
    if (!output) return;
    const blob = new Blob([output], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "data.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>JSON to CSV</CardTitle>
        <p className="text-sm text-muted-foreground">
          Paste a JSON array of objects. Each object’s keys become CSV columns. Converts in your browser.
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="json-input">JSON input</Label>
          <Textarea
            id="json-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='[{"name":"Alice","age":30},{"name":"Bob","age":25}]'
            rows={6}
            className="font-mono text-sm resize-y"
          />
        </div>

        <Button onClick={convert}>Convert to CSV</Button>

        {error && (
          <p className="text-sm text-destructive" role="alert">
            {error}
          </p>
        )}

        {output && (
          <div className="space-y-2">
            <Label htmlFor="csv-output">CSV output</Label>
            <Textarea
              id="csv-output"
              readOnly
              value={output}
              rows={6}
              className="font-mono text-sm resize-y bg-muted/50"
            />
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" onClick={copyCsv}>
                Copy CSV
              </Button>
              <Button variant="outline" size="sm" onClick={downloadCsv}>
                Download CSV
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
