import React from "react";
import skills from "../data/skills";
import SkillCard from "./SkillCard";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

function Skills() {
    return (
        <section id="skills" className="py-20">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center">
                    My Skills
                </h2>
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {skills.map((skill) => (
                    <SkillCard
                        key={skill.id}
                        name={skill.name}
                        level={skill.level}
                    /> 
                    ))}
                </motion.div>
            </div>    
        </section>
    );
}

export default Skills;