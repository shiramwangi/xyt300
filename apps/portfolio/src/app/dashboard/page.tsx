import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card } from '@/components/ui/Card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/Tabs';
import { BarChart3, Target, Code2, Lightbulb, TrendingUp, Users } from 'lucide-react';

const metrics = [
  {
    name: 'Total Skills',
    value: '12',
    icon: Code2,
    change: '+2',
    changeType: 'positive',
  },
  {
    name: 'Goals Completed',
    value: '8',
    icon: Target,
    change: '+3',
    changeType: 'positive',
  },
  {
    name: 'Projects',
    value: '6',
    icon: BarChart3,
    change: '+1',
    changeType: 'positive',
  },
  {
    name: 'Skill Level',
    value: '85%',
    icon: TrendingUp,
    change: '+5%',
    changeType: 'positive',
  },
];

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="heading-2 text-secondary-900">Dashboard</h1>
          <p className="mt-2 text-secondary-600">
            Welcome back! Here's an overview of your progress.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <Card key={metric.name} className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-secondary-600">{metric.name}</p>
                  <p className="mt-2 text-3xl font-semibold text-secondary-900">{metric.value}</p>
                </div>
                <div className="rounded-full bg-primary-50 p-3">
                  <metric.icon className="h-6 w-6 text-primary-600" />
                </div>
              </div>
              <div className="mt-4">
                <span
                  className={`inline-flex items-center text-sm font-medium ${
                    metric.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {metric.change}
                </span>
                <span className="ml-2 text-sm text-secondary-600">from last month</span>
              </div>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="goals">Goals</TabsTrigger>
            <TabsTrigger value="suggestions">AI Suggestions</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <Card className="p-6">
              <h3 className="text-lg font-medium text-secondary-900">Recent Activity</h3>
              {/* Add activity timeline or chart here */}
            </Card>
          </TabsContent>

          <TabsContent value="skills" className="space-y-4">
            <Card className="p-6">
              <h3 className="text-lg font-medium text-secondary-900">Skill Progress</h3>
              {/* Add skills progress chart here */}
            </Card>
          </TabsContent>

          <TabsContent value="goals" className="space-y-4">
            <Card className="p-6">
              <h3 className="text-lg font-medium text-secondary-900">Goals & Milestones</h3>
              {/* Add goals list or progress here */}
            </Card>
          </TabsContent>

          <TabsContent value="suggestions" className="space-y-4">
            <Card className="p-6">
              <div className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-primary-600" />
                <h3 className="text-lg font-medium text-secondary-900">AI Suggestions</h3>
              </div>
              {/* Add AI suggestions here */}
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
