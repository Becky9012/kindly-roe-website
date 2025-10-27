import { motion } from "motion/react";
import { useEffect } from "react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { HandDrawnUnderline } from "./components/HandDrawnUnderline";
import { HandDrawnCircle } from "./components/HandDrawnCircle";
import { HandDrawnArrow } from "./components/HandDrawnArrow";
import { KindlyRoeLogo } from "./components/KindlyRoeLogo";
import { RoeLogo } from "./components/RoeLogo";
import { BrandIllustration } from "./components/BrandIllustration";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { Heart, BookOpen, MessageCircle, Calendar, FileText, Lightbulb, Check } from "lucide-react";

export default function App() {
  console.log("[KindlyRoe] App render:", new Date().toLocaleString());
  useEffect(() => {
    console.log("[KindlyRoe] App mounted:", new Date().toLocaleString());
    document.title = `Kindly Roe - ${new Date().toLocaleTimeString()}`;
  }, []);

  const testimonials = [
    {
      name: "Emma",
      role: "Parent of two",
      content: "Roe helped me see patterns I'd missed. It doesn't feel like another task - it feels like someone's finally listening.",
      rating: 5
    },
    {
      name: "James",
      role: "Single dad",
      content: "I was drowning in paperwork and appointments. Roe helped me organize my thoughts and feel more prepared for meetings.",
      rating: 5
    },
    {
      name: "Priya",
      role: "Foster carer",
      content: "The way Roe validates my feelings before offering suggestions makes such a difference. I don't feel judged, just supported.",
      rating: 5
    }
  ];

  return (
    <>
      {/* Hero Section with Navigation - Full Background */}
      <section className="hero-bg relative min-h-screen">
        {/* Top Navigation Bar */}
        <nav className="absolute top-0 left-0 right-0 z-50 nav-gradient">
          <div className="max-w-7xl mx-auto px-6 navbar-thick flex items-center justify-between">
            {/* Left side - Kindly Roe Logo */}
            <div className="flex items-center">
              <img
                src="/src/assets/Kindlyroe.svg"
                alt="Kindly Roe"
                className="logo-white"
              />
            </div>
            
            {/* Right side - could add menu items here later */}
            <div className="flex items-center">
              {/* Placeholder for future menu items */}
            </div>
          </div>
        </nav>
        
        {/* Hero Content */}
        <div className="pt-32 md:pt-40">
        <div className="mx-auto max-w-7xl px-6 pb-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-7xl md:text-8xl lg:text-9xl text-[color:var(--ink)] tracking-tight hero-title">
              Whether you're exploring or ready to begin
            </h1>
            <p className="mt-6 text-2xl md:text-3xl lg:text-4xl text-[color:var(--ink)]/70 hero-subtitle">
              Two gentle paths. Choose what fits today.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Families door */}
            <motion.a
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group relative rounded-[28px] bg-gradient-to-br from-[#FFFEFA] to-[#F5F0E8] backdrop-blur ring-2 ring-[#B87333]/30 shadow-[var(--shadow-soft)] hover:shadow-xl hover:ring-[#B87333]/50 transition-all duration-300 p-8 overflow-hidden"
              aria-label="Go to support for families"
              role="region"
              aria-labelledby="families-heading"
            >
              <div className="absolute inset-0 pointer-events-none hero-card-families-overlay" />
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-6 relative">
                  <img 
                    src="/src/assets/familycard.svg" 
                    alt="Family navigating support" 
                    className="w-full max-w-56 aspect-[3/4] object-contain mx-auto mb-6"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 hero-card-image-fade"></div>
                </div>
                <h3 id="families-heading" className="text-4xl md:text-5xl tracking-[-0.01em] text-[color:var(--ink)] hero-card-title">
                  For Families
                </h3>
                <p className="mt-3 text-lg md:text-xl leading-relaxed text-[color:var(--ink)]/70 hero-card-description">
                  Navigate your journey together. Track patterns, celebrate progress, and build understanding as a family unit.
                </p>
                <button className="kr-btn-primary mt-6 bg-[#B87333] hover:bg-[#A65D3A] text-white">
                  Start family journey
                </button>
              </div>
            </motion.a>

            {/* Adults door */}
            <motion.a
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group relative rounded-[28px] bg-gradient-to-br from-[#FFFEFA] to-[#F5F0E8] backdrop-blur ring-2 ring-[#B87333]/30 shadow-[var(--shadow-soft)] hover:shadow-xl hover:ring-[#B87333]/50 transition-all duration-300 p-8 overflow-hidden"
              aria-label="Go to support for adults"
              role="region"
              aria-labelledby="adults-heading"
            >
              <div className="absolute inset-0 pointer-events-none hero-card-adults-overlay" />
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-6 relative">
                  <img 
                    src="/src/assets/girlcard1.svg" 
                    alt="Adult seeking clarity" 
                    className="w-full max-w-56 aspect-[3/4] object-contain mx-auto mb-6"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 hero-card-image-fade"></div>
                </div>
                <h3 id="adults-heading" className="text-4xl md:text-5xl tracking-[-0.01em] text-[color:var(--ink)] hero-card-title">
                  For Adults
                </h3>
                <p className="mt-3 text-lg md:text-xl leading-relaxed text-[color:var(--ink)]/70 hero-card-description">
                  Take time for yourself. Reflect on your experiences, understand your needs, and find clarity in your personal journey.
                </p>
                <button className="kr-btn-primary mt-6 bg-[#B87333] hover:bg-[#A65D3A] text-white">
                  Begin personal journey
                </button>
              </div>
            </motion.a>
          </div>
        </div>
        </div>
      </section>
      
      {/* Main Content Container */}
      <div className="bg-[var(--kr-bg)] relative main-container w-full">

      {/* Features Section - Bento Box Style */}
      <section id="features" className="py-20 px-6 kr-bg-eggshell border-y border-[color:var(--ink)]/15">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 text-[color:var(--ink)]">
              <span className="relative inline-block">
                <span className="inline-flex items-center gap-2">
                  How <RoeLogo className="h-8 inline-block" /> can help
                </span>
                <HandDrawnUnderline className="absolute -bottom-2 left-0 w-full h-3 kr-underline-blush opacity-50" />
              </span>
            </h2>
            <p className="text-[color:var(--ink)]/80 max-w-2xl mx-auto">
              From what you've shared with other families, these are the things that might make your days a bit lighter.
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {/* Large Card - Spans 2 columns and 2 rows */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:col-span-2 md:row-span-2"
            >
              <Card className="h-full p-8 md:p-12 kr-card-stroke kr-bg-eggshell overflow-hidden relative">
                <div className="absolute top-0 right-0 w-48 h-48 [color:var(--copper-500)] opacity-10 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <div className="mb-6 relative inline-block">
                    <HandDrawnCircle className="w-20 h-20 text-[#C97A47] opacity-30 absolute -top-2 -left-2" />
                    <Heart className="w-10 h-10 text-[color:var(--ink)] relative z-10 mt-5 ml-5" />
                  </div>
                  <h3 className="mb-4 text-[color:var(--ink)]">A companion who listens</h3>
                  <p className="text-[color:var(--ink)]/80 mb-6">
                    <span className="inline-flex items-center gap-1"><RoeLogo className="h-5 inline-block" /> is</span> here to help you understand your child's needs, track what matters, and find moments of calm in the everyday.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#EBC8B2]/50 border-2 border-[color:var(--ink)] text-sm text-[color:var(--ink)]">understanding</span>
                    <span className="px-3 py-1 bg-white border-2 border-[color:var(--ink)] text-sm text-[color:var(--ink)]">non-judgemental</span>
                    <span className="px-3 py-1 bg-white border-2 border-[color:var(--ink)] text-sm text-[color:var(--ink)]">always here</span>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Medium Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="md:col-span-1 lg:col-span-2"
            >
              <Card className="h-full p-6 kr-card-stroke bg-[color:var(--copper-400)] overflow-hidden relative">
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-15 rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <BookOpen className="w-8 h-8 mb-4 text-[color:var(--ink)]" />
                  <h3 className="mb-3 text-[color:var(--ink)]">Track patterns, not just behaviors</h3>
                  <p className="text-[color:var(--ink)]/90">Notice what's working, what might need support, and celebrate small wins along the way.</p>
                </div>
              </Card>
            </motion.div>

            {/* Medium Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:col-span-1 lg:col-span-2"
            >
              <Card className="h-full p-6 kr-card-stroke kr-bg-eggshell">
                <MessageCircle className="w-8 h-8 text-[color:var(--ink)] mb-4" />
                <h3 className="mb-3 text-[color:var(--ink)]">Plain language support</h3>
                <p className="text-[color:var(--ink)]/80">We help make sense of EHCPs, meetings, and paperwork - without the jargon.</p>
              </Card>
            </motion.div>

            {/* Small Card with Icon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="md:col-span-1"
            >
              <Card className="h-full p-6 kr-card-stroke bg-[color:var(--silver-300)] flex flex-col items-center justify-center text-center">
                <Calendar className="w-12 h-12 text-[color:var(--ink)] mb-3" />
                <h4 className="text-[color:var(--ink)]">Track routines</h4>
                <p className="text-sm text-[color:var(--ink)]/80">Your family's rhythm</p>
              </Card>
            </motion.div>

            {/* Small Card with reflection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="md:col-span-1"
            >
              <Card className="h-full p-6 kr-card-stroke kr-bg-eggshell flex flex-col items-center justify-center text-center">
                <Lightbulb className="w-12 h-12 text-[#D4AF37] mb-3" />
                <h4 className="text-[color:var(--ink)]">Notice wins</h4>
                <p className="text-sm text-[color:var(--ink)]/80">Even the small ones</p>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 text-center relative"
          >
            <div className="absolute -top-20 right-0 w-32 h-32 opacity-10">
              <BrandIllustration className="w-full h-full text-[#C97A47]" />
            </div>
            <HandDrawnArrow className="w-24 h-24 text-[color:var(--copper-500)] opacity-40 mx-auto mb-4 rotate-90" />
            <p className="text-[color:var(--ink)]/80">
              you might want to explore what <span className="inline-flex items-center gap-1"><RoeLogo className="h-5 inline-block" /> can</span> do for you
            </p>
          </motion.div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 px-6 kr-bg-eggshell relative overflow-hidden">
        {/* Decorative illustration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.08 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="absolute bottom-10 right-10 w-64 h-64 hidden lg:block"
        >
          <BrandIllustration className="w-full h-full text-[color:var(--gold-300)]" />
        </motion.div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 text-[color:var(--ink)]">
              <span className="relative inline-block">
                <span className="inline-flex items-center gap-2">
                  How <RoeLogo className="h-8 inline-block" /> speaks to you
                </span>
                <HandDrawnUnderline className="absolute -bottom-2 left-0 w-full h-3 text-[color:var(--copper-500)] opacity-40" />
              </span>
            </h2>
            <p className="text-[color:var(--ink)]/80 max-w-2xl mx-auto">
              Every word is chosen with care. Here's what it feels like to use <span className="inline-flex items-center gap-1"><RoeLogo className="h-5 inline-block" /></span>.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Welcome moment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="p-6 kr-card-stroke kr-bg-eggshell h-full">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-[#B87333] border-2 border-[color:var(--ink)] text-xs rounded-full text-white">welcome</span>
                </div>
                <p className="text-[color:var(--ink)]/80 mb-4 italic">
                  "Hi, I'm <span className="inline-flex items-center gap-1"><RoeLogo className="h-5 inline-block" /></span>. I'm here to help you make sense of things - calmly, one step at a time."
                </p>
                <p className="text-xs text-[color:var(--ink)]/80/70">first thing you see</p>
              </Card>
            </motion.div>

            {/* Gentle reminder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <Card className="p-6 kr-card-stroke kr-bg-eggshell h-full">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-[#D9D9D9] text-[color:var(--ink)] border-2 border-[color:var(--ink)] text-xs rounded-full">check-in</span>
                </div>
                <p className="text-[color:var(--ink)]/80 mb-4 italic">
                  "Would now be a good time to reflect on today?"
                </p>
                <p className="text-xs text-[color:var(--ink)]/80/70">never demanding, always inviting</p>
              </Card>
            </motion.div>

            {/* Confirmation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="p-6 kr-card-stroke kr-bg-eggshell h-full">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-[#B8C5B3] border-2 border-[color:var(--ink)] text-xs rounded-full text-white">saved</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <Check className="w-5 h-5 text-[#B8C5B3]" />
                  <p className="text-[color:var(--ink)]/80 italic">"that's saved"</p>
                </div>
                <p className="text-xs text-[color:var(--ink)]/80/70">simple, reassuring confirmations</p>
              </Card>
            </motion.div>

            {/* After tough entry */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Card className="p-6 kr-card-stroke bg-[#FAF8F3] h-full">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-[#B87D5C] border-2 border-[color:var(--ink)] text-xs rounded-full text-white">care moment</span>
                </div>
                <p className="text-[color:var(--ink)]/80 mb-4 italic">
                  "That sounds heavy. Thank you for trusting me with it."
                </p>
                <p className="text-xs text-[color:var(--ink)]/80/70">validation before anything else</p>
              </Card>
            </motion.div>

            {/* Button examples */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="p-6 kr-card-stroke kr-bg-eggshell h-full">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-[#D4DDD0] border-2 border-[color:var(--ink)] text-xs rounded-full text-[color:var(--ink)]">actions</span>
                </div>
                <div className="space-y-3">
                  <button className="w-full px-4 py-2 bg-[color:var(--sage-500)] text-white rounded-lg text-sm lowercase hover:bg-[color:var(--sage-600)] kr-btn-secondary">
                    save reflection
                  </button>
                  <button className="w-full px-4 py-2 kr-bg-eggshell text-[color:var(--ink)] rounded-lg text-sm lowercase hover:bg-[color:var(--clay-50)] kr-btn-secondary">
                    maybe later
                  </button>
                </div>
                <p className="text-xs text-[color:var(--ink)]/80/70 mt-4">calm, gentle language</p>
              </Card>
            </motion.div>

            {/* Error state */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Card className="p-6 kr-card-stroke kr-bg-eggshell h-full">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-[#C6837D] border-2 border-[color:var(--ink)] text-xs rounded-full text-white">if something goes wrong</span>
                </div>
                <p className="text-[color:var(--ink)]/80 mb-4 italic">
                  "That didn't work just now. Let's try again in a moment."
                </p>
                <p className="text-xs text-[color:var(--ink)]/80/70">no panic, just patience</p>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 text-center"
          >
            <p className="text-[color:var(--ink)]/80 max-w-2xl mx-auto">
              Every interaction with <span className="inline-flex items-center gap-1"><RoeLogo className="h-5 inline-block" /> feels</span> like talking to someone who genuinely cares. No rush, no judgement - just understanding.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Support Features - Bento Box Style */}
      <section id="support" className="py-20 px-6 kr-bg-eggshell relative overflow-hidden">
        {/* Decorative illustration */}
        <motion.div
          initial={{ opacity: 0, rotate: -10 }}
          whileInView={{ opacity: 0.06, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          className="absolute top-20 left-10 w-48 h-48 hidden lg:block"
        >
          <BrandIllustration className="w-full h-full text-[#9CA896]" />
        </motion.div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 text-[color:var(--ink)]">
              <span className="relative inline-block">
                <span className="inline-flex items-center gap-2">
                  What <RoeLogo className="h-8 inline-block" /> helps with
                </span>
                <HandDrawnUnderline className="absolute -bottom-2 left-0 w-full h-3 text-[color:var(--mist-500)] opacity-40" />
              </span>
            </h2>
            <p className="text-[color:var(--ink)]/80 max-w-2xl mx-auto">
              From what you've told us, these are the things that might make the hard days a bit easier.
            </p>
          </motion.div>

          {/* Bento Grid for Support Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {/* Large Card - Spans 2 columns and 2 rows */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="md:col-span-2 md:row-span-2"
            >
              <div className="h-full kr-card-stroke rounded-2xl overflow-hidden rotate-[-1deg] hover:rotate-0">
                <div className="relative h-96 md:h-full kr-bg-eggshell p-8 md:p-12 flex flex-col justify-between">
                  <div>
                    <BookOpen className="w-12 h-12 text-[color:var(--sage-500)] mb-6" />
                    <h3 className="mb-4 text-[color:var(--ink)]">Document your child's journey</h3>
                    <p className="text-[color:var(--ink)]/80 mb-6">Keep track of what works, what doesn't, and those small moments that matter. It's not about perfection - it's about understanding.</p>
                  </div>
                  <div className="kr-card-stroke rounded-xl overflow-hidden">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1493612276216-ee3925520721?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjZWZ1bCUyMGpvdXJuYWwlMjBub3RlYm9va3xlbnwxfHx8fDE3NjAzNjcwMjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Journal for reflection"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Medium Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="md:col-span-1 lg:col-span-2"
            >
              <div className="h-full kr-card-stroke rounded-2xl overflow-hidden rotate-[1deg] hover:rotate-0 kr-bg-eggshell p-6">
                <FileText className="w-8 h-8 text-[color:var(--ink)] mb-4" />
                <h3 className="mb-3 text-[color:var(--ink)]">Make sense of the paperwork</h3>
                <p className="text-[color:var(--ink)]/80">EHCPs, Section F, statutory duties - we explain what it all means in plain language, so you can focus on what matters.</p>
              </div>
            </motion.div>

            {/* Tall Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:col-span-1 md:row-span-2"
            >
              <div className="h-full kr-card-stroke rounded-2xl overflow-hidden bg-[color:var(--gold-400)]">
                <div className="p-8 h-full flex flex-col justify-between">
                  <div>
                    <HandDrawnCircle className="w-16 h-16 text-[color:var(--ink)] opacity-30 mb-6" />
                    <h3 className="mb-3 text-[color:var(--ink)]">Spot patterns</h3>
                    <p className="text-[color:var(--ink)]/90 mb-6">
                      Sometimes triggers are obvious. Sometimes they're not. <span className="inline-flex items-center gap-1"><RoeLogo className="h-5 inline-block text-[color:var(--ink)]" /> helps</span> you notice connections you might have missed.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-white/20 backdrop-blur-sm border-2 border-[color:var(--ink)] rounded-lg p-3 text-sm">
                      <p className="text-[color:var(--ink)]">better mornings after quiet evenings</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm border-2 border-[color:var(--ink)] rounded-lg p-3 text-sm">
                      <p className="text-[color:var(--ink)]">meltdowns often before transitions</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Wide Card with Color */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="md:col-span-2 lg:col-span-2"
            >
              <div className="h-full kr-card-stroke rounded-2xl overflow-hidden bg-[color:var(--mist-500)]">
                <div className="p-8 h-full flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="mb-3 text-[color:var(--ink)]">Prepare for meetings</h3>
                    <p className="text-[color:var(--ink)]/90 mb-4">We can help you gather your thoughts, organize evidence, and feel more confident walking into that EHCP review or school meeting.</p>
                  </div>
                  <MessageCircle className="w-20 h-20 text-[color:var(--ink)]/20 flex-shrink-0 ml-4" />
                </div>
              </div>
            </motion.div>

            {/* Small Square Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="md:col-span-1"
            >
              <div className="h-full kr-card-stroke rounded-2xl overflow-hidden kr-bg-eggshell flex items-center justify-center p-6">
                <div className="text-center">
                  <Heart className="w-12 h-12 text-[color:var(--copper-500)] mx-auto mb-3" />
                  <p className="text-sm text-[color:var(--ink)]/80">always validating, never judging</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-6 bg-[#FAF8F3] border-y border-[color:var(--ink)]/15">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 text-[color:var(--ink)]">
              <span className="relative inline-block">
                You're not alone
                <HandDrawnUnderline className="absolute -bottom-2 left-0 w-full h-3 text-[#9CA896] opacity-40" />
              </span>
            </h2>
            <p className="text-[color:var(--ink)]/80 max-w-2xl mx-auto">
              Here's what other families have shared about using <span className="inline-flex items-center gap-1"><RoeLogo className="h-5 inline-block" /></span>
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="p-6 kr-card-stroke kr-bg-eggshell h-full">
                  <Heart className="w-6 h-6 text-[color:var(--copper-500)] mb-4" />
                  <p className="mb-6 text-[color:var(--ink)]/80 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-[var(--font-weight-medium)] text-[color:var(--ink)]">{testimonial.name}</p>
                    <p className="text-sm text-[color:var(--ink)]/80">{testimonial.role}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 px-6 kr-bg-eggshell">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* Decorative illustration in background */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.04 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.3 }}
              className="absolute -right-20 -top-20 w-80 h-80 hidden lg:block"
            >
              <BrandIllustration className="w-full h-full text-[color:var(--copper-500)]" />
            </motion.div>
            
            <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--sage-500)]/20 to-[color:var(--copper-500)]/20 rounded-3xl rotate-2 kr-card-stroke"></div>
            <Card className="relative kr-card-stroke rounded-3xl p-12 text-center kr-bg-eggshell">
              <div className="max-w-2xl mx-auto">
                <h2 className="mb-4 text-[color:var(--ink)]">
                  You might want to{" "}
                  <span className="relative inline-block">
                    <span className="inline-flex items-center gap-2">
                      try <RoeLogo className="h-9 inline-block" />
                    </span>
                    <HandDrawnUnderline className="absolute -bottom-2 left-0 w-full h-3 text-[#B8C5B3] opacity-50" />
                  </span>
                </h2>
                <p className="mb-8 text-[color:var(--ink)]/80">
                  It sounds like today has been really full. Maybe we could take a moment together and see if <span className="inline-flex items-center gap-1"><RoeLogo className="h-5 inline-block" /> can</span> help make things feel a bit lighter.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="bg-[color:var(--sage-500)] text-white hover:bg-[color:var(--sage-600)] kr-btn-secondary lowercase inline-flex items-center gap-1.5">
                    <Heart className="w-4 h-4" />
                    open <RoeLogo className="h-5 inline-block" />
                  </Button>
                  <Button variant="outline" className="kr-btn-secondary hover:bg-[#D4DDD0]/50 lowercase text-[color:var(--ink)]">
                    read more
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-3 border-[#1F1D1A] bg-[#1F1D1A] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="mb-4">
                <KindlyRoeLogo className="h-8 text-white" />
              </div>
              <p className="text-sm text-gray-400">A companion who listens, understands, and helps you feel a bit lighter.</p>
            </div>
            <div>
              <h4 className="mb-4 text-white">support</h4>
              <ul className="space-y-2 text-sm text-gray-400 lowercase">
                <li>
                  <a href="#" className="hover:text-[#E7C873] transition-colors inline-flex items-center gap-1">
                    how <RoeLogo className="h-3.5 inline-block" /> helps
                  </a>
                </li>
                <li><a href="#" className="hover:text-[#E7C873] transition-colors">EHCP guidance</a></li>
                <li><a href="#" className="hover:text-[#E7C873] transition-colors">understanding SEND</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-white">about</h4>
              <ul className="space-y-2 text-sm text-gray-400 lowercase">
                <li><a href="#" className="hover:text-[#E7C873] transition-colors">our story</a></li>
                <li><a href="#" className="hover:text-[#E7C873] transition-colors">privacy & safety</a></li>
                <li><a href="#" className="hover:text-[#E7C873] transition-colors">get in touch</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-white">community</h4>
              <ul className="space-y-2 text-sm text-gray-400 lowercase">
                <li><a href="#" className="hover:text-[#E7C873] transition-colors">parent stories</a></li>
                <li><a href="#" className="hover:text-[#E7C873] transition-colors">resources</a></li>
                <li><a href="#" className="hover:text-[#E7C873] transition-colors">support groups</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
            <p>
              © 2025 Kindly Roe. built with care for SEND families. <span className="inline-flex items-center gap-0.5"><RoeLogo className="h-3.5 inline-block" /> is</span> not a replacement for professional support.
            </p>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
}
