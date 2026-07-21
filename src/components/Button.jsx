import React from "react";
import { motion } from "framer-motion";

function Button({ text }) {
    return (
        <motion.button 
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ 
            type: "spring", 
            stiffness: 400, 
            damping: 10 }}
        >
            {text}</motion.button>
    );
}

export default Button;
