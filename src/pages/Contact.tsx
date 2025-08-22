import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Beast Hack</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring Beast Hack fundamental training to your facility or family? Get in touch with our team for personalized guidance and solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Get a Custom Quote</CardTitle>
                <p className="text-muted-foreground">
                  Tell us about your needs and we'll provide personalized recommendations and pricing for your situation.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Smith" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                </div>
                
                <div>
                  <Label htmlFor="organization">Organization/Team</Label>
                  <Input id="organization" placeholder="Youth Sports League, School District, etc." />
                </div>
                
                <div>
                  <Label htmlFor="role">Your Role</Label>
                  <select className="w-full px-3 py-2 border border-input rounded-md bg-background">
                    <option value="">Select your role</option>
                    <option value="parent">Parent</option>
                    <option value="coach">Coach</option>
                    <option value="park-manager">Park/Recreation Manager</option>
                    <option value="athletic-director">Athletic Director</option>
                    <option value="school-admin">School Administrator</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="interest">Primary Interest</Label>
                  <select className="w-full px-3 py-2 border border-input rounded-md bg-background">
                    <option value="">Select primary interest</option>
                    <option value="baseball">Baseball Training Stations</option>
                    <option value="softball">Softball Training Stations</option>
                    <option value="pickleball">Pickleball Training Stations</option>
                    <option value="multi-sport">Multi-Sport Package</option>
                    <option value="bulk-discount">Bulk Purchase/Facility Package</option>
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="timeline">Implementation Timeline</Label>
                  <select className="w-full px-3 py-2 border border-input rounded-md bg-background">
                    <option value="">When do you need this?</option>
                    <option value="immediate">Immediate (within 2 weeks)</option>
                    <option value="month">Within 1 month</option>
                    <option value="season">Before next season</option>
                    <option value="budget">Planning for next budget cycle</option>
                    <option value="exploring">Just exploring options</option>
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="message">Tell Us About Your Needs</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Describe your training goals, facility requirements, number of athletes, or any specific questions you have about Beast Hack stations..." 
                    rows={4}
                  />
                </div>
                
                <Button variant="cta" size="lg" className="w-full">
                  Send Message & Get Quote
                </Button>
                
                <p className="text-sm text-muted-foreground text-center">
                  We typically respond within 24 hours during business days
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information & Benefits */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <Card>
              <CardHeader>
                <CardTitle>Direct Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-muted-foreground">info@beasthack.com</p>
                    <p className="text-sm text-muted-foreground">General inquiries and support</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-secondary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-muted-foreground">(555) BEAST-HACK</p>
                    <p className="text-sm text-muted-foreground">Monday-Friday, 8 AM - 6 PM EST</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Service Area</h4>
                    <p className="text-muted-foreground">Serving Georgia Parks and recreation facilities nationwide</p>
                    <p className="text-sm text-muted-foreground">Shipping available to all 50 states</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Purchase */}
            <Card className="bg-secondary-gradient text-secondary-foreground">
              <CardHeader>
                <CardTitle>Ready to Purchase?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 opacity-95">
                  Skip the quote process and shop directly at our online store for immediate purchase and fast shipping.
                </p>
                <Button variant="outline" size="lg" className="w-full mb-4" asChild>
                  <a href="https://beasthack.com/shop" target="_blank" rel="noopener noreferrer">
                    Shop Beast Hack Stations
                  </a>
                </Button>
                <p className="text-sm opacity-75 text-center">
                  Free shipping on orders over $500
                </p>
              </CardContent>
            </Card>

            {/* Why Choose Beast Hack */}
            <Card>
              <CardHeader>
                <CardTitle>Why Choose Beast Hack?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    <span className="text-sm">Award-winning solutions trusted by Georgia Park and Recreation of the Year</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                    <span className="text-sm">Portable, durable, and space-saving design</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                    <span className="text-sm">Multi-sport capability (baseball, softball, pickleball)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    <span className="text-sm">Expert support and training resources included</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                    <span className="text-sm">Bulk pricing available for facilities and teams</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Testimonial */}
            <Card className="bg-muted">
              <CardContent className="p-6">
                <blockquote className="italic mb-4">
                  "Beast Hack hitting stations have been a game-changer for our youth sports programs. The durability, portability, and space-saving design make them perfect for our facilities."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary-foreground font-bold">BD</span>
                  </div>
                  <div>
                    <p className="font-semibold">Bryan Dixon</p>
                    <p className="text-sm text-muted-foreground">Deputy Administrator, Henry County Parks and Recreation</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What's included with a Beast Hack station?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Each station includes the main training unit, all necessary hardware, setup instructions, and access to our digital training resources library.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you offer bulk pricing for facilities?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes! We offer special pricing for parks, schools, and sports facilities. Contact us for a custom quote based on your specific needs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What age groups can use Beast Hack stations?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our stations are designed for ages 6-18, with adjustable features to accommodate different skill levels and physical development stages.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How quickly can you deliver?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Standard delivery is 5-7 business days. Expedited shipping is available for urgent needs. Large facility orders may require additional lead time.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you provide training or setup assistance?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes! We offer setup guidance, training videos, and our coach certification program to help you get the most from your Beast Hack stations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What warranty do you offer?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  All Beast Hack stations come with a 2-year manufacturer warranty covering defects and normal wear from proper use.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mt-16 text-center bg-hero-gradient text-primary-foreground rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Training Program?</h2>
          <p className="text-lg mb-6 opacity-95">
            Join the hundreds of successful programs already using Beast Hack stations to build fundamental skills and athletic confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <a href="https://beasthack.com/shop" target="_blank" rel="noopener noreferrer">
                Shop Now
              </a>
            </Button>
            <Button variant="outline" size="lg">
              Schedule a Consultation
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;