import Hammer from 'hammerjs';
import jump from 'jump.js';

import {disableScroll} from '../helpers/ScrollHelper';

import {frameNumberClass} from '../stores/frameStore';
import {frameNumberPlaytime} from '../stores/frameStore';

import introSceneConfig from '../configs/scenes/introSceneConfig';
import bathroomSceneConfig from '../configs/scenes/bathroomSceneConfig';
import breakfastSceneConfig from '../configs/scenes/breakfastSceneConfig';
import busSceneConfig from './scenes/busSceneConfig';
import poolSceneConfig from './scenes/poolSceneConfig';
import playtimeScenePart1Config from './scenes/playtime/playtimeScenePart1Config';
import playtimeScenePart2Config from './scenes/playtime/playtimeScenePart2Config';
import lunchSceneConfig from './scenes/lunchSceneConfig';
import class1SceneConfig from './scenes/class1SceneConfig';
import class2SceneConfig from './scenes/class2SceneConfig';
import homeSceneConfig from './scenes/homeSceneConfig';

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
        sequence: 0,
    },

    {
        id: 'bus-scene',
        config: busSceneConfig,
        sequence: 3,
    },

    {
        id: 'swimming-pool-scene',
        config: poolSceneConfig,
        sequence: 4,
    },*/

    {
        id: 'playtime-scene-part1',
        config: playtimeScenePart1Config,
        sequence: 0,
        callback: id => {
            const el = document.getElementById(id);

            //Swipe bottom
            const hammer = new Hammer(el);
            hammer.get('swipe').set({direction: Hammer.DIRECTION_VERTICAL});
            hammer.on('swipeup', () => {
                const scenePart2 = document.getElementById('playtime-scene-part2');
                jump(scenePart2, {callback: () => frameNumberPlaytime.update(n => n + 1)});
                disableScroll();
            });
        }
    },

    {
        id: 'playtime-scene-part2',
        config: playtimeScenePart2Config,
        sequence: 0,
        callback: id => {
            const el = document.getElementById(id);

            //Swipe bottom
            const hammer = new Hammer(el);
            hammer.get('swipe').set({direction: Hammer.DIRECTION_VERTICAL});
            hammer.on('swipedown', () => {
                const scenePart1 = document.getElementById('playtime-scene-part1');
                jump(scenePart1);
                disableScroll();
            });
        }
    },



    {
        id: 'lunch-scene',
        config: lunchSceneConfig,
        sequence: 1,
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                height: '150vh',
            })
        }
    },

    {
        id: 'class-scene-part1',
        config: class1SceneConfig,
        sequence: 2,
        callback: id => {
            const el = document.getElementById(id);

            //Swipe bottom
            const hammer = new Hammer(el);
            hammer.get('swipe').set({direction: Hammer.DIRECTION_VERTICAL});
            hammer.on('swipeup', () => {
                const scenePart2 = document.getElementById('class-scene-part2');
                jump(scenePart2, {callback: () => frameNumberClass.update(n => n + 1)});
                disableScroll();
            });
        }
    },

    {
        id: 'class-scene-part2',
        config: class2SceneConfig,
        sequence: 2,
        callback: id => {
            const el = document.getElementById(id);

            //Swipe bottom
            const hammer = new Hammer(el);
            hammer.get('swipe').set({direction: Hammer.DIRECTION_VERTICAL});
            hammer.on('swipedown', () => {
                const scenePart1 = document.getElementById('class-scene-part1');
                jump(scenePart1);
                disableScroll();
            });
        }
    },

    {
        id: 'home-scene',
        config: homeSceneConfig,
        sequence: 3,
    }
]
