

import { useState } from "react"
import { Link } from "react-router-dom";

// Mock diet charts data
const mockDietCharts = [
  {
    id: "1",
    patientName: "Priya Sharma",
    patientId: "1",
    title: "Weight Management Plan",
    constitution: "Vata-Pitta",
    goal: "Weight Loss",
    duration: "4 weeks",
    status: "Active",
    createdDate: "2024-01-15",
    lastModified: "2024-01-20",
    totalCalories: 1800,
    mealCount: 4,
  },
  {
    id: "2",
    patientName: "Rajesh Kumar",
    patientId: "2",
    title: "Diabetes Control Diet",
    constitution: "Kapha-Vata",
    goal: "Blood Sugar Control",
    duration: "8 weeks",
    status: "Active",
    createdDate: "2024-01-12",
    lastModified: "2024-01-18",
    totalCalories: 2000,
    mealCount: 5,
  },
  {
    id: "3",
    patientName: "Anita Patel",
    patientId: "3",
    title: "Digestive Health Plan",
    constitution: "Pitta",
    goal: "Improve Digestion",
    duration: "6 weeks",
    status: "Completed",
    createdDate: "2024-01-10",
    lastModified: "2024-01-15",
    totalCalories: 1900,
    mealCount: 3,
  },
  {
    id: "4",
    patientName: "Vikram Singh",
    patientId: "4",
    title: "Immunity Boost Program",
    constitution: "Vata",
    goal: "Strengthen Immunity",
    duration: "12 weeks",
    status: "Active",
    createdDate: "2024-01-08",
    lastModified: "2024-01-22",
    totalCalories: 2200,
    mealCount: 4,
  },
]

// Custom Button Component
const Button = ({ children, variant = "default", size = "default", className = "", ...props }) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none shadow-sm hover:shadow-md"

  const variants = {
    default: "bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-lg",
    outline: "border-2 border-primary/20 bg-card hover:bg-primary/5 hover:border-primary/40 text-foreground",
    secondary: "bg-gradient-secondary text-secondary-foreground hover:opacity-90",
    success: "bg-success text-success-foreground hover:bg-success/90",
    warning: "bg-warning text-warning-foreground hover:bg-warning/90",
  }

  const sizes = {
    default: "h-11 px-6 py-2 text-sm",
    sm: "h-9 px-4 text-sm",
  }

  return (
    <button className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  )
}

// Custom Input Component
const Input = ({ className = "", ...props }) => {
  return (
    <input
      className={`flex h-11 w-full rounded-xl border-2 border-input bg-card/50 backdrop-blur-sm px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:border-primary/50 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 ${className}`}
      {...props}
    />
  )
}

