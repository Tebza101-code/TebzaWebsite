import React from 'react'
import useTheme from './useTheme';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { FaJsSquare, FaReact, FaNodeJs, FaCss3, FaPython, FaHtml5, FaGit, FaFlask } from 'react-icons/fa';





const Skills = () => {
    var { theme } = useTheme(); // Accessing the theme from context

    // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true
  };

  const skills = [
    {
      name: 'Git',
      icon: <FaGit size={50} color="#F05033" />, 
    },
    {
      name: 'React',
      icon: <FaReact size={50} color="#61DAFB" />,
    },
    {
      name: 'Node.js',
      icon: <FaNodeJs size={50} color="#3C873A" />,
    },
    {
      name: 'Css3',
      icon: <FaCss3 size={50} color="#1572B6" />, 
    },
    {
      name: 'Javascript',
      icon: <FaJsSquare size={50} color="#F7DF1E" />,
    },
    {
      name: 'HTML',
      icon: <FaHtml5 size={50} color="#E34F26" />, 
    },
    {
      name: 'Python',
      icon: <FaPython size={50} color="#3776AB" />, 
    },
  ];

    return (
        <section id='skills'>
            <div className='container mx-auto'>
            <section id="skills" 
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
                        <p className={`bg-clip-text text-3xl ${theme === 'theme2' ? 'text-primary-green' : 'text-primary-pink'}`}>Skills</p>
                    </motion.div>
                </div>
            
                {/* main content */}
                <div className='grid grid-cols-1 lg:grid-cols-1 gap-4 w-full'>

                <div className="skills-section">
                    <div className="skills-slider">
                        <Slider {...settings}>
                        {skills.map((skill, index) => (
                            <div className="skill-card" key={index}>
                            {skill.icon}
                            <h3>{skill.name}</h3>
                            </div>
                        ))}
                        </Slider>
                    </div>
    </div>
                        
                    </div>
            </section>
            </div>
        </section>
  )
}

export default Skills