import navLinks from "../data/navLinks";
import { FaSun, FaMoon } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";


function Navbar({
    theme, 
    setTheme,
    activeSection,
    setActiveSection }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const sections = navLinks
        .map((link) => document.getElementById(link.href.substring(1)))
        .filter(Boolean);

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSection = entries.find((entry) => entry.isIntersecting);

                if (visibleSection) {
                    setActiveSection(visibleSection.target.id);
                }
            },
             {
                root: null,
                rootMargin: "-20% 0px -60% 0px",
                threshold: 0,
             }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, [setActiveSection]);


    console.log(activeSection);      
    return (
        
    <nav className={`
            fixed
            top-0 
            left-0 
            w-full 
            z-50 
            flex 
            justify-between 
            items-center 
            px-8 
            py-5
            transition-all
            duration-300
            ${
                theme === "dark"
                    ? "bg-gray-900/90 backdrop-blur-md shadow-md"
                    : "bg-white/90 backdrop-blur-md shadow-md"}
                    `} style={{ boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.3)"}}
                    >
        {/*logo*/}
            <h1 className="text-2x1 font-bold">
                5Cinemas
            </h1>

            {/*Navigation Links*/}
        <ul className="hidden md:flex gap-8">
            {navLinks.map((link) => (
            <motion.li 
                className="relative"
                key={link.id}
                whileHover={{ 
                    scale: 1.1,
                    y: -2 
                }}
                transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 15, 
                }}
            >
                <a
                href={link.href}
                onClick={() => setActiveSection(link.href.substring(1))} 
                className={`
                inline-block
                hover:text-blue-600 
                transition-colors 
                duration-150
                ${ activeSection === link.href.substring(1)
                    ? "text-blue-600 font-semibold"
                    : "hover:text-blue-600"
                }
                `}    
                >
                {link.name}
                </a>
                {activeSection === link.href.substring(1) && (
                    <motion.span
                        layoutId="activeUnderline"
                        className="
                                absolute 
                                left-0 
                                bottom-0 
                                w-full 
                                h-0.5 
                                bg-blue-600
                                "
                    />
                )}
            </motion.li>
            ))}
        </ul>

        <button
            onClick={() => 
                setTheme(theme === "light" ? "dark" : "light")
            }
        >
            {theme === "light" ? <FaMoon /> : <FaSun /> }
        </button>

        <button className="md:hidden" 
            onClick={() => 
                setIsMenuOpen(!isMenuOpen)
            }
        >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
                
        </button>
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div 
                        className="
                        absolute 
                        top-full 
                        left-0 
                        w-full 
                        bg-white
                        dark:bg-gray-900  
                        shadow-lg 
                        md:hidden
                        transition-colors
                        duration-300"
                        initial={{ y: -30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -30, opacity: 0 }}
                        transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 26,
                    }}
                    >
                        <ul className={`
                                flex 
                                flex-col 
                                items-center 
                                py-6 
                                gap-6
                                transition-colors
                                duration-300
                                    ${
                                    theme === "dark"
                                    ? "bg-gray-900 text-white"
                                    : "bg-white text-black"
                                    }
                           `}>

                            {navLinks.map((link) => (
                                <motion.li key={link.id}
                                    className="relative"
                                    whileHover={{
                                        scale: 1.08,
                                        transition: { duration: 0.15 },
                                        color: "#2563eb",
                                    }}
                                    whileTap={{
                                        scale: 0.95,
                                    }}
                                >
                                    <a href={link.href}
                                            className={`
                                                ${ activeSection === link.href.substring(1)
                                                ? "text-blue-600 font-semibold"
                                                : "hover:text-blue-600"
                                                }
                                            `}
                                        onClick={() => {
                                            setActiveSection(link.href.substring(1));
                                            setIsMenuOpen(false);
                                        }}
                                    >
                                        
                                        {link.name}
                                    </a>
                                    {activeSection === link.href.substring(1) && (
                                        <motion.span
                                        layoutId="activeUnderline"
                                        className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600"
                                        />
                                    )}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
    </nav>
    );
}
export default Navbar;