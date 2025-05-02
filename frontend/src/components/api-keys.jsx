"use client"
import { useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Copy, Eye, EyeOff, Plus, RefreshCw, Trash2 } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ModuleBadge } from "@/components/ui/module-badge"

export default function ApiKeys() {
  const [showKey, setShowKey] = useState({})
  const [createKeyOpen, setCreateKeyOpen] = useState(false)
  const [deleteKeyOpen, setDeleteKeyOpen] = useState(false)
  const [selectedKey, setSelectedKey] = useState(null)

  // Mock API key data
  const [apiKeys, setApiKeys] = useState([
    {
      id: 1,
      name: "Production API Key",
      key: "pk_live_51Hb9aBcXyZ123456789abcdefghijklmnopqrstuvwxyz",
      created: "2023-04-15",
      lastUsed: "2 minutes ago",
      status: "Active",
      permissions: ["Read", "Write"]
    },
    {
      id: 2,
      name: "Development API Key",
      key: "pk_test_51Hb9aBcXyZ123456789abcdefghijklmnopqrstuvwxyz",
      created: "2023-05-20",
      lastUsed: "1 day ago",
      status: "Active",
      permissions: ["Read"]
    },
    {
      id: 3,
      name: "Analytics API Key",
      key: "pk_analytics_51Hb9aBcXyZ123456789abcdefghijklmnopqrstuvwxyz",
      created: "2023-06-10",
      lastUsed: "5 hours ago",
      status: "Active",
      permissions: ["Read"]
    },
    {
      id: 4,
      name: "Legacy API Key",
      key: "pk_legacy_51Hb9aBcXyZ123456789abcdefghijklmnopqrstuvwxyz",
      created: "2022-11-05",
      lastUsed: "30 days ago",
      status: "Inactive",
      permissions: ["Read", "Write"]
    }
  ])

  const toggleShowKey = id => {
    setShowKey(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  const copyToClipboard = text => {
    navigator.clipboard.writeText(text)
    // You could add a toast notification here
  }

  const handleCreateKey = e => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const newKey = {
      id: apiKeys.length + 1,
      name: formData.get("name"),
      key: `pk_${Date.now()}_51Hb9aBcXyZ123456789abcdefghijklmnopqrstuvwxyz`,
      created: new Date().toISOString().split("T")[0],
      lastUsed: "Just now",
      status: "Active",
      permissions: []
    }

    if (formData.get("read")) {
      newKey.permissions.push("Read")
    }

    if (formData.get("write")) {
      newKey.permissions.push("Write")
    }

    setApiKeys([...apiKeys, newKey])
    setCreateKeyOpen(false)
  }

  const handleDeleteKey = () => {
    if (selectedKey) {
      setApiKeys(apiKeys.filter(key => key.id !== selectedKey.id))
      setDeleteKeyOpen(false)
      setSelectedKey(null)
    }
  }

  const getStatusBadgeVariant = status => {
    switch (status) {
      case "Active":
        return "success"
      case "Inactive":
        return "secondary"
      default:
        return "default"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-3xl font-bold">API Keys</h1>

        <Button onClick={() => setCreateKeyOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Create API Key
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>API Keys</CardTitle>
          <CardDescription>
            Manage API keys for accessing your services
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>API Key</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Last Used</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Permissions</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {apiKeys.map(apiKey => (
                <TableRow key={apiKey.id}>
                  <TableCell className="font-medium">{apiKey.name}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                        {showKey[apiKey.id]
                          ? apiKey.key
                          : apiKey.key.substring(0, 8) +
                            "..." +
                            apiKey.key.substring(apiKey.key.length - 4)}
                      </code>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => toggleShowKey(apiKey.id)}
                      >
                        {showKey[apiKey.id] ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => copyToClipboard(apiKey.key)}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell>{apiKey.created}</TableCell>
                  <TableCell>{apiKey.lastUsed}</TableCell>
                  <TableCell>
                    <ModuleBadge variant={getStatusBadgeVariant(apiKey.status)}>
                      {apiKey.status}
                    </ModuleBadge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      {apiKey.permissions.map((permission, i) => (
                        <ModuleBadge key={i} variant="outline" size="sm">
                          {permission}
                        </ModuleBadge>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        title="Regenerate Key"
                      >
                        <RefreshCw className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        title="Delete Key"
                        onClick={() => {
                          setSelectedKey(apiKey)
                          setDeleteKeyOpen(true)
                        }}
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Create API Key Dialog */}
      <Dialog open={createKeyOpen} onOpenChange={setCreateKeyOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create API Key</DialogTitle>
            <DialogDescription>
              Create a new API key for accessing your services.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleCreateKey}>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Key Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="e.g. Production API Key"
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label>Environment</Label>
                <Select name="environment" defaultValue="production">
                  <SelectTrigger>
                    <SelectValue placeholder="Select environment" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="production">Production</SelectItem>
                    <SelectItem value="staging">Staging</SelectItem>
                    <SelectItem value="development">Development</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label>Permissions</Label>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="read" name="read" defaultChecked />
                    <Label htmlFor="read">Read</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="write" name="write" />
                    <Label htmlFor="write">Write</Label>
                  </div>
                </div>
              </div>
            </div>

            <DialogFooter>
              <Button
                variant="outline"
                type="button"
                onClick={() => setCreateKeyOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit">Create Key</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Delete API Key Dialog */}
      <Dialog open={deleteKeyOpen} onOpenChange={setDeleteKeyOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete API Key</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this API key? This action cannot
              be undone.
            </DialogDescription>
          </DialogHeader>

          {selectedKey && (
            <div className="py-4">
              <p className="font-medium">{selectedKey.name}</p>
              <p className="text-sm text-muted-foreground">
                Created on {selectedKey.created}
              </p>
            </div>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteKeyOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDeleteKey}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
