import introSceneConfig from '../configs/scenes/introSceneConfig';
import bathroomSceneConfig from '../configs/scenes/bathroomSceneConfig';
import breakfastSceneConfig from '../configs/scenes/breakfastSceneConfig';
import poolSceneConfig from './scenes/poolSceneConfig';
import playtimeSceneConfig from './scenes/playtimeSceneConfig';
import lunchSceneConfig from './scenes/lunchSceneConfig';
import classSceneConfig from './scenes/classSceneConfig';
import homeSceneConfig from './scenes/homeSceneConfig';

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
    },

    {
        id: 'swimming-pool-scene',
        config: poolSceneConfig,
        sequence: 3,
    },

    {
        id: 'playtime-scene',
        config: playtimeSceneConfig,
        sequence: 4,
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                height: '200vh',
            })
        }
    },

    {
        id: 'lunch-scene',
        config: lunchSceneConfig,
        sequence: 5,
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                height: '200vh',
            })
        }
    },

    {
        id: 'class-scene',
        config: classSceneConfig,
        sequence: 6,
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                height: '200vh',
            })
        }
    },

    {
        id: 'home-scene',
        config: homeSceneConfig,
        sequence: 7,
    }
]
