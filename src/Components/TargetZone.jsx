import React, { useEffect, useState } from 'react'
import './targetZone.css' // Link to your CSS file
import body from '../assets/body.webp'

const TargetZones = ({ saveData }) => {
  const [tragetZone, setTragetZone] = useState([])

  useEffect(() => {
    console.log(tragetZone)
  }, [tragetZone])

  const handleCheckboxChange = (traget) => {
    if (tragetZone.includes(traget)) {
      setTragetZone(tragetZone.filter((f) => f !== traget))
    } else {
      setTragetZone([...tragetZone, traget])
    }
  }

  return (
    <div className="target-zones-container">
      <h2 className="target-zones-title">Choose Your Target Zones</h2>
      <div className="image-container">
        <img
          src={body} // Replace with your image path
          alt="Target Zones"
          className="target-image"
        />
        <div
          className={`zone ${tragetZone.includes('arms') ? 'selected' : ''}`}
          style={{ top: '30%', left: '25%' }}
          onClick={() => {
            handleCheckboxChange('arms')
          }}
        >
          <span className="zone-label">ARMS</span>
        </div>
        <div
          className={`zone ${tragetZone.includes('belly') ? 'selected' : ''}`}
          style={{ top: '30%', left: '43%' }}
          onClick={() => {
            handleCheckboxChange('belly')
          }}
        >
          <span className="zone-label">BELLY</span>
        </div>
        <div
          className={`zone ${tragetZone.includes('pecs') ? 'selected' : ''}`}
          style={{ top: '17%', left: '60%' }}
          onClick={() => {
            handleCheckboxChange('pecs')
          }}
        >
          <span className="zone-label">PECS</span>
        </div>
        <div
          className={`zone ${tragetZone.includes('legs') ? 'selected' : ''}`}
          style={{ top: '70%', left: '30%' }}
          onClick={() => {
            handleCheckboxChange('legs')
          }}
        >
          <span className="zone-label">LEGS</span>
        </div>
      </div>
    </div>
  )
}

export default TargetZones
