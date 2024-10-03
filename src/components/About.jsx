import React from 'react'
import Button from './Single/Button'
import doctor from './images/doctor.jpg'
const About = () => {
  return (
    // akash
    <>
    <div className="bg-white flex py-20 px-10">
    <img
      className="rounded-3xl w-1/2 object-cover"
      src={doctor}
      alt="About Us"
    />
    <div className="mt-12 ml-32 w-1/2">
      <p className='text-blue-500 mb-2 font-bold te'>About Us</p>
      <h2 className="text-4xl font-bold mb-6 text-gray-700 ">
        World-Class Preventive, Prescriptive & Curative Medical Practices
      </h2>
      <p className="text-gray-500  mb-6">
        Being in the healthcare sector, we consider it our paradigm duty to ensure
        Safety of our patients, effectiveness of our treatments, transparency in our
        practices, and absolute timely care.
      </p>
      <Button text={' Contact Us '}/>
    </div>
  </div>


    
    </>
  )
}

export default About