import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-training.jpg";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-hero-gradient text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-beast font-bold mb-6">
                Beast Hack: Fundamentals-First Training Stations
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-95 font-impact font-semibold">
                Master the Fundamentals with Beast Hack—Give Your Kids a Chance!
              </p>
              <p className="text-lg mb-8 opacity-90 font-body">
                Just like learning the ABCs is essential for reading, mastering sports fundamentals is critical for athletic success. Our portable, durable training stations help young athletes develop proper stance, swing mechanics, and footwork that will serve them for life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="beast" 
                  size="lg" 
                  asChild
                >
                  <a 
                    href="https://beasthack.com/shop" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Shop Beast Hack Stations
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  asChild
                >
                  <a href="/training-basics">
                    Learn Why Fundamentals Matter
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Young baseball player demonstrating proper batting fundamentals using Beast Hack portable hitting station"
                className="rounded-lg shadow-sport w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Fundamentals Matter */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-beast font-bold mb-4">The ABCs of Sports Training</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
              Just like the ABCs are to reading, mastering fundamentals—stance, swing mechanics, and footwork—is critical for young athletes in baseball, softball, and pickleball. Without a strong base, skills falter, and potential is lost. Parents, coaches, and park managers must prioritize these essentials to ensure kids thrive.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4 font-body">
              Endorsed by Bryan Dixon, Deputy Administrator of Henry County Parks and Recreation, Beast Hack stations have transformed Cochran Park, contributing to their <strong>2023 Georgia Park and Recreation of the Year award</strong>. 
              <a 
                href="https://www.henryherald.com/news/henry-county-parks-and-recreation-department-recognized-for-state-and-district-awards/article_2a39ffc2-8f05-11ee-bf94-17937b674357.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-variant underline ml-1 font-medium"
              >
                Learn about Henry County's success story
              </a>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6 font-body">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">A</span>
                </div>
                <h3 className="text-xl font-impact font-semibold mb-3">Stance & Alignment</h3>
                <p className="text-muted-foreground">
                  Proper body positioning and balance form the foundation of every successful swing, just like learning letter "A" comes before words.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6 font-body">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-secondary-foreground">B</span>
                </div>
                <h3 className="text-xl font-impact font-semibold mb-3">Bat Control & Mechanics</h3>
                <p className="text-muted-foreground">
                  Learning proper grip, swing path, and follow-through creates muscle memory that lasts a lifetime of athletic development.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6 font-body">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent-foreground">C</span>
                </div>
                <h3 className="text-xl font-impact font-semibold mb-3">Consistent Practice</h3>
                <p className="text-muted-foreground">
                  Repetition with Beast Hack stations builds confidence and competence, turning fundamental movements into natural reflexes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Beast Hack Advantages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-beast font-bold mb-4">Why Choose Beast Hack Training Stations?</h2>
            <p className="text-xl text-muted-foreground font-body">
              Portable, durable, and designed specifically for fundamental skill development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <h3 className="font-impact font-semibold mb-2">Portable Design</h3>
              <p className="text-sm text-muted-foreground font-body">Easy setup anywhere - home, park, or field</p>
            </div>
            
            <div className="text-center">
              <div className="bg-secondary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-impact font-semibold mb-2">Built to Last</h3>
              <p className="text-sm text-muted-foreground font-body">Durable construction for years of training</p>
            </div>
            
            <div className="text-center">
              <div className="bg-accent/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-impact font-semibold mb-2">Space Efficient</h3>
              <p className="text-sm text-muted-foreground font-body">Compact storage, maximum training value</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-impact font-semibold mb-2">Multi-Sport Ready</h3>
              <p className="text-sm text-muted-foreground font-body">Baseball, softball, and pickleball training</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-secondary-gradient text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-beast font-bold mb-6">
            Give Your Young Athletes the Foundation They Need
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-95 font-body">
            Don't let your kids miss out on proper fundamental training. Beast Hack stations provide the consistent, quality practice needed to build skills that last a lifetime. Join the parks, coaches, and parents who've seen the difference fundamentals make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="beast"
              size="lg" 
              asChild
            >
              <a 
                href="https://beasthack.com/shop" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Shop Beast Hack Stations
              </a>
            </Button>
            <Button 
              variant="hero" 
              size="lg" 
              asChild
            >
              <a href="/success-stories">
                See Real Results
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;