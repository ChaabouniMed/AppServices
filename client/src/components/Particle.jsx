import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Particle() {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    // const particlesLoaded = (container) => {
    //     console.log(container);
    // };
    return (
        <Particles
        id="tsparticles"
        style={{height: "600px"}}
        init={particlesInit}

        options={
            {
                "fullScreen": {
                    "enable": false,
                    "zIndex": -1
                },
                "fpsLimit": 80,
                "particles": {
                    "number": {
                        "value": 80,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": "#0A5555",
                        // "animation": {
                        //     "enable": true,
                        //     "speed": 20,
                        //     "sync": true
                        // }
                    },
                    "opacity": {
                        "value": 0.5
                    },
                    "size": {
                        "value": {
                            "min": 0.1,
                            "max": 5
                        }
                    },
                    "links": {
                        "enable": true,
                        "distance": 100,
                        "color": "#0A5555",
                        "opacity": 0.4,
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": 1,
                        "direction": "none",
                        "outModes": {
                            "default": "out"
                        }
                    }
                },
                "interactivity": {
                    "events": {
                        "onHover": {
                            "enable": false,
                            "mode": "repulse"
                        },
                        "onClick": {
                            "enable": false,
                            "mode": "push"
                        },
                        "resize": true
                    },
                    "modes": {
                        "repulse": {
                            "distance": 150
                        },
                        "push": {
                            "quantity": 4
                        }
                    }
                },
                "detectRetina": true,
                "background": {
                    "color": "#DDDCEF"
                }
            }
    }
    />
    )
}


