import React, { useEffect } from 'react'
import { Link, useNavigate, Outlet, useLocation } from 'react-router-dom'

const AdminDashboard = () => {
  const navigate = useNavigate()
  const location = useLocation() // Get the current location

  useEffect(() => {
    if (location.pathname === '/admin') {
      navigate('/admin/usermanagement')
    }
  }, [location.pathname, navigate])

  // Function to check if the current path matches the link path
  const isActive = (path) => {
    return location.pathname === `/admin/${path}` ? 'bg-gray-700' : ''
  }

  return (
    <div className="flex">
      <aside className="w-1/4 bg-gray-800 text-white min-h-screen p-4">
        <h2 className="text-xl font-semibold mb-4">Admin Dashboard</h2>
        <nav>
          <ul className="space-y-2">
            <li>
              <Link
                to="usermanagement"
                className={`block p-2 rounded ${isActive('usermanagement')}`}
              >
                User Management
              </Link>
            </li>
            <li>
              <Link to="ex" className={`block p-2 rounded ${isActive('ex')}`}>
                Add Exercises
              </Link>
            </li>
            <li>
              <Link to="el" className={`block p-2 rounded ${isActive('el')}`}>
                Manage Exercise
              </Link>
            </li>
            <li>
              <Link
                to="dietplan"
                className={`block p-2 rounded ${isActive('dietplan')}`}
              >
                Add Diet Plans
              </Link>
            </li>
            <li>
              <Link to="xx" className={`block p-2 rounded ${isActive('xx')}`}>
                Add Schedule
              </Link>
            </li>
            <li>
              <Link to="sx" className={`block p-2 rounded ${isActive('sx')}`}>
                Schedule Manager
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="flex-1 p-6 bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
        <Outlet />
      </main>
    </div>
  )
}

export default AdminDashboard
