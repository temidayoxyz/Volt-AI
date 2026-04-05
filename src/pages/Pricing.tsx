import React from 'react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { Check } from 'lucide-react';

export const Pricing = () => {
  const plans = [
    {
      name: 'Hobby',
      price: '$0',
      description: 'For personal projects and experimentation.',
      features: ['1 Agent Instance', 'Basic Code Analysis', 'Community Support', '5 Deployments/mo'],
      cta: 'Start for Free',
      variant: 'secondary' as const
    },
    {
      name: 'Pro',
      price: '$49',
      description: 'For professional developers and small teams.',
      features: ['5 Agent Instances', 'Advanced Neural Refactoring', 'Priority Support', 'Unlimited Deployments', 'Custom Domain Support'],
      cta: 'Get Started',
      variant: 'primary' as const,
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations with complex needs.',
      features: ['Unlimited Agent Instances', 'Dedicated Support Engineer', 'SLA Guarantees', 'On-premise Deployment', 'SSO & Advanced Security'],
      cta: 'Contact Sales',
      variant: 'secondary' as const
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="text-center mb-20">
        <Badge variant="blue" className="mb-4">Pricing</Badge>
        <h1 className="geist-display mb-6">Predictable pricing for <br />unpredictable scale.</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Start for free, then scale as your infrastructure grows. No hidden fees.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, i) => (
          <Card key={i} className={`p-8 flex flex-col relative ${plan.popular ? 'ring-2 ring-develop-blue' : ''}`}>
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge variant="blue" className="bg-develop-blue text-white">Most Popular</Badge>
              </div>
            )}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold tracking-tightest">{plan.price}</span>
                {plan.price !== 'Custom' && <span className="text-gray-500">/mo</span>}
              </div>
              <p className="text-sm text-gray-500">{plan.description}</p>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              {plan.features.map((feature, j) => (
                <li key={j} className="flex items-center gap-3 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-develop-blue shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button variant={plan.variant} className="w-full">
              {plan.cta}
            </Button>
          </Card>
        ))}
      </div>

      <div className="mt-32 text-center">
        <h2 className="text-2xl font-semibold mb-8">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
          <div>
            <h4 className="font-medium mb-2">Can I cancel anytime?</h4>
            <p className="text-sm text-gray-500">Yes, you can cancel your subscription at any time from your dashboard. Your access will continue until the end of the billing period.</p>
          </div>
          <div>
            <h4 className="font-medium mb-2">Do you offer student discounts?</h4>
            <p className="text-sm text-gray-500">We offer a free Hobby tier that is perfect for students. For larger academic projects, please contact our support team.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
