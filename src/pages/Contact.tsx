import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, MapPin, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Get in Touch</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Have a question or feedback? We'd love to hear from you.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Contact Form */}
              <Card className="md:col-span-2 shadow-medium animate-slide-up">
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                  <CardDescription>Fill out the form below and we'll respond as soon as possible</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        placeholder="How can we help?"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your inquiry..."
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full shadow-soft">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <div className="space-y-6">
                <Card className="shadow-soft animate-fade-in">
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-gradient-primary p-3 rounded-lg">
                          <Mail className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1 text-foreground">Email</h3>
                          <p className="text-sm text-muted-foreground">info@fitlifebmi.com</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="bg-gradient-primary p-3 rounded-lg">
                          <Phone className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1 text-foreground">Phone</h3>
                          <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="bg-gradient-primary p-3 rounded-lg">
                          <MapPin className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1 text-foreground">Location</h3>
                          <p className="text-sm text-muted-foreground">
                            123 Health Street<br />
                            Wellness City, HC 12345<br />
                            United States
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-soft bg-gradient-hero text-white">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2 text-lg">Business Hours</h3>
                    <div className="space-y-1 text-sm text-white/90">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* FAQ Section */}
            <Card className="mt-12 shadow-soft">
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2 text-foreground">How accurate are the calculators?</h3>
                  <p className="text-sm text-muted-foreground">
                    Our calculators use industry-standard formulas (Mifflin-St Jeor for calories, standard BMI formula). 
                    While accurate for general estimates, individual results may vary.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-foreground">Is my data stored?</h3>
                  <p className="text-sm text-muted-foreground">
                    No, we don't store your personal health data. All calculations are done in your browser, 
                    and no information is saved on our servers.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-foreground">Can I use these tools for medical decisions?</h3>
                  <p className="text-sm text-muted-foreground">
                    Our tools are for informational purposes only. Always consult with healthcare professionals 
                    for medical advice and decisions.
                  </p>
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

export default Contact;
