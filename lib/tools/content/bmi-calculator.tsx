/** Long-form "How it works" content for BMI Calculator. Locale-ready: add en/ar keys later. */
export function BmiCalculatorHowItWorks() {
  return (
    <div className="space-y-8 text-muted-foreground text-sm">
      <section>
        <h2 className="text-lg font-semibold text-foreground mb-2">What is BMI?</h2>
        <p>
          Body Mass Index (BMI) is a number calculated from your weight and height. It is a simple way to screen
          for weight categories that may affect health. BMI does not measure body fat directly, but it is a useful
          indicator for most adults. Health professionals use it as one of several tools to assess whether someone
          is underweight, normal weight, overweight, or obese.
        </p>
        <p className="mt-3">
          The formula divides your weight by the square of your height. In metric units, weight is in kilograms
          and height in meters. In imperial units, weight is in pounds and height in inches, with a factor of 703
          so the result matches the metric scale. Our calculator does this for you and also shows which category
          your result falls into.
        </p>
        <p className="mt-3">
          BMI is intended for adults. It is not used to diagnose health conditions; it is a screening tool. For
          a full assessment, talk to a doctor or dietitian, who can consider age, sex, muscle mass, and other
          factors.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-2">How to use this BMI calculator</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Choose your units: Metric (kg and cm) or Imperial (lb and inches).</li>
          <li>Enter your weight in the first field.</li>
          <li>Enter your height in the second field (height in cm for metric, or in inches for imperial).</li>
          <li>Click &quot;Calculate BMI&quot; to see your BMI and category.</li>
        </ol>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-2">BMI category table</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-border text-left">
            <thead>
              <tr className="bg-muted/50">
                <th className="border border-border px-3 py-2 font-medium text-foreground">BMI range</th>
                <th className="border border-border px-3 py-2 font-medium text-foreground">Category</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border px-3 py-2">Below 18.5</td>
                <td className="border border-border px-3 py-2">Underweight</td>
              </tr>
              <tr>
                <td className="border border-border px-3 py-2">18.5 – 24.9</td>
                <td className="border border-border px-3 py-2">Normal</td>
              </tr>
              <tr>
                <td className="border border-border px-3 py-2">25 – 29.9</td>
                <td className="border border-border px-3 py-2">Overweight</td>
              </tr>
              <tr>
                <td className="border border-border px-3 py-2">30 and above</td>
                <td className="border border-border px-3 py-2">Obese</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
