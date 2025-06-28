import React from 'react';
import { Brain, AlertTriangle, TrendingUp, Calendar } from 'lucide-react';
import { AIInsight } from '../../types';

interface AIInsightsWidgetProps {
  insights: AIInsight[];
}

const iconMap = {
  rebalance: TrendingUp,
  'tax-loss': AlertTriangle,
  milestone: Calendar,
  risk: AlertTriangle,
  opportunity: TrendingUp,
};

const priorityColors = {
  high: 'bg-red-50 border-red-200 text-red-800',
  medium: 'bg-amber-50 border-amber-200 text-amber-800',
  low: 'bg-blue-50 border-blue-200 text-blue-800',
};

export default function AIInsightsWidget({ insights }: AIInsightsWidgetProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200">
      <div className="p-6 border-b border-slate-200">
        <div className="flex items-center space-x-2">
          <Brain className="h-5 w-5 text-blue-600" />
          <h3 className="text-lg font-semibold text-slate-900">AI Insights</h3>
        </div>
        <p className="text-sm text-slate-600 mt-1">Proactive recommendations for your clients</p>
      </div>
      
      <div className="divide-y divide-slate-200">
        {insights.slice(0, 3).map((insight) => {
          const Icon = iconMap[insight.type];
          return (
            <div key={insight.id} className="p-6 hover:bg-slate-50 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Icon className="h-4 w-4 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-medium text-slate-900">{insight.title}</h4>
                    <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium border ${priorityColors[insight.priority]}`}>
                      {insight.priority}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 mb-2">{insight.description}</p>
                  <div className="bg-slate-50 rounded-lg p-3">
                    <p className="text-xs text-slate-700 font-medium mb-1">Recommended Action:</p>
                    <p className="text-xs text-slate-600">{insight.action}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="p-4 border-t border-slate-200">
        <button className="w-full text-center text-sm text-blue-600 hover:text-blue-700 font-medium">
          View All Insights
        </button>
      </div>
    </div>
  );
}