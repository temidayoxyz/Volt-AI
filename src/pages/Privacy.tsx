import React from 'react';

export const Privacy = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-semibold mb-8 tracking-tight-vercel">Privacy Policy</h1>
      <div className="prose prose-vercel max-w-none text-gray-600 space-y-6">
        <p>Last updated: April 5, 2026</p>
        <p>
          At Volt AI, we take your privacy seriously. This policy describes how we collect, use, and protect your personal information and the data you provide when using our services.
        </p>
        
        <h2 className="text-2xl font-semibold text-vercel-black mt-8">1. Data Collection</h2>
        <p>
          We collect information you provide directly to us, such as when you create an account, connect your infrastructure, or contact support. This may include your name, email address, and technical metadata about your systems.
        </p>

        <h2 className="text-2xl font-semibold text-vercel-black mt-8">2. Use of Data</h2>
        <p>
          We use the data we collect to provide, maintain, and improve our services, to develop new features, and to protect Volt AI and our users.
        </p>

        <h2 className="text-2xl font-semibold text-vercel-black mt-8">3. Data Security</h2>
        <p>
          We implement industry-standard security measures to protect your data. However, no method of transmission over the internet is 100% secure.
        </p>

        <h2 className="text-2xl font-semibold text-vercel-black mt-8">4. Your Rights</h2>
        <p>
          You have the right to access, correct, or delete your personal information. You can manage these settings through your account dashboard.
        </p>
      </div>
    </div>
  );
};
