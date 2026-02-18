/** Long-form "How it works" content for Percentage Calculator. Locale-ready: add en/ar keys later. */
export function PercentageCalculatorHowItWorks() {
  return (
    <div className="space-y-3 text-muted-foreground text-sm">
      <p>
        Choose a calculation type: &quot;What is X% of Y?&quot; gives you the value of a percentage of a number (e.g., 15% of
        200 = 30). &quot;X is what % of Y?&quot; finds the percentage (e.g., 30 is 15% of 200). &quot;Percent change&quot; computes the
        percentage increase or decrease from an original value to a new value. Enter the two numbers and click
        Calculate. All math is done in your browser—no data is sent to a server.
      </p>
      <p>
        Useful for discounts, tips, grades, growth rates, and any quick percentage math. No account needed.
      </p>
    </div>
  );
}
