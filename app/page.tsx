import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Code, Github, Linkedin, Mail, Terminal, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export const metadata: Metadata = {
  title: "Developer Portfolio",
  description: "A showcase of my work and skills as a software developer",
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-terminal/20 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold flex items-center">
            <Terminal className="h-5 w-5 text-terminal mr-2" />
            <span className="text-terminal glow-text">&lt;</span>
            <span className="text-white">Dev</span>
            <span className="text-terminal glow-text">/&gt;</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#experience" className="text-sm font-medium text-white hover:text-terminal transition-colors">
              Experience
            </Link>
            <Link href="#skills" className="text-sm font-medium text-white hover:text-terminal transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="text-sm font-medium text-white hover:text-terminal transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-sm font-medium text-white hover:text-terminal transition-colors">
              Contact
            </Link>
          </nav>
          <Button asChild variant="outline" className="border-terminal text-terminal hover:bg-terminal/10">
            <Link href="#contact">
              <span className="mr-1">&gt;</span> Get in Touch
            </Link>
          </Button>
        </div>
      </header>
      <main className="flex-1 grid-bg">
        <section className="w-full py-24 md:py-32 lg:py-40 border-b border-terminal/20 matrix-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="terminal-window mb-4 max-w-md">
                    <div className="terminal-header">
                      <div className="terminal-circle bg-red-500"></div>
                      <div className="terminal-circle bg-yellow-500"></div>
                      <div className="terminal-circle bg-green-500"></div>
                      <div className="ml-2 text-xs text-white/70">terminal</div>
                    </div>
                    <div className="terminal-content">
                      <div className="flex">
                        <span className="text-white/70">$</span>
                        <span className="ml-2">./introduce.sh</span>
                      </div>
                      <div className="mt-2">
                        <span className="text-terminal">Hi, I'm </span>
                        <span className="text-white font-bold">Sarthak Aggarwal</span>
                      </div>
                      <div className="mt-1 flex">
                        <span className="text-terminal">Role: </span>
                        <span className="ml-2 text-white">Software Developer</span>
                      </div>
                      <div className="mt-1 flex">
                        <span className="text-terminal">Status: </span>
                        <span className="ml-2 text-white">Ready for new challenges</span>
                      </div>
                      <div className="mt-3 flex">
                        <span className="text-white/70">$</span>
                        <span className="ml-2 text-white animate-text-blink">_</span>
                      </div>
                    </div>
                  </div>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    A passionate software developer striding to create something bigger and better.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild className="bg-terminal hover:bg-terminal/90 text-black font-bold">
                    <Link href="#projects">
                      View My Work <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild className="border-terminal text-terminal hover:bg-terminal/10">
                    <Link href="#contact">Contact Me</Link>
                  </Button>
                </div>
                <div className="flex gap-4 mt-4">
                  <Link href="https://github.com/BabaFakiir" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon" className="text-white hover:text-terminal hover:bg-terminal/10">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </Link>
                  <Link href="https://www.linkedin.com/in/sarthak-aggarwal-6ba328221/" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon" className="text-white hover:text-terminal hover:bg-terminal/10">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </Link>
                  <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon" className="text-white hover:text-terminal hover:bg-terminal/10">
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-terminal/20 blur-xl"></div>
                  <img
                    alt="Developer Portrait"
                    className="relative z-10 aspect-square overflow-hidden rounded-full object-cover border-2 border-terminal glow-border"
                    height="400"
                    src="/headshot2.jpeg?height=400&width=400"
                    width="400"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="experience" className="w-full py-12 md:py-24 lg:py-32 border-b border-terminal/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-terminal/20 px-3 py-1 text-sm text-terminal border border-terminal/30 glow-border">
                  <Code className="w-4 h-4 inline mr-1" /> Experience
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                  Work <span className="text-terminal glow-text">Experience</span>
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  My professional journey and roles I've held.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <Carousel className="w-full">
                <CarouselContent>
                  <CarouselItem className="md:basis-1/1 lg:basis-1/1">
                    <Card className="border-terminal/30 bg-black/40 glow-border">
                      <CardContent className="flex flex-col p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-2xl font-bold text-white">Software Developer Intern</h3>
                            <p className="text-terminal">Bytewerx LLC</p>
                          </div>
                          <Badge variant="outline" className="text-sm border-terminal/30 text-terminal">
                            2024 - 2025
                          </Badge>
                        </div>
                        <div className="mt-4">
                          <p className="text-muted-foreground mb-4">
                            Led the development of web applications using Angular, ASP.NET, and Microsoft SQL.
                          </p>
                          <ul className="grid gap-2">
                            <li className="flex items-start gap-2">
                              <div className="h-2 w-2 translate-y-1 rounded-full bg-terminal"></div>
                              <span className="text-white">
                                Developed Tnect mobile validation API and Web application to create and manage API keys for a user.
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="h-2 w-2 translate-y-1 rounded-full bg-terminal"></div>
                              <span className="text-white">
                                Worked in a team of 4 to implement the web application and connect it with the validation service.
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="h-2 w-2 translate-y-1 rounded-full bg-terminal"></div>
                              <span className="text-white">
                                Integrated payment using Stripe
                              </span>
                            </li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/1 lg:basis-1/1">
                    <Card className="border-terminal/30 bg-black/40 glow-border">
                      <CardContent className="flex flex-col p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-2xl font-bold text-white">Software Developer Advocate</h3>
                            <p className="text-terminal">Enterprise Technology</p>
                          </div>
                          <Badge variant="outline" className="text-sm border-terminal/30 text-terminal">
                            2024 - 2024
                          </Badge>
                        </div>
                        <div className="mt-4">
                          <p className="text-muted-foreground mb-4">
                            Developed IOS mobile applications on swift.
                          </p>
                          <ul className="grid gap-2">
                            <li className="flex items-start gap-2">
                              <div className="h-2 w-2 translate-y-1 rounded-full bg-terminal"></div>
                              <span className="text-white">
                                Start as a Swift developer tasked to construct IOS mobile applications for Apple sponsored classes at ASU.
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="h-2 w-2 translate-y-1 rounded-full bg-terminal"></div>
                              <span className="text-white">
                                Teaching software development to over 30 students.
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="h-2 w-2 translate-y-1 rounded-full bg-terminal"></div>
                              <span className="text-white">
                                Create SNAP EBT application tracker for Non-profit cause.
                              </span>
                            </li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/1 lg:basis-1/1">
                    <Card className="border-terminal/30 bg-black/40 glow-border">
                      <CardContent className="flex flex-col p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-2xl font-bold text-white">Research Assistant</h3>
                            <p className="text-terminal">Arizona State University</p>
                          </div>
                          <Badge variant="outline" className="text-sm border-terminal/30 text-terminal">
                            2025 - 2025
                          </Badge>
                        </div>
                        <div className="mt-4">
                          <p className="text-muted-foreground mb-4">
                            Assisted Prof Jia Zou with her research in data transformation using LLM
                          </p>
                          <ul className="grid gap-2">
                            <li className="flex items-start gap-2">
                              <div className="h-2 w-2 translate-y-1 rounded-full bg-terminal"></div>
                              <span className="text-white">
                                Developed pipeline for failed cases and training the model to overcome those edge cases.
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="h-2 w-2 translate-y-1 rounded-full bg-terminal"></div>
                              <span className="text-white">
                                The pipeline model made research smoother by 40%
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="h-2 w-2 translate-y-1 rounded-full bg-terminal"></div>
                              <span className="text-white">
                                Reduced the time taken for an average research by at-least 30%.
                              </span>
                            </li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                </CarouselContent>
                <div className="flex justify-center mt-4">
                  <CarouselPrevious className="relative static translate-y-0 left-0 border-terminal/30 text-terminal hover:bg-terminal/10 hover:text-terminal" />
                  <CarouselNext className="relative static translate-y-0 right-0 border-terminal/30 text-terminal hover:bg-terminal/10 hover:text-terminal" />
                </div>
              </Carousel>
            </div>
          </div>
        </section>
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32 border-b border-terminal/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-terminal/20 px-3 py-1 text-sm text-terminal border border-terminal/30 glow-border">
                  <Code className="w-4 h-4 inline mr-1" /> Skills
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                  Technical <span className="text-terminal glow-text">Expertise</span>
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Here are some of the technologies and tools I work with.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-terminal/30 bg-black/40 glow-border">
                <CardHeader>
                  <CardTitle className="text-white">Frontend</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-2">
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-terminal"></div>
                      <span className="text-white">React / Next.js</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-terminal"></div>
                      <span className="text-white">TypeScript</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-terminal"></div>
                      <span className="text-white">Tailwind CSS</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-terminal"></div>
                      <span className="text-white">HTML5 / CSS3</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-terminal"></div>
                      <span className="text-white">Angular</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-terminal/30 bg-black/40 glow-border">
                <CardHeader>
                  <CardTitle className="text-white">Backend</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-2">
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-terminal"></div>
                      <span className="text-white">ASP.NET</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-terminal"></div>
                      <span className="text-white">Python</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-terminal"></div>
                      <span className="text-white">Java</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-terminal"></div>
                      <span className="text-white">GraphQL</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-terminal"></div>
                      <span className="text-white">SQL / NoSQL Databases</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-terminal/30 bg-black/40 glow-border">
                <CardHeader>
                  <CardTitle className="text-white">Tools & Others</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-2">
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-terminal"></div>
                      <span className="text-white">Git / GitHub</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-terminal"></div>
                      <span className="text-white">Docker / Kubernetes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-terminal"></div>
                      <span className="text-white">CI/CD Pipelines</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-terminal"></div>
                      <span className="text-white">AWS</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-terminal"></div>
                      <span className="text-white">Testing (Jest, Cypress)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 border-b border-terminal/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-terminal/20 px-3 py-1 text-sm text-terminal border border-terminal/30 glow-border">
                  <Code className="w-4 h-4 inline mr-1" /> Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                  Featured <span className="text-terminal glow-text">Work</span>
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out some of my recent projects.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden border-terminal/30 bg-black/40 glow-border">
                <div className="relative">
                  <div className="absolute inset-0 bg-terminal/10"></div>
                  <img
                    alt="Project 1"
                    className="aspect-video object-cover w-full"
                    height="225"
                    src="/bytewerx.png?height=225&width=400"
                    width="400"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-white">Tnect Mobile Validation API</CardTitle>
                  <CardDescription className="text-terminal">
                    A full-stack e-commerce solution with payment integration
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Built with Angular.js, ASP.NET, MS SQL, and integrated with Stripe for payments. Features
                    include user authentication, product management, and API usage tracking.
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex gap-2">
                    
                  </div>
                </CardFooter>
              </Card>
              <Card className="overflow-hidden border-terminal/30 bg-black/40 glow-border">
                <div className="relative">
                  <div className="absolute inset-0 bg-terminal/10"></div>
                  <img
                    alt="Project 2"
                    className="aspect-video object-cover w-full"
                    height="225"
                    src="/stock pred.webp?height=225&width=400"
                    width="400"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-white">Stock Trend Predictor</CardTitle>
                  <CardDescription className="text-terminal">An application that predicts stock price movement</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Started by analyzing sentiments relating to the stock on social media sited like X and Reddit. Then used VADER LLM to categorize these sentiments as positive or negative.
                    Switching to Groc.AI for better performance and analyses.
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                      className="border-terminal/30 text-terminal hover:bg-terminal/10"
                    >
                      <Link href="https://github.com/vanshisop/CSE472-project" target="_blank" rel="noopener noreferrer">
                        <Github className="mr-1 h-4 w-4" /> Code
                      </Link>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
              <Card className="overflow-hidden border-terminal/30 bg-black/40 glow-border">
                <div className="relative">
                  <div className="absolute inset-0 bg-terminal/10"></div>
                  <img
                    alt="Project 3"
                    className="aspect-video object-cover w-full"
                    height="225"
                    src="/apple logo.jpg?height=225&width=400"
                    width="400"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-white">Calaminect</CardTitle>
                  <CardDescription className="text-terminal">Mobile application to connect community at time of a calamity</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Collaborated on a project hosted by the Department of Homeland Security and sponsored by Apple Inc. Aimed at developing an IOS
                    application based on swift to help a community connect with one another at the time of a calamity to barter resources and sustain itself.
                    Designed the UI, wrote a fair share of back end code and also helped integrate the UI with the backend. The team was awarded a prize of
                    $1000 for the same.
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                      className="border-terminal/30 text-terminal hover:bg-terminal/10"
                    >
                      <Link href="https://github.com/BabaFakiir/Calaminect.io" target="_blank" rel="noopener noreferrer">
                        <Github className="mr-1 h-4 w-4" /> Code
                      </Link>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </div>
            <div className="flex justify-center">
              <Button variant="outline" asChild className="border-terminal/30 text-terminal hover:bg-terminal/10">
                <Link href="https://github.com/BabaFakiir" target="_blank" rel="noopener noreferrer">
                  View More Projects on GitHub <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-terminal/20 px-3 py-1 text-sm text-terminal border border-terminal/30 glow-border">
                  <Code className="w-4 h-4 inline mr-1" /> Contact
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                  Get <span className="text-terminal glow-text">In Touch</span>
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <Card className="border-terminal/30 bg-black/40 glow-border">
                <CardHeader>
                  <CardTitle className="text-white">Contact Information</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Feel free to reach out through any of these channels
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-terminal" />
                    <div className="grid gap-0.5">
                      <div className="font-medium text-white">Email</div>
                      <div className="text-sm text-terminal">sarthak.agg66@gmail.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-terminal" />
                    <div className="grid gap-0.5">
                      <div className="font-medium text-white">LinkedIn</div>
                      <div className="text-sm text-terminal">https://www.linkedin.com/in/sarthak-aggarwal-6ba328221/</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Github className="h-5 w-5 text-terminal" />
                    <div className="grid gap-0.5">
                      <div className="font-medium text-white">GitHub</div>
                      <div className="text-sm text-terminal">https://github.com/BabaFakiir</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-terminal/30 bg-black/40 glow-border">
                <CardHeader>
                  <CardTitle className="text-white">Send a Message</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Fill out the form below and I'll get back to you as soon as possible
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="grid gap-4">
                    <div className="grid gap-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-terminal/30 bg-black/40 px-3 py-2 text-sm text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terminal focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-terminal/30 bg-black/40 px-3 py-2 text-sm text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terminal focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your email"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium leading-none text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="flex min-h-[120px] w-full rounded-md border border-terminal/30 bg-black/40 px-3 py-2 text-sm text-white ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terminal focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your message"
                      ></textarea>
                    </div>
                    <Button type="submit" className="w-full bg-terminal hover:bg-terminal/90 text-black font-bold">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t border-terminal/20 py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} <span className="text-terminal">Sarthak Aggarwal</span>. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="https://github.com/BabaFakiir" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="text-white hover:text-terminal hover:bg-terminal/10">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/sarthak-aggarwal-6ba328221/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="text-white hover:text-terminal hover:bg-terminal/10">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="text-white hover:text-terminal hover:bg-terminal/10">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
