"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  Share2,
  MoreHorizontal,
  Trash2,
  LogOut,
  Check,
  Edit,
  ChevronDown,
  ExternalLink,
  Users,
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
  lastOpened: Date
  lastUpdated: Date
  isShared?: boolean
}

interface User {
  id: string
  email: string
  plan_type: "free" | "trial" | "pro" | null
}

export default function TabStaxPopup() {
  const [user, setUser] = useState<User | null>({ id: "1", email: "jim@example.com", plan_type: "pro" })
  const [quickStartInput, setQuickStartInput] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedStax, setSelectedStax] = useState<string | null>(null)
  const [activeTagFilter, setActiveTagFilter] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState<"lastOpened" | "recentlyUpdated" | "dueDate" | "alphabetical">("lastOpened")
  const [showSortDropdown, setShowSortDropdown] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const [tooltipText, setTooltipText] = useState("")

  const searchInputRef = useRef<HTMLInputElement>(null)
  const cycleButtonRef = useRef<HTMLButtonElement>(null)

  const [staxList, setStaxList] = useState<Stax[]>([
    {
      id: "1",
      name: "Scrum Master Stax",
      tags: ["work", "scrum", "management", "agile", "team", "sprint"],
      nextAction: "Review sprint retrospective by Friday",
      tabs: [
        { id: "1", title: "📝 Start Here!", url: "https://example.com/start" },
        { id: "2", title: "Definition of Done", url: "https://example.com/dod" },
        { id: "3", title: "Team Ceremonies", url: "https://example.com/ceremonies" },
        { id: "4", title: "Jira Issues", url: "https://jira.com/issues" },
        { id: "5", title: "GitHub", url: "https://github.com" },
      ],
      lastOpened: new Date(),
      lastUpdated: new Date(),
      isShared: true,
    },
    {
      id: "2",
      name: "Client Outreach",
      tags: ["client100", "sales", "priority", "outreach", "business"],
      nextAction: "Individual reach out by Tuesday",
      tabs: [
        { id: "6", title: "Client Database", url: "https://crm.com/clients" },
        { id: "7", title: "Email Templates", url: "https://templates.com" },
      ],
      lastOpened: new Date(Date.now() - 86400000),
      lastUpdated: new Date(Date.now() - 86400000),
    },
    {
      id: "3",
      name: "Research Project",
      tags: ["research", "academic", "data", "analysis"],
      tabs: [
        { id: "8", title: "Research Papers", url: "https://scholar.google.com" },
        { id: "9", title: "Data Analysis", url: "https://sheets.google.com" },
      ],
      lastOpened: new Date(Date.now() - 172800000),
      lastUpdated: new Date(Date.now() - 172800000),
    },
  ])

  // Mock current tabs
  const [currentTabs] = useState<Tab[]>([
    { id: "current1", title: "New Tab 1", url: "https://example.com/new1" },
    { id: "current2", title: "New Tab 2", url: "https://example.com/new2" },
  ])

  // Get all unique tags from filtered stax
  const getAllTags = () => {
    const filteredBySearch = staxList.filter((stax) => {
      if (!searchQuery) return true
      const query = searchQuery.toLowerCase()
      return stax.name.toLowerCase().includes(query) || stax.tags.some((tag) => tag.toLowerCase().includes(query))
    })
    return Array.from(new Set(filteredBySearch.flatMap((stax) => stax.tags)))
  }

  // Filter and sort stax
  const getFilteredStax = () => {
    let filtered = staxList

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (stax) => stax.name.toLowerCase().includes(query) || stax.tags.some((tag) => tag.toLowerCase().includes(query)),
      )
    }

    // Apply tag filter
    if (activeTagFilter) {
      filtered = filtered.filter((stax) => stax.tags.includes(activeTagFilter))
    }

    // Apply sorting
    const sorted = [...filtered]
    switch (sortBy) {
      case "lastOpened":
        return sorted.sort((a, b) => new Date(b.lastOpened).getTime() - new Date(a.lastOpened).getTime())
      case "recentlyUpdated":
        return sorted.sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime())
      case "alphabetical":
        return sorted.sort((a, b) => a.name.localeCompare(b.name))
      case "dueDate":
        // Future: implement due date parsing
        return sorted
      default:
        return sorted
    }
  }

  // Check if current tabs differ from selected stax
  const hasTabChanges = (stax: Stax) => {
    if (currentTabs.length !== stax.tabs.length) return true
    return currentTabs.some((tab) => !stax.tabs.find((t) => t.url === tab.url))
  }

  // Get cycle button state
  const getCycleButtonState = () => {
    const isEmpty = !quickStartInput.trim()

    if (!selectedStax) {
      return {
        text: "Save as New Stax",
        disabled: false, // Always enabled as per requirements
        variant: "primary" as const,
      }
    }

    const selected = staxList.find((s) => s.id === selectedStax)
    if (!selected) {
      return {
        text: "Save as New Stax",
        disabled: false,
        variant: "primary" as const,
      }
    }

    if (hasTabChanges(selected)) {
      return {
        text: "Update This Stax",
        disabled: false,
        variant: "primary" as const,
      }
    }

    return {
      text: "No changes",
      disabled: true,
      variant: "secondary" as const,
    }
  }

  // Handle cycle button click
  const handleCycleButtonClick = () => {
    const state = getCycleButtonState()
    if (state.disabled) return

    if (state.text === "Save as New Stax") {
      handleCreateNewStax()
    } else if (state.text === "Update This Stax") {
      handleUpdateStax()
    }
  }

  // Create new stax
  const handleCreateNewStax = () => {
    const input = quickStartInput.trim() || "Untitled Stax"
    const parts = input.split("/next:")
    const nameAndTags = parts[0].trim()
    const nextAction = parts[1]?.trim()

    const tagMatches = nameAndTags.match(/#\w+/g) || []
    const tags = tagMatches.map((tag) => tag.substring(1))
    const name = nameAndTags.replace(/#\w+/g, "").trim() || "Untitled Stax"

    const newStax: Stax = {
      id: Date.now().toString(),
      name,
      tags,
      nextAction,
      tabs: [...currentTabs],
      lastOpened: new Date(),
      lastUpdated: new Date(),
    }

    setStaxList([newStax, ...staxList])
    setSelectedStax(newStax.id)
    setQuickStartInput("")
  }

  // Update existing stax
  const handleUpdateStax = () => {
    if (!selectedStax) return

    let nextAction: string | undefined
    if (quickStartInput.includes("/next:")) {
      const parts = quickStartInput.split("/next:")
      nextAction = parts[1]?.trim()
    }

    setStaxList(
      staxList.map((stax) =>
        stax.id === selectedStax
          ? {
              ...stax,
              tabs: [...currentTabs],
              lastUpdated: new Date(),
              ...(nextAction !== undefined && { nextAction }),
            }
          : stax,
      ),
    )

    setQuickStartInput("")
  }

  // Handle delete stax
  const handleDeleteStax = (staxId: string) => {
    if (confirm("Are you sure you want to delete this Stax?")) {
      setStaxList(staxList.filter((stax) => stax.id !== staxId))
      if (selectedStax === staxId) {
        setSelectedStax(null)
      }
    }
  }

  // Handle rename stax
  const handleRenameStax = (staxId: string) => {
    const stax = staxList.find((s) => s.id === staxId)
    if (!stax) return

    const newName = prompt("Enter new name:", stax.name)
    if (newName && newName.trim()) {
      setStaxList(staxList.map((s) => (s.id === staxId ? { ...s, name: newName.trim() } : s)))
    }
  }

  // Handle tab click
  const handleTabClick = (tab: Tab) => {
    console.log("Opening tab:", tab.title, tab.url)
    // In real implementation: chrome.tabs.create({ url: tab.url })
  }

  // Handle tooltip
  const handleCycleButtonHover = () => {
    const state = getCycleButtonState()
    if (!state.disabled) return

    let text = ""
    if (!selectedStax && !quickStartInput.trim()) {
      text = "Type a name, tags or /next to enable"
    } else if (selectedStax) {
      text = "No tab changes detected"
    }

    if (text) {
      setTooltipText(text)
      setShowTooltip(true)
    }
  }

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault()
        setTimeout(() => {
          searchInputRef.current?.focus()
        }, 0)
      }
      if (e.key === "Enter" && document.activeElement === document.querySelector("#quickstart-input")) {
        handleCycleButtonClick()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [quickStartInput, selectedStax])

  const cycleButtonState = getCycleButtonState()
  const filteredStax = getFilteredStax()
  const allTags = getAllTags()

  return (
    <Card className="w-[320px] h-[600px] flex flex-col">
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
            <Button variant="ghost" size="sm" onClick={() => console.log("Share TabStax")} title="Share TabStax">
              <Share2 className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* QuickStart - reduced height */}
        <div className="mb-3">
          <div className="flex gap-2 mb-2">
            <Input
              id="quickstart-input"
              placeholder="Name + #tags + /next"
              value={quickStartInput}
              onChange={(e) => setQuickStartInput(e.target.value)}
              className="flex-1 h-8"
              autoComplete="off"
            />
            <div className="relative">
              <Button
                ref={cycleButtonRef}
                onClick={handleCycleButtonClick}
                disabled={cycleButtonState.disabled}
                variant={cycleButtonState.variant === "primary" ? "default" : "secondary"}
                className={`whitespace-nowrap h-8 text-xs ${
                  cycleButtonState.variant === "primary" ? "bg-blue-600 hover:bg-blue-700" : ""
                }`}
                onMouseEnter={handleCycleButtonHover}
                onMouseLeave={() => setShowTooltip(false)}
              >
                {cycleButtonState.text}
              </Button>
              {showTooltip && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap z-10">
                  {tooltipText}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                </div>
              )}
            </div>
          </div>
          <div className="text-xs text-gray-500 leading-tight">
            Tip: Add tags with # and next action with /next (e.g. Top Clients #client100 /next: reach out by Tue)
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-4 space-y-2">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                ref={searchInputRef}
                placeholder="Search Stax or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
                autoComplete="off"
              />
            </div>
            <div className="relative">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowSortDropdown(!showSortDropdown)}
                className="px-2"
                title="Sort options"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 6h18"></path>
                  <path d="M7 12h10"></path>
                  <path d="M10 18h4"></path>
                </svg>
              </Button>
              {showSortDropdown && (
                <div className="absolute top-full right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-10 min-w-[140px]">
                  {[
                    { value: "lastOpened", label: "Last opened" },
                    { value: "recentlyUpdated", label: "Recently updated" },
                    { value: "dueDate", label: "Due date" },
                    { value: "alphabetical", label: "A–Z" },
                  ].map((option) => (
                    <button
                      key={option.value}
                      className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-50 ${
                        sortBy === option.value ? "bg-blue-50 text-blue-600 font-medium" : ""
                      }`}
                      onClick={() => {
                        setSortBy(option.value as any)
                        setShowSortDropdown(false)
                      }}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {allTags.length > 0 && (
            <div className="flex flex-wrap gap-1 max-h-12 overflow-hidden">
              {allTags.slice(0, 12).map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className={`cursor-pointer text-[10px] bg-gray-100 text-gray-400 hover:bg-gray-200 ${
                    activeTagFilter === tag ? "bg-blue-600 text-white hover:bg-blue-700" : ""
                  }`}
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
          {filteredStax.length === 0 ? (
            <div className="text-center text-gray-500 py-8">No Stax found</div>
          ) : (
            filteredStax.map((stax) => (
              <div
                key={stax.id}
                className={`border rounded-lg p-3 cursor-pointer transition-all hover:border-gray-300 hover:shadow-sm hover:-translate-y-0.5 ${
                  selectedStax === stax.id ? "border-blue-500 bg-blue-50" : "border-gray-200"
                }`}
                onClick={() => setSelectedStax(selectedStax === stax.id ? null : stax.id)}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-sm text-gray-900">{stax.name}</h3>
                      {stax.isShared && (
                        <Badge variant="secondary" className="text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5">
                          <Users className="w-2.5 h-2.5" />
                          Shared
                        </Badge>
                      )}
                    </div>
                    {stax.nextAction && (
                      <div className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded mb-2">
                        <span className="font-medium">Next:</span> {stax.nextAction}
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-1 ml-2">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" onClick={(e) => e.stopPropagation()} className="h-6 w-6 p-0">
                          <ChevronDown className="w-3 h-3" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        {stax.tabs.map((tab) => (
                          <DropdownMenuItem
                            key={tab.id}
                            onClick={(e) => {
                              e.stopPropagation()
                              handleTabClick(tab)
                            }}
                            className="flex items-center gap-2"
                          >
                            <ExternalLink className="w-3 h-3" />
                            <span className="truncate max-w-[200px]">{tab.title}</span>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>

                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation()
                        console.log("Share stax:", stax.id)
                      }}
                      className="h-6 w-6 p-0"
                      title="Share this Stax"
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
                            handleRenameStax(stax.id)
                          }}
                        >
                          <Edit className="w-4 h-4 mr-2" />
                          Rename
                        </DropdownMenuItem>
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
                  </div>
                </div>

                {stax.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 max-h-8 overflow-hidden">
                    {stax.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-[10px] bg-gray-100 text-gray-400 px-1.5 py-0.5"
                      >
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="mt-4 pt-3 border-t border-gray-100">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" className="h-auto p-0 text-xs">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 1.82-.33H9a1.65 1.65 0 0 0 1 1.51V6a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V12a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
              </Button>
              <span>v1.2</span>
              <span className="text-green-600 font-medium">{user?.plan_type?.toUpperCase() || "FREE"}</span>
              <span>{user?.email?.split("@")[0] || "user"}</span>
            </div>
            <Button variant="ghost" size="sm" className="h-auto p-0 text-xs">
              <LogOut className="w-3 h-3" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
