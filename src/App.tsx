import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';
import Dashboard from './pages/Dashboard';
import Clients from './pages/Clients';
import Billing from './pages/Billing';
import PlaceholderPage from './pages/PlaceholderPage';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-slate-50">
        <Sidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/billing" element={<Billing />} />
              <Route 
                path="/insights" 
                element={
                  <PlaceholderPage 
                    title="AI Insights" 
                    description="Advanced AI-powered portfolio analysis and proactive recommendations for your clients. This feature provides intelligent suggestions for rebalancing, tax-loss harvesting, and identifying opportunities to optimize client portfolios and maximize returns." 
                  />
                } 
              />
              <Route 
                path="/tasks" 
                element={
                  <PlaceholderPage 
                    title="Task Management" 
                    description="Comprehensive task and workflow management system. Track client meetings, portfolio reviews, compliance tasks, and follow-ups with priority-based organization and AI-powered task prioritization." 
                  />
                } 
              />
              <Route 
                path="/messages" 
                element={
                  <PlaceholderPage 
                    title="Client Communications" 
                    description="Automated messaging hub with AI-generated templates for email, SMS, and in-app communications. Schedule personalized messages based on portfolio events, market changes, and client milestones." 
                  />
                } 
              />
              <Route 
                path="/calendar" 
                element={
                  <PlaceholderPage 
                    title="Meeting Scheduler" 
                    description="Integrated calendar system with intelligent client meeting management. Seamlessly sync with Google Calendar, Outlook, and other scheduling platforms for effortless appointment coordination with AI-suggested optimal meeting times." 
                  />
                } 
              />
              <Route 
                path="/compliance" 
                element={
                  <PlaceholderPage 
                    title="Compliance Suite" 
                    description="Comprehensive compliance management and document sharing with AI-powered risk assessment. Secure client document storage, regulatory reporting, and audit trail functionality with industry-standard encryption and automated compliance monitoring." 
                  />
                } 
              />
              <Route 
                path="/settings" 
                element={
                  <PlaceholderPage 
                    title="Platform Settings" 
                    description="Customize your WealthMinh AI experience. Configure AI recommendation preferences, notifications, integrations, user preferences, and account settings to match your advisory practice needs and optimize client service delivery." 
                  />
                } 
              />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;