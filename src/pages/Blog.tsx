import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Blog = () => {
  const articles = [
    {
      title: "Understanding BMI: More Than Just a Number",
      excerpt: "Learn what BMI really means, its limitations, and how to interpret your results in the context of overall health.",
      category: "Health Education",
      readTime: "5 min read",
      author: "Dr. Sarah Johnson",
      date: "May 15, 2024",
    },
    {
      title: "10 Simple Ways to Boost Your Daily Calorie Burn",
      excerpt: "Discover practical strategies to increase your metabolism and burn more calories throughout your day without extreme measures.",
      category: "Fitness Tips",
      readTime: "7 min read",
      author: "Mike Chen",
      date: "May 12, 2024",
    },
    {
      title: "The Truth About Calorie Counting",
      excerpt: "Explore the science behind calorie counting, when it's helpful, and when it might not be the best approach for you.",
      category: "Nutrition",
      readTime: "6 min read",
      author: "Emma Rodriguez",
      date: "May 10, 2024",
    },
    {
      title: "Healthy Weight Loss: A Sustainable Approach",
      excerpt: "Evidence-based strategies for losing weight safely and keeping it off long-term through lifestyle changes.",
      category: "Weight Management",
      readTime: "8 min read",
      author: "Dr. Sarah Johnson",
      date: "May 8, 2024",
    },
    {
      title: "Building Muscle: Nutrition Fundamentals",
      excerpt: "Essential nutrition principles for muscle growth, including protein needs, timing, and meal planning strategies.",
      category: "Nutrition",
      readTime: "10 min read",
      author: "Mike Chen",
      date: "May 5, 2024",
    },
    {
      title: "Meal Prep 101: Save Time, Eat Better",
      excerpt: "A beginner's guide to meal prepping with practical tips, recipes, and strategies for busy lifestyles.",
      category: "Lifestyle",
      readTime: "6 min read",
      author: "Emma Rodriguez",
      date: "May 3, 2024",
    },
    {
      title: "The Role of Sleep in Weight Management",
      excerpt: "How quality sleep affects your metabolism, hunger hormones, and weight loss efforts.",
      category: "Health Education",
      readTime: "5 min read",
      author: "Dr. Sarah Johnson",
      date: "May 1, 2024",
    },
    {
      title: "Hydration and Health: How Much Water Do You Need?",
      excerpt: "Understanding your individual hydration needs and the impact of water intake on health and fitness.",
      category: "Health Education",
      readTime: "4 min read",
      author: "Emma Rodriguez",
      date: "April 28, 2024",
    },
  ];

  const categories = ["All", "Health Education", "Fitness Tips", "Nutrition", "Weight Management", "Lifestyle"];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Health & Wellness Blog</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Expert insights, tips, and advice for your health journey
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center mb-12 animate-slide-up">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {category}
                </Badge>
              ))}
            </div>

            {/* Articles Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <Card 
                  key={index}
                  className="shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">{article.category}</Badge>
                    </div>
                    <CardTitle className="text-xl hover:text-primary transition-colors">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground mt-2">
                      {article.date}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Newsletter CTA */}
            <Card className="mt-12 shadow-medium bg-gradient-hero text-white">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
                <p className="text-lg mb-6 text-white/90 max-w-2xl mx-auto">
                  Subscribe to our newsletter for the latest health tips, nutrition advice, 
                  and fitness insights delivered to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-lg text-foreground"
                    aria-label="Email address"
                  />
                  <button className="bg-white text-primary hover:bg-white/90 px-6 py-2 rounded-lg font-medium transition-colors">
                    Subscribe
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
