import React from 'react';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';

export const Philosophy = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="max-w-3xl">
        <Badge variant="red" className="mb-4">Philosophy</Badge>
        <h1 className="geist-display mb-8">Invisible Infrastructure.</h1>
        <p className="text-2xl text-gray-600 mb-12 leading-relaxed font-light">
          We believe the best infrastructure is the one you never have to think about.
        </p>
      </div>

      <div className="space-y-32 mt-20">
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-6 tracking-tight-vercel">Engineering as Art</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                At Volt, we treat every line of code as a masterpiece. Our agent is trained on millions of high-performance repositories to understand the nuance of elegant engineering.
              </p>
              <p className="text-gray-600 leading-relaxed">
                It's not just about making things work; it's about making them work beautifully, efficiently, and sustainably.
              </p>
            </div>
            <Card className="aspect-video bg-gray-50 flex items-center justify-center p-12">
               <div className="w-full h-full border border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400 font-mono text-sm">Visualizing Neural Patterns</span>
               </div>
            </Card>
          </div>
        </section>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <Card className="order-2 md:order-1 aspect-video bg-vercel-black flex items-center justify-center p-12">
               <div className="text-center">
                  <div className="text-6xl font-bold text-white mb-2 tracking-tightest">0</div>
                  <div className="text-gray-500 font-mono text-xs uppercase tracking-widest">Manual Interventions</div>
               </div>
            </Card>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-semibold mb-6 tracking-tight-vercel">The End of Ops</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                The traditional "Ops" role is evolving. Volt handles the repetitive, error-prone tasks of monitoring, scaling, and patching, allowing engineers to focus on what they do best: building products.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We are moving towards a world where infrastructure is purely declarative and self-healing.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-40 border-t border-gray-100 pt-20 text-center">
        <h2 className="text-4xl font-semibold mb-8 tracking-tight-vercel">Join the movement.</h2>
        <p className="text-gray-500 mb-12 max-w-xl mx-auto">
          Volt is more than a tool; it's a new way of thinking about software development.
        </p>
      </div>
    </div>
  );
};
