import React from 'react';
import { Link, useLocation, Outlet, Routes, Route, Navigate } from 'react-router-dom';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { cn } from '../lib/utils';

const Introduction = () => (
  <div className="prose prose-vercel max-w-none">
    <h1 className="text-4xl font-semibold mb-8 tracking-tight-vercel">Introduction to Volt</h1>
    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
      Volt is a high-performance AI agent that integrates directly into your CI/CD pipeline to provide autonomous optimization and scaling.
    </p>
    <h2 className="text-2xl font-semibold mt-12 mb-4 tracking-tight-vercel">Core Concepts</h2>
    <p className="text-gray-600 mb-6">
      To understand how Volt works, you need to be familiar with its three primary modes of operation:
    </p>
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="font-semibold mb-2">Passive Observation</h3>
        <p className="text-sm text-gray-500">Volt monitors your infrastructure without making changes, providing detailed reports on potential optimizations.</p>
      </Card>
      <Card className="p-6">
        <h3 className="font-semibold mb-2">Assisted Optimization</h3>
        <p className="text-sm text-gray-500">Volt suggests changes via Pull Requests, which your team can review and merge manually.</p>
      </Card>
      <Card className="p-6">
        <h3 className="font-semibold mb-2">Autonomous Mode</h3>
        <p className="text-sm text-gray-500">Volt makes real-time changes to your infrastructure and code to maintain peak performance and security.</p>
      </Card>
    </div>
  </div>
);

const Quickstart = () => (
  <div className="prose prose-vercel max-w-none">
    <h1 className="text-4xl font-semibold mb-8 tracking-tight-vercel">Quickstart</h1>
    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
      Get up and running with Volt in less than 5 minutes.
    </p>
    <h2 className="text-2xl font-semibold mt-12 mb-4 tracking-tight-vercel">1. Initialize Volt</h2>
    <p className="text-gray-600 mb-6">Run the following command in your project root:</p>
    <Card className="bg-vercel-black p-6 font-mono text-sm text-gray-300 mb-8">
      <p><span className="text-develop-blue">npx</span> volt-ai init</p>
    </Card>
    <h2 className="text-2xl font-semibold mt-12 mb-4 tracking-tight-vercel">2. Configure your Agent</h2>
    <p className="text-gray-600 mb-6">Update the generated <code className="bg-gray-100 px-1 rounded">volt.config.json</code> with your provider details.</p>
    <h2 className="text-2xl font-semibold mt-12 mb-4 tracking-tight-vercel">3. Start Optimizing</h2>
    <p className="text-gray-600 mb-6">Run the analyze command to see your first set of recommendations:</p>
    <Card className="bg-vercel-black p-6 font-mono text-sm text-gray-300">
      <p><span className="text-develop-blue">npx</span> volt-ai analyze</p>
    </Card>
  </div>
);

const Installation = () => (
  <div className="prose prose-vercel max-w-none">
    <h1 className="text-4xl font-semibold mb-8 tracking-tight-vercel">Installation</h1>
    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
      Volt can be installed via npm, yarn, or as a standalone binary for CI environments.
    </p>
    <h2 className="text-2xl font-semibold mt-12 mb-4 tracking-tight-vercel">NPM Installation</h2>
    <Card className="bg-vercel-black p-6 font-mono text-sm text-gray-300 mb-8">
      <p><span className="text-develop-blue">npm</span> install -g @volt-ai/cli</p>
    </Card>
    <h2 className="text-2xl font-semibold mt-12 mb-4 tracking-tight-vercel">CI/CD Integration</h2>
    <p className="text-gray-600 mb-6">For GitHub Actions, use our official action:</p>
    <Card className="bg-vercel-black p-6 font-mono text-sm text-gray-300">
      <p className="text-gray-500">- name: Run Volt Optimization</p>
      <p className="ml-2 text-white">uses: volt-ai/action@v1</p>
      <p className="ml-2 text-white">with:</p>
      <p className="ml-4 text-white">api-key: <span className="text-preview-pink">{"${{ secrets.VOLT_API_KEY }}"}</span></p>
    </Card>
  </div>
);

const Authentication = () => (
  <div className="prose prose-vercel max-w-none">
    <h1 className="text-4xl font-semibold mb-8 tracking-tight-vercel">Authentication</h1>
    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
      Volt uses API keys to authenticate requests from the CLI and CI/CD environments.
    </p>
    <h2 className="text-2xl font-semibold mt-12 mb-4 tracking-tight-vercel">Creating an API Key</h2>
    <p className="text-gray-600 mb-6">
      1. Log in to the <a href="#" className="text-develop-blue underline">Volt Dashboard</a>.<br />
      2. Navigate to <strong>Settings &gt; API Keys</strong>.<br />
      3. Click <strong>Create New Key</strong>.
    </p>
    <h2 className="text-2xl font-semibold mt-12 mb-4 tracking-tight-vercel">Using the API Key</h2>
    <p className="text-gray-600 mb-6">Set the <code className="bg-gray-100 px-1 rounded">VOLT_API_KEY</code> environment variable in your terminal or CI environment:</p>
    <Card className="bg-vercel-black p-6 font-mono text-sm text-gray-300">
      <p><span className="text-develop-blue">export</span> VOLT_API_KEY=your_api_key_here</p>
    </Card>
  </div>
);

