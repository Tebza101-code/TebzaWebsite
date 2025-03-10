import { motion } from "framer-motion"
import Hero from "../assets/images/hero1.png"
import HeroTypeWriter from '../components/HeroTypeWriter'
import useTheme from "./useTheme"




const Introduction = () => {
    const { theme } = useTheme(); // Use theme from context

    return (
        <section id="home" className=' flex items-center justify-center flex-col gap-12 relative container mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 w-full'>
                {/*container section*/}

                {/*content section*/}
                <div className="w-full h-full flex flex-col items-center
                    lg:items-start justify-center gap-4 pl-10 mt-8">
                    <h2 className="text-3xl lg:text-4xl text-gray-400">Hello, It&apos;s me
                        <span className="block tracking-wider text-2xl lg:text-4xl mt-4 text-slate-200">
                            {" "}
                            Nolubabalo Maxazana
                        </span>
                    </h2>

                    {/*typewriter*/}
                    <h2 className="text-2xl lg:text-4xl text-gray-400 mt-4">And I&apos;m{" "}
                    <HeroTypeWriter 
                        speed={180}
                        words={["Developer","Scientist", "Musician", "Web Designer"]}
                        theme={theme}/>
                    </h2>

                    <p className="raleway-bold text-l text-slate-200 mt-6 text-center lg:text-left">
                    Welcome to my web development portfolio! I&apos;m an inquisitive individual with a passion for both science and technology. 
                    I hold an Honours degree in Plant Pathology, building on my Bachelor of Science in Microbiology and Plant Pathology. 
                    My love for science extends beyond the lab, fueling my enthusiasm for tech and web development. 
                    When I&apos;m not coding, you can find me exploring different musical instruments, constantly seeking new ways to harmonize creativity and analytical thinking. Dive into my projects to see how I blend my scientific background with innovative web solutions.
                    </p>
                </div>



                {/*Hero image section*/}
                <div className="w-full h-full flex items-start justify-center 
                    lg:item-center">
                    <motion.img
                    initial={{y : 0}}
                    animate ={{ y : [-10, 10, -10]}}
                    transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: 'linear',
                    }}
                    src={Hero} className="w-1/2 h-auto object-contain"/>

                </div>
            </div>
        </section>


    )
}

export default Introduction
