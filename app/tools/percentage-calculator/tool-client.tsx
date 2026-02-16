"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type Mode = "what-is-x-of-y" | "x-is-what-of-y" | "change";

export function PercentageCalculatorClient() {
  const [mode, setMode] = useState<Mode>("what-is-x-of-y");
  const [val1, setVal1] = useState("");
  const [val2, setVal2] = useState("");
  const [result, setResult] = useState<string | null>(null);

  function calculate() {
    const a = Number(val1);
    const b = Number(val2);
    if (Number.isNaN(a) || Number.isNaN(b)) {
      setResult(null);
      return;
    }
    switch (mode) {
      case "what-is-x-of-y":
        if (b === 0) {
          setResult(null);
          return;
        }
        setResult(((a / 100) * b).toFixed(2));
        break;
      case "x-is-what-of-y":
        if (b === 0) {
          setResult(null);
          return;
        }
        setResult(((a / b) * 100).toFixed(2) + "%");
        break;
      case "change":
        if (b === 0) {
          setResult(null);
          return;
        }
        const change = ((a - b) / b) * 100;
        setResult(change.toFixed(2) + "%");
        break;
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Percentage calculator</CardTitle>
        <p className="text-sm text-muted-foreground">
          Find what X% of Y is, what percent X is of Y, or percent change from one value to another.
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Calculation type</Label>
          <div className="flex flex-wrap gap-2">
            <Button
              variant={mode === "what-is-x-of-y" ? "default" : "outline"}
              size="sm"
              onClick={() => setMode("what-is-x-of-y")}
            >
              What is X% of Y?
            </Button>
            <Button
              variant={mode === "x-is-what-of-y" ? "default" : "outline"}
              size="sm"
              onClick={() => setMode("x-is-what-of-y")}
            >
              X is what % of Y?
            </Button>
            <Button
              variant={mode === "change" ? "default" : "outline"}
              size="sm"
              onClick={() => setMode("change")}
            >
              Percent change
            </Button>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="pc-val1">
              {mode === "what-is-x-of-y" ? "Percentage (X)" : mode === "x-is-what-of-y" ? "Value (X)" : "New value"}
            </Label>
            <Input
              id="pc-val1"
              type="number"
              inputMode="decimal"
              value={val1}
              onChange={(e) => setVal1(e.target.value)}
              placeholder={mode === "change" ? "e.g. 120" : "e.g. 15"}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="pc-val2">
              {mode === "what-is-x-of-y" ? "Value (Y)" : mode === "x-is-what-of-y" ? "Total (Y)" : "Original value"}
            </Label>
            <Input
              id="pc-val2"
              type="number"
              inputMode="decimal"
              value={val2}
              onChange={(e) => setVal2(e.target.value)}
              placeholder="e.g. 200"
            />
          </div>
        </div>

        <Button onClick={calculate}>Calculate</Button>

        {result !== null && (
          <div className="rounded-lg border border-border bg-muted/30 p-4">
            <p className="text-sm font-medium text-foreground">Result</p>
            <p className="text-2xl font-semibold text-foreground mt-1">{result}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
