import React from 'react';

export const Terms = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-semibold mb-8 tracking-tight-vercel">Terms of Service</h1>
      <div className="prose prose-vercel max-w-none text-gray-600 space-y-6">
        <p>Last updated: April 5, 2026</p>
        <p>
          By using Volt AI, you agree to these terms. Please read them carefully.
        </p>
        
        <h2 className="text-2xl font-semibold text-vercel-black mt-8">1. Use of Service</h2>
        <p>
          You must follow any policies made available to you within the Service. You may use our Service only as permitted by law.
        </p>

        <h2 className="text-2xl font-semibold text-vercel-black mt-8">2. Your Volt Account</h2>
        <p>
          You may need a Volt Account in order to use some of our Services. You are responsible for the activity that happens on or through your Volt Account.
        </p>

        <h2 className="text-2xl font-semibold text-vercel-black mt-8">3. Liability</h2>
        <p>
          To the extent permitted by law, Volt AI will not be responsible for lost profits, revenues, or data, financial losses or indirect, special, consequential, exemplary, or punitive damages.
        </p>

        <h2 className="text-2xl font-semibold text-vercel-black mt-8">4. Termination</h2>
        <p>
          We may suspend or stop providing our Services to you if you do not comply with our terms or policies or if we are investigating suspected misconduct.
        </p>
      </div>
    </div>
  );
};
