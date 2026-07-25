import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";

function Hero() {
    return (
        <section id="home" className="flex justify-between items-center min-h-screen px-10">
                <div className="max-w-x1">
                    <motion.h1
                     className="text-5x1 font-bold"
                     initial={{ opacity: 0, y: -30 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 1.2 }}
                     >
                    Hi, I'm <span className="text-blue-700">Thankgod</span>
                    </motion.h1>
                    <h2 className="text-2x1 text-gray-500 mt-2">
                    Fullstack Developer | Content Creator.
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                    I build modern, responsive web applications.
                    </p>
                    <div className="flex gap-4 mt-6">
                    <Button className text="View Projects"/>
                    <Button text="Contact Me"/>
                    </div>
                </div>
                <div className="w-72 h-72 rounded-full bg-gray-300"></div>
                
        </section>  
    );
}
 export default Hero;