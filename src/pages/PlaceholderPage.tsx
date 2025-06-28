import React from 'react';
import { Construction } from 'lucide-react';

interface PlaceholderPageProps {
  title: string;
  description: string;
}

export default function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <div className="p-6">
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <div className="bg-blue-50 rounded-full p-6 mb-6">
          <Construction className="h-12 w-12 text-blue-600" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900 mb-2">{title}</h1>
        <p className="text-slate-600 max-w-md">{description}</p>
        <div className="mt-8 p-4 bg-slate-50 rounded-lg border border-slate-200">
          <p className="text-sm text-slate-600">
            This feature is part of our comprehensive wealth management platform. 
            The full implementation would include advanced functionality and integrations.
          </p>
        </div>
      </div>
    </div>
  );
}