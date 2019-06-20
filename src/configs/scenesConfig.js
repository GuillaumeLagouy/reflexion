import introSceneConfig from '../configs/scenes/introSceneConfig';
import bathroomSceneConfig from "../configs/scenes/bathroomSceneConfig";
import breakfastSceneConfig from "../configs/scenes/breakfastSceneConfig";
import poolSceneConfig from "./scenes/poolSceneConfig";

export default [
    {
        id: 'wakeup-scene',
        config: introSceneConfig,
    },

    {
        id: 'bathroom-scene',
        config: bathroomSceneConfig,
    },

    {
        id: 'breakfast-scene',
        config: breakfastSceneConfig,
    },

    {
        id: 'swimming-pool-scene',
        config: poolSceneConfig
    }
]
