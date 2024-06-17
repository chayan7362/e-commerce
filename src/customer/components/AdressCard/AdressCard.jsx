import React from "react";

const AdressCard = () => {
  return (
    <div>
      {/* <h1 className="text-lg font-semibold py-4">Delivery Adress</h1> */}
      <div className="space-y-3">
        <p className="font-semibold">Chayan Maiti</p>

        <p>
          Kolkata, West Bengal, 721160
        </p>

        <div className="space-y-1">
          <p className="font-semibold">Phone Number</p>
          <p>7362983007</p>
        </div>
      </div>
    </div>
  );
};

export default AdressCard;