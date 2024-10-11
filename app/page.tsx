'use client'

import React, { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Skeleton } from "@/components/ui/skeleton"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LinkIcon, DollarSignIcon, UserPlusIcon, BarChartIcon, WrenchIcon, HeadphonesIcon, ChevronRightIcon, MousePointerClickIcon, LinkIcon as LinkIconSolid, UsersIcon, SunIcon, MoonIcon, Menu, ArrowRightIcon, CheckIcon, XIcon } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Progress } from "@/components/ui/progress"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export default function EnhancedPlayboxLandingPage() {
  const [isLoading, setIsLoading] = useState(true)
  const { theme, setTheme } = useTheme()
  const [longUrl, setLongUrl] = useState('')
  const [shortUrl, setShortUrl] = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark' : 'light'
  }, [theme])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const NavItems = () => (
    <>
      <Button variant="ghost">Features</Button>
      <Link href="https://maxbox.icu/payout-rates">
        <Button variant="ghost">Publisher Rates</Button>
      </Link>
      <Link href="https://maxbox.icu/auth/signin">
        <Button variant="ghost">Login</Button>
      </Link>
      <Link href="https://maxbox.icu/auth/signup">
        <Button>Sign Up</Button>
      </Link>
    </>
  )

  const ThemeToggle = () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )

  const shortenLink = async () => {
    try {
      const response = await fetch(`https://maxbox.icu/api?api=20d59b11732e4b18a4d87e02736784a43aeb9e0f&url=${encodeURIComponent(longUrl)}`)
      const data = await response.json()
      if (data.status === 'success') {
        setShortUrl(data.shortenedUrl)
      } else {
        setShortUrl('Error shortening URL')
      }
    } catch (error) {
      setShortUrl('Error shortening URL')
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className={`py-4 px-4 md:px-6 lg:px-8 border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 transition-all duration-300 ${scrolled ? 'shadow-md' : ''}`}>
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold">Playbox</h1>
          <nav className="hidden md:flex items-center space-x-4">
            <NavItems />
            <ThemeToggle />
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-[1.2rem] w-[1.2rem]" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 mt-4">
                <NavItems />
                <ThemeToggle />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4 md:px-6 lg:px-8">
        <section className="text-center mb-16 min-h-[calc(100vh-200px)] flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-300 ease-in-out">Shorten URLs and earn money</h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">Create an account, shorten your link, and start earning money!</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="https://maxbox.icu/auth/signup" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90">
                Create an account
                <UserPlusIcon className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Learn More
                  <ChevronRightIcon className="ml-2 h-4 w-4" />
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>About Playbox</AlertDialogTitle>
                  <AlertDialogDescription>
                    Playbox is a powerful URL shortening service that allows you to earn money from your shortened links. With our user-friendly platform, you can easily create short, memorable links and track their performance. Our competitive rates and reliable payouts make Playbox the perfect choice for content creators, marketers, and anyone looking to monetize their online presence.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogAction>Close</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </section>

        <section className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">Why join us?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: DollarSignIcon, title: "10% Referral Bonus", description: "Refer friends and receive 10% of their earnings for life!" },
              { icon: BarChartIcon, title: "Detailed Stats", description: "Analyze in detail what brings you the most income." },
              { icon: DollarSignIcon, title: "Low Minimum Payout", description: "Earn only $5.00 before you get paid via PayPal." },
              { icon: BarChartIcon, title: "Highest Rates", description: "Make the most out of your traffic with our increasing rates." },
              { icon: WrenchIcon, title: "API", description: "Shorten links quickly with our easy to use API." },
              { icon: HeadphonesIcon, title: "Support", description: "A dedicated support team ready to help with any questions." },
            ].map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <item.icon className="mr-2 text-primary h-5 w-5" /> {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <Card className="bg-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">What is Playbox?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm md:text-base">Playbox is a completely free tool where you can create short links, which apart from being free, you get paid! So, now you can make money from home, when managing and protecting your links.</p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">How it works</h3>
          <Tabs defaultValue="create" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="create" className="text-xs sm:text-sm">Create an account</TabsTrigger>
              <TabsTrigger value="shorten" className="text-xs sm:text-sm">Shorten your link</TabsTrigger>
              <TabsTrigger value="earn" className="text-xs sm:text-sm">Earn Money</TabsTrigger>
            </TabsList>
            <TabsContent value="create">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl">Create an account</CardTitle>
                  <CardDescription>Sign up for free and start your earning journey.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm md:text-base">Join Playbox in just a few clicks and get ready to monetize your links.</p>
                  <ul className="mt-4 space-y-2 text-sm md:text-base">
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                      <span>Quick and easy registration process</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                      <span>No credit card required</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                      <span>Instant access to all features</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="https://maxbox.icu/auth/signup" className="w-full">
                    <Button className="w-full">Sign Up Now <ChevronRightIcon className="ml-2 h-4 w-4" /></Button>
                  </Link>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="shorten">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl">Shorten your link</CardTitle>
                  <CardDescription>Use our tool to create short, shareable links.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm md:text-base">Paste your long URL and get a shortened version instantly.</p>
                  <div className="mt-4 space-y-4">
                    <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
                      <Input 
                        placeholder="Enter your long URL here" 
                        value={longUrl}
                        onChange={(e) => setLongUrl(e.target.value)}
                        className="w-full sm:w-auto"
                      />
                      <Button onClick={shortenLink} className="w-full sm:w-auto">Shorten</Button>
                    </div>
                    {shortUrl && (
                      <div className="p-4 bg-muted rounded-md">
                        <p className="text-sm font-medium">Shortened URL:</p>
                        <p className="text-sm text-muted-foreground break-all">{shortUrl}</p>
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="https://maxbox.icu" className="w-full">
                    <Button variant="outline" className="w-full">Try It Now <ChevronRightIcon className="ml-2 h-4 w-4" 
 /></Button>
                  </Link>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="earn">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl">Earn Money</CardTitle>
                  <CardDescription>Get paid for every visit to your shortened links.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm md:text-base">Share your links and watch your earnings grow with each click.</p>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm md:text-base">Earnings this month:</span>
                      <span className="font-bold text-green-500 text-sm md:text-base">$127.50</span>
                    </div>
                    <Progress value={66} className="w-full" />
                    <p className="text-xs md:text-sm text-muted-foreground">66% to your next payout of $200</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="https://maxbox.icu" className="w-full">
                    <Button variant="secondary" className="w-full">View Earnings Dashboard <ChevronRightIcon className="ml-2 h-4 w-4" /></Button>
                  </Link>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        <section className="mb-16">
          <Card className="overflow-hidden">
            <CardHeader className="bg-primary text-primary-foreground">
              <CardTitle className="text-xl md:text-2xl">Numbers speak for themselves</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x">
                {isLoading ? (
                  Array(3).fill(0).map((_, i) => (
                    <Skeleton key={i} className="h-32 w-full" />
                  ))
                ) : (
                  <>
                    {[
                      { icon: MousePointerClickIcon, value: "1,187,168", label: "Total Clicks" },
                      { icon: LinkIconSolid, value: "454,667", label: "Total Links" },
                      { icon: UsersIcon, value: "936", label: "Registered users" },
                    ].map((item, index) => (
                      <div key={index} className="p-6 text-center">
                        <item.icon className="mx-auto h-6 w-6 md:h-8 md:w-8 text-primary mb-2" />
                        <h4 className="text-2xl md:text-3xl font-bold">{item.value}</h4>
                        <p className="text-sm md:text-base text-muted-foreground">{item.label}</p>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">What our users say</h3>
          <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
            <CarouselContent>
              {Array(6).fill(0).map((_, i) => (
                <CarouselItem key={i}>
                  <Card>
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage src={`/placeholder.svg?text=User${i+1}`} alt={`User ${i+1}`} />
                          <AvatarFallback>U{i+1}</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-base md:text-lg">Happy User {i+1}</CardTitle>
                          <CardDescription className="text-sm">Verified Customer</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="italic text-sm md:text-base">"Playbox has revolutionized the way I monetize my content. It's so easy to use and the earnings are great!"</p>
                    </CardContent>
                    <CardFooter>
                      <Badge variant="secondary">Testimonial</Badge>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>

        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">Frequently Asked Questions</CardTitle>
              <CardDescription>Find answers to common questions about Playbox</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-sm md:text-base">How do I get started with Playbox?</AccordionTrigger>
                  <AccordionContent className="text-sm">
                    To get started with Playbox, simply sign up for a free account, shorten your first link, and start sharing it to earn money.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-sm md:text-base">How much can I earn with Playbox?</AccordionTrigger>
                  <AccordionContent className="text-sm">
                    Your earnings depend on various factors such as the number of clicks, the countries where the clicks originate, and your overall traffic. Some users report earning hundreds of dollars per month.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-sm md:text-base">When and how do I get paid?</AccordionTrigger>
                  <AccordionContent className="text-sm">
                    Payments are processed monthly via PayPal. You need to reach a minimum balance of $5 to request a payout.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-sm md:text-base">Is it safe to use Playbox for my links?</AccordionTrigger>
                  <AccordionContent className="text-sm">
                    Yes, Playbox uses secure encryption and follows best practices to ensure the safety of your links and data. We also provide additional features like link password protection and expiration dates for enhanced security.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-sm md:text-base">Can I use Playbox for my business?</AccordionTrigger>
                  <AccordionContent className="text-sm">
                    Playbox offers business-friendly features like custom domains, API access, and detailed analytics. Many businesses use Playbox to monetize their content and track link performance.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">Contact Us</CardTitle>
              <CardDescription>Get in touch!</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm">Your Name *</Label>
                    <Input id="name" required className="text-sm" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm">Your Email *</Label>
                    <Input id="email" type="email" required className="text-sm" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-sm">Your Subject *</Label>
                  <Input id="subject" required className="text-sm" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm">Your Message *</Label>
                  <Textarea id="message" required className="text-sm" />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="consent" />
                  <Label htmlFor="consent" className="text-xs sm:text-sm">
                    I consent to having this website store my submitted information so they can respond to my inquiry
                  </Label>
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="py-6 px-4 md:px-6 lg:px-8 border-t mt-16">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-xs md:text-sm text-muted-foreground mb-4 md:mb-0">
            © 2023 Playbox. All rights reserved.
          </div>
          <nav className="flex space-x-4">
            <Link href="https://maxbox.icu/pages/terms">
              <Button variant="link" className="text-xs md:text-sm">Terms</Button>
            </Link>
            <Link href="https://maxbox.icu/pages/privacy">
              <Button variant="link" className="text-xs md:text-sm">Privacy</Button>
            </Link>
            <Link href="https://maxbox.icu/pages/dmca">
              <Button variant="link" className="text-xs md:text-sm">DMCA</Button>
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}