const Configuration = () => (
  <div className="prose prose-vercel max-w-none">
    <h1 className="text-4xl font-semibold mb-8 tracking-tight-vercel">Configuration</h1>
    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
      Volt is configured via a <code className="bg-gray-100 px-1 rounded">volt.config.json</code> file in your project root.
    </p>
    <h2 className="text-2xl font-semibold mt-12 mb-4 tracking-tight-vercel">Schema Overview</h2>
    <Card className="bg-vercel-black p-6 font-mono text-sm text-gray-300 mb-8">
      <pre className="text-white">{`{
  "version": "2.4",
  "mode": "autonomous",
  "optimization": {
    "memory": true,
    "cpu": true,
    "cost": true
  },
  "security": {
    "autoPatch": true,
    "vulnerabilityScan": "continuous"
  }
}`}</pre>
    </Card>
    <h2 className="text-2xl font-semibold mt-12 mb-4 tracking-tight-vercel">Properties</h2>
    <div className="space-y-6">
      <div>
        <h4 className="font-semibold">mode</h4>
        <p className="text-sm text-gray-500">Either <code className="bg-gray-100 px-1 rounded">passive</code>, <code className="bg-gray-100 px-1 rounded">assisted</code>, or <code className="bg-gray-100 px-1 rounded">autonomous</code>. Default is <code className="bg-gray-100 px-1 rounded">assisted</code>.</p>
      </div>
      <div>
        <h4 className="font-semibold">optimization</h4>
        <p className="text-sm text-gray-500">Object defining which resources Volt should optimize. Supports memory, cpu, and cost.</p>
      </div>
    </div>
  </div>
);

const CLIReference = () => (
  <div className="prose prose-vercel max-w-none">
    <h1 className="text-4xl font-semibold mb-8 tracking-tight-vercel">CLI Reference</h1>
    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
      The Volt CLI is the primary interface for interacting with the agent.
    </p>
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold mb-2">volt init</h3>
        <p className="text-gray-600 mb-4">Initializes a new Volt project and creates the configuration file.</p>
        <Card className="bg-vercel-black p-4 font-mono text-xs text-gray-400">volt init [--force]</Card>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">volt analyze</h3>
        <p className="text-gray-600 mb-4">Performs a deep scan of your infrastructure and code to find optimization targets.</p>
        <Card className="bg-vercel-black p-4 font-mono text-xs text-gray-400">volt analyze [--path &lt;dir&gt;]</Card>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">volt deploy</h3>
        <p className="text-gray-600 mb-4">Deploys the current configuration and starts the autonomous agent.</p>
        <Card className="bg-vercel-black p-4 font-mono text-xs text-gray-400">volt deploy [--env &lt;name&gt;]</Card>
      </div>
    </div>
  </div>
);

export const Docs = () => {
  const location = useLocation();
  
  const sections = [
    {
      title: 'Getting Started',
      links: [
        { name: 'Introduction', path: '/docs/intro' },
        { name: 'Quickstart', path: '/docs/quickstart' },
        { name: 'Installation', path: '/docs/installation' },
      ]
    },
    {
      title: 'Core Guides',
      links: [
        { name: 'Authentication', path: '/docs/auth' },
        { name: 'Configuration', path: '/docs/config' },
        { name: 'CLI Reference', path: '/docs/cli' },
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="flex flex-col md:flex-row gap-12">
        <aside className="w-full md:w-64 shrink-0">
          <div className="sticky top-24 space-y-8">
            {sections.map((section, i) => (
              <div key={i}>
                <h5 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-4">{section.title}</h5>
                <ul className="space-y-2 text-sm">
                  {section.links.map((link, j) => (
                    <li key={j}>
                      <Link
                        to={link.path}
                        className={cn(
                          'transition-colors hover:text-vercel-black',
                          location.pathname === link.path ? 'text-develop-blue font-medium' : 'text-gray-500'
                        )}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </aside>

        <main className="flex-1 max-w-3xl">
          <Badge variant="gray" className="mb-4">Documentation</Badge>
          <Routes>
            <Route index element={<Navigate to="intro" replace />} />
            <Route path="intro" element={<Introduction />} />
            <Route path="quickstart" element={<Quickstart />} />
            <Route path="installation" element={<Installation />} />
            <Route path="auth" element={<Authentication />} />
            <Route path="config" element={<Configuration />} />
            <Route path="cli" element={<CLIReference />} />
            <Route path="*" element={<div className="text-gray-500">Section coming soon...</div>} />
          </Routes>
        </main>
      </div>
    </div>
  );
};
