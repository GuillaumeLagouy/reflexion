export default class CustomFrameHelper {
    /**
     *
     * @param config
     * @returns {*|boolean}
     */
    static isValidConfig(config) {
        return config.id
            && config.x !== undefined
            && config.y !== undefined
            && config.width !== undefined
            && config.height !== undefined
            ;
    }

    /**
     *
     * @param el
     * @param config
     */
    static setFrameStyle(el, config) {
        el.style.width = `${config.width}px`;
        el.style.height = `${config.height}px`;
    }
}