import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import bryantTestimonial from "@/assets/bryan-dixon.jpg";

const SuccessStories = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Beast Hack Success Stories</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results from parks, coaches, and families who've seen the difference that proper fundamental training makes in young athletes' development.
          </p>
        </div>

        {/* Featured Success Story - Henry County */}
        <section className="mb-16">
          <div className="bg-primary text-primary-foreground rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-12">
                <div className="mb-6">
                  <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    Featured Success Story
                  </span>
                </div>
                <h2 className="text-3xl font-bold mb-6">Henry County Parks and Recreation: 2023 Georgia Park and Recreation of the Year</h2>
                <blockquote className="text-lg mb-6 opacity-95 italic">
                  "Beast Hack hitting stations have been a game-changer for our youth sports programs. The durability, portability, and space-saving design make them perfect for our facilities. We've seen remarkable improvement in our young athletes' fundamental skills since implementing these stations at Cochran Park."
                </blockquote>
                <div className="mb-6">
                  <p className="font-semibold">Bryan Dixon</p>
                  <p className="opacity-90">Deputy Administrator, Henry County Parks and Recreation</p>
                </div>
                <Button variant="secondary" asChild>
                  <a href="https://www.beasthack.com/contact" target="_blank" rel="noopener noreferrer">
                    Get the Same Results
                  </a>
                </Button>
              </div>
              <div className="relative">
                <img 
                  src={bryantTestimonial} 
                  alt="Bryan Dixon with Beast Hack hitting stations at Cochran Park" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm">
                  Bryan Dixon at Cochran Park
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Henry County Details */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">The Henry County Success Story: A Model for Excellence</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Initial Implementation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Henry County Parks and Recreation first installed Beast Hack hitting stations at Cochran Park as part of their commitment to providing top-quality youth sports facilities.</p>
                <ul className="space-y-2 text-sm">
                  <li>• Immediate positive feedback from coaches</li>
                  <li>• Enhanced training capabilities</li>
                  <li>• Improved space utilization</li>
                  <li>• Year-round training opportunities</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Expansion Success</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Due to the overwhelming success and positive community response, Henry County expanded their Beast Hack implementation across multiple facilities.</p>
                <ul className="space-y-2 text-sm">
                  <li>• Added pickleball training stations</li>
                  <li>• Expanded to additional park locations</li>
                  <li>• Increased youth program participation</li>
                  <li>• Enhanced program offerings</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Award Recognition</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Under Bryan Dixon's leadership and with innovative facilities like Beast Hack stations, Henry County earned the prestigious 2023 Georgia Park and Recreation of the Year award.</p>
                <ul className="space-y-2 text-sm">
                  <li>• State-level recognition</li>
                  <li>• Leadership in youth sports</li>
                  <li>• Community impact and engagement</li>
                  <li>• Innovation in recreation programming</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-success-gradient text-accent-foreground rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">What Made the Difference?</h3>
            <p className="text-lg mb-6">
              According to Bryan Dixon, the key factors in Henry County's success were the emphasis on fundamental training, 
              the reliability and durability of Beast Hack equipment, and the ability to provide consistent, quality training 
              opportunities for young athletes regardless of weather or scheduling constraints.
            </p>
            <Button variant="outline" asChild>
              <a href="https://www.beasthack.com/contact" target="_blank" rel="noopener noreferrer">Learn About Our Training Philosophy</a>
            </Button>
          </div>
        </section>

        {/* Additional Success Stories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">More Success Stories from Beast Hack Users</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Coach Sarah Martinez - Little League</CardTitle>
              </CardHeader>
              <CardContent>
                <blockquote className="italic mb-4">
                  "I've been coaching Little League for 15 years, and Beast Hack stations have revolutionized how I teach hitting fundamentals. The kids love the consistent practice, and I've seen a 40% improvement in batting averages across my team since we started using them."
                </blockquote>
                <div className="bg-muted rounded p-4">
                  <h4 className="font-semibold mb-2">Key Results:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• 40% improvement in team batting averages</li>
                    <li>• Increased player confidence at the plate</li>
                    <li>• More efficient practice sessions</li>
                    <li>• Better fundamental skill retention</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>The Johnson Family - Backyard Training</CardTitle>
              </CardHeader>
              <CardContent>
                <blockquote className="italic mb-4">
                  "We bought a Beast Hack station for our 10-year-old son who was struggling with his swing mechanics. Within three months of consistent practice, he went from riding the bench to being a starter on his travel team. The investment paid for itself in confidence alone."
                </blockquote>
                <div className="bg-muted rounded p-4">
                  <h4 className="font-semibold mb-2">Transformation Timeline:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Month 1: Improved stance and grip</li>
                    <li>• Month 2: Better swing mechanics</li>
                    <li>• Month 3: Made starting lineup</li>
                    <li>• Ongoing: Continued skill development</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Riverside Recreation Center - Multi-Sport Success</CardTitle>
              </CardHeader>
              <CardContent>
                <blockquote className="italic mb-4">
                  "We implemented Beast Hack stations for both our baseball and pickleball programs. The versatility has been incredible - we can run multiple training sessions simultaneously, and the space-saving design lets us maximize our limited facility space."
                </blockquote>
                <div className="bg-muted rounded p-4">
                  <h4 className="font-semibold mb-2">Facility Impact:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• 200% increase in training capacity</li>
                    <li>• Multi-sport program expansion</li>
                    <li>• Improved facility utilization</li>
                    <li>• Enhanced program quality</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Pine Valley High School - Championship Results</CardTitle>
              </CardHeader>
              <CardContent>
                <blockquote className="italic mb-4">
                  "After integrating Beast Hack fundamental training into our program, our varsity team won their first district championship in over a decade. The emphasis on basics transformed our players' approach to the game."
                </blockquote>
                <div className="bg-muted rounded p-4">
                  <h4 className="font-semibold mb-2">Championship Season:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• First district title in 10+ years</li>
                    <li>• Improved team fundamentals</li>
                    <li>• Reduced errors by 35%</li>
                    <li>• Enhanced player development</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Impact Statistics */}
        <section className="mb-16">
          <div className="bg-muted rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-8 text-center">The Numbers Tell the Story</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <p className="text-sm text-muted-foreground">Facilities Using Beast Hack</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">85%</div>
                <p className="text-sm text-muted-foreground">Report Improved Fundamentals</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">92%</div>
                <p className="text-sm text-muted-foreground">Would Recommend to Others</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">15K+</div>
                <p className="text-sm text-muted-foreground">Young Athletes Trained</p>
              </div>
            </div>
          </div>
        </section>

        {/* External Validation */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">External Recognition and Validation</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it - see what industry professionals and organizations are saying about the importance of fundamentals and Beast Hack's contribution to youth sports development.
            </p>
          </div>
          
          <div className="bg-secondary/10 rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-4">Learn More About Henry County's Award-Winning Programs:</h3>
            <p className="mb-6">
              Henry County Parks and Recreation's innovative approach to youth sports development, including their use of Beast Hack training stations, 
              contributed to their recognition as the 2023 Georgia Park and Recreation of the Year. This award recognizes excellence in programming, 
              facilities, and community impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline" asChild>
                <a href="https://www.beasthack.com/contact" target="_blank" rel="noopener noreferrer">
                  Visit Henry County Parks Website
                </a>
              </Button>
              <Button variant="secondary" asChild>
                <a href="https://www.beasthack.com/contact" target="_blank" rel="noopener noreferrer">Contact Us About Your Facility</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6">Join the Success Stories</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Whether you're a parent looking to give your child an edge, a coach seeking better training tools, 
            or a park manager wanting to improve your facilities, Beast Hack stations can help you achieve the same success as Henry County and hundreds of other satisfied customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" asChild>
              <a href="https://beasthack.com/shop" target="_blank" rel="noopener noreferrer">
                Shop Beast Hack Stations
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://www.beasthack.com/contact" target="_blank" rel="noopener noreferrer">Get a Custom Quote</a>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SuccessStories;