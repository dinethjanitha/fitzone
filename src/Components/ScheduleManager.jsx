import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Select from 'react-select'

const ScheduleManager = () => {
  const [schedules, setSchedules] = useState([])
  const [exercises, setExercises] = useState([])
  const [editingSchedule, setEditingSchedule] = useState(null) // For editing
  const [selectedExercises, setSelectedExercises] = useState([]) // For exercises in dropdown
  const [message, setMessage] = useState('')

  // Fetch all schedules when the component loads
  useEffect(() => {
    fetchSchedules()
    fetchExercises()
  }, [])

  // Function to fetch all schedules
  const fetchSchedules = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:3000/api/v1/schedule')
      setSchedules(response.data.data.schedules)
    } catch (error) {
      console.error('Error fetching schedules:', error)
    }
  }

  // Function to fetch all exercises for dropdown
  const fetchExercises = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:3000/api/v1/exerc')
      const exerciseOptions = response.data.data.exercises.map((exercise) => ({
        value: exercise._id,
        label: exercise.exseciseName,
      }))
      setExercises(exerciseOptions)
    } catch (error) {
      console.error('Error fetching exercises:', error)
    }
  }

  // Handle the Edit button click and open the modal with the schedule data pre-filled
  const handleEdit = (schedule) => {
    setEditingSchedule(schedule)
    const selected = schedule.exerciseid.map((id) => {
      const exercise = exercises.find((ex) => ex.value === id)
      return { value: exercise?.value, label: exercise?.label }
    })
    setSelectedExercises(selected)
  }

  // Handle the delete operation
  const handleDelete = async (scheduleId) => {
    if (window.confirm('Are you sure you want to delete this schedule?')) {
      try {
        await axios.delete(
          `http://127.0.0.1:3000/api/v1/schedule/${scheduleId}`
        )
        setMessage('Schedule deleted successfully!')
        fetchSchedules() // Refresh schedules
      } catch (error) {
        console.error('Error deleting schedule:', error)
        setMessage('Error deleting schedule. Please try again.')
      }
    }
  }

  // Handle saving the edited schedule
  const handleSave = async () => {
    const updatedSchedule = {
      ScheduleName: editingSchedule.ScheduleName,
      description: editingSchedule.description,
      exerciseid: selectedExercises.map((ex) => ex.value),
      howtodo: editingSchedule.howtodo,
    }

    try {
      await axios.patch(
        `http://127.0.0.1:3000/api/v1/schedule/${editingSchedule._id}`,
        updatedSchedule
      )
      setMessage('Schedule updated successfully!')
      setEditingSchedule(null) // Close the modal
      fetchSchedules() // Refresh schedules
    } catch (error) {
      console.error('Error updating schedule:', error)
      setMessage('Error updating schedule. Please try again.')
    }
  }

  return (
    <div className="max-w-7xl mx-auto py-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Manage Schedules</h2>
      {message && (
        <div className="mb-4 text-green-600 font-semibold text-center">
          {message}
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <tr>
              <th className="py-3 px-6 text-left">Schedule Name</th>
              <th className="py-3 px-6 text-left">Description</th>
              <th className="py-3 px-6 text-left">Exercises</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm font-light">
            {schedules.map((schedule) => (
              <tr
                key={schedule._id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-left">{schedule.ScheduleName}</td>
                <td className="py-3 px-6 text-left">{schedule.description}</td>
                <td className="py-3 px-6 text-left">
                  {schedule.exerciseid
                    .map((id) => exercises.find((ex) => ex.value === id)?.label)
                    .join(', ')}
                </td>
                <td className="py-3 px-6 text-center">
                  <button
                    onClick={() => handleEdit(schedule)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-600 transition duration-200"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(schedule._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-200"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editingSchedule && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md w-full max-w-md">
            <h3 className="text-lg font-bold mb-4">Edit Schedule</h3>
            <div className="form-group mb-4">
              <label className="block font-semibold mb-2">Schedule Name:</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={editingSchedule.ScheduleName}
                onChange={(e) =>
                  setEditingSchedule({
                    ...editingSchedule,
                    ScheduleName: e.target.value,
                  })
                }
              />
            </div>
            <div className="form-group mb-4">
              <label className="block font-semibold mb-2">Description:</label>
              <textarea
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={editingSchedule.description}
                onChange={(e) =>
                  setEditingSchedule({
                    ...editingSchedule,
                    description: e.target.value,
                  })
                }
              />
            </div>
            <div className="form-group mb-4">
              <label className="block font-semibold mb-2">
                Select Exercises:
              </label>
              <Select
                isMulti
                options={exercises}
                value={selectedExercises}
                onChange={setSelectedExercises}
              />
            </div>
            <div className="form-group mb-4">
              <label className="block font-semibold mb-2">How to Do:</label>
              <textarea
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={editingSchedule.howtodo}
                onChange={(e) =>
                  setEditingSchedule({
                    ...editingSchedule,
                    howtodo: e.target.value,
                  })
                }
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleSave}
                className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-600 transition duration-200"
              >
                Save
              </button>
              <button
                onClick={() => setEditingSchedule(null)}
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition duration-200"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ScheduleManager
