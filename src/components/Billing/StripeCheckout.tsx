import React, { useState } from 'react';
import { CreditCard, Loader2 } from 'lucide-react';
import { createCheckoutSession } from '../../services/stripe';

interface StripeCheckoutProps {
  planName: string;
  amount: number;
  priceId?: string;
  className?: string;
  children: React.ReactNode;
}

export default function StripeCheckout({ 
  planName, 
  amount, 
  priceId, 
  className = '', 
  children 
}: StripeCheckoutProps) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    try {
      setLoading(true);
      await createCheckoutSession(planName, amount);
    } catch (error) {
      console.error('Checkout error:', error);
      alert('There was an error processing your request. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className={`flex items-center justify-center space-x-2 ${className}`}
    >
      {loading ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          <span>Processing...</span>
        </>
      ) : (
        <>
          <CreditCard className="h-4 w-4" />
          {children}
        </>
      )}
    </button>
  );
}