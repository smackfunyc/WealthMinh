import React, { useState, useEffect } from 'react';
import { CreditCard, Check, Star, Users, Brain, Shield, CheckCircle, XCircle } from 'lucide-react';
import StripeCheckout from '../components/Billing/StripeCheckout';

interface PricingPlan {
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
  stripeLink?: string;
  priceId?: string;
}

const plans: PricingPlan[] = [
  {
    name: 'Essential',
    price: 99,
    period: 'month',
    description: 'Perfect for individual advisors starting their practice',
    features: [
      'Up to 25 clients',
      'Basic portfolio analytics',
      'Task management',
      'Email support',
      'Standard compliance tools'
    ],
    cta: 'Start Essential',
    stripeLink: 'https://buy.stripe.com/8x26oGeF310E1Rie9Kdwc01',
    priceId: 'price_essential_monthly'
  },
  {
    name: 'Professional',
    price: 249,
    period: 'month',
    description: 'Advanced AI-powered portfolio analysis and proactive recommendations for your clients',
    features: [
      'Up to 100 clients',
      'Advanced AI insights & recommendations',
      'Intelligent rebalancing suggestions',
      'Tax-loss harvesting opportunities',
      'Automated portfolio analysis',
      'Custom messaging templates',
      'Priority support',
      'Advanced compliance suite',
      'Performance reporting'
    ],
    popular: true,
    cta: 'Start Professional',
    stripeLink: 'https://buy.stripe.com/8x26oGeF310E1Rie9Kdwc01',
    priceId: 'price_professional_monthly'
  },
  {
    name: 'Enterprise',
    price: 499,
    period: 'month',
    description: 'Complete AI-powered solution for large advisory firms with full recommendation engine',
    features: [
      'Unlimited clients',
      'Full AI recommendation engine',
      'Advanced portfolio optimization',
      'Predictive client needs analysis',
      'White-label capabilities',
      'API integrations',
      'Dedicated account manager',
      'Custom compliance workflows',
      'Advanced analytics & reporting',
      'Multi-advisor support'
    ],
    cta: 'Contact Sales',
    stripeLink: 'https://buy.stripe.com/8x26oGeF310E1Rie9Kdwc01',
    priceId: 'price_enterprise_monthly'
  }
];

