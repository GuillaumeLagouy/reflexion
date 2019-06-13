export default class CustomFrameHelper {
    /**
     *
     * @param config
     * @returns {*|boolean}
     */
    static isValidConfig(config) {
        if (!config) return;
        return config.id
            && config.x !== undefined
            && config.y !== undefined
            && config.width !== undefined
            && config.height !== undefined
            ;
    }
}
