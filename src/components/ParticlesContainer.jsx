import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim"; // Keep using the slim package for bundle size optimization.
import useTheme from './useTheme'; // Import useTheme hook to access the theme

const ParticlesContainer = (props) => {
  const { theme } = useTheme(); // Access the theme from context
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  // Define the particles options with dynamic colors based on the theme
  const options = useMemo(
    () => ({
      fullScreen: { enable: true },
      background: {
        color: {
          value: "", // Adjust if needed
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse",
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 90,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          grab: {
            distance: 150,
          },
        },
      },
      particles: {
        color: {
          value: theme === 'theme2' ? "#00cc99" : "#ff3385", // Dynamically set particle color based on theme
        },
        links: {
          color: theme === 'theme2' ? "#00b386" : "#ff0066", // Dynamically set link color based on theme
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 150,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [theme], // Add theme as a dependency so that options update when the theme changes
  );

  return <Particles id={props.id} init={particlesLoaded} options={options} />;
};

export default ParticlesContainer;
