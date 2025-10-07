class TabStaxPopup {
  constructor() {
    this.state = {
      staxList: [],
      currentTabs: [],
      selectedStax: null,
      searchQuery: "",
      activeTagFilter: null,
      sortBy: "lastOpened",
      user: null,
    }

    this.init()
  }

  init() {
    this.loadMockData()
    this.bindEvents()
    this.render()
    this.updateCycleButton()
  }

  loadMockData() {
    // Mock data for demonstration
    this.state.staxList = [
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
        lastOpened: new Date(),
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
        lastOpened: new Date(Date.now() - 86400000),
        lastUpdated: new Date(Date.now() - 86400000),
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
        lastOpened: new Date(Date.now() - 172800000),
        lastUpdated: new Date(Date.now() - 172800000),
      },
    ]

    // Mock current tabs
    this.state.currentTabs = [
      { id: "current1", title: "New Tab 1", url: "https://example.com/new1" },
      { id: "current2", title: "New Tab 2", url: "https://example.com/new2" },
    ]

    this.state.user = { id: "1", email: "user@example.com", plan_type: "pro" }
  }

  bindEvents() {
    // QuickStart input
    const quickstartInput = document.getElementById("quickstart-input")
    if (quickstartInput) {
      quickstartInput.addEventListener("input", () => this.updateCycleButton())
      quickstartInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          this.handleCycleButtonClick()
        }
      })
    }

    // Cycle button
    const cycleBtn = document.getElementById("cycle-btn")
    if (cycleBtn) {
      cycleBtn.addEventListener("click", () => this.handleCycleButtonClick())
      cycleBtn.addEventListener("mouseenter", (e) => this.showTooltip(e))
      cycleBtn.addEventListener("mouseleave", () => this.hideTooltip())
    }

    // Search
    const searchInput = document.getElementById("search-input")
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        this.state.searchQuery = e.target.value
        this.renderStaxList()
        this.renderTagChips()
      })
    }

    // Sort button
    const sortBtn = document.getElementById("sort-btn")
    if (sortBtn) {
      sortBtn.addEventListener("click", (e) => {
        e.stopPropagation()
        this.toggleSortDropdown()
      })
    }

    // Sort dropdown
    document.addEventListener("click", (e) => {
      if (!e.target.closest("#sort-btn")) {
        this.hideSortDropdown()
      }
    })

    // Keyboard shortcuts
    document.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault()
        const searchInput = document.getElementById("search-input")
        if (searchInput) {
          searchInput.focus()
        }
      }
    })

    // Share button
    const shareBtn = document.querySelector(".share-btn")
    if (shareBtn) {
      shareBtn.addEventListener("click", () => {
        this.handleShareTabStax()
      })
    }
  }

  updateCycleButton() {
    const input = document.getElementById("quickstart-input")
    const cycleBtn = document.getElementById("cycle-btn")
    const cycleBtnText = document.getElementById("cycle-btn-text")

    const inputValue = input.value.trim()
    const isEmpty = !inputValue

    if (!this.state.selectedStax) {
      cycleBtnText.textContent = "Save as New Stax"
      cycleBtn.className = "cycle-btn primary"
      cycleBtn.disabled = false // Always enabled as per requirements
    } else {
      const selectedStax = this.state.staxList.find((s) => s.id === this.state.selectedStax)
      if (selectedStax && this.hasTabChanges(selectedStax)) {
        cycleBtnText.textContent = "Update This Stax"
        cycleBtn.className = "cycle-btn primary"
        cycleBtn.disabled = false
      } else {
        cycleBtnText.textContent = "No changes"
        cycleBtn.className = "cycle-btn"
        cycleBtn.disabled = true
      }
    }
  }

  hasTabChanges(stax) {
    if (this.state.currentTabs.length !== stax.tabs.length) return true
    return this.state.currentTabs.some((tab) => !stax.tabs.find((t) => t.url === tab.url))
  }

  handleCycleButtonClick() {
    const cycleBtn = document.getElementById("cycle-btn")
    if (cycleBtn.disabled) return

    const input = document.getElementById("quickstart-input")
    const inputValue = input.value.trim()

    if (!this.state.selectedStax) {
      this.handleCreateNewStax(inputValue)
    } else {
      this.handleUpdateStax(inputValue)
    }
  }

  handleCreateNewStax(inputValue) {
    if (!inputValue) {
      // Create with default name if empty
      inputValue = "Untitled Stax"
    }

    const parts = inputValue.split("/next:")
    const nameAndTags = parts[0].trim()
    const nextAction = parts[1]?.trim()

    const tagMatches = nameAndTags.match(/#\w+/g) || []
    const tags = tagMatches.map((tag) => tag.substring(1))
    const name = nameAndTags.replace(/#\w+/g, "").trim() || "Untitled Stax"

    const newStax = {
      id: Date.now().toString(),
      name,
      tags,
      nextAction,
      tabs: [...this.state.currentTabs],
      lastOpened: new Date(),
      lastUpdated: new Date(),
    }

    this.state.staxList.unshift(newStax)
    this.state.selectedStax = newStax.id

    document.getElementById("quickstart-input").value = ""
    this.render()
    this.updateCycleButton()
  }

  handleUpdateStax(inputValue) {
    if (!this.state.selectedStax) return

    let nextAction
    if (inputValue.includes("/next:")) {
      const parts = inputValue.split("/next:")
      nextAction = parts[1]?.trim()
    }

    this.state.staxList = this.state.staxList.map((stax) =>
      stax.id === this.state.selectedStax
        ? {
            ...stax,
            tabs: [...this.state.currentTabs],
            lastUpdated: new Date(),
            ...(nextAction !== undefined && { nextAction }),
          }
        : stax,
    )

    document.getElementById("quickstart-input").value = ""
    this.render()
    this.updateCycleButton()
  }

  showTooltip(e) {
    const cycleBtn = e.target.closest(".cycle-btn")
    const input = document.getElementById("quickstart-input")

    if (!cycleBtn.disabled) return

    let tooltipText = ""
    if (!this.state.selectedStax && !input.value.trim()) {
      tooltipText = "Type a name, tags or /next to enable"
    } else if (this.state.selectedStax) {
      tooltipText = "No tab changes detected"
    }

    if (!tooltipText) return

    const tooltip = document.getElementById("tooltip")
    tooltip.textContent = tooltipText
    tooltip.classList.remove("hidden")

    const rect = cycleBtn.getBoundingClientRect()
    tooltip.style.left = `${rect.left + rect.width / 2}px`
    tooltip.style.top = `${rect.top - tooltip.offsetHeight - 8}px`
    tooltip.style.transform = "translateX(-50%)"
  }

  hideTooltip() {
    document.getElementById("tooltip").classList.add("hidden")
  }

  toggleSortDropdown() {
    const dropdown = document.getElementById("sort-dropdown")
    dropdown.classList.toggle("hidden")

    if (!dropdown.classList.contains("hidden")) {
      this.renderSortDropdown()
    }
  }

  hideSortDropdown() {
    document.getElementById("sort-dropdown").classList.add("hidden")
  }

  renderSortDropdown() {
    const dropdown = document.getElementById("sort-dropdown")
    const options = dropdown.querySelectorAll(".sort-option")

    options.forEach((option) => {
      option.classList.toggle("active", option.dataset.sort === this.state.sortBy)
      option.onclick = () => {
        this.state.sortBy = option.dataset.sort
        this.hideSortDropdown()
        this.renderStaxList()
      }
    })
  }

  handleShareTabStax() {
    console.log("Sharing TabStax on social platforms")
    // Future: Open social sharing options
  }

  render() {
    this.renderTagChips()
    this.renderStaxList()
  }

  renderTagChips() {
    const container = document.getElementById("tag-chips")
    const allTags = this.getAllTags()

    if (allTags.length === 0) {
      container.innerHTML = ""
      return
    }

    container.innerHTML = allTags
      .map(
        (tag) => `
            <div class="tag-chip ${this.state.activeTagFilter === tag ? "active" : ""}" 
                 data-tag="${tag}">
                #${tag}
            </div>
        `,
      )
      .join("")

    // Bind tag chip events
    container.querySelectorAll(".tag-chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        const tag = chip.dataset.tag
        this.state.activeTagFilter = this.state.activeTagFilter === tag ? null : tag
        this.renderTagChips()
        this.renderStaxList()
      })
    })
  }

  renderStaxList() {
    const container = document.getElementById("stax-list")
    const filteredStax = this.getFilteredStax()

    if (filteredStax.length === 0) {
      container.innerHTML = '<div style="text-align: center; color: #6b7280; padding: 20px;">No Stax found</div>'
      return
    }

    container.innerHTML = filteredStax
      .map(
        (stax) => `
            <div class="stax-card ${this.state.selectedStax === stax.id ? "selected" : ""}" 
                 data-stax-id="${stax.id}">
                <div class="stax-header">
                    <h3 class="stax-title">${stax.name}</h3>
                    <div class="stax-actions">
                        <button class="stax-action-btn share-stax-btn" data-stax-id="${stax.id}" title="Share this Stax">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                                <polyline points="16,6 12,2 8,6"></polyline>
                                <line x1="12" y1="2" x2="12" y2="15"></line>
                            </svg>
                        </button>
                        <div class="kebab-menu">
                            <button class="stax-action-btn kebab-btn" data-stax-id="${stax.id}">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="12" cy="5" r="1"></circle>
                                    <circle cx="12" cy="19" r="1"></circle>
                                </svg>
                            </button>
                            <div class="kebab-dropdown hidden">
                                <div class="kebab-option" data-action="rename" data-stax-id="${stax.id}">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                    </svg>
                                    Rename
                                </div>
                                <div class="kebab-option danger" data-action="delete" data-stax-id="${stax.id}">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <polyline points="3,6 5,6 21,6"></polyline>
                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                    </svg>
                                    Delete
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                ${
                  stax.nextAction
                    ? `
                    <div class="next-action">
                        <span class="next-action-label">Next:</span>
                        <span class="next-action-text">${stax.nextAction}</span>
                    </div>
                `
                    : ""
                }
                
                ${
                  stax.tags.length > 0
                    ? `
                    <div class="stax-tags">
                        ${stax.tags.map((tag) => `<span class="stax-tag">#${tag}</span>`).join("")}
                    </div>
                `
                    : ""
                }
            </div>
        `,
      )
      .join("")

    this.bindStaxEvents()
  }

  bindStaxEvents() {
    // Stax card selection
    document.querySelectorAll(".stax-card").forEach((card) => {
      card.addEventListener("click", (e) => {
        if (e.target.closest(".stax-actions")) return

        const staxId = card.dataset.staxId
        this.state.selectedStax = this.state.selectedStax === staxId ? null : staxId
        this.renderStaxList()
        this.updateCycleButton()
      })
    })

    // Share buttons
    document.querySelectorAll(".share-stax-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation()
        const staxId = btn.dataset.staxId
        console.log("Sharing stax:", staxId)
      })
    })

    // Kebab menus
    document.querySelectorAll(".kebab-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation()
        const dropdown = btn.nextElementSibling

        // Hide all other dropdowns
        document.querySelectorAll(".kebab-dropdown").forEach((d) => {
          if (d !== dropdown) d.classList.add("hidden")
        })

        dropdown.classList.toggle("hidden")
      })
    })

    // Kebab options
    document.querySelectorAll(".kebab-option").forEach((option) => {
      option.addEventListener("click", (e) => {
        e.stopPropagation()
        const action = option.dataset.action
        const staxId = option.dataset.staxId

        if (action === "delete") {
          this.handleDeleteStax(staxId)
        } else if (action === "rename") {
          this.handleRenameStax(staxId)
        }

        // Hide dropdown
        option.closest(".kebab-dropdown").classList.add("hidden")
      })
    })

    // Hide kebab dropdowns when clicking outside
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".kebab-menu")) {
        document.querySelectorAll(".kebab-dropdown").forEach((d) => {
          d.classList.add("hidden")
        })
      }
    })
  }

  handleDeleteStax(staxId) {
    if (confirm("Are you sure you want to delete this Stax?")) {
      this.state.staxList = this.state.staxList.filter((stax) => stax.id !== staxId)
      if (this.state.selectedStax === staxId) {
        this.state.selectedStax = null
      }
      this.render()
      this.updateCycleButton()
    }
  }

  handleRenameStax(staxId) {
    const stax = this.state.staxList.find((s) => s.id === staxId)
    if (!stax) return

    const newName = prompt("Enter new name:", stax.name)
    if (newName && newName.trim()) {
      stax.name = newName.trim()
      this.renderStaxList()
    }
  }

  getAllTags() {
    const filteredStax = this.state.staxList.filter((stax) => {
      if (!this.state.searchQuery) return true
      const query = this.state.searchQuery.toLowerCase()
      return stax.name.toLowerCase().includes(query) || stax.tags.some((tag) => tag.toLowerCase().includes(query))
    })

    return Array.from(new Set(filteredStax.flatMap((stax) => stax.tags)))
  }

  getFilteredStax() {
    let filtered = this.state.staxList

    // Apply search filter
    if (this.state.searchQuery) {
      const query = this.state.searchQuery.toLowerCase()
      filtered = filtered.filter(
        (stax) => stax.name.toLowerCase().includes(query) || stax.tags.some((tag) => tag.toLowerCase().includes(query)),
      )
    }

    // Apply tag filter
    if (this.state.activeTagFilter) {
      filtered = filtered.filter((stax) => stax.tags.includes(this.state.activeTagFilter))
    }

    // Apply sorting
    return this.sortStax(filtered)
  }

  sortStax(staxList) {
    const sorted = [...staxList]

    switch (this.state.sortBy) {
      case "lastOpened":
        return sorted.sort((a, b) => new Date(b.lastOpened) - new Date(a.lastOpened))
      case "recentlyUpdated":
        return sorted.sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated))
      case "dueDate":
        // Future: implement due date parsing from nextAction
        return sorted
      case "alphabetical":
        return sorted.sort((a, b) => a.name.localeCompare(b.name))
      default:
        return sorted
    }
  }
}

// Initialize the popup when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new TabStaxPopup()
})