// Custom Card Components
const Card = ({ children, className = "", variant = "default", ...props }) => {
  const variants = {
    default: "bg-card/80 backdrop-blur-sm border-2 border-border/50",
    gradient: "bg-gradient-primary border-2 border-primary/20",
    accent: "bg-gradient-accent border-2 border-accent/20",
  }

  return (
    <div
      className={`rounded-2xl ${variants[variant]} text-card-foreground shadow-xl hover:shadow-2xl transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

const CardHeader = ({ children, className = "", ...props }) => {
  return (
    <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props}>
      {children}
    </div>
  )
}

const CardTitle = ({ children, className = "", ...props }) => {
  return (
    <h3 className={`text-2xl font-semibold leading-none tracking-tight ${className}`} {...props}>
      {children}
    </h3>
  )
}

const CardContent = ({ children, className = "", ...props }) => {
  return (
    <div className={`p-6 pt-0 ${className}`} {...props}>
      {children}
    </div>
  )
}

// Custom Badge Component
const Badge = ({ children, variant = "default", className = "", ...props }) => {
  const variants = {
  default: "bg-white/80 backdrop-blur-sm border-2 border-gray-200",
  gradient: "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 border-0",
  accent: "bg-gradient-to-r from-green-400 to-blue-500 border-0",
}

  return (
    <div
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

// Custom Avatar Component
const Avatar = ({ children, className = "", ...props }) => {
  return (
    <div
      className={`relative flex shrink-0 overflow-hidden rounded-full ring-2 ring-primary/20 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

const AvatarFallback = ({ children, className = "", ...props }) => {
  return (
    <div
      className={`flex h-full w-full items-center justify-center rounded-full bg-gradient-primary text-primary-foreground font-semibold ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

// Custom Select Components
const Select = ({ children, ...props }) => {
  return (
    <div className="relative" {...props}>
      {children}
    </div>
  )
}

const SelectTrigger = ({ children, className = "", onClick, ...props }) => {
  return (
    <button
      className={`flex h-10 w-full items-center justify-between rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
      <svg className="h-4 w-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  )
}

const SelectValue = ({ placeholder }) => {
  return <span className="text-muted-foreground">{placeholder}</span>
}

const SelectContent = ({ children }) => {
  return (
    <div className="absolute top-full left-0 z-50 w-full mt-1 rounded-lg border bg-popover text-popover-foreground shadow-md">
      {children}
    </div>
  )
}

const SelectItem = ({ children, onClick }) => {
  return (
    <div
      className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground"
      onClick={onClick}
    >
      {children}
    </div>
  )
}

// Helper function to get initials
const getInitials = (name) => {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2)
}

export default function DietChartsView() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [goalFilter, setGoalFilter] = useState("all")
  const [statusDropdownOpen, setStatusDropdownOpen] = useState(false)
  const [goalDropdownOpen, setGoalDropdownOpen] = useState(false)

  const filteredCharts = mockDietCharts.filter((chart) => {
    const matchesSearch =
      chart.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      chart.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || chart.status.toLowerCase() === statusFilter
    const matchesGoal = goalFilter === "all" || chart.goal === goalFilter

    return matchesSearch && matchesStatus && matchesGoal
  })

  const handleStatusChange = (value) => {
    setStatusFilter(value)
    setStatusDropdownOpen(false)
  }

  const handleGoalChange = (value) => {
    setGoalFilter(value)
    setGoalDropdownOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="space-y-8 p-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-gradient">Diet Charts</h1>
            <p className="text-muted-foreground text-lg text-pretty">
              Manage personalized Ayurvedic diet plans for your patients
            </p>
          </div>
         

<Link to="/diet-charts/create">Create New Chart</Link>

            <Button className="gap-2 text-base px-8">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Create Diet Chart
            </Button>
        
        </div>

        {/* Stats Overview */}
        <div className="grid gap-6 md:grid-cols-4">
          <Card variant="gradient" className="text-primary-foreground">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold">12</div>
                  <p className="text-primary-foreground/80 font-medium">Active Charts</p>
                </div>
                <div className="p-3 bg-white/20 rounded-xl">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-success/10 border-success/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-success">8</div>
                  <p className="text-muted-foreground font-medium">Completed</p>
                </div>
                <div className="p-3 bg-success/20 rounded-xl">
                  <svg className="h-6 w-6 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-chart-2/10 border-chart-2/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-chart-2">1,950</div>
                  <p className="text-muted-foreground font-medium">Avg Calories</p>
                </div>
                <div className="p-3 bg-chart-2/20 rounded-xl">
                  <svg className="h-6 w-6 text-chart-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-warning/10 border-warning/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-warning">94%</div>
                  <p className="text-muted-foreground font-medium">Success Rate</p>
                </div>
                <div className="p-3 bg-warning/20 rounded-xl">
                  <svg className="h-6 w-6 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 bg-gradient-primary rounded-lg">
                <svg className="h-5 w-5 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  />
                </svg>
              </div>
              Search & Filter
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              <div className="relative flex-1">
                <svg
                  className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <Input
                  placeholder="Search by patient name or diet plan..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12"
                />
              </div>

              {/* Status Filter */}
              <div className="relative w-full md:w-40">
                <Button
                  variant="outline"
                  onClick={() => setStatusDropdownOpen(!statusDropdownOpen)}
                  className="w-full justify-between"
                >
                  {statusFilter === "all" ? "All Status" : statusFilter.charAt(0).toUpperCase() + statusFilter.slice(1)}
                  <svg className="h-4 w-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Button>
                {statusDropdownOpen && (
                  <div className="absolute top-full left-0 z-50 w-full mt-2 rounded-xl border-2 border-border/50 bg-card/95 backdrop-blur-sm shadow-xl">
                    {["all", "active", "completed", "paused"].map((status) => (
                      <div
                        key={status}
                        className="relative flex cursor-pointer select-none items-center rounded-lg px-4 py-3 text-sm outline-none hover:bg-accent/50 transition-colors"
                        onClick={() => handleStatusChange(status)}
                      >
                        {status === "all" ? "All Status" : status.charAt(0).toUpperCase() + status.slice(1)}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Goal Filter */}
              <div className="relative w-full md:w-48">
                <Button
                  variant="outline"
                  onClick={() => setGoalDropdownOpen(!goalDropdownOpen)}
                  className="w-full justify-between"
                >
                  {goalFilter === "all" ? "All Goals" : goalFilter}
                  <svg className="h-4 w-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Button>
                {goalDropdownOpen && (
                  <div className="absolute top-full left-0 z-50 w-full mt-2 rounded-xl border-2 border-border/50 bg-card/95 backdrop-blur-sm shadow-xl">
                    {[
                      "all",
                      "Weight Loss",
                      "Weight Gain",
                      "Blood Sugar Control",
                      "Improve Digestion",
                      "Strengthen Immunity",
                    ].map((goal) => (
                      <div
                        key={goal}
                        className="relative flex cursor-pointer select-none items-center rounded-lg px-4 py-3 text-sm outline-none hover:bg-accent/50 transition-colors"
                        onClick={() => handleGoalChange(goal)}
                      >
                        {goal === "all" ? "All Goals" : goal}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Diet Charts Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCharts.map((chart) => (
            <Card key={chart.id} className="hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12 ring-2 ring-primary/30 shadow-md">

                      <AvatarFallback>{getInitials(chart.patientName)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                        {chart.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{chart.patientName}</p>
                    </div>
                  </div>
                  <Badge
                    variant={
                      chart.status === "Active" ? "default" : chart.status === "Completed" ? "success" : "secondary"
                    }
                  >
                    {chart.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Constitution:</span>
                    <Badge variant="accent">{chart.constitution}</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Goal:</span>
                    <span className="flex items-center gap-2 font-medium">
                      <div className="p-1 bg-success/20 rounded-full">
                        <svg className="h-3 w-3 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      {chart.goal}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="font-medium">{chart.duration}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Calories/day:</span>
                    <span className="font-bold text-chart-2">{chart.totalCalories}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Created:</span>
                    <span className="flex items-center gap-2 font-medium">
                      <div className="p-1 bg-primary/20 rounded-full">
                        <svg className="h-3 w-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      {new Date(chart.createdDate).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                 <Link to={`/diet-charts/${chart.id}`} className="flex-1">
  View Chart
</Link>
                    <Button variant="outline" size="sm" className="w-full gap-2 bg-transparent">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                      View
                    </Button>
              
                 <Link to={`/diet-charts/${chart.id}/edit`} className="flex-1">
  <Button variant="secondary" size="sm" className="w-full gap-2">
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
      />
    </svg>
    Edit
  </Button>
</Link>

                    <Button variant="secondary" size="sm" className="w-full gap-2">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                      Edit
                    </Button>
                 
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCharts.length === 0 && (
          <Card className="bg-muted/30">
            <CardContent className="py-16 text-center">
              <div className="mx-auto w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <p className="text-muted-foreground text-lg">No diet charts found matching your criteria.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
