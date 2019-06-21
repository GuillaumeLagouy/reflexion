import introSceneConfig from '../configs/scenes/introSceneConfig';
import bathroomSceneConfig from "../configs/scenes/bathroomSceneConfig";
import breakfastSceneConfig from "../configs/scenes/breakfastSceneConfig";

export default [
    {
        id: 'wakeup-scene',
        config: introSceneConfig,
        sequence: 0,
    },

    {
        id: 'bathroom-scene',
        config: bathroomSceneConfig,
        sequence: 1,
    },

    {
        id: 'breakfast-scene',
        config: breakfastSceneConfig,
        sequence: 2,
    }
]
