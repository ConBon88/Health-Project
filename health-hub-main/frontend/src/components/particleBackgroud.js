import Particles from "react-tsparticles";
import React from "react";
import { loadFull } from "tsparticles";
import { useColor } from '../context/ColorContext';

//function for loading particles in
export default function ParticleBackground() {
  const { color } = useColor()
	const particlesInit = async (main) => {
		await loadFull(main);
	}
	return (
		<Particles
			id="tsparticles"
			init={particlesInit}
            options={{
    fullScreen: {
        enable: true,
        zIndex: -1
    },
    particles: {
      number: {
        value: 150,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: color
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 0.49716301422833176,
        random: true,
        anim: {
          enable: true,
          speed: 0.1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 15.782952832645451,
        random: true,
        anim: {
          enable: true,
          speed: 10,
          size_min: 0,
          sync: false
        }
      },
      line_linked: {
        enable: false,
        distance: 500,
        color: "#ffffff",
        opacity: 0.4,
        width: 2
      },
      move: {
        enable: true,
        speed: 1.6,
        direction: "bottom",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "bubble"
        },
        onclick: {
          enable: true,
          mode: "repulse"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 0.5
          }
        },
        bubble: {
          distance: 400,
          size: 3,
          duration: 0.3,
          opacity: 1,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  }}
		/>
	)
}