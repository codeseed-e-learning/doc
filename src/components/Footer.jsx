import React from 'react'

const Footer = () => {
  return (
    // akash
    <>
    <footer className="bg-brand-dark-blue text-white">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Muhiris Doctor</h2>
          <p className="text-gray-400">
            The ultimate destination for all of your medical needs
          </p>
          <div className="flex space-x-4 mt-4">
            
            <a href="#" className="text-gray-400 hover:text-white">
                <i className="fa-brands fa-facebook"></i>
            </a>

            <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter"></i>
            </a>
                
            <a href="#" className="text-gray-400 hover:text-white">
                <i className="fa-brands fa-instagram bg"></i>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white">Home</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white">About</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white">Contact</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white">FAQ</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Services</h2>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white">Medical Consultation</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white">Lab Testing</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white">Pharmacy</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white">Surgery</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-400">
            Address: 123 Main St, Anytown, USA 12345
          </p>
          <p className="text-gray-400">
            Phone: 555-555-5555
          </p>
          <p className="text-gray-400">
            Email: <a href="#" className="text-gray-400 hover:text-white">info@muhirisdoctor.com</a>
          </p>
        </div>
      </div>
    </div>
  </footer>
    </>
  )
}

export default Footer