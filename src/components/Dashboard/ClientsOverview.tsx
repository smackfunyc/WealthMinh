import React from 'react';
import { MoreVertical, Calendar, MessageSquare } from 'lucide-react';
import { Client } from '../../types';

interface ClientsOverviewProps {
  clients: Client[];
}

export default function ClientsOverview({ clients }: ClientsOverviewProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200">
      <div className="p-6 border-b border-slate-200">
        <h3 className="text-lg font-semibold text-slate-900">Recent Client Activity</h3>
        <p className="text-sm text-slate-600 mt-1">Your most active clients and upcoming meetings</p>
      </div>
      
      <div className="divide-y divide-slate-200">
        {clients.slice(0, 5).map((client) => (
          <div key={client.id} className="p-6 hover:bg-slate-50 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src={client.avatar}
                  alt={client.name}
                />
                <div>
                  <h4 className="text-sm font-medium text-slate-900">{client.name}</h4>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className="text-sm text-slate-600">
                      {formatCurrency(client.totalAssets)}
                    </span>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      client.riskProfile === 'Conservative' ? 'bg-blue-100 text-blue-800' :
                      client.riskProfile === 'Moderate' ? 'bg-amber-100 text-amber-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {client.riskProfile}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                {client.nextMeeting && (
                  <div className="flex items-center space-x-1 text-xs text-slate-500">
                    <Calendar className="h-3 w-3" />
                    <span>{formatDate(client.nextMeeting)}</span>
                  </div>
                )}
                <button className="p-1 text-slate-400 hover:text-slate-600 transition-colors">
                  <MessageSquare className="h-4 w-4" />
                </button>
                <button className="p-1 text-slate-400 hover:text-slate-600 transition-colors">
                  <MoreVertical className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}