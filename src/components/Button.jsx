import React from "react";
import { motion } from "framer-motion";

function Button({ text, type= "button", className = "", onClick }) {
    return (
        <motion.button
            type={type}
            onClick={onClick} 
            className={`bg-black text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 ${className} `} 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            transition={{ 
            type: "spring", 
            stiffness: 400, 
            damping: 15 }}
        >
            {text}</motion.button>
    );
}

export default Button;
