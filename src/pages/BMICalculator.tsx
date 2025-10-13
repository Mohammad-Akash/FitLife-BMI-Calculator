import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import bmiIllustration from "@/assets/bmi-illustration.jpg";

interface BMIResult {
  bmi: number;
  category: string;
  color: string;
  advice: string;
}

const BMICalculator = () => {
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState<BMIResult | null>(null);

  const calculateBMI = () => {
    let bmi: number;
    
    if (unit === "metric") {
      const heightM = parseFloat(height) / 100;
      bmi = parseFloat(weight) / (heightM * heightM);
    } else {
      bmi = (parseFloat(weight) / (parseFloat(height) * parseFloat(height))) * 703;
    }

    let category: string;
    let color: string;
    let advice: string;

    if (bmi < 18.5) {
      category = "Underweight";
      color = "text-info";
      advice = "Consider consulting a healthcare provider about healthy weight gain strategies.";
    } else if (bmi >= 18.5 && bmi < 25) {
      category = "Normal Weight";
      color = "text-success";
      advice = "Great! Maintain your healthy lifestyle with balanced nutrition and regular exercise.";
    } else if (bmi >= 25 && bmi < 30) {
      category = "Overweight";
      color = "text-warning";
      advice = "Consider increasing physical activity and focusing on a balanced diet.";
    } else {
      category = "Obese";
      color = "text-danger";
      advice = "We recommend consulting with a healthcare professional for personalized guidance.";
    }

    setResult({ bmi: parseFloat(bmi.toFixed(1)), category, color, advice });
  };

  const getBMIProgress = (bmi: number) => {
    // Map BMI to 0-100 scale (BMI 15-35 mapped to 0-100)
    return Math.min(Math.max(((bmi - 15) / 20) * 100, 0), 100);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">BMI Calculator</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Body Mass Index (BMI) is a simple calculation using your height and weight. 
                Calculate your BMI to understand your weight category.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Calculator Card */}
              <Card className="shadow-medium animate-slide-up">
                <CardHeader>
                  <CardTitle>Calculate Your BMI</CardTitle>
                  <CardDescription>Enter your measurements below</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Tabs value={unit} onValueChange={(v) => setUnit(v as "metric" | "imperial")}>
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="metric">Metric</TabsTrigger>
                      <TabsTrigger value="imperial">Imperial</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="metric" className="space-y-4 mt-4">
                      <div className="space-y-2">
                        <Label htmlFor="height-cm">Height (cm)</Label>
                        <Input
                          id="height-cm"
                          type="number"
                          placeholder="170"
                          value={height}
                          onChange={(e) => setHeight(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="weight-kg">Weight (kg)</Label>
                        <Input
                          id="weight-kg"
                          type="number"
                          placeholder="70"
                          value={weight}
                          onChange={(e) => setWeight(e.target.value)}
                        />
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="imperial" className="space-y-4 mt-4">
                      <div className="space-y-2">
                        <Label htmlFor="height-in">Height (inches)</Label>
                        <Input
                          id="height-in"
                          type="number"
                          placeholder="67"
                          value={height}
                          onChange={(e) => setHeight(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="weight-lbs">Weight (lbs)</Label>
                        <Input
                          id="weight-lbs"
                          type="number"
                          placeholder="154"
                          value={weight}
                          onChange={(e) => setWeight(e.target.value)}
                        />
                      </div>
                    </TabsContent>
                  </Tabs>

                  <Button 
                    onClick={calculateBMI} 
                    className="w-full shadow-soft"
                    disabled={!height || !weight}
                  >
                    Calculate BMI
                  </Button>
                </CardContent>
              </Card>

              {/* Result Card */}
              <div className="space-y-6">
                {result ? (
                  <Card className="shadow-medium animate-fade-in">
                    <CardHeader>
                      <CardTitle>Your Results</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="text-center">
                        <div className={`text-6xl font-bold mb-2 ${result.color}`}>
                          {result.bmi}
                        </div>
                        <div className={`text-2xl font-semibold mb-4 ${result.color}`}>
                          {result.category}
                        </div>
                        <Progress value={getBMIProgress(result.bmi)} className="h-3 mb-6" />
                      </div>
                      
                      <div className="bg-secondary p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 text-foreground">Recommendation</h4>
                        <p className="text-sm text-muted-foreground">{result.advice}</p>
                      </div>

                      <div className="text-xs text-muted-foreground">
                        <p className="mb-2"><strong>BMI Categories:</strong></p>
                        <ul className="space-y-1">
                          <li>• Underweight: BMI less than 18.5</li>
                          <li>• Normal weight: BMI 18.5-24.9</li>
                          <li>• Overweight: BMI 25-29.9</li>
                          <li>• Obese: BMI 30 or greater</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <Card className="shadow-medium">
                    <CardContent className="p-6">
                      <img
                        src={bmiIllustration}
                        alt="BMI measurement illustration with health icons"
                        className="w-full h-auto rounded-lg mb-4"
                      />
                      <p className="text-sm text-muted-foreground text-center">
                        Enter your measurements and click Calculate to see your BMI results
                      </p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>

            {/* Info Section */}
            <Card className="mt-8 shadow-soft">
              <CardHeader>
                <CardTitle>Understanding BMI</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p className="text-muted-foreground">
                  Body Mass Index (BMI) is a screening tool used to identify potential weight problems in adults. 
                  While BMI is a useful indicator of healthy weight, it does have limitations. It doesn't directly 
                  measure body fat and may not accurately reflect health status for athletes, pregnant women, or 
                  elderly individuals. Always consult with healthcare professionals for personalized health advice.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BMICalculator;
