import React from 'react';
import { DollarSign, Users, TrendingUp, Calendar } from 'lucide-react';
import MetricsCard from '../components/Dashboard/MetricsCard';
import ClientsOverview from '../components/Dashboard/ClientsOverview';
import AIInsightsWidget from '../components/Dashboard/AIInsightsWidget';
import TasksWidget from '../components/Dashboard/TasksWidget';
import PortfolioChart from '../components/Dashboard/PortfolioChart';
import { mockClients, mockInsights, mockTasks } from '../data/mockData';

export default function Dashboard() {
  const totalAUM = mockClients.reduce((sum, client) => sum + client.totalAssets, 0);
  const avgPerformance = mockClients.reduce((sum, client) => sum + client.portfolio.performance.ytd, 0) / mockClients.length;

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
        <p className="text-slate-600 mt-1">Your wealth management overview for today</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricsCard
          title="Total AUM"
          value={`$${(totalAUM / 1000000).toFixed(1)}M`}
          change={12.3}
          changeLabel="vs last quarter"
          icon={<DollarSign className="h-6 w-6" />}
          color="blue"
        />
        <MetricsCard
          title="Active Clients"
          value={mockClients.length.toString()}
          change={8.1}
          changeLabel="new this month"
          icon={<Users className="h-6 w-6" />}
          color="emerald"
        />
        <MetricsCard
          title="Avg Performance"
          value={`${avgPerformance.toFixed(1)}%`}
          change={2.4}
          changeLabel="vs benchmark"
          icon={<TrendingUp className="h-6 w-6" />}
          color="purple"
        />
        <MetricsCard
          title="Meetings This Week"
          value="7"
          change={-12.5}
          changeLabel="vs last week"
          icon={<Calendar className="h-6 w-6" />}
          color="amber"
        />
      </div>

      {/* Charts and Widgets */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PortfolioChart />
        <ClientsOverview clients={mockClients} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AIInsightsWidget insights={mockInsights} />
        <TasksWidget tasks={mockTasks} />
      </div>
    </div>
  );
}