"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LineChart, BarChart } from "@/components/charts"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"

export default function ApiUsage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-3xl font-bold">API Usage</h1>

        <div className="flex flex-col sm:flex-row gap-2">
          <Select defaultValue="30days">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select time period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">Last 7 days</SelectItem>
              <SelectItem value="30days">Last 30 days</SelectItem>
              <SelectItem value="90days">Last 90 days</SelectItem>
              <SelectItem value="year">Last year</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select project" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Projects</SelectItem>
              <SelectItem value="project1">E-commerce API</SelectItem>
              <SelectItem value="project2">Analytics Dashboard</SelectItem>
              <SelectItem value="project3">Mobile App Backend</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="endpoints">Endpoints</TabsTrigger>
          <TabsTrigger value="errors">Errors</TabsTrigger>
          <TabsTrigger value="latency">Latency</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>API Calls Over Time</CardTitle>
              <CardDescription>Total API requests per day</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <LineChart />
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>API Usage by Project</CardTitle>
                <CardDescription>Distribution of API calls</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <BarChart />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Top API Consumers</CardTitle>
                <CardDescription>Users with highest API usage</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      name: "User 1",
                      email: "user1@example.com",
                      usage: "450K calls"
                    },
                    {
                      name: "User 2",
                      email: "user2@example.com",
                      usage: "320K calls"
                    },
                    {
                      name: "User 3",
                      email: "user3@example.com",
                      usage: "280K calls"
                    },
                    {
                      name: "User 4",
                      email: "user4@example.com",
                      usage: "210K calls"
                    },
                    {
                      name: "User 5",
                      email: "user5@example.com",
                      usage: "180K calls"
                    }
                  ].map((user, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{user.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {user.email}
                        </p>
                      </div>
                      <div className="font-medium">{user.usage}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="endpoints" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Endpoint Usage</CardTitle>
              <CardDescription>API calls by endpoint</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <BarChart />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="errors" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Error Rates</CardTitle>
              <CardDescription>API errors over time</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <LineChart />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="latency" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>API Latency</CardTitle>
              <CardDescription>Response time by endpoint</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <LineChart />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
