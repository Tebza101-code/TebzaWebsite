import Introduction from '../components/Introduction'
import Projects from '../components/Projects'
import Links from '../components/Links'
import About from '../components/About'
import useTheme  from '../components/useTheme'
import ThemeSwitcher from '../components/ThemeSwitcher'
import Header from '../components/Header'
import Skills from '../components/Skills'
import ParticlesContainer from '../components/ParticlesContainer'

const Home = () => {
    const { theme } = useTheme();

    return (
        <div className={`${theme} min-h-screen conainer mx-auto`} >
            <div className='conainer mx-auto'>
                <div>
                    <ParticlesContainer />
                    <ThemeSwitcher />
                    <Header />
                    <Introduction />
                    <About />
                    <Skills />
                    <Projects />
                    <Links />
                </div>
            </div>
        </div>
    )
}

export default Home
