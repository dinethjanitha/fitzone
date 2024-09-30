import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from 'react-router-dom'

const AgePage = ({ saveData }) => {
  const [age, setAge] = useState('')
  const history = useHistory()

  const handleNext = () => {
    saveData(age) // Save the age
    history.push('/weight') // Navigate to the weight page
  }

  return (
    <div>
      <h2>Enter your Age</h2>
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Enter your age"
      />
      <button onClick={handleNext}>Next</button>
    </div>
  )
}

const WeightPage = ({ saveData }) => {
  const [weight, setWeight] = useState('')
  const history = useHistory()

  const handleNext = () => {
    saveData(weight) // Save the weight
    // Do something after weight entry, like submitting the data
    console.log('Form submitted')
  }

  return (
    <div>
      <h2>Enter your Weight</h2>
      <input
        type="number"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        placeholder="Enter your weight"
      />
      <button onClick={handleNext}>Submit</button>
    </div>
  )
}

const App = () => {
  const [userData, setUserData] = useState([])

  const saveData = (data) => {
    setUserData((prevData) => [...prevData, data])
  }

  return (
    <Router>
      <Switch>
        <Route path="/weight">
          <WeightPage saveData={saveData} />
        </Route>
        <Route path="/">
          <AgePage saveData={saveData} />
        </Route>
      </Switch>

      <div>
        <h3>Collected Data:</h3>
        <pre>{JSON.stringify(userData, null, 2)}</pre>
      </div>
    </Router>
  )
}
