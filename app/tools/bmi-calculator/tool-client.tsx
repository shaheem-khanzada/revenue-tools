"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Unit = "metric" | "imperial";

function getCategory(bmi: number): string {
  if (bmi < 18.5) return "Underweight";
  if (bmi <= 24.9) return "Normal";
  if (bmi <= 29.9) return "Overweight";
  return "Obese";
}

export function BmiCalculatorClient() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [unit, setUnit] = useState<Unit>("metric");
  const [result, setResult] = useState<{ bmi: number; category: string } | null>(null);
  const [error, setError] = useState<string | null>(null);

  function calculate() {
    setError(null);
    setResult(null);
    const w = Number(weight);
    const h = Number(height);
    if (Number.isNaN(w) || Number.isNaN(h) || w <= 0 || h <= 0) {
      setError("Please enter valid weight and height.");
      return;
    }
    if (unit === "metric" && h > 300) {
      setError("Enter height in centimeters (e.g. 170).");
      return;
    }
    if (unit === "imperial" && h > 120) {
      setError("Enter height in inches (e.g. 70).");
      return;
    }
    let bmi: number;
    if (unit === "metric") {
      const heightM = h / 100;
      bmi = w / (heightM * heightM);
    } else {
      bmi = (w / (h * h)) * 703;
    }
    const rounded = Math.round(bmi * 10) / 10;
    setResult({ bmi: rounded, category: getCategory(rounded) });
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Calculate your BMI</CardTitle>
        <p className="text-sm text-muted-foreground">
          Enter your weight and height, choose metric or imperial, then click Calculate.
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="bmi-unit">Units</Label>
          <Select value={unit} onValueChange={(v) => setUnit(v as Unit)}>
            <SelectTrigger id="bmi-unit" className="w-full">
              <SelectValue placeholder="Select units" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="metric">Metric (kg, cm)</SelectItem>
              <SelectItem value="imperial">Imperial (lb, inches)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="bmi-weight">
            {unit === "metric" ? "Weight (kg)" : "Weight (lb)"}
          </Label>
          <Input
            id="bmi-weight"
            type="number"
            inputMode="decimal"
            min={1}
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder={unit === "metric" ? "e.g. 70" : "e.g. 154"}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="bmi-height">
            {unit === "metric" ? "Height (cm)" : "Height (inches)"}
          </Label>
          <Input
            id="bmi-height"
            type="number"
            inputMode="decimal"
            min={1}
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder={unit === "metric" ? "e.g. 170" : "e.g. 67"}
          />
        </div>
        <Button onClick={calculate}>Calculate BMI</Button>
        {error && (
          <p className="text-sm text-destructive" role="alert">
            {error}
          </p>
        )}
        {result && (
          <div className="rounded-lg border-2 border-primary/30 bg-primary/5 p-4">
            <p className="text-sm font-medium text-foreground">Your BMI</p>
            <p className="text-2xl font-bold text-foreground mt-1">{result.bmi}</p>
            <p className="text-sm text-muted-foreground mt-1">{result.category}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
