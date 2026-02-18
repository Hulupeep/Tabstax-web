"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  Share2,
  ChevronDown,
  ChevronRight,
  MoreHorizontal,
  Trash2,
  Settings,
  LogOut,
  Check,
  RefreshCw,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface Tab {
  id: string
  title: string
  url: string
  favicon?: string
}

interface Stax {
  id: string
  name: string
  tags: string[]
  nextAction?: string
  tabs: Tab[]
  lastUpdated: Date
  isShared?: boolean
}

interface User {
  id: string
  email: string
  plan_type: "free" | "trial" | "pro" | null
}

export default function TabStaxRedesigned() {
  const [user, setUser] = useState<User | null>({ id: "1", email: "user@example.com", plan_type: "pro" })
  const [quickStartInput, setQuickStartInput] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedStax, setSelectedStax] = useState<string | null>(null)
  const [expandedStax, setExpandedStax] = useState<Set<string>>(new Set())
  const [activeTagFilter, setActiveTagFilter] = useState<string | null>(null)

  const [staxList, setStaxList] = useState<Stax[]>([
    {
      id: "1",
      name: "Scrum Master Stax",
      tags: ["work", "scrum", "management"],
      nextAction: "Review sprint retrospective by Friday",
      tabs: [
        { id: "1", title: "📝 Start Here!", url: "https://example.com/start" },
        { id: "2", title: "Definition of Done", url: "https://example.com/dod" },
        { id: "3", title: "Team Ceremonies", url: "https://example.com/ceremonies" },
        { id: "4", title: "Jira Issues", url: "https://jira.com/issues" },
        { id: "5", title: "GitHub", url: "https://github.com" },
      ],
      lastUpdated: new Date(),
      isShared: true,
    },
    {
      id: "2",
      name: "Client Outreach",
      tags: ["client100", "sales", "priority"],
      nextAction: "Individual reach out by Tuesday",
      tabs: [
        { id: "6", title: "Client Database", url: "https://crm.com/clients" },
        { id: "7", title: "Email Templates", url: "https://templates.com" },
      ],
      lastUpdated: new Date(Date.now() - 86400000), // 1 day ago
    },
    {
      id: "3",
      name: "Research Project",
      tags: ["research", "academic"],
      nextAction: "Compile findings for presentation",
      tabs: [
        { id: "8", title: "Research Papers", url: "https://scholar.google.com" },
        { id: "9", title: "Data Analysis", url: "https://sheets.google.com" },
      ],
      lastUpdated: new Date(Date.now() - 172800000), // 2 days ago
    },
  ])

  // Get current browser tabs (simulated)
  const [currentTabs] = useState<Tab[]>([
    { id: "current1", title: "New Tab 1", url: "https://example.com/new1" },
    { id: "current2", title: "New Tab 2", url: "https://example.com/new2" },
  ])

  // Extract all unique tags
  const allTags = Array.from(new Set(staxList.flatMap((stax) => stax.tags)))

  // Filter stax based on search and tag filter
  const filteredStax = staxList.filter((stax) => {
    const matchesSearch =
      stax.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      stax.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesTag = !activeTagFilter || stax.tags.includes(activeTagFilter)
    return matchesSearch && matchesTag
  })

  // Determine cycle button state
  const getCycleButtonState = () => {
    if (!selectedStax) {
      return { text: "Save as New Stax", disabled: !quickStartInput.trim(), variant: "default" as const }
    }

    const selected = staxList.find((s) => s.id === selectedStax)
    if (!selected) {
      return { text: "Save as New Stax", disabled: !quickStartInput.trim(), variant: "default" as const }
    }

    // Check if current tabs differ from selected Stax
    const tabsChanged =
      currentTabs.length !== selected.tabs.length ||
      currentTabs.some((tab) => !selected.tabs.find((t) => t.url === tab.url))

    if (tabsChanged) {
      return { text: "Update This Stax", disabled: false, variant: "default" as const }
    }

    return { text: "No Changes to Save", disabled: true, variant: "secondary" as const }
  }

  const handleCycleButtonClick = () => {
    const state = getCycleButtonState()
    if (state.disabled) return

    if (state.text === "Save as New Stax") {
      handleCreateNewStax()
    } else if (state.text === "Update This Stax") {
      handleUpdateStax()
    }
  }

  const handleCreateNewStax = () => {
    const input = quickStartInput.trim()
    if (!input) return

    // Parse name, tags, and next action
    const parts = input.split("/next:")
    const nameAndTags = parts[0].trim()
    const nextAction = parts[1]?.trim()

    const tagMatches = nameAndTags.match(/#\w+/g) || []
    const tags = tagMatches.map((tag) => tag.substring(1))
    const name = nameAndTags.replace(/#\w+/g, "").trim()

    const newStax: Stax = {
      id: Date.now().toString(),
      name: name || "Untitled Stax",
      tags,
      nextAction,
      tabs: [...currentTabs],
      lastUpdated: new Date(),
    }

    setStaxList([newStax, ...staxList])
    setQuickStartInput("")
    setSelectedStax(newStax.id)
  }

  const handleUpdateStax = () => {
    if (!selectedStax) return

    setStaxList(
      staxList.map((stax) =>
        stax.id === selectedStax ? { ...stax, tabs: [...currentTabs], lastUpdated: new Date() } : stax,
      ),
    )
  }

  const handleDeleteStax = (staxId: string) => {
    if (confirm("Are you sure you want to delete this Stax?")) {
      setStaxList(staxList.filter((stax) => stax.id !== staxId))
      if (selectedStax === staxId) {
        setSelectedStax(null)
      }
    }
  }

  const handleShareStax = (staxId: string) => {
    // Existing share functionality
    console.log("Sharing stax:", staxId)
    // Generate share link logic here
  }

  const toggleStaxExpansion = (staxId: string) => {
    const newExpanded = new Set(expandedStax)
    if (newExpanded.has(staxId)) {
      newExpanded.delete(staxId)
    } else {
      newExpanded.add(staxId)
    }
    setExpandedStax(newExpanded)
  }

  const cycleButtonState = getCycleButtonState()

  return (
    <Card className="w-[400px] h-[600px] flex flex-col">
      <CardContent className="p-4 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <h1 className="text-lg font-bold text-gray-900">TabStax</h1>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 text-xs text-green-600">
              <Check className="w-3 h-3" />
              Auto-Sync
            </div>
            <Button variant="ghost" size="sm">
              <Share2 className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* QuickStart Header */}
        <div className="mb-4">
          <div className="flex gap-2 mb-2">
            <Input
              placeholder="Name and tag this Stax + next action"
              value={quickStartInput}
              onChange={(e) => setQuickStartInput(e.target.value)}
              className="flex-1"
            />
            <Button
              onClick={handleCycleButtonClick}
              disabled={cycleButtonState.disabled}
              variant={cycleButtonState.variant}
              className="whitespace-nowrap"
            >
              {cycleButtonState.text}
            </Button>
          </div>
          <p className="text-xs text-gray-500">Tip: Add tags with # and next action with /next:</p>
          <p className="text-xs text-gray-400 mt-1">
            (e.g. Top Clients #client100 /next: individual reach out by Tuesday)
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-4 space-y-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search Stax or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {allTags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {allTags.map((tag) => (
                <Badge
                  key={tag}
                  variant={activeTagFilter === tag ? "default" : "secondary"}
                  className="cursor-pointer text-xs"
                  onClick={() => setActiveTagFilter(activeTagFilter === tag ? null : tag)}
                >
                  #{tag}
                </Badge>
              ))}
            </div>
          )}
        </div>

        {/* Stax List */}
        <div className="flex-1 overflow-y-auto space-y-2">
          {filteredStax.map((stax) => (
            <div
              key={stax.id}
              className={`border rounded-lg p-3 cursor-pointer transition-colors ${
                selectedStax === stax.id ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300"
              }`}
              onClick={() => setSelectedStax(selectedStax === stax.id ? null : stax.id)}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h3 className="font-medium text-sm text-gray-900">{stax.name}</h3>
                  {stax.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-1">
                      {stax.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                  {stax.nextAction && <p className="text-xs text-gray-600 mt-1">Next: {stax.nextAction}</p>}
                </div>

                <div className="flex items-center gap-1 ml-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleShareStax(stax.id)
                    }}
                    className="h-6 w-6 p-0"
                    title="Share Stax"
                  >
                    <Share2 className="w-3 h-3" />
                  </Button>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" onClick={(e) => e.stopPropagation()} className="h-6 w-6 p-0">
                        <MoreHorizontal className="w-3 h-3" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem
                        onClick={(e) => {
                          e.stopPropagation()
                          handleDeleteStax(stax.id)
                        }}
                        className="text-red-600"
                      >
                        <Trash2 className="w-4 h-4 mr-2" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleStaxExpansion(stax.id)
                    }}
                    className="h-6 w-6 p-0"
                  >
                    {expandedStax.has(stax.id) ? (
                      <ChevronDown className="w-3 h-3" />
                    ) : (
                      <ChevronRight className="w-3 h-3" />
                    )}
                  </Button>
                </div>
              </div>

              {/* Expanded Tab List */}
              {expandedStax.has(stax.id) && (
                <div className="mt-2 pt-2 border-t border-gray-100">
                  <div className="space-y-1">
                    {stax.tabs.map((tab) => (
                      <div key={tab.id} className="flex items-center gap-2 text-xs text-gray-600">
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        <span className="truncate">{tab.title}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full mt-2 h-7 text-xs bg-transparent"
                    onClick={(e) => {
                      e.stopPropagation()
                      // Open all tabs in this Stax
                      console.log("Opening all tabs for:", stax.name)
                    }}
                  >
                    Open All ({stax.tabs.length} tabs)
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-4 pt-3 border-t border-gray-100">
          <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
            <div className="flex items-center gap-1">
              <RefreshCw className="w-3 h-3 text-green-600" />
              <span className="text-green-600">Auto-Sync Active</span>
              <span>• Last synced: Just now</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center gap-3">
              <span>Version: 1.29.1</span>
              <Button variant="ghost" size="sm" className="h-auto p-0 text-xs">
                <Settings className="w-3 h-3 mr-1" />
                Settings
              </Button>
            </div>
            <Button variant="ghost" size="sm" className="h-auto p-0 text-xs">
              <LogOut className="w-3 h-3 mr-1" />
              Sign out
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
