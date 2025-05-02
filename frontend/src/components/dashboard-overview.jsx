"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { BarChart, LineChart, PieChart } from "@/components/charts"
import {
  ArrowUpRight,
  Users,
  Database,
  Key,
  Clock,
  Zap,
  Shield,
  Server
} from "lucide-react"
import { ModuleBadge } from "@/components/ui/module-badge"

export default function DashboardOverview() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard Overview</h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,248</div>
            <p className="text-xs text-muted-foreground flex items-center mt-1">
              <span className="text-emerald-500 flex items-center mr-1">
                <ArrowUpRight className="h-3 w-3" /> 12%
              </span>
              from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">API Calls</CardTitle>
            <Database className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.4M</div>
            <p className="text-xs text-muted-foreground flex items-center mt-1">
              <span className="text-emerald-500 flex items-center mr-1">
                <ArrowUpRight className="h-3 w-3" /> 18%
              </span>
              from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Active API Keys
            </CardTitle>
            <Key className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground flex items-center mt-1">
              <span className="text-emerald-500 flex items-center mr-1">
                <ArrowUpRight className="h-3 w-3" /> 4%
              </span>
              from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Avg. Response Time
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">124ms</div>
            <p className="text-xs text-muted-foreground flex items-center mt-1">
              <span className="text-emerald-500 flex items-center mr-1">
                <ArrowUpRight className="h-3 w-3" /> 8%
              </span>
              improvement
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>API Usage Trends</CardTitle>
            <CardDescription>
              Daily API calls over the past 30 days
            </CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <LineChart />
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Resource Usage</CardTitle>
            <CardDescription>Distribution by endpoint</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <PieChart />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Active Modules</CardTitle>
            <CardDescription>
              Status of system modules and services
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Authentication",
                status: "Active",
                icon: <Shield className="h-3 w-3" />,
                variant: "success"
              },
              {
                name: "Data Processing",
                status: "Active",
                icon: <Database className="h-3 w-3" />,
                variant: "success"
              },
              {
                name: "API Gateway",
                status: "Active",
                icon: <Server className="h-3 w-3" />,
                variant: "success"
              },
              {
                name: "Analytics",
                status: "Maintenance",
                icon: <Zap className="h-3 w-3" />,
                variant: "warning"
              },
              {
                name: "Notifications",
                status: "Active",
                icon: <Zap className="h-3 w-3" />,
                variant: "success"
              },
              {
                name: "Storage",
                status: "Degraded",
                icon: <Database className="h-3 w-3" />,
                variant: "danger"
              }
            ].map((module, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div>
                  <h3 className="font-medium">{module.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    Last updated: 5m ago
                  </p>
                </div>
                <ModuleBadge variant={module.variant} icon={module.icon}>
                  {module.status}
                </ModuleBadge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>API Usage by Project</CardTitle>
          <CardDescription>Top projects by API consumption</CardDescription>
        </CardHeader>
        <CardContent className="h-[300px]">
          <BarChart />
        </CardContent>
      </Card>
    </div>
  )
}
