import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Services from "@/components/services"
import About from "@/components/about"
import WhyChooseUs from "@/components/why-choose-us"
import Portfolio from "@/components/portfolio"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Navigation />
      <Hero />
      <Services />
      <About />
      <WhyChooseUs />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  )
}
