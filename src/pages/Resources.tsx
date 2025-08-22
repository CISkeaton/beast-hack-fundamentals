import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Resources = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Free Training Resources</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expert guides, drills, and tips to help young athletes master the fundamentals of baseball, softball, and pickleball. Download our free resources to supplement your Beast Hack training.
          </p>
        </div>

        {/* Featured Resource */}
        <section className="mb-16">
          <Card className="bg-hero-gradient text-primary-foreground">
            <CardHeader>
              <div className="flex items-center justify-between">
                <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  Featured Resource
                </span>
                <span className="text-sm opacity-90">FREE DOWNLOAD</span>
              </div>
              <CardTitle className="text-2xl">5 Fundamental Drills for Young Athletes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-6 text-lg opacity-95">
                Our comprehensive guide featuring five essential drills that every young athlete should master. These drills are specifically designed to work with Beast Hack training hitting stations and can be performed at home, in the park, or at your facility.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold mb-2">What's Included:</h4>
                  <ul className="space-y-1 text-sm opacity-90">
                    <li>• Step-by-step drill instructions</li>
                    <li>• Photo illustrations for each drill</li>
                    <li>• Age-appropriate modifications</li>
                    <li>• Common mistake corrections</li>
                    <li>• Progress tracking sheets</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Perfect For:</h4>
                  <ul className="space-y-1 text-sm opacity-90">
                    <li>• Parents training at home</li>
                    <li>• Youth league coaches</li>
                    <li>• Recreation center programs</li>
                    <li>• Individual skill development</li>
                    <li>• Team practice supplements</li>
                  </ul>
                </div>
              </div>
              <Button variant="secondary" size="lg" asChild>
                <a href="https://www.beasthack.com/contact" target="_blank" rel="noopener noreferrer">Download Free Guide (PDF)</a>
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Training Articles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Expert Training Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">The Science Behind Muscle Memory in Sports</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">
                  Understand why repetitive fundamental training creates lasting athletic improvements and how Beast Hack hitting stations accelerate this process.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">5 min read</span>
                  <Button variant="ghost" size="sm" asChild><a href="https://www.beasthack.com/contact" target="_blank" rel="noopener noreferrer">Read Article</a></Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Age-Appropriate Training: What Works When</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">
                  A comprehensive guide to tailoring fundamental training for different age groups, from T-ball to high school athletics.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">7 min read</span>
                  <Button variant="ghost" size="sm" asChild><a href="https://www.beasthack.com/contact" target="_blank" rel="noopener noreferrer">Read Article</a></Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Creating a Championship Mindset Through Fundamentals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">
                  How focusing on basic skills builds confidence, discipline, and mental toughness in young athletes.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">6 min read</span>
                  <Button variant="ghost" size="sm" asChild><a href="https://www.beasthack.com/contact" target="_blank" rel="noopener noreferrer">Read Article</a></Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Preventing Common Youth Sports Injuries</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">
                  Learn how proper fundamental training reduces injury risk and promotes long-term athletic health and participation.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">8 min read</span>
                  <Button variant="ghost" size="sm" asChild><a href="https://www.beasthack.com/contact" target="_blank" rel="noopener noreferrer">Read Article</a></Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">The Parent's Guide to Supporting Athletic Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">
                  Practical tips for parents on how to encourage proper training habits and support their young athlete's growth.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">10 min read</span>
                  <Button variant="ghost" size="sm" asChild><a href="https://www.beasthack.com/contact" target="_blank" rel="noopener noreferrer">Read Article</a></Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Making Practice Fun: Engaging Young Athletes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">
                  Creative approaches to fundamental training that keep kids engaged, motivated, and excited about improving.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">6 min read</span>
                  <Button variant="ghost" size="sm" asChild><a href="https://www.beasthack.com/contact" target="_blank" rel="noopener noreferrer">Read Article</a></Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Video Resources */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Video Training Library</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Beast Hack Setup and Safety</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted rounded-lg h-48 flex items-center justify-center mb-4">
                  <div className="text-center">
                    <svg className="w-16 h-16 text-primary mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h6m-3-3v6" />
                    </svg>
                    <p className="text-sm text-muted-foreground">Video: 3:45</p>
                  </div>
                </div>
                <p className="mb-4">
                  Learn proper setup procedures, safety guidelines, and maintenance tips to get the most from your Beast Hack training station.
                </p>
                <Button variant="outline" className="w-full" asChild><a href="https://www.beasthack.com/contact" target="_blank" rel="noopener noreferrer">Watch Video</a></Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Fundamental Batting Stance Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted rounded-lg h-48 flex items-center justify-center mb-4">
                  <div className="text-center">
                    <svg className="w-16 h-16 text-secondary mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h6m-3-3v6" />
                    </svg>
                    <p className="text-sm text-muted-foreground">Video: 7:22</p>
                  </div>
                </div>
                <p className="mb-4">
                  Step-by-step instruction on proper batting stance, weight distribution, and hand positioning for young athletes.
                </p>
                <Button variant="outline" className="w-full" asChild><a href="https://www.beasthack.com/contact" target="_blank" rel="noopener noreferrer">Watch Video</a></Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Pickleball Fundamentals for Beginners</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted rounded-lg h-48 flex items-center justify-center mb-4">
                  <div className="text-center">
                    <svg className="w-16 h-16 text-accent mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h6m-3-3v6" />
                    </svg>
                    <p className="text-sm text-muted-foreground">Video: 12:15</p>
                  </div>
                </div>
                <p className="mb-4">
                  Complete introduction to pickleball basics including grip, serve, and court positioning using Beast Hack training tools.
                </p>
                <Button variant="outline" className="w-full" asChild><a href="https://www.beasthack.com/contact" target="_blank" rel="noopener noreferrer">Watch Video</a></Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Common Mistakes and How to Fix Them</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted rounded-lg h-48 flex items-center justify-center mb-4">
                  <div className="text-center">
                    <svg className="w-16 h-16 text-primary mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h6m-3-3v6" />
                    </svg>
                    <p className="text-sm text-muted-foreground">Video: 9:33</p>
                  </div>
                </div>
                <p className="mb-4">
                  Identify and correct the most common fundamental mistakes in youth baseball and softball training.
                </p>
                <Button variant="outline" className="w-full" asChild><a href="https://www.beasthack.com/contact" target="_blank" rel="noopener noreferrer">Watch Video</a></Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Downloadable Resources */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Downloadable Training Tools</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <CardTitle className="text-lg">Progress Tracking Sheets</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">
                  Monitor your young athlete's improvement with our professional tracking templates.
                </p>
                <Button variant="ghost" size="sm" asChild><a href="https://www.beasthack.com/contact" target="_blank" rel="noopener noreferrer">Download PDF</a></Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <CardTitle className="text-lg">Drill Instruction Cards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">
                  Quick-reference cards for essential drills that can be used with Beast Hack hitting stations.
                </p>
                <Button variant="ghost" size="sm" asChild><a href="https://www.beasthack.com/contact" target="_blank" rel="noopener noreferrer">Download PDF</a></Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <CardTitle className="text-lg">Equipment Checklists</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">
                  Comprehensive checklists for setting up effective training sessions and maintaining equipment.
                </p>
                <Button variant="ghost" size="sm" asChild><a href="https://www.beasthack.com/contact" target="_blank" rel="noopener noreferrer">Download PDF</a></Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <CardTitle className="text-lg">Safety Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">
                  Essential safety protocols for youth sports training and Beast Hack station use.
                </p>
                <Button variant="ghost" size="sm" asChild><a href="https://www.beasthack.com/contact" target="_blank" rel="noopener noreferrer">Download PDF</a></Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Coach Resources */}
        <section className="mb-16">
          <div className="bg-muted rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Special Resources for Coaches</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Coach Certification Program</h3>
                <p className="mb-4">
                  Join our free online certification program designed specifically for coaches using Beast Hack training methods. 
                  Learn advanced techniques for teaching fundamentals and get access to exclusive coaching resources.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    4-module online course
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Certificate of completion
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Access to coach-only resources
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Quarterly coaching webinars
                  </li>
                </ul>
                <Button variant="secondary" asChild><a href="https://www.beasthack.com/contact" target="_blank" rel="noopener noreferrer">Start Certification</a></Button>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Practice Planning Templates</h3>
                <p className="mb-4">
                  Streamline your practice planning with our professionally designed templates that incorporate Beast Hack 
                  fundamental training into comprehensive practice sessions.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                    Age-specific practice plans
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                    Skill progression frameworks
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                    Assessment rubrics
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                    Parent communication templates
                  </li>
                </ul>
                <Button variant="outline" asChild><a href="https://www.beasthack.com/contact" target="_blank" rel="noopener noreferrer">Download Templates</a></Button>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="mb-16">
          <Card className="bg-hero-gradient text-primary-foreground">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Stay Updated with the Latest Training Resources</h2>
              <p className="text-lg mb-6 opacity-95">
                Subscribe to our newsletter and get new training resources, expert tips, and exclusive content delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-1 px-4 py-2 rounded-md text-foreground"
                />
                <Button variant="secondary" asChild><a href="https://www.beasthack.com/contact" target="_blank" rel="noopener noreferrer">Subscribe</a></Button>
              </div>
              <p className="text-sm mt-4 opacity-75">
                Join 5,000+ coaches and parents receiving our weekly training tips
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Put These Resources to Work?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            These resources are most effective when combined with consistent practice using Beast Hack training hitting stations. 
            Give your young athletes the tools they need to master the fundamentals and build a foundation for lifelong athletic success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" asChild>
              <a href="https://beasthack.com/shop" target="_blank" rel="noopener noreferrer">
                Shop Beast Hack Hitting Stations
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://www.beasthack.com/contact" target="_blank" rel="noopener noreferrer">Get Expert Guidance</a>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resources;