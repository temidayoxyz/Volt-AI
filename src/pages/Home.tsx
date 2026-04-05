import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { ArrowRight, Code2, Zap, Shield, BarChart3, Globe, Cpu } from 'lucide-react';

export const Home = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_50%,rgba(10,114,239,0.05)_0%,rgba(255,255,255,0)_100%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="blue" className="mb-6">Volt Engine v2.4 Now Live</Badge>
            <h1 className="geist-display mb-8 max-w-4xl mx-auto">
              Infrastructure that <span className="text-develop-blue">thinks</span>.
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              Volt is the high-performance AI agent engineered to automate, optimize, and scale your technical infrastructure with mathematical precision.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="w-full sm:w-auto h-12 px-8">
                Deploy Volt Now
              </Button>
              <Button variant="secondary" size="lg" className="w-full sm:w-auto h-12 px-8">
                Read Documentation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 border-y border-gray-100 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-xs font-mono uppercase tracking-widest text-gray-400 mb-8">
            Trusted by engineering teams at
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale">
            {['ACME', 'GLOBEX', 'SOYLENT', 'INITECH', 'UMBRELLA'].map((logo) => (
              <span key={logo} className="text-xl font-bold tracking-tighter-vercel">{logo}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Pipeline */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connection Lines (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gray-100 -z-10" />
            
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-develop-blue/10 flex items-center justify-center mb-6 border border-develop-blue/20">
                <Code2 className="text-develop-blue w-6 h-6" />
              </div>
              <span className="font-mono text-xs uppercase tracking-widest text-develop-blue mb-2">Step 01</span>
              <h3 className="text-2xl font-semibold mb-4 tracking-tight-vercel">Develop</h3>
              <p className="text-gray-600">Volt analyzes your codebase to refactor technical debt and generate optimized modules.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-preview-pink/10 flex items-center justify-center mb-6 border border-preview-pink/20">
                <Zap className="text-preview-pink w-6 h-6" />
              </div>
              <span className="font-mono text-xs uppercase tracking-widest text-preview-pink mb-2">Step 02</span>
              <h3 className="text-2xl font-semibold mb-4 tracking-tight-vercel">Optimize</h3>
              <p className="text-gray-600">Real-time performance tuning and resource allocation to ensure maximum efficiency.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-ship-red/10 flex items-center justify-center mb-6 border border-ship-red/20">
                <Globe className="text-ship-red w-6 h-6" />
              </div>
              <span className="font-mono text-xs uppercase tracking-widest text-ship-red mb-2">Step 03</span>
              <h3 className="text-2xl font-semibold mb-4 tracking-tight-vercel">Scale</h3>
              <p className="text-gray-600">Automated global distribution and infrastructure scaling without human intervention.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-32 bg-gray-50/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-16">
            <h2 className="geist-section-heading mb-4">Engineered for Performance.</h2>
            <p className="text-xl text-gray-600">Every feature is a result of rigorous optimization.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-8">
              <Cpu className="w-8 h-8 mb-6 text-vercel-black" />
              <h4 className="geist-card-title mb-4">Neural Refactoring</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Volt uses advanced LLMs to identify bottlenecks in your logic and suggests high-performance alternatives.
              </p>
            </Card>
            
            <Card className="p-8">
              <Shield className="w-8 h-8 mb-6 text-vercel-black" />
              <h4 className="geist-card-title mb-4">Autonomous Security</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Continuous vulnerability scanning and automated patch deployment across your entire stack.
              </p>
            </Card>

            <Card className="p-8">
              <BarChart3 className="w-8 h-8 mb-6 text-vercel-black" />
              <h4 className="geist-card-title mb-4">Cost Optimization</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Reduce cloud spend by up to 40% through intelligent resource rightsizing and spot instance management.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-32 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-8 border-l border-gray-100">
              <div className="text-5xl font-semibold tracking-tightest mb-2">10x</div>
              <div className="text-gray-500 text-sm uppercase tracking-widest font-mono">Faster Deployments</div>
            </div>
            <div className="p-8 border-l border-gray-100">
              <div className="text-5xl font-semibold tracking-tightest mb-2">99.99%</div>
              <div className="text-gray-500 text-sm uppercase tracking-widest font-mono">Uptime Guaranteed</div>
            </div>
            <div className="p-8 border-l border-gray-100">
              <div className="text-5xl font-semibold tracking-tightest mb-2">0ms</div>
              <div className="text-gray-500 text-sm uppercase tracking-widest font-mono">Cold Start Latency</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-vercel-black text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="geist-section-heading mb-8 text-white">Ready to automate your future?</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-white text-vercel-black hover:bg-gray-100 w-full sm:w-auto">
              Start Free Trial
            </Button>
            <Button variant="ghost" size="lg" className="text-white hover:bg-white/10 w-full sm:w-auto">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
