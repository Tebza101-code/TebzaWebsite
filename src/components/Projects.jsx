import { AnimatePresence, motion } from "framer-motion"
import { ProjectsData } from "../utils/helper"
import { FaGithub } from "react-icons/fa"
import useTheme from './useTheme';
import { useState } from "react"

const Projects = () => {
    var { theme } = useTheme(); // Accessing the theme from context
    return (
        <section id='projects'>
            <div className='flex items-center justify-center flex-col gap-12 my-12'>
                
            {/* title */}
            <div className="w-full flex items-center justify-center py-24">
                <motion.div
                    initial={{ opacity: 0, width: 0}}
                    animate={{ opacity: 1, width: 200}}
                    exit={{ opacity: 0, width: 0}}
                    transition={{ delay: 0.4}}
                    className="flex items-center justify-around w-52"
                    >
                        <p className={`bg-clip-text text-3xl ${theme === 'theme2' ? 'text-primary-green' : 'text-primary-pink'}`}>
                            Projects
                        </p>
                </motion.div>
            </div>
            
            {/* main content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-11/12">
                <AnimatePresence>
                    {ProjectsData && ProjectsData.map((project, index) => (
                        <ProjectCard key={project.id} project={project} /> 
                    ))}
                </AnimatePresence>
            </div>
            
            </div >
        </section >
    )
}

const ProjectCard = ({project, theme}) => {
    var { theme } = useTheme(); // Accessing the theme from context
    const [isHoverred, setIsHoverred] = useState(false)
    return (
        <motion.div 
            key={project.id} 
            className="overflow-hidden cursor-pointer relative rounded-md"
            onMouseEnter={() => setIsHoverred(true)}
            onMouseLeave={() => setIsHoverred(false)}
        >
            <motion.img 
            whileHover={{ scale: 1.1}}
            className="w-full h-full object-contain rounded-lg" 
            src={project.imgSrc}
            />
            

            {isHoverred && (
                <motion.div className="absolute inset-0 backdrop-blur-md bg-[rgba(0, 0, 0, 0.6)] flex items-center justify-center flex-col gap-2">
                <p className={`text-xl ${theme === 'theme2' ? 'text-primary-green' : 'text-primary-pink'}`}>
                    {project?.name}
                </p>
                <a href={project?.gitURL} className="">
                    <FaGithub className={`text-3xl ${theme === 'theme2' ? 'text-primary-green' : 'text-primary-pink'}`} />
                </a>
            </motion.div> 
            )}
        </motion.div>

        
    )
}
export default Projects
