import React from "react";

const LocationSearchPanel = ({setVehiclePanel , setPanelOpen}) => {
  const location = [
    "24B, Near Kappor's Cafe, ABCD School, Indore",
    "22B, Near Kappor's Cafe, ABCD School, Indore",
    "21B, Near Kappor's Cafe, ABCD School, Indore",
    "20B, Near Kappor's Cafe, ABCD School, Indore",
  ];
  return (
    <div>
      {location.map((elem, id) => (
        <div
          key={id}
        //   onClick={() => handleSuggestionClick(elem)}
        onClick={() => {
            setVehiclePanel(true);
            setPanelOpen(false);
        }}
          className="flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start"
        >
          <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
            <i className="ri-map-pin-fill"></i>
          </h2>
          <h4 className="font-medium">{elem}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
