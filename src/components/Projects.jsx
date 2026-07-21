import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

function Projects() {
    return (
        <section id="projects" className="py-20 bg-gray-50">
           <div className="max-w-6xl mx-auto px-6">
             <h2 className="text-4xl font-bold text-center">
                My Projects
             </h2>
           <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            >  
            {projects.map((project) => (
                <ProjectCard
                    key={project.id}
                    id={project.id}
                    title={project.title}
                    description={project.description}
                    tech={project.tech}
                />
            ))}
            </motion.div>
           </div>
        </section>
    );
}
 export default Projects;