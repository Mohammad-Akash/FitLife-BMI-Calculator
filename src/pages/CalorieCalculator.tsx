import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Flame, TrendingDown, TrendingUp, Minus } from "lucide-react";

interface CalorieResult {
  bmr: number;
  maintenance: number;
  mildLoss: number;
  weightLoss: number;
  extremeLoss: number;
  mildGain: number;
  weightGain: number;
}

const CalorieCalculator = () => {
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [activity, setActivity] = useState("");
  const [result, setResult] = useState<CalorieResult | null>(null);

  const activityLevels = {
    sedentary: { label: "Sedentary (little or no exercise)", multiplier: 1.2 },
    light: { label: "Lightly active (1-3 days/week)", multiplier: 1.375 },
    moderate: { label: "Moderately active (3-5 days/week)", multiplier: 1.55 },
    very: { label: "Very active (6-7 days/week)", multiplier: 1.725 },
    extra: { label: "Extra active (physical job, training 2x/day)", multiplier: 1.9 },
  };

  const calculateCalories = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);

    // Mifflin-St Jeor Equation
    let bmr: number;
    if (gender === "male") {
      bmr = 10 * w + 6.25 * h - 5 * a + 5;
    } else {
      bmr = 10 * w + 6.25 * h - 5 * a - 161;
    }

    const activityMultiplier = activityLevels[activity as keyof typeof activityLevels].multiplier;
    const maintenance = bmr * activityMultiplier;

    setResult({
      bmr: Math.round(bmr),
      maintenance: Math.round(maintenance),
      mildLoss: Math.round(maintenance - 250),
      weightLoss: Math.round(maintenance - 500),
      extremeLoss: Math.round(maintenance - 1000),
      mildGain: Math.round(maintenance + 250),
      weightGain: Math.round(maintenance + 500),
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Calorie Calculator</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Estimate your daily caloric needs based on your age, gender, weight, height, and activity level.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Calculator Card */}
              <Card className="shadow-medium animate-slide-up">
                <CardHeader>
                  <CardTitle>Your Information</CardTitle>
                  <CardDescription>Enter your details below</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <Label>Gender</Label>
                    <RadioGroup value={gender} onValueChange={setGender}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="male" id="male" />
                        <Label htmlFor="male" className="cursor-pointer">Male</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="female" id="female" />
                        <Label htmlFor="female" className="cursor-pointer">Female</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="age">Age (years)</Label>
                    <Input
                      id="age"
                      type="number"
                      placeholder="25"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="weight">Weight (kg)</Label>
                    <Input
                      id="weight"
                      type="number"
                      placeholder="70"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="height">Height (cm)</Label>
                    <Input
                      id="height"
                      type="number"
                      placeholder="170"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="activity">Activity Level</Label>
                    <Select value={activity} onValueChange={setActivity}>
                      <SelectTrigger id="activity">
                        <SelectValue placeholder="Select activity level" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(activityLevels).map(([key, { label }]) => (
                          <SelectItem key={key} value={key}>
                            {label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <Button 
                    onClick={calculateCalories} 
                    className="w-full shadow-soft"
                    disabled={!age || !weight || !height || !activity}
                  >
                    Calculate Calories
                  </Button>
                </CardContent>
              </Card>

              {/* Result Card */}
              {result && (
                <div className="space-y-6 animate-fade-in">
                  <Card className="shadow-medium">
                    <CardHeader>
                      <CardTitle>Your Daily Calorie Needs</CardTitle>
                      <CardDescription>Based on your information</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="bg-gradient-primary text-primary-foreground p-4 rounded-lg text-center">
                        <Flame className="h-8 w-8 mx-auto mb-2" />
                        <div className="text-sm font-medium mb-1">Basal Metabolic Rate (BMR)</div>
                        <div className="text-3xl font-bold">{result.bmr}</div>
                        <div className="text-sm opacity-90">calories/day</div>
                      </div>

                      <div className="bg-secondary p-4 rounded-lg text-center">
                        <Minus className="h-6 w-6 mx-auto mb-2 text-foreground" />
                        <div className="text-sm font-medium mb-1 text-foreground">Maintain Weight</div>
                        <div className="text-2xl font-bold text-foreground">{result.maintenance}</div>
                        <div className="text-xs text-muted-foreground">calories/day</div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-medium">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <TrendingDown className="h-5 w-5 text-info" />
                        Weight Loss Goals
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                        <span className="text-sm text-foreground">Mild loss (0.25 kg/week)</span>
                        <span className="font-semibold text-foreground">{result.mildLoss} cal</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                        <span className="text-sm text-foreground">Weight loss (0.5 kg/week)</span>
                        <span className="font-semibold text-foreground">{result.weightLoss} cal</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                        <span className="text-sm text-foreground">Extreme loss (1 kg/week)</span>
                        <span className="font-semibold text-foreground">{result.extremeLoss} cal</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-medium">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-success" />
                        Weight Gain Goals
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                        <span className="text-sm text-foreground">Mild gain (0.25 kg/week)</span>
                        <span className="font-semibold text-foreground">{result.mildGain} cal</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                        <span className="text-sm text-foreground">Weight gain (0.5 kg/week)</span>
                        <span className="font-semibold text-foreground">{result.weightGain} cal</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>

            {/* Info */}
            <Card className="mt-8 shadow-soft">
              <CardHeader>
                <CardTitle>About This Calculator</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p className="text-muted-foreground">
                  This calculator uses the Mifflin-St Jeor Equation to estimate your BMR (Basal Metabolic Rate) 
                  and daily caloric needs. BMR represents the calories your body burns at rest. The total daily 
                  energy expenditure is calculated by multiplying your BMR by an activity factor. Remember, these 
                  are estimates - individual needs may vary based on metabolism, body composition, and other factors.
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

export default CalorieCalculator;
