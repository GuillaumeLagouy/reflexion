export default {
    topLeft: (container, config) => ({
            x: (config.x * container.offsetWidth)/100,
            y: (config.y * container.offsetHeight)/100,
    }),
    topRight: (container, config) => {
        return {
            x: ((config.x * container.offsetWidth)/100) - config.width,
            y: (config.y * container.offsetHeight)/100,
        }
    },
    center: (container, config) => {
        return {
            x: ((config.x * container.offsetWidth)/100) - config.width/2,
            y: ((config.y * container.offsetHeight)/100) - config.height/2,
        }
    },
    bottomLeft: (container, config) => {
        return {
            x: (config.x * container.offsetWidth)/100,
            y: ((config.y * container.offsetHeight)/100) - config.height,
        }
    },
    bottomRight: (container, config) => {
        return {
            x: ((config.x * container.offsetWidth)/100) - config.width,
            y: ((config.y * container.offsetHeight)/100) - config.height,
        }
    },
};
