import React, { useState } from 'react'
import './appComponet.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom'

// AgePage Component
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

    <div className="Age-Root">
      <div className="container-root">
        <h2>What's you current and target weight?</h2>

        <section className="age-catagory">
          <div className="body-card">
            <div className="image-container">
              <img
                src="https://www.theschoolrun.com/sites/theschoolrun.com/files/article_images/boy_blocks_building.jpg"
                alt="AGE 18-29"
              />
            </div>
            <div className="label">
              <p onClick={ageCatagoryOne}>AGE 18-29🏃</p>
            </div>
          </div>

          <div className="body-card">
            <div className="image-container">
              <img
                src="https://thumbs.dreamstime.com/b/little-boy-playing-building-blocks-22184576.jpg"
                alt="AGE 30-39"
              />
            </div>
            <div className="label">
              <p>AGE 30-39🏃</p>
            </div>
          </div>

          <div className="body-card">
            <div className="image-container">
              <img
                src="https://wallpaperset.com/w/full/c/1/4/459707.jpg"
                alt="AGE 40-49"
              />
            </div>
            <div className="label">
              <p>AGE 40-49 🏃</p>
            </div>
          </div>

          <div className="body-card">
            <div className="image-container">
              <img
                src="https://images.pexels.com/photos/3939167/pexels-photo-3939167.jpeg?cs=srgb&dl=pexels-victoria-borodinova-3939167.jpg&fm=jpg"
                alt="AGE 50+ "
              />
            </div>
            <div className="label">
              <p>AGE 50+ 🏃</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

const BodyCatagory = ({ saveData }) => {
  // const [bodyCatagory, setBodyCatagory] = useState('')

  const firstBodyCatagory = () => {
    saveData({ NowBody: 'one' })
  }

  const secondBodyCatagory = () => {
    saveData({ NowBody: 'two' })
  }

  const thirdBodyCatagory = () => {
    saveData({ NowBody: 'three' })
  }

  const forthBodyCatagory = () => {
    saveData({ NowBody: 'four' })
  }

  const GoalFirstBodyCatagory = () => {
    saveData({ GoalBody: 'Goal One' })
  }

  const GoalSecondBodyCatagory = () => {
    saveData({ GoalBody: 'Goal Two' })
  }

  const GoalThirdBodyCatagory = () => {
    saveData({ GoalBody: 'Goal Three' })
  }

  const GoalForthBodyCatagory = () => {
    saveData({ GoalBody: 'Goal Four' })
  }

  return (
    <div className="Age-Root">
      <div className="container">
        <div>
          <h2>Body Types</h2>

          <section className="body-type">
            <div className="body-card">
              <img
                src="https://wallpaperset.com/w/full/c/1/4/459707.jpg"
                alt="Slim Body Type"
              />
              <div className="label" onClick={firstBodyCatagory}>
                Very Heavy Body Type
              </div>
            </div>

            <div className="body-card">
              <img src="img/Dineth Janitha.jpg" alt="Average Body Type" />
              <div className="label" onClick={secondBodyCatagory}>
                Heavy Body Type
              </div>
            </div>

            <div className="body-card">
              <img src="img/Hasindu Wijesinghe.jpg" alt="Heavy Body Type" />
              <div className="label" onClick={thirdBodyCatagory}>
                Average Body Type
              </div>
            </div>

            <div className="body-card">
              <img src="img/Hasindu Wijesinghe.jpg" alt="Heavy Body Type" />
              <div className="label" onClick={forthBodyCatagory}>
                Slim Body Type
              </div>
            </div>
          </section>
        </div>

        <div>
          <h2 className="Goal-Body-H">Goal Body Type</h2>

          <section className="body-type">
            <div className="body-card">
              <img
                src="https://wallpaperset.com/w/full/c/1/4/459707.jpg"
                alt="Slim Body Type"
              />
              <div className="label" onClick={GoalFirstBodyCatagory}>
                Very Heavy Body Type
              </div>
            </div>

            <div className="body-card">
              <img src="img/Dineth Janitha.jpg" alt="Average Body Type" />
              <div className="label" onClick={GoalSecondBodyCatagory}>
                Heavy Body Type
              </div>
            </div>

            <div className="body-card">
              <img src="img/Hasindu Wijesinghe.jpg" alt="Heavy Body Type" />
              <div className="label" onClick={GoalThirdBodyCatagory}>
                Average Body Type
              </div>
            </div>

            <div className="body-card">
              <img src="img/Hasindu Wijesinghe.jpg" alt="Heavy Body Type" />
              <div className="label" onClick={GoalForthBodyCatagory}>
                Slim Body Type
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

// WeightPage Component
const WeightPage = ({ saveData }) => {
  const [weight, setWeight] = useState('')
  const [targetWeight, setTargetWeight] = useState('')
  const navigate = useNavigate() // useNavigate for navigation

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
    <div className="WeightRoot">
      {/* <h2>Enter your Weight</h2>
      <input
        type="number"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        placeholder="Enter your weight"
      />
      <button onClick={handleNext}>Submit</button> */}

      <div className="container">
        <h2>What's you current and target weight?</h2>

        <div className="input-section">
          <label>Current weight (kg)</label>
          <input
            type="text"
            onChange={(e) => setWeight(e.target.value)}
            value={weight}
            id="weight"
            placeholder="--kg"
          />
        </div>

        <div className="input-section">
          <label>Target weight (kg)</label>
          <input
            type="text"
            onChange={(e) => setTargetWeight(e.target.value)}
            value={targetWeight}
            id="weight"
            placeholder="--kg"
          />
        </div>

        <div className="continue-section">
          <button onClick={handleNext} className="continue-btn">
            Continue
          </button>
        </div>
      </div>
    </div>
  )
}

// Main App Component
const App = () => {
  const [userData, setUserData] = useState({}) // Object to store age and weight

  const saveData = (data) => {
    setUserData((prevData) => ({
      ...prevData,
      ...data,
    }))
  }

  return (
    <Router>
      <Routes>
        {/* Define Routes */}
        <Route path="/" element={<AgePage saveData={saveData} />} />
        <Route path="/weight" element={<WeightPage saveData={saveData} />} />
        <Route
          path="/bodycatagory"
          element={<BodyCatagory saveData={saveData} />}
        />
      </Routes>

      {/* Display Collected Data */}
      <div>
        <h3>Collected Data:</h3>
        <pre>{JSON.stringify(userData, null, 2)}</pre>
      </div>
    </Router>
  )
}

export default App
