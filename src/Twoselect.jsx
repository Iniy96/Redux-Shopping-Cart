import React, { useState } from 'react'
const statelist = [
    {
      state: "Tamil Nadu",
      cities: ["chennai", "coimbatore", "salem", "trichy"]
    },
    {
      state: "Karnataka",
      cities: ["Bangalore", "Mysore", "Tumkoor", "Coorg"]
    },
    {
      state: "Kerala",
      cities: ["Kochin", "Tiruvananthapuram", "Moonar", "Kozhikode"]
    },
    {
      state: "Andhara",
      cities: ["Hyderabad", "Tirupati", "Vijayawada", "warangal"]
    }
  ]
const Twoselect = () => {
    const [stateSelect, setstateSelect] = useState("")
    const [citySelect, setcitySelect] = useState("")
    return (
        <>
            <div className='text-center'><h3>Select Options</h3></div>
            <div className='text-center mt-5'>
                <span className='me-5'>Select State</span>
                <select value={stateSelect} onChange={(e) => setstateSelect(e.target.value)}>
                    <option value="Select">Select State</option>
                    {
                        statelist.map((state, i) => {
                            return <option key={i} value={i}>{state.state}</option>
                        })
                    }
                </select>
            </div>
            <div className='text-center mt-3'>
                <span className='me-5' >Select City</span>
                <select value={citySelect} onChange={(e) => setcitySelect(e.target.value)}>
                    <option value="Select City">Select City</option>

                    {
                        statelist[stateSelect]?.cities.map((city, i) => {
                            return <option key={i} value={city}>{city}</option>
                        })

                    }
                </select>
            </div>
        </>
    )
}

export default Twoselect