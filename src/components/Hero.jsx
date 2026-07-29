import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";
import profileImage from "../assets/okanu.webp";

function Hero() {
    return (
        <section 
                id="hero" 
                className="
                        flex
                        flex-col
                        flex-col-reverse lg:flex-row
                        justify-between 
                        items-center 
                        min-h-screen
                        md:px-10
                        lg:px-22 
                        py-23
                        pt-28
                        px-8
                        "  
        >
                <div className="max-w-x1">
                    <motion.h1
                     className="text-5x1 font-bold"
                     initial={{ opacity: 0, y: -30 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 1.2 }}
                     >
                    Hi, I'm <span className="text-blue-700">Thankgod</span>
                    </motion.h1>
                    <h2 className="text-x1 sm:text-2xl text-gray-500 mt-2">
                    Fullstack Developer | Content Creator.
                    </h2>
                    <p className="mt-4 text-base sm:text-lg text-gray-600">
                    I build modern, responsive web applications.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mt-6">
                            <Button className="w-full sm:w-auto"
                                    text="View Projects" 
                                    onClick={() => 
                                        document.getElementById("projects")?.scrollIntoView({
                                            behavior: "smooth",
                                        })
                                    }/>
                            <Button 
                                    className="w-full sm:w-auto"
                                    text="Contact Me"
                                    onClick={() => 
                                        document.getElementById("contact")?.scrollIntoView({
                                            behavior: "smooth",
                                        })
                                    }
                                    />
                    </div>
                </div>
                <div> 
                        <img src={profileImage}
                        alt="ThankGod Okanu"
                        className="w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full object-cover"
                        />
               </div>
        </section>  
    );
}
 export default Hero;