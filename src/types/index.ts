export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  portfolio: Portfolio;
  riskProfile: 'Conservative' | 'Moderate' | 'Aggressive';
  nextMeeting?: string;
  lastContact: string;
  avatar: string;
  totalAssets: number;
  lifeEvents: LifeEvent[];
}

export interface Portfolio {
  totalValue: number;
  allocation: {
    stocks: number;
    bonds: number;
    cash: number;
    alternatives: number;
  };
  performance: {
    ytd: number;
    oneYear: number;
    threeYear: number;
  };
  accounts: Account[];
}

export interface Account {
  id: string;
  type: string;
  value: number;
  institution: string;
}

export interface LifeEvent {
  id: string;
  type: 'retirement' | 'education' | 'home' | 'family' | 'business';
  description: string;
  targetDate: string;
  targetAmount: number;
  progress: number;
}

export interface AIInsight {
  id: string;
  clientId: string;
  type: 'rebalance' | 'tax-loss' | 'milestone' | 'risk' | 'opportunity';
  priority: 'high' | 'medium' | 'low';
  title: string;
  description: string;
  action: string;
  impact: string;
  created: string;
}

export interface Task {
  id: string;
  clientId: string;
  type: 'meeting' | 'review' | 'follow-up' | 'compliance';
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  dueDate: string;
  status: 'pending' | 'in-progress' | 'completed';
}

export interface Message {
  id: string;
  clientId: string;
  type: 'email' | 'sms' | 'in-app';
  subject: string;
  content: string;
  status: 'draft' | 'sent' | 'scheduled';
  scheduledFor?: string;
}