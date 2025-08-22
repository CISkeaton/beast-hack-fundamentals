import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const TrainingBasics = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Why Fundamentals Matter in Baseball Training</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Understanding the critical importance of fundamentals in baseball, softball, and pickleball training - 
            and how Beast Hack stations provide the perfect solution for developing these essential skills.
          </p>
        </div>

        {/* The Foundation Analogy */}
        <section className="mb-16">
          <div className="bg-muted rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">The ABCs of Athletic Success</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg mb-4">
                  Just as children cannot read Shakespeare without first learning their ABCs, young athletes cannot excel in competitive sports without mastering fundamental skills. This isn't just an analogy—it's a fundamental truth that separates successful athletes from those who struggle.
                </p>
                <p className="text-lg mb-4">
                  <strong>Research consistently shows</strong> that athletes who develop proper fundamentals early in their training have significantly better long-term success rates, fewer injuries, and greater enjoyment of their sport throughout their athletic careers.
                </p>
                <p className="text-lg">
                  Beast Hack hitting stations are specifically designed to reinforce these critical fundamentals through consistent, quality repetition that builds muscle memory and confidence.
                </p>
              </div>
              <div className="bg-primary/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Key Statistics:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    85% of professional athletes credit fundamental training for their success
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                    Youth athletes with proper fundamentals are 60% less likely to experience injuries
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                    Early fundamental training improves athletic retention by 40%
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Baseball Fundamentals */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Baseball Fundamentals: Building Champions One Swing at a Time</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mr-3">1</span>
                  Proper Stance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">The foundation of every great hitter starts with stance and balance. Beast Hack stations help young players develop:</p>
                <ul className="space-y-2 text-sm">
                  <li>• Feet shoulder-width apart for optimal balance</li>
                  <li>• Weight distribution (60/40 back foot to front foot)</li>
                  <li>• Comfortable, athletic position</li>
                  <li>• Consistent setup routine</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold mr-3">2</span>
                  Grip & Hand Position
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Proper grip is crucial for bat control and power generation. With Beast Hack training, players learn:</p>
                <ul className="space-y-2 text-sm">
                  <li>• Correct hand placement on the bat</li>
                  <li>• Proper grip pressure (firm but relaxed)</li>
                  <li>• Hand-eye coordination development</li>
                  <li>• Consistent bat angle and position</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold mr-3">3</span>
                  Swing Mechanics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">The swing path determines contact quality and power. Beast Hack stations teach:</p>
                <ul className="space-y-2 text-sm">
                  <li>• Level swing plane through the zone</li>
                  <li>• Hip rotation and weight transfer</li>
                  <li>• Follow-through and finish position</li>
                  <li>• Timing and rhythm development</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Softball Training Basics */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Softball Training Basics: Adapting Fundamentals for Success</h2>
          
          <div className="bg-secondary/10 rounded-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Key Differences in Softball Fundamentals:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <strong>Underhand Pitching Adjustment:</strong> Players learn to track the different ball trajectory and adjust timing accordingly
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <strong>Larger Ball Mechanics:</strong> Slightly different grip and bat control techniques for the larger softball
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <strong>Shorter Base Paths:</strong> Faster decision-making and reaction time development
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <strong>Slap Hitting Technique:</strong> Specialized fundamental skills for advanced players
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Beast Hack Advantage for Softball:</h3>
                <p className="mb-4">
                  Our hitting stations are versatile enough to accommodate both baseball and softball training, allowing players to practice proper fundamentals regardless of their preferred sport.
                </p>
                <p className="mb-4">
                  The adjustable features ensure that young softball players can develop the same quality fundamentals as their baseball counterparts, with adaptations for the unique aspects of softball play.
                </p>
                <Button variant="secondary" asChild>
                  <a href="https://beasthack.com/shop" target="_blank" rel="noopener noreferrer">
                    Explore Softball Training Options
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Pickleball Basics */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Pickleball Training Fundamentals: The Fastest Growing Sport</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Essential Pickleball Fundamentals:</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold">Proper Grip and Paddle Position</h4>
                  <p className="text-sm text-muted-foreground">Continental grip for versatility in all shots</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold">Ready Position and Footwork</h4>
                  <p className="text-sm text-muted-foreground">Athletic stance with weight on balls of feet</p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <h4 className="font-semibold">Serve and Return Basics</h4>
                  <p className="text-sm text-muted-foreground">Underhand serve and proper return positioning</p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold">Dinking and Soft Game</h4>
                  <p className="text-sm text-muted-foreground">Control and placement over power</p>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-accent/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Why Pickleball Fundamentals Matter:</h3>
                <p className="mb-4">
                  Pickleball may seem easier than tennis, but proper fundamentals are just as critical. The sport's unique rules and playing style require specific skill development that starts with basic positioning and paddle control.
                </p>
                <p className="mb-4">
                  Henry County's pioneering pickleball stations at Cochran Park demonstrate how Beast Hack training helps teach grip and serve techniques effectively, contributing to their recognition as 2023 Georgia Park and Recreation of the Year.
                </p>
                <div className="bg-background rounded p-4">
                  <h4 className="font-semibold mb-2">Success Story:</h4>
                  <p className="text-sm">Henry County Parks and Recreation implemented Beast Hack pickleball stations alongside their baseball training, proving the versatility and effectiveness of fundamental-focused training across multiple sports.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Beast Hack is the Solution */}
        <section className="mb-16">
          <div className="bg-hero-gradient text-primary-foreground rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Beast Hack: The Complete Fundamentals Solution</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Consistent Quality Training</h3>
                <p className="mb-4 opacity-95">
                  Unlike traditional training methods that depend on coach availability or perfect weather, Beast Hack stations provide consistent, high-quality practice opportunities whenever and wherever your young athlete needs them.
                </p>
                <p className="opacity-95">
                  This consistency is crucial for developing muscle memory and building confidence in fundamental movements.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Immediate Feedback</h3>
                <p className="mb-4 opacity-95">
                  The design of Beast Hack stations provides immediate feedback on swing mechanics, helping players self-correct and improve with each repetition.
                </p>
                <p className="opacity-95">
                  This instant feedback loop accelerates learning and helps young athletes understand the connection between proper form and successful results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6">Start Building Champions Today</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Don't wait for your young athletes to develop bad habits. Give them the fundamental training they need to succeed with Beast Hack portable training stations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" asChild>
              <a href="https://beasthack.com/shop" target="_blank" rel="noopener noreferrer">
                Shop Beast Hack Stations
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/success-stories">See Success Stories</a>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TrainingBasics;