import navLinks from "../data/navLinks";
import { FaSun, FaMoon } from "react-icons/fa";
import { motion } from "framer-motion";


function Navbar({ 
    theme, 
    setTheme,
    activeSection,
    setActiveSection }) {      
    return (
    <nav className="flex justify-between items-center px-8 py-5 " style={{ boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.3)"}}>
        {/*logo*/}
            <h1 className="text-2x1 font-bold">
                5Cinemas
            </h1>

            {/*Navigation Links*/}
        <ul className="flex gap-8">
            {navLinks.map((link) => (
            <motion.li 
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
                duration-300
                ${ activeSection === link.href.substring(1)
                    ? "text-blue-600 font-semibold"
                    : "hover:text-blue-600"
                }
                `}    
                >{link.name}</a>
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
    </nav>
    );
}
export default Navbar;