const ParticlesConfig = {
  autoplay: true,
  fullScreen: {
    enable: true,
    zIndex: -1,
  },
  particles: {
    number: {
      value: 1500,
      density: {
        enable: false,
        value_area: 800,
      },
    },
    color: {
      value: '#b5a169',
    },
    shape: {
      type: 'square',
    },
    preset: 'stars',
    opacity: {
      value: 0.8,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: .85,
      random: false,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    rotate: {
      value: 0,
      random: true,
      direction: 'clockwise',
      animation: {
        enable: true,
        speed: 5,
        sync: false,
      },
    },
    line_linked: {
      enable: false, // set to false to disable linking between particles
      distance: 600,
      color: '#42f5cb',
      opacity: 0.4,
      width: 2,
    },
    move: {
      enable: true,
      speed: .5,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: false, // disable hover interaction
        mode: 'repulse',
      },
      onclick: {
        enable: false, // disable click interaction
        mode: 'bubble',
      },
      resize: true,
    },
    modes: {
      repulse: {
        distance: 200,
      },
      bubble: {
        distance: 400,
        size: 40,interactivity: {
          events: {
            onhover: {
              enable: false, // disable hover interaction
              mode: 'repulse',
            },
            onclick: {
              enable: false, // disable click interaction
              mode: 'bubble',
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 200,
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  
  retina_detect: true,
  background: {
    color: "#000000",
    opacity: 1,
  },
};

export default ParticlesConfig;
