import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-12 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Privacy Policy</h1>
              <p className="text-muted-foreground">Last updated: May 20, 2024</p>
            </div>

            <div className="space-y-6">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle>Introduction</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    At FitLife BMI, we take your privacy seriously. This Privacy Policy explains how we collect, 
                    use, disclose, and safeguard your information when you visit our website and use our services.
                  </p>
                  <p>
                    Please read this privacy policy carefully. If you do not agree with the terms of this privacy 
                    policy, please do not access the site.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle>Information We Collect</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    We may collect information about you in a variety of ways. The information we may collect on 
                    the Site includes:
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Personal Data</h4>
                    <p>
                      When you use our contact form, we collect your name and email address. This information is 
                      only used to respond to your inquiries.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Health Data</h4>
                    <p>
                      Our BMI and calorie calculators process your height, weight, age, and activity level. 
                      <strong> This data is NOT stored on our servers</strong>. All calculations are performed 
                      locally in your browser and are not transmitted to or saved by FitLife BMI.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Usage Data</h4>
                    <p>
                      We may collect information about how you access and use our website, including your IP address, 
                      browser type, operating system, and pages visited.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle>How We Use Your Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>We use the information we collect in the following ways:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>To provide and maintain our service</li>
                    <li>To respond to your comments, questions, and requests</li>
                    <li>To analyze usage patterns and improve our website</li>
                    <li>To send you newsletters and marketing communications (with your consent)</li>
                    <li>To detect, prevent, and address technical issues</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle>Data Security</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    We use administrative, technical, and physical security measures to protect your personal 
                    information. While we have taken reasonable steps to secure the personal information you 
                    provide to us, please be aware that despite our efforts, no security measures are perfect 
                    or impenetrable.
                  </p>
                  <p>
                    Your health data entered into our calculators is processed entirely in your browser and is 
                    never transmitted to our servers.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle>Cookies and Tracking</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    We may use cookies and similar tracking technologies to track activity on our website and 
                    store certain information. You can instruct your browser to refuse all cookies or to indicate 
                    when a cookie is being sent.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle>Third-Party Services</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    We may use third-party service providers to help us operate our website and administer activities 
                    on our behalf. These third parties have access to your information only to perform specific tasks 
                    on our behalf and are obligated not to disclose or use it for any other purpose.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle>Your Rights</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>Depending on your location, you may have the following rights regarding your personal data:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>The right to access – You have the right to request copies of your personal data</li>
                    <li>The right to rectification – You have the right to request correction of inaccurate data</li>
                    <li>The right to erasure – You have the right to request deletion of your personal data</li>
                    <li>The right to restrict processing – You have the right to request restriction of processing</li>
                    <li>The right to data portability – You have the right to request transfer of your data</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle>Children's Privacy</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    Our service is not intended for children under the age of 13. We do not knowingly collect 
                    personally identifiable information from children under 13. If you are a parent or guardian 
                    and you are aware that your child has provided us with personal data, please contact us.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle>Changes to This Policy</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    We may update our Privacy Policy from time to time. We will notify you of any changes by 
                    posting the new Privacy Policy on this page and updating the "Last updated" date.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft bg-gradient-hero text-white">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2 text-lg">Contact Us</h3>
                  <p className="text-white/90">
                    If you have any questions about this Privacy Policy, please contact us at:
                  </p>
                  <p className="mt-2 text-white/90">
                    Email: privacy@fitlifebmi.com<br />
                    Address: 123 Health Street, Wellness City, HC 12345
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