export default function Billing() {
  const [currentPlan] = useState('Professional');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [paymentStatus, setPaymentStatus] = useState<'success' | 'canceled' | null>(null);

  useEffect(() => {
    // Check for payment status in URL params
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success')) {
      setPaymentStatus('success');
    } else if (urlParams.get('canceled')) {
      setPaymentStatus('canceled');
    }
  }, []);

  const handleUpgrade = (planName: string, stripeLink?: string) => {
    if (stripeLink) {
      window.open(stripeLink, '_blank');
    } else {
      console.log(`Contacting sales for ${planName} plan`);
      alert('Our sales team will contact you within 24 hours to discuss Enterprise features');
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Billing & Subscription</h1>
        <p className="text-slate-600 mt-1">Manage your subscription and upgrade your plan</p>
      </div>

      {/* Payment Status Messages */}
      {paymentStatus === 'success' && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-6">
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5 text-emerald-600" />
            <h3 className="text-emerald-800 font-medium">Payment Successful!</h3>
          </div>
          <p className="text-emerald-700 mt-1">
            Your subscription has been activated. Welcome to WealthMinh AI!
          </p>
        </div>
      )}

      {paymentStatus === 'canceled' && (
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
          <div className="flex items-center space-x-2">
            <XCircle className="h-5 w-5 text-amber-600" />
            <h3 className="text-amber-800 font-medium">Payment Canceled</h3>
          </div>
          <p className="text-amber-700 mt-1">
            Your payment was canceled. You can try again anytime.
          </p>
        </div>
      )}

      {/* Current Plan Status */}
      <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-xl p-6 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Current Plan: {currentPlan}</h3>
            <p className="text-slate-600 mt-1">Your subscription renews on January 15, 2025</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-slate-900">$249/month</div>
            <p className="text-sm text-slate-600">Next billing: $249 on Jan 15</p>
          </div>
        </div>
      </div>

      {/* Billing Cycle Toggle */}
      <div className="flex justify-center mb-8">
        <div className="bg-slate-100 rounded-lg p-1 flex">
          <button
            onClick={() => setBillingCycle('monthly')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              billingCycle === 'monthly'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle('annual')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              billingCycle === 'annual'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Annual <span className="text-emerald-600 font-semibold">(Save 20%)</span>
          </button>
        </div>
      </div>

      {/* Pricing Plans */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {plans.map((plan) => {
          const price = billingCycle === 'annual' ? Math.floor(plan.price * 0.8) : plan.price;
          const period = billingCycle === 'annual' ? 'year' : plan.period;
          
          return (
            <div
              key={plan.name}
              className={`relative bg-white rounded-xl shadow-sm border-2 transition-all hover:shadow-lg ${
                plan.popular 
                  ? 'border-blue-500 ring-2 ring-blue-500 ring-opacity-20' 
                  : 'border-slate-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                    <Star className="h-3 w-3" />
                    <span>Most Popular</span>
                  </span>
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900">{plan.name}</h3>
                <p className="text-slate-600 mt-2">{plan.description}</p>
                
                <div className="mt-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-slate-900">${price}</span>
                    <span className="text-slate-600 ml-1">/{period}</span>
                  </div>
                  {billingCycle === 'annual' && (
                    <p className="text-sm text-emerald-600 mt-1">
                      Save ${(plan.price * 12) - (price * 12)} per year
                    </p>
                  )}
                </div>
                
                {plan.name === currentPlan ? (
                  <button
                    className="w-full mt-6 px-4 py-3 rounded-lg font-medium bg-slate-100 text-slate-600 cursor-not-allowed"
                    disabled
                  >
                    Current Plan
                  </button>
                ) : plan.stripeLink ? (
                  <StripeCheckout
                    planName={plan.name}
                    amount={price}
                    priceId={plan.priceId}
                    className={`w-full mt-6 px-4 py-3 rounded-lg font-medium transition-colors ${
                      plan.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-slate-900 text-white hover:bg-slate-800'
                    }`}
                  >
                    {plan.cta}
                  </StripeCheckout>
                ) : (
                  <button
                    onClick={() => handleUpgrade(plan.name, plan.stripeLink)}
                    className="w-full mt-6 px-4 py-3 rounded-lg font-medium bg-slate-900 text-white hover:bg-slate-800 transition-colors"
                  >
                    {plan.cta}
                  </button>
                )}
                
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <Check className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                      <span className="text-sm text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {/* Add-on Services */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">Add-on Services</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-slate-200 rounded-lg p-4">
            <div className="flex items-center space-x-3 mb-3">
              <Brain className="h-8 w-8 text-blue-600" />
              <div>
                <h4 className="font-medium text-slate-900">AI Consultation</h4>
                <p className="text-sm text-slate-600">$150/hour</p>
              </div>
            </div>
            <p className="text-sm text-slate-600 mb-4">
              One-on-one AI strategy sessions to optimize your client portfolio management and recommendations
            </p>
            <StripeCheckout
              planName="AI Consultation"
              amount={150}
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Book Session
            </StripeCheckout>
          </div>
          
          <div className="border border-slate-200 rounded-lg p-4">
            <div className="flex items-center space-x-3 mb-3">
              <Users className="h-8 w-8 text-emerald-600" />
              <div>
                <h4 className="font-medium text-slate-900">Team Training</h4>
                <p className="text-sm text-slate-600">$500/session</p>
              </div>
            </div>
            <p className="text-sm text-slate-600 mb-4">
              Comprehensive AI-powered portfolio analysis training for your entire advisory team
            </p>
            <StripeCheckout
              planName="Team Training"
              amount={500}
              className="w-full bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors"
            >
              Schedule Training
            </StripeCheckout>
          </div>
          
          <div className="border border-slate-200 rounded-lg p-4">
            <div className="flex items-center space-x-3 mb-3">
              <Shield className="h-8 w-8 text-purple-600" />
              <div>
                <h4 className="font-medium text-slate-900">Compliance Audit</h4>
                <p className="text-sm text-slate-600">$1,200/audit</p>
              </div>
            </div>
            <p className="text-sm text-slate-600 mb-4">
              Professional compliance review with AI-powered recommendations and risk assessment
            </p>
            <StripeCheckout
              planName="Compliance Audit"
              amount={1200}
              className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors"
            >
              Request Audit
            </StripeCheckout>
          </div>
        </div>
      </div>

      {/* Payment Method */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mt-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">Payment Method</h3>
        
        <div className="flex items-center space-x-4 p-4 border border-slate-200 rounded-lg">
          <CreditCard className="h-8 w-8 text-slate-400" />
          <div className="flex-1">
            <p className="font-medium text-slate-900">•••• •••• •••• 4242</p>
            <p className="text-sm text-slate-600">Expires 12/27</p>
          </div>
          <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
            Update
          </button>
        </div>
      </div>
    </div>
  );
}