import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calculator, Activity, TrendingUp, Heart, Apple, Dumbbell } from "lucide-react";
import heroImage from "@/assets/hero-fitness.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Home = () => {
  const features = [
    {
      icon: Calculator,
      title: "BMI Calculator",
      description: "Calculate your Body Mass Index instantly with our accurate and easy-to-use tool.",
    },
    {
      icon: Activity,
      title: "Calorie Tracker",
      description: "Estimate your daily calorie needs based on your lifestyle and goals.",
    },
    {
      icon: TrendingUp,
      title: "Track Progress",
      description: "Monitor your health journey with our comprehensive tracking tools.",
    },
    {
      icon: Heart,
      title: "Health Tips",
      description: "Get expert advice and tips to maintain a healthy lifestyle.",
    },
    {
      icon: Apple,
      title: "Nutrition Guides",
      description: "Access detailed nutrition information and meal planning resources.",
    },
    {
      icon: Dumbbell,
      title: "Fitness Resources",
      description: "Discover workout plans and exercise guides for all fitness levels.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero opacity-95"></div>
          <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-white animate-fade-in">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Your Health Journey Starts Here
                </h1>
                <p className="text-lg md:text-xl mb-8 text-white/90">
                  Calculate your BMI, track calories, and discover personalized health insights with FitLife BMI. 
                  Professional tools for a healthier, happier you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 shadow-medium">
                    <Link to="/bmi-calculator">Start BMI Check</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                    <Link to="/about">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="relative animate-slide-up hidden md:block">
                <div className="rounded-2xl overflow-hidden shadow-medium">
                  <img
                    src={heroImage}
                    alt="Person running outdoors in nature - healthy lifestyle"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Everything You Need for Better Health
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive tools and resources to help you achieve your wellness goals
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card 
                  key={index} 
                  className="border-border hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="bg-gradient-primary p-3 rounded-lg w-fit mb-4">
                      <feature.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Ready to Transform Your Health?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of users who have taken control of their wellness journey with FitLife BMI
              </p>
              <Button asChild size="lg" className="shadow-medium">
                <Link to="/bmi-calculator">Calculate Your BMI Now</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
