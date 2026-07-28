import React from "react";
import { motion } from "framer-motion";
import Projects from "./Projects";
import Button from "./Button";


function ProjectCard({ title, description, tech, theme, liveDemo, github }) {
    return (
        <motion.div
            className={`
                    rounded-x1 
                    shadow-lg 
                    p-6 
                    transition 
                    duration-300
                    ${theme === "dark"
                    ? "shadow-blue-500/40"
                    : "shadow-gray-300"
                    }
                    `}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{
                duration: 1.1,
                type: "spring",
                stiffness: 400,
                damping: 10 }}
        >
                <h2 
                        className="
                        text-2xl 
                        font-bold 
                        mb-3
                        "
                        >
                    {title}
                </h2>
                <p 
                        className="
                        text-gray-600 
                        mb-4
                        "
                        >
                    {description}
                </p>
                <ul 
                        className="
                        flex 
                        flex-wrap 
                        gap-2 
                        mt-4
                        "
                        >
                    {tech.map((item, index) => (
                    <li 
                        key={index} 
                        className="
                        bg-blue-100 
                        text-blue-700 
                        px-3 
                        py-1 
                        rounded-full 
                        text-sm
                        font-medium
                        transition-all
                        duration-200
                        hover:bg-blue-200
                        hover:scale-105
                        "
                        >
                        {item}
                    </li>
                    ))}
                </ul>
            <div className="flex gap-4 mt-6">
                <Button text="Live Demo" 
                        onClick={() => window.open(liveDemo, "_blank" )} 
                        />

                <Button text="Github" 
                        onClick={() => window.open(github, "_blank" )} 
                        />
            </div>
        </motion.div>
    );
}

export default ProjectCard;