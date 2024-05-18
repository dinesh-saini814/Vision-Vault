import React, { useState } from "react";
import { easeIn, motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import { HiCursorArrowRays } from "react-icons/hi2";

function Menu() {
  const [active, setActive] = useState(false);
  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  const toggleMenu = () => {
    setActive((prev) => !prev);
  };

  const buttonVariants = {
    initial: { scale: 1, opacity: 1 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.5, ease: [0.5, 0, 0.75, 0], stiffness: 300 },
  };
  return (
    <div className="fixed bg-secondary w-30 h-screen flex justify-start items-center">
      <motion.span
        onClick={toggleMenu}
        animate={active ? "open" : "close"}
        className="bg-white w-12 h-12 flex items-center justify-center rounded-[1rem] absolute top-20 left-5"
      >
        <motion.span
          variants={{
            open: {
              rotate: ["90deg", "0deg"],
            },
            close: {
              rotate: ["0deg", "90deg"],
            },
          }}
        >
          <FaArrowRightLong />
        </motion.span>
      </motion.span>
      <div className="w-14 h-[60%] flex flex-col justify-between items-center bg-white rounded-[1rem] absolute bottom-10 left-5 py-2">
        {[...Array(4)].map((_, index) => (
          <motion.button
            key={index}
            onClick={() => handleButtonClick(index)}
            className={`w-12 h-12 flex justify-center items-center rounded-[1.05rem] ${
              activeButton === index ? "bg-extra03" : "bg-gray-200"
            }`}
            variants={buttonVariants}
            initial="initial"
            animate={activeButton === index ? "animate" : "initial"}
            whileHover={{ scale: 0.9 }}
          >
            <HiCursorArrowRays />
          </motion.button>
        ))}
      </div>
    </div>
  );
}

export default Menu;
