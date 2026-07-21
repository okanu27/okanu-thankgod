import React from "react";
import { motion } from "framer-motion";
import Projects from "./Projects";
import Button from "./Button";


function ProjectCard({ title, description, tech }) {
    return (
        <motion.div
            className="bg-white rounded-x1 shadow-lg p-6 hover:shadow-2xl transition duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{
                duration: 1.1,
                type: "spring",
                stiffness: 400,
                damping: 10 }}
        >
            <h2 className="text-2xl font-bold mb-3">
                {title}
            </h2>
            <p className="text-gray-600 mb-4">
                {description}
            </p>
            <ul className="flex flex-wrap gap-2 mt-4">
                {tech.map((item, index) => (
                <li key={index} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                    {item}
                </li>
            ))}
            </ul>
            <div className="flex gap-4 mt-6">
                <Button text="Live Demo" />
                <Button text="Github" />
            </div>
        </motion.div>
    );
}

export default ProjectCard;