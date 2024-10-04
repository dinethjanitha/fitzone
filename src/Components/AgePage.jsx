import { useState } from 'react'
import './agePage.css'
import { useNavigate } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const AgePage = ({ saveData }) => {
  const [age, setAge] = useState('')
  const navigate = useNavigate() // useNavigate for navigation

  const handleNext = () => {
    saveData({ age: parseFloat(age) }) // Save age data as a number
    navigate('/weight') // Navigate to weight page
  }

  const ageCatagoryOne = () => {
    saveData({ age: parseFloat(18) }) // Save age data as a number
    navigate('/weight') // Navigate to weight page
  }

  const ageCatagoryTwo = () => {
    saveData({ age: parseFloat(30) }) // Save age data as a number
    navigate('/weight') // Navigate to weight page
  }

  const ageCatagorythree = () => {
    saveData({ age: parseFloat(40) }) // Save age data as a number
    navigate('/weight') // Navigate to weight page
  }

  const ageCatagoryFour = () => {
    saveData({ age: parseFloat(50) }) // Save age data as a number
    navigate('/weight') // Navigate to weight page
  }

  return (
    // <div>
    //   <h2>Enter your Age</h2>
    //   <input
    //     type="number"
    //     value={age}
    //     onChange={(e) => setAge(e.target.value)}
    //     placeholder="Enter your age"
    //   />
    //   <button onClick={handleNext}>Next</button>
    // </div>

    <div className="weight-age-container">
      <h2 className="header-title">What's your current and target weight?</h2>

      <section className="age-category-grid">
        <div className="age-card" onClick={ageCatagoryOne}>
          <div className="age-image-container">
            <img
              src="https://www.theschoolrun.com/sites/theschoolrun.com/files/article_images/boy_blocks_building.jpg"
              alt="AGE 18-29"
              className="age-image"
            />
          </div>
          <div className="age-label">
            <p>AGE 18-29 🏃</p>
          </div>
        </div>

        <div className="age-card" onClick={ageCatagoryTwo}>
          <div className="age-image-container">
            <img
              src="https://thumbs.dreamstime.com/b/little-boy-playing-building-blocks-22184576.jpg"
              alt="AGE 30-39"
              className="age-image"
            />
          </div>
          <div className="age-label">
            <p>AGE 30-39 🏃</p>
          </div>
        </div>

        <div className="age-card" onClick={ageCatagorythree}>
          <div className="age-image-container">
            <img
              src="https://wallpaperset.com/w/full/c/1/4/459707.jpg"
              alt="AGE 40-49"
              className="age-image"
            />
          </div>
          <div className="age-label">
            <p>AGE 40-49 🏃</p>
          </div>
        </div>

        <div className="age-card" onClick={ageCatagoryFour}>
          <div className="age-image-container">
            <img
              src="https://images.pexels.com/photos/3939167/pexels-photo-3939167.jpeg?cs=srgb&dl=pexels-victoria-borodinova-3939167.jpg&fm=jpg"
              alt="AGE 50+"
              className="age-image"
            />
          </div>
          <div className="age-label">
            <p>AGE 50+ 🏃</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AgePage
