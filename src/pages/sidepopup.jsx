import React, { useEffect, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Confetti from "react-confetti";
import Sale from "../Images/sale.jpg"; // Ensure the path is correct

const Sidepopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  function togglePopup() {
    setIsVisible(!isVisible);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    // Cleanup timeout when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
   
      <div
        className={`fixed z-50 left-2 bottom-0 mx-auto w-full max-w-[110px] h-[110px] bg-black shadow-lg rounded-lg transition-all duration-[800ms] ease-in-out ${
          isVisible ? "mb-2" : "mb-[-100%]"
        }`}

      >
        {isVisible && <Confetti numberOfPieces={50} className="w-[100%]" />}
       
        <div className="relative w-full h-full">
          <img
            src={Sale}
            alt="sale"
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
          />
        <button onClick={togglePopup} className="cursor-pointer absolute top-0 left-1 ">❎</button>
         
          
        </div>
      </div>
    </>
  );
};

export default Sidepopup;
