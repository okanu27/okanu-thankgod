import  React, { useState } from "react";
import { motion, scale } from "framer-motion";
import { FaReact, FaNodeJs, FaJsSquare } from "react-icons/fa";
import { SiExpress, SiTailwindcss, SiPostgresql, } from "react-icons/si";

const iconMap = {
    react: FaReact,
    node: FaNodeJs,
    javascript: FaJsSquare,
    express: SiExpress,
    tailwind: SiTailwindcss,
    postgresql: SiPostgresql,
};

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


function SkillCard({ icon, name, level, category, theme, setTheme }) {

    const Icon = iconMap[icon];

    return (  
        <motion.div 
            className="bg-white rounded-xl shadow-lg p-6"
            whileHover={{ scale: 1.03, y: -5, }}
            transition={{ duration: 0.3 }}
            variants={itemVariants}
            >

            <motion.div variants={itemVariants}>
                <div className="flex 
                                justify-between
                                items-start
                                "
                >
                        <div className="flex items-center gap-3">
                            {Icon && <Icon className="text-3xl text-blue-500 mt-1"/>}
                            <div>    
                                <h3 className={`
                                        text-xl 
                                        font-semibold
                                        ${
                                        theme === "dark"
                                        ? "bg-gray-900 text-white"
                                        : "bg-white text-black"
                                        } 
                                    `}
                                >       
                                        {name}
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                        {category}
                                    </p>
                            </div> 
                        </div>
                                    <p className="text-blue-500 font-bold">
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