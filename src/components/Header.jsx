import { Menus } from '../utils/helper'
import MenuItem from '../components/MenuItem'
import useTheme from './useTheme'


const Header = () => {
  var { theme } = useTheme(); // Accessing the theme from context
  return (
    <div className="fixed bottom-0 right-0 lg:top-0 w-full h-auto lg:h-screen lg:w-32 flex justify-center items-end
    lg:items-center pb-8 lg:pb-0 z-50">
      <div
        className={`px-4 py-3 lg:py-12 rounded-full border ${
          theme === 'theme2' ? 'border-primary-green' : 'border-primary-pink'
        } flex flex-row lg:flex-col items-center justify-center gap-12 duration-200 backdrop-blur-md`}
      >
        {Menus && Menus.map((item, index) => (
          <MenuItem key={index} menu={item} index={index} theme='default' />
        ))}

      </div>
      
    </div>
  )
}

export default Header








