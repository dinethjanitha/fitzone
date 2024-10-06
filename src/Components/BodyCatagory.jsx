import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import image from '../assets/close.png'

const BodyCatagory = ({ saveData }) => {
  const [bodyCatagory, setBodyCategory] = useState('')
  const [goalBodyCatagory, setGoalBodyCategory] = useState('')
  const [showError, setShowError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    saveData({ currentbodytype: bodyCatagory })
    saveData({ goalbodytype: goalBodyCatagory })
  }, [bodyCatagory, goalBodyCatagory])

  const nextpage = () => {
    if (bodyCatagory === '') {
      setShowError(true)
      setErrorMessage('Please Select Current Body Type')
    } else if (goalBodyCatagory === '') {
      setShowError(true)
      setErrorMessage('Please Select Goal Body Type')
    } else {
      navigate('/al')
    }
  }

  const ErrorMessageModal = ({ message, onClose }) => {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
        <div className="bg-white rounded-lg p-6 w-96 text-center">
          <img src={image} alt="Error" className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-lg text-gray-700 mb-2">{message}</h3>
          <button
            onClick={onClose}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Close
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="mx-auto p-4">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">
            Body Types
          </h2>
          <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div
              className={`p-4 bg-white rounded-lg shadow-md cursor-pointer transition-transform transform ${
                bodyCatagory === 'Very Heavy'
                  ? 'ring-2 ring-indigo-500 scale-105'
                  : ''
              }`}
              onClick={() => setBodyCategory('Very Heavy')}
            >
              <img
                src="https://wallpaperset.com/w/full/c/1/4/459707.jpg"
                alt="Very Heavy Body Type"
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="text-center mt-2 text-gray-700">
                Very Heavy Body Type
              </div>
            </div>

            <div
              className={`p-4 bg-white rounded-lg shadow-md cursor-pointer transition-transform transform ${
                bodyCatagory === 'Heavy'
                  ? 'ring-2 ring-indigo-500 scale-105'
                  : ''
              }`}
              onClick={() => setBodyCategory('Heavy')}
            >
              <img
                src="https://via.placeholder.com/200"
                alt="Heavy Body Type"
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="text-center mt-2 text-gray-700">
                Heavy Body Type
              </div>
            </div>

            <div
              className={`p-4 bg-white rounded-lg shadow-md cursor-pointer transition-transform transform ${
                bodyCatagory === 'Average'
                  ? 'ring-2 ring-indigo-500 scale-105'
                  : ''
              }`}
              onClick={() => setBodyCategory('Average')}
            >
              <img
                src="https://via.placeholder.com/200"
                alt="Average Body Type"
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="text-center mt-2 text-gray-700">
                Average Body Type
              </div>
            </div>

            <div
              className={`p-4 bg-white rounded-lg shadow-md cursor-pointer transition-transform transform ${
                bodyCatagory === 'Slim'
                  ? 'ring-2 ring-indigo-500 scale-105'
                  : ''
              }`}
              onClick={() => setBodyCategory('Slim')}
            >
              <img
                src="https://via.placeholder.com/200"
                alt="Slim Body Type"
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="text-center mt-2 text-gray-700">
                Slim Body Type
              </div>
            </div>
          </section>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">
            Goal Body Type
          </h2>
          <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div
              className={`p-4 bg-white rounded-lg shadow-md cursor-pointer transition-transform transform ${
                goalBodyCatagory === 'Heavy'
                  ? 'ring-2 ring-indigo-500 scale-105'
                  : ''
              }`}
              onClick={() => setGoalBodyCategory('Heavy')}
            >
              <img
                src="https://via.placeholder.com/200"
                alt="Heavy Body Type"
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="text-center mt-2 text-gray-700">
                Heavy Body Type
              </div>
            </div>

            <div
              className={`p-4 bg-white rounded-lg shadow-md cursor-pointer transition-transform transform ${
                goalBodyCatagory === 'Average'
                  ? 'ring-2 ring-indigo-500 scale-105'
                  : ''
              }`}
              onClick={() => setGoalBodyCategory('Average')}
            >
              <img
                src="https://via.placeholder.com/200"
                alt="Average Body Type"
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="text-center mt-2 text-gray-700">
                Average Body Type
              </div>
            </div>

            <div
              className={`p-4 bg-white rounded-lg shadow-md cursor-pointer transition-transform transform ${
                goalBodyCatagory === 'Slim'
                  ? 'ring-2 ring-indigo-500 scale-105'
                  : ''
              }`}
              onClick={() => setGoalBodyCategory('Slim')}
            >
              <img
                src="https://via.placeholder.com/200"
                alt="Slim Body Type"
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="text-center mt-2 text-gray-700">
                Slim Body Type
              </div>
            </div>
          </section>
        </div>
      </div>
      <button
        className="w-150 pl-10 pr-10 mt-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
        onClick={nextpage}
      >
        Next
      </button>
      {showError && (
        <ErrorMessageModal
          message={errorMessage}
          onClose={() => setShowError(false)}
        />
      )}
    </div>
  )
}

export default BodyCatagory
