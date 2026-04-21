import React from 'react';

export default function App() {
  return (
    <main className="relative min-h-screen w-full flex flex-col overflow-hidden bg-background selection:bg-foreground selection:text-background">
      {/* Background Video (Z-Index 0) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source 
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4" 
          type="video/mp4" 
        />
      </video>

      {/* Navigation (Z-Index 10) */}
      <nav className="relative z-10 flex flex-row items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full">
        {/* Logo */}
        <div 
          className="text-3xl tracking-tight text-foreground select-none"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Velorah<sup className="text-xs">®</sup>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-sm font-medium text-foreground transition-colors">
            Home
          </a>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Studio
          </a>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Journal
          </a>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Reach Us
          </a>
        </div>

        {/* CTA */}
        <button className="liquid-glass rounded-full px-6 py-2.5 text-sm font-medium text-foreground hover:scale-[1.03]">
          Begin Journey
        </button>
      </nav>

      {/* Hero Section (Z-Index 10) */}
      <section className="relative z-10 flex flex-1 flex-col items-center justify-center text-center px-6 pt-32 pb-40">
        <h1 
          className="animate-fade-rise text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] max-w-7xl font-normal text-foreground"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Where <em className="not-italic text-muted-foreground">dreams</em> rise{' '}
          <em className="not-italic text-muted-foreground">through the silence.</em>
        </h1>

        <p className="animate-fade-rise-delay text-muted-foreground text-base sm:text-lg max-w-2xl mt-8 leading-relaxed">
          We're designing tools for deep thinkers, bold creators, and quiet rebels. 
          Amid the chaos, we build digital spaces for sharp focus and inspired work.
        </p>

        <button className="liquid-glass animate-fade-rise-delay-2 rounded-full px-14 py-5 text-base font-medium text-foreground mt-12 hover:scale-[1.03] cursor-pointer">
          Begin Journey
        </button>
      </section>
    </main>
  );
        }
    
