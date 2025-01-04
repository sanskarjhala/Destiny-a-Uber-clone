import React from "react";

const WaitingForDriver = ({WaitingForDriver}) => {
  return (
    <div>
      <h5
        // ref={panelClose}
        onClick={() => {
          WaitingForDriver(false);
        }}
        className="absolute opacity-1 right-6 top-12 text-2xl"
      >
        <i className="ri-arrow-down-wide-fill"></i>
      </h5>

      <div className='flex items-center justify-between'>
        <img className='h-12' src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" />
        <div className='text-right'>
          <h2 className='text-lg font-medium capitalize'>sanskar </h2>
          <h4 className='text-xl font-semibold -mt-1 -mb-1'>MP04ZA5100</h4>
          <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
          <h1 className='text-lg font-semibold'> 678905 </h1>
        </div>
      </div>

      <div className="flex flex-col justify-between items-center gap-5">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-range-line"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya Tabalb, Ahemdabad
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya Tabalb, Ahemdabad
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 p-3 ">
            <i className="text-lg ri-cash-line"></i>
            <div>
              <h3 className="text-lg font-medium">$193.60</h3>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default WaitingForDriver;
