import { useState } from 'react'
import './weightPage.css'
import { useNavigate } from 'react-router-dom'

const WeightPage = ({ saveData }) => {
  const [weight, setWeight] = useState('')
  const [targetWeight, setTargetWeight] = useState('')
  const navigate = useNavigate()

  const handleNext = () => {
    if (weight == '') {
      console.log('Weight is null')
    } else if (targetWeight == '') {
      console.log('Target value is null')
    } else {
      saveData({ weight: parseFloat(weight) }) // Save weight data as a number
      saveData({ targetWeight: parseFloat(targetWeight) }) // Save weight data as a number
      console.log(weight)
      console.log('Form submitted')
      navigate('/bodycatagory')
    }

    // Here, you can navigate further or handle form submission
  }

  return (
    <div className="weight-root">
      <div className="weight-container">
        <h2 className="weight-title">What's your current weight?</h2>

        <div className="weight-input-section">
          <label htmlFor="current-weight" className="weight-label">
            Current weight (kg)
          </label>
          <input
            type="text"
            onChange={(e) => setWeight(e.target.value)}
            value={weight}
            id="current-weight"
            className="weight-input"
            placeholder="--kg"
          />
        </div>

        <div className="weight-input-section">
          <label htmlFor="target-weight" className="weight-label">
            Target weight (kg)
          </label>
          <input
            type="text"
            onChange={(e) => setTargetWeight(e.target.value)}
            value={targetWeight}
            id="target-weight"
            className="weight-input"
            placeholder="--kg"
          />
        </div>

        <div className="weight-button-section">
          <button
            onClick={() => {
              navigate('/')
            }}
            className="back-btn"
          >
            Back
          </button>
          <button onClick={handleNext} className="continue-btn">
            Continue
          </button>
        </div>
      </div>
    </div>
  )
}

export default WeightPage
