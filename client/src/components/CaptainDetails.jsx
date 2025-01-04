import React from 'react'
import personImage from '../assets/person.jpg'

const CaptainDetails = () => {
  return (
    <>
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start gap-3">
            <img src={personImage} 
              className="h-10 w-10 rounded-full object-cover"
            />
            <h4 className="text-lg font-medium">Harsh Patel</h4>
          </div>
          <div> 
            <h4 className="text-xl font-semibold">$295.20</h4>
            <p className="text-sm f text-gray-600">Earned</p>
          </div>
        </div>

        <div className="flex mt-4 p-4 bg-gray-200 rounded-xl justify-center gap-5 place-items-start">

          <div className="text-center">
            <i className="text-2xl font-thin ri-time-line"></i>
            <h5 className="text-lg font-medium">10.2</h5>
            <p className="text-sm text-gray-600">Hours Online</p>
          </div>

          <div className="text-center">
            <i className="text-2xl font-thin ri-speed-up-line"></i>
            <h5 className="text-lg font-medium">10.2</h5>
            <p className="text-sm text-gray-600">Hours Online</p>
          </div>

          <div className="text-center">
            <i className="text-2xl font-thin ri-booklet-line"></i>
            <h5 className="text-lg font-medium">10.2</h5>
            <p className="text-sm text-gray-600">Hours Online</p>
          </div>

        </div>
       
    </>
  )
}

export default CaptainDetails