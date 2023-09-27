import axios from 'axios'
import React from 'react'

function HomePage() {

  const testRoute = async() => {
    const res = await axios.get("/api")

    console.log(res.data)
  }

  return (
    <div>
      HOme
      <button onClick={testRoute}>Click</button>
    </div>
  )
}

export default HomePage
