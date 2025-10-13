import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Heart, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import nutritionImage from "@/assets/nutrition.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower individuals with accessible, accurate health tools that support their wellness journey.",
    },
    {
      icon: Users,
      title: "Community First",
      description: "We believe in creating a supportive environment where health information is free and available to all.",
    },
    {
      icon: Heart,
      title: "Health Focus",
      description: "Promoting evidence-based approaches to fitness, nutrition, and overall well-being.",
    },
    {
      icon: Award,
      title: "Quality Tools",
      description: "Providing professionally developed calculators and resources backed by health science.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">About FitLife BMI</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Your trusted partner in health and wellness
              </p>
            </div>

            {/* Image Section */}
            <div className="mb-12 animate-slide-up">
              <img
                src={nutritionImage}
                alt="Healthy food and nutrition with fresh fruits and vegetables"
                className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-medium"
              />
            </div>

            {/* Story Section */}
            <Card className="mb-12 shadow-soft">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    FitLife BMI was born from a simple idea: everyone deserves access to professional-grade health 
                    tools without barriers. We recognized that many people struggle to understand their health metrics 
                    and make informed decisions about their wellness journey.
                  </p>
                  <p>
                    Our team of health enthusiasts, developers, and wellness advocates came together to create a 
                    platform that demystifies health calculations. We believe that knowledge is power, and by providing 
                    accurate, easy-to-use tools, we can help people take the first step toward better health.
                  </p>
                  <p>
                    Today, FitLife BMI serves thousands of users worldwide, helping them calculate BMI, estimate 
                    caloric needs, and access valuable health information. We're committed to continually improving 
                    our tools and expanding our resources to support your wellness goals.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Values Grid */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Our Values</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <Card 
                    key={index}
                    className="shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="bg-gradient-primary p-3 rounded-lg w-fit mb-4">
                        <value.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Commitment Section */}
            <Card className="shadow-medium bg-gradient-hero text-white">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Our Commitment to You</h2>
                <p className="text-lg mb-6 text-white/90">
                  We're dedicated to providing free, accurate, and user-friendly health tools. Your privacy 
                  is paramount - we don't store your personal health data. Our calculators use industry-standard 
                  formulas, and we continuously update our content based on the latest health research.
                </p>
                <p className="text-white/90">
                  While our tools provide valuable insights, remember that they're for informational purposes. 
                  Always consult healthcare professionals for personalized medical advice.
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

export default About;
