import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";


const footerVariants = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    visible: {
        opacity: 1, 
        y: 0,
        transition: {
            duration: 0.6,
            staggerChildren: 0.4,
        },
    },
};

const itemVariants = {
    hidden: {
        opacity: 0, y: -30,
    },
    visible: {
        opacity: 1, y: 0,
        transition: {
            duration: 0.3,
        },
    },
};

function Footer() {
    const today = new Date().getFullYear();
    return (
        <footer className="bg-gray-900 text-white py-12 mt-20 border-t border-gray-700"> 
            <motion.div
                    className="
                            max-w-5xl 
                            mx-auto 
                            px-6 
                            flex 
                            flex-col 
                            items-center 
                            text-center 
                            gap-5" 
                    variants={footerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
            >
                    <motion.h3 
                            variants={itemVariants} 
                            className="
                            text-2xl 
                            font-bold
                            "
                    >
                            ThankGod Okanu
                    </motion.h3>
                    <p className="text-gray-400">
                    
                    </p>
                <motion.div 
                            className="flex gap-6 text-2xl"
                            variants={itemVariants}>
                   
                        <motion.a 
                                variants={itemVariants} 
                                href="https://github.com/okanu27" 
                                className="
                                hover:text-blue-400 
                                transition-colors 
                                duration-300" 
                                target="_blank" 
                                rel="noopener 
                                noreferrer
                                "
                            >
                            <motion.div 
                                whileHover={{ scale: 1.1, y: -3, }}
                                whileTap={{ scale: 0.95, }}
                            >
                                <FaGithub />
                            </motion.div>
                        </motion.a>

                        <motion.a 
                                variants={itemVariants} 
                                href="https://linkedin.com/in/thankgod-okanu" 
                                className="
                                hover:text-blue-400 
                                transition-colors 
                                duration-300" 
                                target="_blank" 
                                rel="noopener 
                                noreferrer
                                "
                        >
                            <motion.div 
                                whileHover={{ scale: 1.1, y: -3, }}
                                whileTap={{ scale: 0.95, }}
                            >
                                <FaLinkedin />
                            </motion.div>
                        </motion.a>

                        <motion.a 
                                variants={itemVariants} 
                                href="mailto:thankgodokanu@gmail.com" 
                                className="
                                hover:text-blue-400 
                                transition-colors 
                                duration-300
                                "
                        >
                            <motion.div 
                                whileHover={{ scale: 1.1, y: -3, }}
                                whileTap={{ scale: 0.95, }}
                            >
                                <FaEnvelope />
                            </motion.div>
                        </motion.a>
                </motion.div>

                        <motion.p 
                                variants={itemVariants} 
                                className="
                                text-sm 
                                text-gray-500
                                "
                        >
                        © {today} ThankGod Okanu. All rights reserved. 
                        </motion.p>
            </motion.div>
        </footer>
    );
}
export default Footer;