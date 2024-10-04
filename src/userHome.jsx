import { useState } from 'react'
import AppRoutes from './Routers/appRouters'
import { BrowserRouter as Router } from 'react-router-dom'

const UserHome = () => {
  const [userData, setUserData] = useState({})

  const saveData = (data) => {
    setUserData((prevData) => ({
      ...prevData,
      ...data,
    }))
  }

  return (
    <Router>
      <AppRoutes saveData={saveData} />
      {console.log(userData)}
      {/* Display Collected Data
      <div>
        <h3>Collected Data:</h3>
        <pre>{JSON.stringify(userData, null, 2)}</pre>
      </div> */}
    </Router>
  )
}

export default UserHome
