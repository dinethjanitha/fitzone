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
import YourPlan from '../Components/YourPlan'
import YourExperience from '../Components/YourExperience'
import UserDetailsSummary from '../Components/UserDetailsSummary'
import Home from '../Components/Home'
import YourDiet from '../Components/YourDiet'
import MuscleGoal from '../Components/MuscleGoal '
import ExerciseForm from '../Components/ExerciseForm'
import ExerciseList from '../Components/ExerciseList'
import ScheduleForm from '../Components/ScheduleForm'
import ScheduleManager from '../Components/ScheduleManager'

const AppRoutes = ({ saveData, alldata }) => {
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
      <Route path="/tr" element={<TargetZones saveData={saveData} />} />
      <Route
        path="/yp"
        element={<YourPlan saveData={saveData} alldata={alldata} />}
      />
      <Route path="/yx" element={<YourExperience saveData={saveData} />} />
      <Route path="/yd" element={<YourDiet saveData={saveData} />} />
      <Route path="/ms" element={<MuscleGoal saveData={saveData} />} />
      <Route path="/ex" element={<ExerciseForm />} />
      <Route path="/el" element={<ExerciseList />} />
      <Route path="/home" element={<Home />} />
      <Route path="/xx" element={<ScheduleForm />} />
      <Route path="/sx" element={<ScheduleManager />} />
      <Route path="/sm" element={<UserDetailsSummary alldata={alldata} />} />
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
