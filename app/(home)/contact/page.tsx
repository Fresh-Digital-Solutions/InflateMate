import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  MessageSquare,
  Lightbulb,
  Mail,
  Send,
  ArrowRight,
  Phone,
  MapPin,
  HelpCircle,
} from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/10 rounded-full filter blur-3xl" />
      <div className="absolute -top-10 -right-10 w-48 h-48 bg-primary/5 rounded-full animate-blob" />
      <div className="absolute top-1/3 -left-10 w-64 h-64 bg-accent/5 rounded-full animate-blob animation-delay-2000" />

      <section className="container relative mx-auto px-4 py-16 md:py-24">
        {/* Headline Section with Visual Appeal */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center p-2 px-4 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
              <MessageSquare size={16} className="mr-2" />
              We typically respond within 2 hours
            </div>
          </div>
          <h1 className="font-extrabold text-4xl md:text-6xl leading-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
            Let&apos;s Connect
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions about how InflateMate can help grow your bounce house business?
            We&apos;re here to help you succeed.
          </p>
        </div>

        {/* Main Content Area */}
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="contact" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12">
              <TabsTrigger value="contact" className="text-base py-3">
                <MessageSquare size={18} className="mr-2" /> Get in Touch
              </TabsTrigger>
              <TabsTrigger value="feature" className="text-base py-3">
                <Lightbulb size={18} className="mr-2" /> Suggest Feature
              </TabsTrigger>
            </TabsList>

            {/* Contact Form Tab */}
            <TabsContent value="contact">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                {/* Main Contact Form */}
                <Card className="col-span-1 lg:col-span-3 overflow-hidden border-0 shadow-lg">
                  <div className="h-2 bg-gradient-to-r from-primary to-accent"></div>
                  <div className="p-8">
                    <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                    <form className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-sm font-medium">
                            Your Name
                          </Label>
                          <Input
                            id="name"
                            placeholder="Jane Smith"
                            className="h-12 bg-background border-muted"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-sm font-medium">
                            Email Address
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="you@company.com"
                            className="h-12 bg-background border-muted"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-sm font-medium">
                          Company Name
                        </Label>
                        <Input
                          id="company"
                          placeholder="Your Bounce House Business"
                          className="h-12 bg-background border-muted"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-sm font-medium">
                          Subject
                        </Label>
                        <Input
                          id="subject"
                          placeholder="What's this regarding?"
                          className="h-12 bg-background border-muted"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-sm font-medium">
                          Message
                        </Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us what you need help with..."
                          rows={6}
                          className="resize-none bg-background border-muted"
                        />
                      </div>

                      <Button size="lg" className="w-full md:w-auto px-8 h-12">
                        <Send size={18} className="mr-2" /> Send Message
                      </Button>
                    </form>
                  </div>
                </Card>

                {/* Contact Info Cards */}
                <div className="col-span-1 lg:col-span-2 space-y-6">
                  {/* Quick Contact */}
                  <Card className="border-0 shadow-md bg-gradient-to-br from-primary/5 to-accent/5 backdrop-blur-sm">
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-4">Quick Contact</h3>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <div className="p-2 rounded-full bg-primary/10 mr-4">
                            <Mail size={20} className="text-primary" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Email</p>
                            <a
                              href="mailto:support@inflatemate.com"
                              className="text-foreground hover:text-primary transition-colors"
                            >
                              support@inflatemate.com
                            </a>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="p-2 rounded-full bg-primary/10 mr-4">
                            <Phone size={20} className="text-primary" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Phone</p>
                            <a
                              href="tel:+12065551234"
                              className="text-foreground hover:text-primary transition-colors"
                            >
                              (206) 555-1234
                            </a>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="p-2 rounded-full bg-primary/10 mr-4">
                            <MapPin size={20} className="text-primary" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Office</p>
                            <p className="text-foreground">
                              Seattle, WA - Available Remotely
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Support Hours */}
                  <Card className="border-0 shadow-md overflow-hidden">
                    <div className="h-1 bg-gradient-to-r from-primary/40 to-accent/40"></div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-4">Support Hours</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Monday - Friday</span>
                          <span className="font-medium">9AM - 6PM PST</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Weekend</span>
                          <span className="font-medium">10AM - 4PM PST</span>
                        </div>
                        <div className="pt-3">
                          <p className="text-sm text-muted-foreground">
                            Urgent support available 24/7 for Growth Plan subscribers
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* FAQ Teaser */}
                  <Card className="border-0 shadow-md bg-gradient-to-br from-accent/5 to-primary/5">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <HelpCircle size={20} className="text-accent mr-2" />
                        <h3 className="text-xl font-bold">Common Questions</h3>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        Find answers to frequently asked questions about InflateMate.
                      </p>
                      <Link href="/resources/faq" passHref>
                        <Button variant="outline" className="w-full group">
                          Visit FAQ Center
                          <ArrowRight
                            size={16}
                            className="ml-2 group-hover:translate-x-1 transition-transform"
                          />
                        </Button>
                      </Link>
                    </div>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Feature Request Tab */}
            <TabsContent value="feature">
              <Card className="border-0 shadow-xl overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-accent to-primary"></div>
                <div className="p-8">
                  <div className="mb-8 text-center">
                    <Lightbulb
                      size={40}
                      className="inline-block p-2 bg-accent/10 rounded-full text-accent mb-4"
                    />
                    <h2 className="text-2xl md:text-3xl font-bold mb-3">
                      Help Shape the Future of InflateMate
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      As bounce house business owners ourselves, we know the
                      importance of practical features. Share your ideas to make
                      InflateMate even better for your business!
                    </p>
                  </div>

                  <form className="space-y-5 max-w-3xl mx-auto">
                    <div className="space-y-2">
                      <Label htmlFor="feature-name" className="text-sm font-medium">
                        Feature Name
                      </Label>
                      <Input
                        id="feature-name"
                        placeholder="Give your feature idea a short name"
                        className="h-12 bg-background border-muted"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="feature-desc" className="text-sm font-medium">
                        Feature Description
                      </Label>
                      <Textarea
                        id="feature-desc"
                        placeholder="Describe your feature idea in detail. What problem would it solve? How would it work?"
                        rows={8}
                        className="resize-none bg-background border-muted"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="your-name" className="text-sm font-medium">
                          Your Name
                        </Label>
                        <Input
                          id="your-name"
                          placeholder="Jane Smith"
                          className="h-12 bg-background border-muted"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="your-email" className="text-sm font-medium">
                          Email Address
                        </Label>
                        <Input
                          id="your-email"
                          type="email"
                          placeholder="you@company.com"
                          className="h-12 bg-background border-muted"
                        />
                      </div>
                    </div>

                    <div className="pt-2 text-center">
                      <Button size="lg" className="px-8 h-12">
                        <Lightbulb size={18} className="mr-2" /> Submit Feature Idea
                      </Button>
                    </div>
                  </form>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Testimonial/Social Proof Section */}
        <div className="mt-24 max-w-4xl mx-auto text-center">
          <div className="p-3 bg-primary/5 rounded-full inline-flex mb-6">
            <h2 className="text-sm font-medium text-primary px-3">
              Trusted by bounce house businesses nationwide
            </h2>
          </div>
          
          <blockquote className="text-xl md:text-2xl italic text-muted-foreground mb-6">
            &quot;InflateMate transformed how we manage our bounce house rentals. 
            Their support team is quick and incredibly helpful!&quot;
          </blockquote>
          
          <div className="flex items-center justify-center">
            <div className="size-12 rounded-full bg-gray-200 mr-4"></div>
            <div className="text-left">
              <p className="font-medium">Sarah Johnson</p>
              <p className="text-sm text-muted-foreground">Jump Around Rentals</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
