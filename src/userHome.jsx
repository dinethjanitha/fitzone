import { useState } from 'react'
import AppRoutes from './Routers/appRouters'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './NavBar'

const UserHome = () => {
  const [userData, setUserData] = useState({})

  const saveData = (data) => {
    setUserData((prevData) => ({
      ...prevData,
      ...data,
    }))
  }

  return (
    <div>
      <Router>
        <AppRoutes saveData={saveData} alldata={userData} />
        {console.log(userData)}
      </Router>
    </div>
  )
}

export default UserHome
