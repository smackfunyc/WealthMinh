import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Brain, 
  CheckSquare, 
  MessageSquare, 
  Calendar,
  Settings,
  CreditCard,
  Shield
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Clients', href: '/clients', icon: Users },
  { name: 'AI Insights', href: '/insights', icon: Brain },
  { name: 'Tasks', href: '/tasks', icon: CheckSquare },
  { name: 'Messages', href: '/messages', icon: MessageSquare },
  { name: 'Calendar', href: '/calendar', icon: Calendar },
  { name: 'Compliance', href: '/compliance', icon: Shield },
  { name: 'Billing', href: '/billing', icon: CreditCard },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export default function Sidebar() {
  return (
    <div className="w-64 bg-slate-900 min-h-screen flex flex-col">
      <div className="p-6">
        <div className="flex items-center space-x-2">
          <Brain className="h-8 w-8 text-blue-400" />
          <span className="text-xl font-bold text-white">WealthMinh AI</span>
        </div>
      </div>
      
      <nav className="flex-1 px-4 space-y-2">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) =>
              `flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                isActive
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`
            }
          >
            <item.icon className="mr-3 h-5 w-5" />
            {item.name}
          </NavLink>
        ))}
      </nav>
      
      <div className="p-4 border-t border-slate-700">
        <div className="flex items-center space-x-3">
          <img
            className="h-8 w-8 rounded-full object-cover"
            src="/panda5a.png"
            alt="Minh WealthAI"
          />
          <div>
            <p className="text-sm font-medium text-white">Minh WealthAI</p>
            <p className="text-xs text-slate-400">Financial Advisor</p>
          </div>
        </div>
      </div>
    </div>
  );
}