import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './ExerciseList.css'
import ExerciseEditForm from './ExerciseEditForm' // Add your styles

const ExerciseList = () => {
  const [exercises, setExercises] = useState([])
  const [editExercise, setEditExercise] = useState(null) // To track the exercise being edited
  const [showModal, setShowModal] = useState(false) // To control modal visibility

  // Fetch all exercises
  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:3000/api/v1/exerc')
        setExercises(response.data.data.exercises)
      } catch (error) {
        console.error('Failed to fetch exercises.', error)
      }
    }
    fetchExercises()
  }, [])

  // Open modal and set exercise for editing
  const handleEditClick = (exercise) => {
    setEditExercise(exercise)
    setShowModal(true)
  }

  // Close modal
  const closeModal = () => {
    setShowModal(false)
    setEditExercise(null)
  }

  // Handle delete
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:3000/api/v1/exerc/${id}`)
      setExercises(exercises.filter((exercise) => exercise._id !== id))
    } catch (error) {
      console.error('Failed to delete exercise.', error)
    }
  }

  return (
    <div className="exercise-list-container">
      <h2>All Exercises</h2>
      <table className="exercise-table">
        <thead>
          <tr>
            <th>Exercise Name</th>
            <th>Description</th>
            <th>Video Link</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {exercises.map((exercise) => (
            <tr key={exercise._id}>
              <td>{exercise.exseciseName}</td>
              <td>{exercise.description}</td>
              <td>
                <a
                  href={exercise.video[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch Video
                </a>
              </td>
              <td>
                <button onClick={() => handleEditClick(exercise)}>Edit</button>
                <button onClick={() => handleDelete(exercise._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Modal */}
      {showModal && editExercise && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Edit Exercise</h3>
            <ExerciseEditForm
              exercise={editExercise}
              closeModal={closeModal}
              setExercises={setExercises}
              exercises={exercises}
            />
            <button className="close-btn" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ExerciseList
