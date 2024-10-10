import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Line, Bar } from 'react-chartjs-2'
import axios from 'axios'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const Dashboard = () => {
  const [trackingData, setTrackingData] = useState([])
  const [exercises, setExercises] = useState({})
  const [message, setMessage] = useState('')
  const jwtToken = localStorage.getItem('token')

  const getUserIdFromJWT = () => {
    const payload = JSON.parse(atob(jwtToken.split('.')[1]))
    return payload.id
  }

  const fetchTrackingData = async () => {
    const userId = getUserIdFromJWT()
    try {
      const response = await axios.get(
        `http://127.0.0.1:3000/api/v1/tracking/${userId}`,
        {
          headers: { Authorization: `Bearer ${jwtToken}` },
        }
      )
      setTrackingData(response.data.data.tracking)
    } catch (error) {
      setMessage('Error fetching tracking data.')
      console.error(error)
    }
  }

  const fetchExercises = async (exerciseIds) => {
    try {
      const exercisePromises = exerciseIds.map((id) =>
        axios.get(`http://127.0.0.1:3000/api/v1/exerc/${id}`, {
          headers: { Authorization: `Bearer ${jwtToken}` },
        })
      )

      const exerciseResponses = await Promise.all(exercisePromises)
      const exercisesData = exerciseResponses.reduce((acc, response) => {
        const exercise = response.data.data.exercise
        acc[exercise._id] = exercise
        return acc
      }, {})

      setExercises(exercisesData)
    } catch (error) {
      console.error('Error fetching exercises:', error)
    }
  }

  useEffect(() => {
    fetchTrackingData()
  }, [])

  useEffect(() => {
    if (trackingData.length > 0) {
      const exerciseIds = [
        ...new Set(trackingData.map((item) => item.exerciseid)),
      ]
      fetchExercises(exerciseIds)
    }
  }, [trackingData])

  const weightProgressData = {
    labels: trackingData.map((item) => item.week),
    datasets: [
      {
        label: 'Weight (kg)',
        data: trackingData.map((item) => item.weight),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  }

  // Prepare workout progress data
  const getLast7DaysData = () => {
    const today = new Date()
    const last7Days = Array.from({ length: 7 }, (_, i) => {
      const date = new Date(today)
      date.setDate(today.getDate() - i)
      return date.toLocaleDateString()
    })

    const completedCounts = {}
    last7Days.forEach((day) => {
      completedCounts[day] = {}
      Object.keys(exercises).forEach((exerciseId) => {
        completedCounts[day][exerciseId] = 0
      })
    })

    trackingData.forEach((item) => {
      const completedDate = new Date(item.completedAt).toLocaleDateString()
      if (completedCounts.hasOwnProperty(completedDate)) {
        completedCounts[completedDate][item.exerciseid] += 1
      }
    })

    return {
      labels: last7Days,
      data: Object.keys(exercises).map((exerciseId) => ({
        exerciseId: exerciseId,
        counts: last7Days.map((day) => completedCounts[day][exerciseId]),
      })),
    }
  }

  const { labels, data } = getLast7DaysData()

  const workoutProgressData = {
    labels: labels,
    datasets: data.map((exerciseData) => ({
      label:
        exercises[exerciseData.exerciseId]?.exseciseName || 'Unknown Exercise',
      data: exerciseData.counts,
      backgroundColor: 'rgba(54, 162, 235, 0.6)',
    })),
  }

  const weightOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        display: true,
        text: 'Weight Progress Over the Weeks',
      },
    },
  }

  const workoutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        display: true,
        text: 'Workout Reps Completed Over the Last 7 Days',
      },
    },
  }

  return (
    <div className="flex">
      <aside className="w-64 h-screen bg-gray-800 text-white">
        <div className="p-4 text-center">
          <h2 className="text-2xl font-bold">Fit Zone</h2>
          <p className="mt-2">Welcome, User!</p>
        </div>
        <nav className="mt-6">
          <ul>
            <li>
              <Link to="/profile" className="block py-2 px-4 hover:bg-gray-700">
                Profile
              </Link>
            </li>
            <li>
              <Link to="/diet" className="block py-2 px-4 hover:bg-gray-700">
                Diet Plan
              </Link>
            </li>
            <li>
              <Link
                to="/usertracking"
                className="block py-2 px-4 hover:bg-gray-700"
              >
                User Tracking
              </Link>
            </li>
            <li>
              <Link to="/m" className="block py-2 px-4 hover:bg-gray-700">
                Motivational Content
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="flex-1 p-6 bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>

        {message && <div className="mb-4 text-red-600">{message}</div>}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">User Overview</h2>
            <p className="text-lg">
              Current Weight:{' '}
              <span className="font-normal">{trackingData[0]?.weight} kg</span>{' '}
            </p>
            <p className="text-lg">
              Goal Weight: <span className="font-normal">65 kg</span>
            </p>
            <p className="text-lg">
              Experience Level:{' '}
              <span className="font-normal">Intermediate</span>
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">Diet Overview</h2>
            <p className="text-lg">
              Current Diet Plan:{' '}
              <span className="font-normal">Weight Loss Plan</span>
            </p>
            <p className="text-lg">
              Next Meal:{' '}
              <span className="font-normal">Grilled Chicken with Salad</span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">Workout Progress</h2>
            <div className="h-48">
              <Bar data={workoutProgressData} options={workoutOptions} />
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Recent Activities</h2>
          <ul>
            <li className="text-lg">Updated Profile on 10/01/2024</li>
            <li className="text-lg">Logged a meal on 10/02/2024</li>
            <li className="text-lg">Completed a workout on 10/03/2024</li>
          </ul>
        </div>
      </main>
    </div>
  )
}

export default Dashboard
