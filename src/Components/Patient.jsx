import { useState } from 'react'

// Mock patient data
const mockPatients = [
  {
    id: "1",
    name: "Priya Sharma",
    age: 32,
    gender: "Female",
    phone: "+91 98765 43210",
    email: "priya.sharma@email.com",
    constitution: "Vata-Pitta",
    lastVisit: "2024-01-15",
    status: "Active",
    dietPlan: "Weight Management",
  },
  {
    id: "2",
    name: "Rajesh Kumar",
    age: 45,
    gender: "Male",
    phone: "+91 87654 32109",
    email: "rajesh.kumar@email.com",
    constitution: "Kapha-Vata",
    lastVisit: "2024-01-12",
    status: "Active",
    dietPlan: "Diabetes Control",
  },
  {
    id: "3",
    name: "Anita Patel",
    age: 28,
    gender: "Female",
    phone: "+91 76543 21098",
    email: "anita.patel@email.com",
    constitution: "Pitta",
    lastVisit: "2024-01-10",
    status: "Inactive",
    dietPlan: "Digestive Health",
  },
  {
    id: "4",
    name: "Vikram Singh",
    age: 38,
    gender: "Male",
    phone: "+91 65432 10987",
    email: "vikram.singh@email.com",
    constitution: "Vata",
    lastVisit: "2024-01-08",
    status: "Active",
    dietPlan: "Immunity Boost",
  },
]

export default function Patient() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [constitutionFilter, setConstitutionFilter] = useState("all")

  const filteredPatients = mockPatients.filter((patient) => {
    const matchesSearch =
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || patient.status.toLowerCase() === statusFilter
    const matchesConstitution = constitutionFilter === "all" || patient.constitution === constitutionFilter

    return matchesSearch && matchesStatus && matchesConstitution
  })

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase()
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Patients</h1>
          <p className="text-gray-600 mt-1">Manage your patient profiles and health records</p>
        </div>
        <a
          href="/patients/new"
          className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-600 text-white rounded-md hover:bg-cyan-700 transition-colors"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add Patient
        </a>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 flex items-center gap-2">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.707A1 1 0 013 7V4z" />
            </svg>
            Search & Filter
          </h3>
        </div>
        <div className="p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="relative flex-1">
              <svg className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search patients by name or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none"
              />
            </div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full md:w-40 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none bg-white"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            <select
              value={constitutionFilter}
              onChange={(e) => setConstitutionFilter(e.target.value)}
              className="w-full md:w-48 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none bg-white"
            >
              <option value="all">All Constitutions</option>
              <option value="Vata">Vata</option>
              <option value="Pitta">Pitta</option>
              <option value="Kapha">Kapha</option>
              <option value="Vata-Pitta">Vata-Pitta</option>
              <option value="Kapha-Vata">Kapha-Vata</option>
              <option value="Pitta-Kapha">Pitta-Kapha</option>
            </select>
          </div>
        </div>
      </div>

      {/* Patients Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredPatients.map((patient) => (
          <div key={patient.id} className="bg-purple-200 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="px-6 py-4 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-600 text-white font-medium">
                    {getInitials(patient.name)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{patient.name}</h3>
                    <p className="text-sm text-gray-600">
                      {patient.age} years, {patient.gender}
                    </p>
                  </div>
                </div>
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                  patient.status === "Active" 
                    ? "bg-purple-600 text-white" 
                    : "bg-gray-100 text-gray-800"
                }`}>
                  {patient.status}
                </span>
              </div>
            </div>
            <div className="px-6 py-4 space-y-3">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Constitution:</span>
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border border-gray-300 text-gray-700">
                    {patient.constitution}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Diet Plan:</span>
                  <span className="font-medium text-gray-900">{patient.dietPlan}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Last Visit:</span>
                  <span className="flex items-center gap-1 text-gray-900">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {new Date(patient.lastVisit).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Contact:</span>
                  <span className="text-xs text-gray-900">{patient.phone}</span>
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <a
                  href={`/patients/${patient.id}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                >
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  View
                </a>
                <a
                  href={`/patients/${patient.id}/edit`}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                >
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  Edit
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredPatients.length === 0 && (
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="py-12 text-center">
            <p className="text-gray-600">No patients found matching your criteria.</p>
          </div>
        </div>
      )}
    </div>
  )
}