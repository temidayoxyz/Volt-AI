import React from 'react';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';

export const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="max-w-3xl mb-20">
        <Badge variant="blue" className="mb-4">About Volt</Badge>
        <h1 className="geist-display mb-6">Building the future of <br />autonomous engineering.</h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Volt was founded in 2024 with a simple mission: to eliminate the operational burden of modern software development. We believe that engineers should spend their time solving problems, not managing servers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight-vercel">Our Story</h2>
          <p className="text-gray-600 leading-relaxed">
            What started as a research project into neural code optimization has grown into a comprehensive platform used by thousands of engineering teams worldwide. Our team consists of researchers, engineers, and designers who are passionate about the intersection of AI and infrastructure.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We are headquartered in San Francisco, with a distributed team across 12 countries.
          </p>
        </div>
        <Card className="aspect-square bg-gray-50 flex items-center justify-center p-12">
          <div className="text-center">
            <div className="text-6xl font-bold mb-2 tracking-tightest">2024</div>
            <div className="text-gray-400 font-mono text-xs uppercase tracking-widest">Founded</div>
          </div>
        </Card>
      </div>

      <section className="mb-32">
        <h2 className="text-3xl font-semibold mb-12 tracking-tight-vercel">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Precision', desc: 'We value mathematical correctness and deterministic outcomes in everything we build.' },
            { title: 'Invisibility', desc: 'The best tools are the ones that disappear into the background.' },
            { title: 'Performance', desc: 'Speed is a feature. We optimize for every millisecond.' }
          ].map((value, i) => (
            <Card key={i} className="p-8">
              <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{value.desc}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};
