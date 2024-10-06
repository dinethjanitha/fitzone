import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Select from 'react-select'
import './ScheduleForm.css' // Your CSS file for styling

const ScheduleForm = () => {
  // States for form fields
  const [scheduleName, setScheduleName] = useState('')
  const [description, setDescription] = useState('')
  const [howToDo, setHowToDo] = useState('')
  const [selectedExercises, setSelectedExercises] = useState([]) // For selected exercises
  const [exercises, setExercises] = useState([]) // For fetched exercises
  const [exerciseDetails, setExerciseDetails] = useState([]) // For storing sets/reps
  const [message, setMessage] = useState('')

  // Fetch exercises from the API when the component loads
  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:3000/api/v1/exerc')
        const exerciseOptions = response.data.data.exercises.map(
          (exercise) => ({
            value: exercise._id,
            label: exercise.exseciseName,
          })
        )
        setExercises(exerciseOptions)
      } catch (error) {
        console.error('Error fetching exercises:', error)
      }
    }
    fetchExercises()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const scheduleData = {
      ScheduleName: scheduleName,
      description: description,
      exercises: exerciseDetails.map((exercise) => ({
        exerciseid: exercise.exerciseid,
        sets: exercise.sets,
        reps: exercise.reps,
      })),
      howtodo: howToDo,
    }

    try {
      const response = await axios.post(
        'http://127.0.0.1:3000/api/v1/schedule',
        scheduleData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      if (response.status === 201) {
        setMessage('Schedule created successfully!')
        // Clear form fields after success
        setScheduleName('')
        setDescription('')
        setHowToDo('')
        setSelectedExercises([])
        setExerciseDetails([])
      }
    } catch (error) {
      console.error('Error adding schedule:', error)
      setMessage('Error adding schedule. Please try again.')
    }
  }

  const handleExerciseChange = (selectedOptions) => {
    setSelectedExercises(selectedOptions)
    const newExerciseDetails = selectedOptions.map((option) => ({
      exerciseid: option.value,
      sets: 3, // Default value for sets
      reps: 10, // Default value for reps
    }))
    setExerciseDetails(newExerciseDetails)
  }

  const handleSetsRepsChange = (index, field, value) => {
    const updatedExerciseDetails = [...exerciseDetails]
    updatedExerciseDetails[index][field] = value
    setExerciseDetails(updatedExerciseDetails)
  }

  return (
    <div className="schedule-form-container">
      <h2>Add New Schedule</h2>
      <form onSubmit={handleSubmit} className="schedule-form">
        <div className="form-group">
          <label>Schedule Name:</label>
          <input
            type="text"
            value={scheduleName}
            onChange={(e) => setScheduleName(e.target.value)}
            placeholder="Enter schedule name"
            required
          />
        </div>

        <div className="form-group">
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
            rows="3"
          />
        </div>

        <div className="form-group">
          <label>Select Exercises:</label>
          <Select
            isMulti
            options={exercises}
            value={selectedExercises}
            onChange={handleExerciseChange}
            placeholder="Search and select exercises..."
          />
        </div>

        {selectedExercises.length > 0 && (
          <div className="exercise-details">
            <h3>Exercise Sets and Reps</h3>
            {selectedExercises.map((exercise, index) => (
              <div key={exercise.value} className="exercise-detail-item">
                <p>
                  <strong>{exercise.label}</strong>
                </p>
                <label>
                  Sets:
                  <input
                    type="number"
                    value={exerciseDetails[index]?.sets}
                    onChange={(e) =>
                      handleSetsRepsChange(index, 'sets', e.target.value)
                    }
                    min="1"
                    required
                  />
                </label>
                <label>
                  Reps:
                  <input
                    type="number"
                    value={exerciseDetails[index]?.reps}
                    onChange={(e) =>
                      handleSetsRepsChange(index, 'reps', e.target.value)
                    }
                    min="1"
                    required
                  />
                </label>
              </div>
            ))}
          </div>
        )}

        <div className="form-group">
          <label>How to Do:</label>
          <textarea
            value={howToDo}
            onChange={(e) => setHowToDo(e.target.value)}
            placeholder="Explain how to do the exercises"
            rows="4"
          />
        </div>

        <button type="submit" className="submit-btn">
          Add Schedule
        </button>
      </form>

      {message && <div className="message">{message}</div>}
    </div>
  )
}

export default ScheduleForm
