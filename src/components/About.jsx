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
                                I am a dedicated software engineer with a background in microbiology, which allows me to blend scientific rigor with innovative technology solutions. 
                                My expertise spans both front-end and back-end development, and I’m proficient in languages like JavaScript, PHP, and Python. I have a particular passion for working with React, Flask, and cloud computing platforms like Microsoft Azure, where I’ve honed my ability to deploy scalable web applications. 
                                With a strong interest in cybersecurity and software development, I bring an analytical mindset that enhances my approach to problem-solving and software development.
                                </p>
                                <p className="text-texlight text-base tracking-wide text-justify">
                                My portfolio reflects my ability to create impactful projects, including Edu Pal, a hackathon-winning platform I developed to enhance the learning experience for high school students. 
                                I’ve also developed advertising platforms and clinic management systems, demonstrating my versatility and creativity. I’m always eager to learn and expand my knowledge, with recent certifications in cybersecurity and Python development. 
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
