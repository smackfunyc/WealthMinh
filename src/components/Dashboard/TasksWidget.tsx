import React from 'react';
import { CheckSquare, Clock, User, AlertCircle } from 'lucide-react';
import { Task } from '../../types';

interface TasksWidgetProps {
  tasks: Task[];
}

const priorityColors = {
  high: 'text-red-600 bg-red-50 border-red-200',
  medium: 'text-amber-600 bg-amber-50 border-amber-200',
  low: 'text-blue-600 bg-blue-50 border-blue-200',
};

const statusColors = {
  pending: 'text-slate-600 bg-slate-50',
  'in-progress': 'text-blue-600 bg-blue-50',
  completed: 'text-emerald-600 bg-emerald-50',
};

export default function TasksWidget({ tasks }: TasksWidgetProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();
    const diffTime = date.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Tomorrow';
    if (diffDays < 0) return `${Math.abs(diffDays)} days overdue`;
    return `${diffDays} days`;
  };

  const isOverdue = (dateString: string) => {
    return new Date(dateString) < new Date();
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200">
      <div className="p-6 border-b border-slate-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <CheckSquare className="h-5 w-5 text-blue-600" />
            <h3 className="text-lg font-semibold text-slate-900">Priority Tasks</h3>
          </div>
          <span className="text-sm text-slate-500">{tasks.filter(t => t.status !== 'completed').length} pending</span>
        </div>
      </div>
      
      <div className="divide-y divide-slate-200">
        {tasks.slice(0, 4).map((task) => (
          <div key={task.id} className="p-6 hover:bg-slate-50 transition-colors">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h4 className="text-sm font-medium text-slate-900">{task.title}</h4>
                  <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium border ${priorityColors[task.priority]}`}>
                    {task.priority}
                  </span>
                </div>
                <p className="text-sm text-slate-600 mb-3">{task.description}</p>
                <div className="flex items-center space-x-4 text-xs">
                  <div className="flex items-center space-x-1">
                    <User className="h-3 w-3 text-slate-400" />
                    <span className="text-slate-500">Client #{task.clientId}</span>
                  </div>
                  <div className={`flex items-center space-x-1 ${isOverdue(task.dueDate) ? 'text-red-600' : 'text-slate-500'}`}>
                    {isOverdue(task.dueDate) ? (
                      <AlertCircle className="h-3 w-3" />
                    ) : (
                      <Clock className="h-3 w-3" />
                    )}
                    <span>{formatDate(task.dueDate)}</span>
                  </div>
                </div>
              </div>
              <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium ${statusColors[task.status]}`}>
                {task.status.replace('-', ' ')}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-4 border-t border-slate-200">
        <button className="w-full text-center text-sm text-blue-600 hover:text-blue-700 font-medium">
          View All Tasks
        </button>
      </div>
    </div>
  );
}