import React, { useEffect, useState } from 'react'
import './bodytype.css'
import { useNavigate } from 'react-router-dom'

const BodyCatagory = ({ saveData }) => {
  const [bodyCatagory, setBodyCategory] = useState('')
  const [goalBodyCatagory, setGoalBodyCategory] = useState('')
  const navigate = useNavigate()

  //   const firstBodyCatagory = () => {
  //     saveData({ NowBody: 'one' })
  //   }

  //   const secondBodyCatagory = () => {
  //     saveData({ NowBody: 'two' })
  //   }

  //   const thirdBodyCatagory = () => {
  //     saveData({ NowBody: 'three' })
  //   }

  //   const forthBodyCatagory = () => {
  //     saveData({ NowBody: 'four' })
  //   }

  //   const GoalFirstBodyCatagory = () => {
  //     setGoalBodyCatagory('GoalBodyOne')
  //   }

  //   const GoalSecondBodyCatagory = () => {
  //     saveData({ GoalBody: 'Goal Two' })
  //   }

  //   const GoalThirdBodyCatagory = () => {
  //     saveData({ GoalBody: 'Goal Three' })
  //   }

  //   const GoalForthBodyCatagory = () => {
  //     saveData({ GoalBody: 'Goal Four' })
  //   }

  useEffect(() => {
    saveData({ nowBody: bodyCatagory })
    saveData({ GoalBody: goalBodyCatagory })
  }, [bodyCatagory, goalBodyCatagory])

  const nextpage = () => {
    if (bodyCatagory != '' && goalBodyCatagory != '') {
      navigate('/al')
    } else {
      console.log('select Body Catagory')
    }
  }

  return (
    <div className="category-container">
      <div className="category-root">
        <div>
          <h2>Body Types</h2>
          <section className="category-types">
            <div
              className={`category-card ${
                bodyCatagory === 'Very Heavy' ? 'selected' : ''
              }`}
              onClick={() => setBodyCategory('Very Heavy')}
            >
              <img
                src="https://wallpaperset.com/w/full/c/1/4/459707.jpg"
                alt="Very Heavy Body Type"
              />
              <div className="category-label">Very Heavy Body Type</div>
            </div>

            <div
              className={`category-card ${
                bodyCatagory === 'Heavy' ? 'selected' : ''
              }`}
              onClick={() => setBodyCategory('Heavy')}
            >
              <img
                src="https://via.placeholder.com/200"
                alt="Heavy Body Type"
              />
              <div className="category-label">Heavy Body Type</div>
            </div>

            <div
              className={`category-card ${
                bodyCatagory === 'Average' ? 'selected' : ''
              }`}
              onClick={() => setBodyCategory('Average')}
            >
              <img
                src="https://via.placeholder.com/200"
                alt="Average Body Type"
              />
              <div className="category-label">Average Body Type</div>
            </div>

            <div
              className={`category-card ${
                bodyCatagory === 'Slim' ? 'selected' : ''
              }`}
              onClick={() => setBodyCategory('Slim')}
            >
              <img src="https://via.placeholder.com/200" alt="Slim Body Type" />
              <div className="category-label">Slim Body Type</div>
            </div>
          </section>
        </div>

        <div>
          <h2 className="goal-header">Goal Body Type</h2>
          <section className="category-types">
            <div
              className={`category-card ${
                goalBodyCatagory === 'Very Heavy' ? 'selected' : ''
              }`}
              onClick={() => setGoalBodyCategory('Very Heavy')}
            >
              <img
                src="https://wallpaperset.com/w/full/c/1/4/459707.jpg"
                alt="Very Heavy Body Type"
              />
              <div className="category-label">Very Heavy Body Type</div>
            </div>

            <div
              className={`category-card ${
                goalBodyCatagory === 'Heavy' ? 'selected' : ''
              }`}
              onClick={() => setGoalBodyCategory('Heavy')}
            >
              <img
                src="https://via.placeholder.com/200"
                alt="Heavy Body Type"
              />
              <div className="category-label">Heavy Body Type</div>
            </div>

            <div
              className={`category-card ${
                goalBodyCatagory === 'Average' ? 'selected' : ''
              }`}
              onClick={() => setGoalBodyCategory('Average')}
            >
              <img
                src="https://via.placeholder.com/200"
                alt="Average Body Type"
              />
              <div className="category-label">Average Body Type</div>
            </div>

            <div
              className={`category-card ${
                goalBodyCatagory === 'Slim' ? 'selected' : ''
              }`}
              onClick={() => setGoalBodyCategory('Slim')}
            >
              <img src="https://via.placeholder.com/200" alt="Slim Body Type" />
              <div className="category-label">Slim Body Type</div>
            </div>
          </section>

          <button className="action-button" onClick={nextpage}>
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default BodyCatagory
