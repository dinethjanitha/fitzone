import { Route, Routes } from 'react-router-dom'
import Login from '../login'
import WeightPage from '../Components/WeightPage'
import BodyCatagory from '../Components/BodyCatagory'
import AgePage from '../Components/AgePage'
import { isTokenValid } from '../util/util'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AllergicFoods from '../Components/AllergicFoods '
import WorkoutScheduler from '../Components/WorkoutScheduler'
import TargetZones from '../Components/targetZone'

const AppRoutes = ({ saveData }) => {
  const navigate = useNavigate()
  useEffect(() => {
    if (!isTokenValid()) {
      navigate('/signin')
    }
  })

  return (
    <Routes>
      <Route path="/" element={<AgePage saveData={saveData} />} />
      <Route path="/weight" element={<WeightPage saveData={saveData} />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/tr" element={<TargetZones />} />
      <Route
        path="/workout"
        element={<WorkoutScheduler saveData={saveData} />}
      />
      <Route path="/al" element={<AllergicFoods saveData={saveData} />} />
      <Route
        path="/bodycatagory"
        element={<BodyCatagory saveData={saveData} />}
      />
    </Routes>
  )
}

export default AppRoutes
