import React from "react";
import skills from "../data/skills";
import { motion, scale } from "framer-motion";

const itemVariants = {
    hidden: {
        opacity: 0, y: -30,
    },
    visible: {
        opacity: 1, y: 0,
        transition: {
            duration: 0.5,
        },
    },
};

function SkillCard({ name, level }) {
    return (  
        <motion.div 
            className="bg-white rounded-xl shadow-lg p-6"
            whileHover={{ scale: 1.03, y: -5, }}
            transition={{ duration: 0.3 }}
            variants={itemVariants}
            >

            <motion.div variants={itemVariants}>
                <div className="flex justify-between">    
                    <h3 className="text-xl font-semibold">
                        {name}
                    </h3>
                    <p className="text-blue-400 font-bold">
                        {level}%
                    </p>
                </div>
            

               <div className="w-full bg-gray-200 rounded-full h-3">
                    <motion.div className="bg-blue-600 h-3 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    transition={{ 
                        duration: 1.5,
                        delay: 0.7, }}
                    style={{ width: `${level}%` }}
                    >
                    </motion.div>
                </div>

            </motion.div> 

        </motion.div>
    );
}
export default SkillCard;