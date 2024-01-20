import React from 'react'
import { useNavigate } from 'react-router-dom'

const Main = () => {
  const navigate =useNavigate();
  const onNavigate = ()=>navigate('/users')
  return (

    <div>main
      <button onClick={onNavigate}>go to users page </button>
      </div>
  )
}

export default Main