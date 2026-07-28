import React, {useState} from "react";
import Button from "./Button";
import { motion } from "framer-motion";


const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

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


function Contact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");


    function handleSubmit(e) {
    e.preventDefault();

    console.log({
        name,
        email,
        message,
    });

    setName("");
    setEmail("");
    setMessage("");
}

    return (
        <section id="contact" 
            className="py-20 px-6">
            <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }} 
                className="
                max-w-4xl 
                mx-auto
                rounded-2xl 
                shadow-lg 
                p-8"
            >
                <motion.div>
                    <motion.h2 
                    className="text-5xl font-bold text-center mb-4"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}>
                        Contact Me
                    </motion.h2>

                    <motion.p 
                    className="text-center mb-10 max-w-xl mx-auto"
                    transition={{ duration: 0.6, delay: 0.2 }}>
                        Have a project in mind or just want to say hello?
                        I'd love to hear from you.
                    </motion.p>
                </motion.div>

                <motion.form 
                variants={containerVariants}
                className="space-y-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                onSubmit={handleSubmit}
                >

                <motion.div>
                    <motion.div variants={itemVariants}>
                    <label 
                    htmlFor="user-name"
                    className="
                    block
                    mb-2
                    font-medium
                    ">
                        Name
                    </label>
                    <input
                    className="
                    w-full
                    p-4
                    mb-4 
                    border
                    border-gray-300
                    dark:border-gray-600
                    bg-white
                    dark:bg-gray-800
                    text-black
                    dark:text-white
                    rounded-xl 
                    focus:outline-none 
                    focus:ring-2 
                    focus:ring-blue-600
                    focus:border-blue-600 
                    transition-all
                    duration-300
                    placeholder:text-gray-500
                    " 
                    type="text" 
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                    <label 
                    htmlFor="user-email"
                    className="
                    block
                    mb-2
                    font-medium
                    ">
                        Email
                    </label>
                    <input
                    className="
                    w-full
                    p-4
                    mb-4 
                    border
                    border-gray-300
                    dark:border-gray-600
                    bg-white
                    dark:bg-gray-800
                    text-black
                    dark:text-white
                    rounded-xl 
                    focus:outline-none 
                    focus:ring-2 
                    focus:ring-blue-600
                    focus:border-blue-600 
                    transition-all
                    duration-200
                    placeholder:text-gray-500"
                    
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                    <label 
                    htmlFor="user-message"
                    className="
                    block
                    mb-2
                    font-medium
                    ">
                         Message
                    </label>
                    <textarea
                    className="
                    w-full
                    p-4
                    border
                    border-gray-300
                    dark:border-gray-600
                    bg-white
                    dark:bg-gray-800
                    text-black
                    dark:text-white
                    rounded-lg
                    h-40
                    resize-none
                    focus:outline-none
                    focus:ring-2
                    focus:ring-blue-600
                    focus:border-blue-600
                    transition-all
                    duration-200
                    placeholder:text-gray-500
                    " 
                    rows="5"
                    cols="30"
                    placeholder="Type your message here"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    />
                    </motion.div>
                    
                </motion.div>
                    <motion.div variants={itemVariants}>
                        <Button 
                        text="Send Message" 
                        type="submit"
                        className="w-full mt-2"
                        />
                    </motion.div>
            </motion.form>
            </motion.div>
        </section>
    );
}
export default Contact;