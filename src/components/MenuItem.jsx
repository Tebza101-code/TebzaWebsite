import PropTypes from "prop-types";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import useTheme from "./useTheme"


const MenuItem = ({menu, index,}) => {
const [isHovered, setIsHovered] = useState(false)
const { theme } = useTheme(); // Use theme from context

    return (
      <a 
      href={menu.uri} 
      className={`w-12 h-12 rounded-full flex items-center justify-center 
      group cursor-pointer hover:bg-gradient-to-br 
      ${theme === 'theme2' ? 'hover:from-primary-green hover:to-secondary-green' : 'hover:from-primary-pink hover:to-secondary-pink'} relative`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <menu.Icon
        className={`text-texlight group-hover:text-bgPrimary text-xl`} />
    
      <AnimatePresence>
        {isHovered && (
          <motion.div 
            initial={{opacity : 0, x : -25}}
            animate={{opacity : 1, x : 0}}
            exit={{opacity : 0, x : -25}}
            className="absolute bg-white rounded-md px-6 py-2 -left-[140px] 
            after:absolute after:-right-1 after:top-3 after:w-3 after:h-3
            after:bg-white after:rotate-45"
              style={{ boxShadow: "inset 0px 0px 10px rgba(0,0,0,0.4)" }}
            >
            <p className="text-bgPrimary">{menu?.name}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </a>
    
    
  )
}

MenuItem.propTypes = {
  menu: PropTypes.shape({
      uri: PropTypes.string.isRequired,
      Icon: PropTypes.elementType.isRequired
  }).isRequired,
  index: PropTypes.number.isRequired,
  theme: PropTypes.string.isRequired,
};
export default MenuItem
