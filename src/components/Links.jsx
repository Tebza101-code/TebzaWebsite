import { AnimatePresence, motion } from "framer-motion"
import useTheme from './useTheme';
import { Contact } from "../utils/helper";
import ContactSocialsLinks from "./ContactSocialsLinks";




const Links = () => {
    var { theme } = useTheme(); // Accessing the theme from context
    return (
        <section id='contact' className='flex items-center justify-center '>
            <div className="w-full flex items-center justify-center py-24">
            <motion.div 
                initial={{ opacity: 0, width: 0}}
                animate={{ opacity: 1, width: 200}}
                exit={{ opacity: 0, width: 0}}
                transition={{ delay: 0.4}}
                className="flex-col items-center justify-around w-52"
            >
                <p className={`bg-clip-text text-3xl mb-6 ${theme === 'theme2' ? 'text-primary-green' : 'text-primary-pink'}`}>Contact Me</p>
                <div className="mt-4 flex items-center justify-center gap-16 mt-16">
                    <AnimatePresence>
                        {Contact && Contact.map((item, index) => (
                            <ContactSocialsLinks key={index} data={item} index={index} /> 
                        ))}
                    </AnimatePresence>
                </div>
            </motion.div>
            </div>
        </section>
    )
}



export default Links