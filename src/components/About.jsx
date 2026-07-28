import React from "react";
import about from "../data/about";
import { animate, motion } from "framer-motion";
import Button from "./Button";

const itemVariants = {
    hidden: {
        opacity: 0, y: 40,
    },
    visible: {
        opacity: 1, y: 0,
        transition: {
            duration: 0.9
        },
    },
};

const leftVariant = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
        },
    },
};

const rightVariant = {
    hidden: {
        x: 100,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
        },
    },
};



function About() {
    return (
        <motion.section id="about"
            className="
                flex 
                flex-col 
                md:flex-row 
                items-center
                py-5 
                gap-10
                scroll-mt-20
                px-8
                "
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        >
            <div className="
                        flex 
                        flex-col 
                        md:flex-row 
                        justify-between
                        items-center 
                        gap-10 
                        px-10
                        "
                        >
                <motion.div variants={leftVariant}>
                    <div className="
                                w-56 
                                h-56
                                md:w-72
                                md:h-72 
                                rounded-full 
                                bg-gray-200
                                "
                                >
                    </div>
                </motion.div>

                <motion.div 
                    variants={rightVariant}
                    className="space-y-4">
                    <h2 className="text-4xl font-bold">
                        Name: {about.name}
                    </h2>
                    <p className="text-blue-600">
                        Role: {about.role}
                    </p>
                    <p className="text-gray-500">
                        Bio: {about.bio}
                    </p>
                    <p className="text-sm text-gray-500">
                        Location: {about.location}
                    </p>
                </motion.div>
                <motion.div variants={itemVariants}>
                    <Button className text="Download CV"/>
                </motion.div>
            </div>
        </motion.section>
    );
}
 export default About;