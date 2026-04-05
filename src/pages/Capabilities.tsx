import React from 'react';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { Code2, Zap, Shield, BarChart3, Globe, Cpu, Terminal, Database, Cloud } from 'lucide-react';

export const Capabilities = () => {
  const features = [
    {
      title: 'Code Synthesis',
      description: 'Volt generates production-ready code based on high-level architectural requirements.',
      icon: Code2,
      color: 'blue'
    },
    {
      title: 'Performance Tuning',
      description: 'Automated profiling and optimization of runtime environments and database queries.',
      icon: Zap,
      color: 'pink'
    },
    {
      title: 'Security Hardening',
      description: 'Proactive threat modeling and automated firewall configuration.',
      icon: Shield,
      color: 'red'
    },
    {
      title: 'Resource Allocation',
      description: 'Dynamic scaling of compute resources based on real-time traffic patterns.',
      icon: Database,
      color: 'blue'
    },
    {
      title: 'Global Distribution',
      description: 'Zero-config edge deployment across 200+ global data centers.',
      icon: Globe,
      color: 'pink'
    },
    {
      title: 'Infrastructure as Code',
      description: 'Volt manages your entire cloud footprint using declarative configuration.',
      icon: Cloud,
      color: 'red'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="mb-20">
        <Badge variant="blue" className="mb-4">Capabilities</Badge>
        <h1 className="geist-display mb-6">Everything Volt can do.</h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          A comprehensive suite of automation tools designed to remove friction from the development lifecycle.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, i) => (
          <Card key={i} className="p-8 flex flex-col h-full">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-6 bg-gray-50 border border-gray-100`}>
              <feature.icon className="w-5 h-5 text-vercel-black" />
            </div>
            <h3 className="geist-card-title mb-4">{feature.title}</h3>
            <p className="text-gray-600 text-sm flex-grow">{feature.description}</p>
          </Card>
        ))}
      </div>

      <div className="mt-32 p-12 bg-gray-50 rounded-2xl border border-gray-100">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="text-3xl font-semibold mb-6 tracking-tight-vercel">Advanced Neural Refactoring</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our proprietary neural engine doesn't just suggest changes; it understands the semantic intent of your code. It can refactor entire microservices to use more efficient patterns, reducing memory footprint by up to 60%.
            </p>
            <div className="flex gap-4">
              <Badge variant="gray">Python</Badge>
              <Badge variant="gray">Go</Badge>
              <Badge variant="gray">Rust</Badge>
              <Badge variant="gray">TypeScript</Badge>
            </div>
          </div>
          <div className="flex-1 w-full">
            <Card className="bg-vercel-black p-6 font-mono text-xs text-gray-400 overflow-hidden">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="space-y-1">
                <p><span className="text-develop-blue">$</span> volt analyze --path ./src</p>
                <p className="text-white">Analyzing 142 files...</p>
                <p className="text-preview-pink">Found 12 optimization targets.</p>
                <p className="text-ship-red">Refactoring memory allocation in core.rs...</p>
                <p className="text-green-400">Success: Reduced heap usage by 24%.</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
