import { Client, AIInsight, Task, Message } from '../types';

export const mockClients: Client[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@email.com',
    phone: '+1 (555) 123-4567',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    totalAssets: 2450000,
    riskProfile: 'Moderate',
    nextMeeting: '2025-01-15T14:00:00Z',
    lastContact: '2025-01-08T10:30:00Z',
    portfolio: {
      totalValue: 2450000,
      allocation: { stocks: 65, bonds: 25, cash: 5, alternatives: 5 },
      performance: { ytd: 8.5, oneYear: 12.3, threeYear: 9.8 },
      accounts: [
        { id: '1', type: '401(k)', value: 850000, institution: 'Fidelity' },
        { id: '2', type: 'IRA', value: 750000, institution: 'Vanguard' },
        { id: '3', type: 'Taxable', value: 850000, institution: 'Charles Schwab' }
      ]
    },
    lifeEvents: [
      {
        id: '1',
        type: 'retirement',
        description: 'Retirement at 65',
        targetDate: '2040-06-01',
        targetAmount: 3500000,
        progress: 70
      }
    ]
  },
  {
    id: '2',
    name: 'Michael Chen',
    email: 'michael.chen@email.com',
    phone: '+1 (555) 234-5678',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    totalAssets: 1875000,
    riskProfile: 'Aggressive',
    nextMeeting: '2025-01-12T16:00:00Z',
    lastContact: '2025-01-05T15:15:00Z',
    portfolio: {
      totalValue: 1875000,
      allocation: { stocks: 80, bonds: 15, cash: 2, alternatives: 3 },
      performance: { ytd: 11.2, oneYear: 15.7, threeYear: 11.4 },
      accounts: [
        { id: '4', type: 'Roth IRA', value: 625000, institution: 'TD Ameritrade' },
        { id: '5', type: 'Taxable', value: 1250000, institution: 'Interactive Brokers' }
      ]
    },
    lifeEvents: [
      {
        id: '2',
        type: 'education',
        description: "Children's College Fund",
        targetDate: '2035-08-01',
        targetAmount: 400000,
        progress: 45
      }
    ]
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    email: 'emily.rodriguez@email.com',
    phone: '+1 (555) 345-6789',
    avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    totalAssets: 3200000,
    riskProfile: 'Conservative',
    nextMeeting: '2025-01-20T11:00:00Z',
    lastContact: '2025-01-07T09:45:00Z',
    portfolio: {
      totalValue: 3200000,
      allocation: { stocks: 45, bonds: 40, cash: 10, alternatives: 5 },
      performance: { ytd: 6.8, oneYear: 8.9, threeYear: 7.2 },
      accounts: [
        { id: '6', type: 'Trust', value: 2000000, institution: 'Morgan Stanley' },
        { id: '7', type: 'IRA', value: 800000, institution: 'Fidelity' },
        { id: '8', type: 'Taxable', value: 400000, institution: 'Charles Schwab' }
      ]
    },
    lifeEvents: [
      {
        id: '3',
        type: 'family',
        description: 'Estate Planning',
        targetDate: '2025-12-31',
        targetAmount: 500000,
        progress: 85
      }
    ]
  }
];

export const mockInsights: AIInsight[] = [
  {
    id: '1',
    clientId: '1',
    type: 'rebalance',
    priority: 'high',
    title: 'Portfolio Drift Detected',
    description: 'Sarah\'s equity allocation has drifted 7% above target due to recent market gains.',
    action: 'Recommend rebalancing to restore 65% equity target allocation',
    impact: 'Reduce risk exposure by $120,000 while maintaining growth potential',
    created: '2025-01-09T08:00:00Z'
  },
  {
    id: '2',
    clientId: '2',
    type: 'tax-loss',
    priority: 'medium',
    title: 'Tax-Loss Harvesting Opportunity',
    description: 'Technology sector holdings down 15% present tax-loss harvesting opportunity.',
    action: 'Harvest $25,000 in losses before year-end',
    impact: 'Save approximately $6,250 in taxes (25% bracket)',
    created: '2025-01-08T14:30:00Z'
  },
  {
    id: '3',
    clientId: '3',
    type: 'milestone',
    priority: 'low',
    title: 'Estate Planning Milestone',
    description: 'Emily is approaching her estate planning target completion.',
    action: 'Schedule final review with estate attorney',
    impact: 'Complete comprehensive estate protection strategy',
    created: '2025-01-07T11:15:00Z'
  }
];

export const mockTasks: Task[] = [
  {
    id: '1',
    clientId: '1',
    type: 'meeting',
    title: 'Quarterly Portfolio Review',
    description: 'Discuss rebalancing strategy and performance review',
    priority: 'high',
    dueDate: '2025-01-15T14:00:00Z',
    status: 'pending'
  },
  {
    id: '2',
    clientId: '2',
    type: 'follow-up',
    title: 'Tax-Loss Harvesting Implementation',
    description: 'Execute recommended tax-loss harvesting strategy',
    priority: 'medium',
    dueDate: '2025-01-12T17:00:00Z',
    status: 'in-progress'
  },
  {
    id: '3',
    clientId: '3',
    type: 'compliance',
    title: 'Annual Suitability Review',
    description: 'Complete annual investment suitability documentation',
    priority: 'medium',
    dueDate: '2025-01-25T23:59:00Z',
    status: 'pending'
  }
];

export const mockMessages: Message[] = [
  {
    id: '1',
    clientId: '1',
    type: 'email',
    subject: 'Portfolio Rebalancing Recommendation',
    content: 'Hi Sarah, Based on our AI analysis, your portfolio has drifted above target allocation...',
    status: 'draft'
  },
  {
    id: '2',
    clientId: '2',
    type: 'sms',
    subject: 'Meeting Reminder',
    content: 'Hi Michael, this is a reminder about our meeting tomorrow at 4 PM to discuss your portfolio.',
    status: 'scheduled',
    scheduledFor: '2025-01-11T16:00:00Z'
  }
];