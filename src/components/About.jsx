import { motion } from "framer-motion"
import useTheme from './useTheme';
import about from '../assets/images/afrotech.jpg'



const About = () => {
    var { theme } = useTheme(); // Accessing the theme from context
    return (
        <section id='about'>
            <div className='container mx-auto'>
            <section id="about" 
                className=' flex items-center justify-center flex-col gap-12 my-12'
            >

                {/* title */}  
                <div className="w-full flex items-center justify-center py-24">
                    <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 200 }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ delay: 0.4 }}
                    className='flex items-center justify-around w-52'
                    >
                        <p className={`bg-clip-text text-3xl ${theme === 'theme2' ? 'text-primary-green' : 'text-primary-pink'}`}>About</p>
                    </motion.div>
                </div>
            
                {/* main content */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 w-full'>
                    {/* image */}
                    <div className="w-full flex items-center justify-center px-8">
                        <div className={`w-full lg:w-96 p-[2px] rounded-md ${theme === 'theme2' ? 'bg-primary-green' : 'bg-primary-pink'} relative`}>
                            <img 
                                src={about}
                                className="w-full rounded-md h-auto object-contain" alt="picture of me" 
                            />

                            <div className={`absolute w-full h-full -top-3 -left-2 ${theme === 'theme2' ? 'bg-primary-green' : 'bg-primary-pink'} rounded-md
                            blur-[5px] -z-10`}>
                            </div>
                        </div>
                    </div>

                     {/* content */}
                     <div className="w-full px-8 flex flex-col gap-2 items-start justify-start">
                                <p className="text-texlight text-base tracking-wide text-justify">
                                I am a dedicated indivual with who is very keen on making it in the tech world. My main aim is to be prominent in both front-end and back-end development, with proficiency in programming languages such as Python, JavaScript and HTML. I have a strong interest in working with frameworks and platforms including React, Flask, and Microsoft Azure, through which I have developed and deployed scalable web applications.
As an aspiring data scientist and software engineer, I bring a highly analytical mindset and a detail-oriented approach to problem-solving, contributing to the development of efficient and impactful software solutions.
                                </p>
                                <p className="text-texlight text-base tracking-wide text-justify">
                                My portfolio reflects my ability to create impactful projects I have developed to enhance the learning experience. 
                                I’m always eager to learn and expand my knowledge. 
                                My blend of skills, enthusiasm for tech, and desire to make a difference drive me to be a dynamic force in the industry.
                                </p>
                               
                            </div>
                </div>
            </section>
            </div>
        </section>
    )
}

export default About
