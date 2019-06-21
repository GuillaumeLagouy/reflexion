import introSceneConfig from '../configs/scenes/introSceneConfig';
import bathroomSceneConfig from '../configs/scenes/bathroomSceneConfig';
import breakfastSceneConfig from '../configs/scenes/breakfastSceneConfig';
import poolSceneConfig from './scenes/poolSceneConfig';
import playtimeSceneConfig from './scenes/playtimeSceneConfig';

export default [
   /*{
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
    },

    {
        id: 'swimming-pool-scene',
        config: poolSceneConfig,
        sequence: 3,
    },*/

    {
        id: 'playtime-scene',
        config: playtimeSceneConfig,
        sequence: 0,
        callback: id => {
            const el = document.getElementById(id);
            console.log(el);
            Object.assign(el.style, {
                height: '200vh',
            })
        }
    }
]
