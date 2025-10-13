import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-12 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Terms of Service</h1>
              <p className="text-muted-foreground">Last updated: May 20, 2024</p>
            </div>

            <div className="space-y-6">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle>Agreement to Terms</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    These Terms of Service constitute a legally binding agreement made between you and FitLife BMI 
                    ("we," "us," or "our"), concerning your access to and use of the FitLife BMI website and any 
                    other media form, media channel, mobile website, or mobile application related, linked, or 
                    otherwise connected thereto.
                  </p>
                  <p>
                    By accessing the website, you agree that you have read, understood, and agree to be bound by 
                    all of these Terms of Service. If you do not agree with all of these terms, then you are 
                    expressly prohibited from using the site.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle>Intellectual Property Rights</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    Unless otherwise indicated, the site is our proprietary property and all source code, databases, 
                    functionality, software, website designs, audio, video, text, photographs, and graphics on the 
                    site (collectively, the "Content") are owned or controlled by us or licensed to us.
                  </p>
                  <p>
                    You are granted a limited license to access and use the site and to download or print materials 
                    from the site for your personal, non-commercial use only.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle>User Representations</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>By using the site, you represent and warrant that:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>You have the legal capacity and you agree to comply with these Terms of Service</li>
                    <li>You are not under the age of 13</li>
                    <li>You will not access the site through automated or non-human means</li>
                    <li>You will not use the site for any illegal or unauthorized purpose</li>
                    <li>Your use of the site will not violate any applicable law or regulation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle>Prohibited Activities</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    You may not access or use the site for any purpose other than that for which we make the site 
                    available. The site may not be used in connection with any commercial endeavors except those 
                    that are specifically endorsed or approved by us.
                  </p>
                  <p>Prohibited activities include, but are not limited to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Systematically retrieving data to create a collection or database</li>
                    <li>Making any unauthorized use of the site</li>
                    <li>Using the site to advertise or offer to sell goods and services</li>
                    <li>Engaging in unauthorized framing of or linking to the site</li>
                    <li>Interfering with, disrupting, or creating an undue burden on the site</li>
                    <li>Attempting to impersonate another user or person</li>
                    <li>Using any information obtained from the site to harass, abuse, or harm another person</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle>Medical Disclaimer</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p className="font-semibold text-foreground">IMPORTANT: Please read carefully</p>
                  <p>
                    The information provided by FitLife BMI is for informational and educational purposes only. 
                    It is not intended as a substitute for professional medical advice, diagnosis, or treatment.
                  </p>
                  <p>
                    Our calculators use standard formulas but cannot account for individual health conditions, 
                    medications, or unique circumstances. Always seek the advice of your physician or other 
                    qualified health provider with any questions you may have regarding a medical condition or 
                    health objectives.
                  </p>
                  <p>
                    Never disregard professional medical advice or delay in seeking it because of something you 
                    have read on this website.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle>Limitation of Liability</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    In no event will we or our directors, employees, or agents be liable to you or any third party 
                    for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, 
                    including lost profit, lost revenue, loss of data, or other damages arising from your use of 
                    the site.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle>Accuracy of Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    While we strive to provide accurate and up-to-date information, we make no representations or 
                    warranties of any kind, express or implied, about the completeness, accuracy, reliability, 
                    suitability, or availability of the information, products, services, or related graphics 
                    contained on the site.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle>Indemnification</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    You agree to defend, indemnify, and hold us harmless from and against any loss, damage, 
                    liability, claim, or demand, including reasonable attorneys' fees and expenses, made by any 
                    third party due to or arising out of your use of the site or breach of these Terms of Service.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle>Modifications and Interruptions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    We reserve the right to change, modify, or remove the contents of the site at any time or for 
                    any reason at our sole discretion without notice. We also reserve the right to modify or 
                    discontinue all or part of the site without notice at any time.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle>Governing Law</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    These Terms of Service and your use of the site are governed by and construed in accordance 
                    with the laws applicable in your jurisdiction, without regard to its conflict of law principles.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft bg-gradient-hero text-white">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2 text-lg">Contact Us</h3>
                  <p className="text-white/90">
                    If you have any questions about these Terms of Service, please contact us at:
                  </p>
                  <p className="mt-2 text-white/90">
                    Email: legal@fitlifebmi.com<br />
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

export default Terms;
