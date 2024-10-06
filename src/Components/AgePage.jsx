import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import body from '../assets/body.webp'

const AgePage = ({ saveData }) => {
  const attachUserID = () => {
    const token = localStorage.getItem('token')
    const payload = JSON.parse(atob(token.split('.')[1]))
    console.log('payload is: ', payload.id)

    saveData({ userid: payload.id })
  }

  const [age, setAge] = useState('')
  const navigate = useNavigate()

  const handleNext = () => {
    attachUserID()
    saveData({ age: parseFloat(age) })
    navigate('/weight')
  }

  const handleCategoryClick = (age) => {
    attachUserID()
    saveData({ age: parseFloat(age) })
    navigate('/weight')
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
        What's your current and target weight?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-0">
        {/* Age 18-29 */}
        <div
          onClick={() => handleCategoryClick(18)}
          className="cursor-pointer bg-white shadow-lg rounded-lg p-6 transition transform hover:scale-105 hover:shadow-xl"
        >
          <div className="flex justify-center">
            <img
              src={body}
              alt="AGE 18-29"
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
          <div className="text-center mt-4">
            <p className="text-xl font-semibold text-gray-700">AGE 18-29 🏃</p>
          </div>
        </div>

        {/* Age 30-39 */}
        <div
          onClick={() => handleCategoryClick(30)}
          className="cursor-pointer bg-white shadow-lg rounded-lg p-6 transition transform hover:scale-105 hover:shadow-xl"
        >
          <div className="flex justify-center">
            <img
              src="https://thumbs.dreamstime.com/b/little-boy-playing-building-blocks-22184576.jpg"
              alt="AGE 30-39"
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
          <div className="text-center mt-4">
            <p className="text-xl font-semibold text-gray-700">AGE 30-39 🏃</p>
          </div>
        </div>

        {/* Age 40-49 */}
        <div
          onClick={() => handleCategoryClick(40)}
          className="cursor-pointer bg-white shadow-lg rounded-lg p-6 transition transform hover:scale-105 hover:shadow-xl"
        >
          <div className="flex justify-center">
            <img
              src="https://wallpaperset.com/w/full/c/1/4/459707.jpg"
              alt="AGE 40-49"
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
          <div className="text-center mt-4">
            <p className="text-xl font-semibold text-gray-700">AGE 40-49 🏃</p>
          </div>
        </div>

        {/* Age 50+ */}
        <div
          onClick={() => handleCategoryClick(50)}
          className="cursor-pointer bg-white shadow-lg rounded-lg p-6 transition transform hover:scale-105 hover:shadow-xl"
        >
          <div className="flex justify-center">
            <img
              src="https://images.pexels.com/photos/3939167/pexels-photo-3939167.jpeg?cs=srgb&dl=pexels-victoria-borodinova-3939167.jpg&fm=jpg"
              alt="AGE 50+"
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
          <div className="text-center mt-4">
            <p className="text-xl font-semibold text-gray-700">AGE 50+ 🏃</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AgePage
