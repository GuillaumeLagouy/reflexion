import Hammer from 'hammerjs';
import jump from 'jump.js';

import {disableScroll} from '../helpers/ScrollHelper';

import {frameNumberClass} from '../stores/frameStore';
import {frameNumberPlaytime} from '../stores/frameStore';
import {frameNumberLunch} from '../stores/frameStore';

import introSceneConfig from '../configs/scenes/introSceneConfig';
import bathroomSceneConfig from '../configs/scenes/bathroomSceneConfig';
import breakfastSceneConfig from '../configs/scenes/breakfastSceneConfig';
import busSceneConfig from './scenes/busSceneConfig';
import poolSceneConfig from './scenes/poolSceneConfig';
import playtimeScenePart1Config from './scenes/playtime/playtimeScenePart1Config';
import playtimeScenePart2Config from './scenes/playtime/playtimeScenePart2Config';
import lunchScenePart1Config from './scenes/lunch/lunchScenePart1Config';
import lunchScenePart2Config from './scenes/lunch/lunchScenePart2Config';
import class1SceneConfig from './scenes/class1SceneConfig';
import class2SceneConfig from './scenes/class2SceneConfig';
import homeSceneConfig from './scenes/homeSceneConfig';
import homePageConfig from './scenes/homePageConfig'
import replayPlaytimeSceneConfig from './scenes/replayPlaytimeSceneConfig';
import replayPoolSceneConfig from './scenes/replayPoolSceneConfig';
import replayClassroomSceneConfig from './scenes/replayClassroomSceneConfig';
import endSceneConfig from './scenes/endSceneConfig';

export default [

    {
        id: 'homepage-scene',
        config: homePageConfig,
        sequence: 0,
    },

    {
        id: 'wakeup-scene',
        config: introSceneConfig,
        sequence: 1,
    },

    {
        id: 'bathroom-scene',
        config: bathroomSceneConfig,
        sequence: 2,
    },

    {
        id: 'breakfast-scene',
        config: breakfastSceneConfig,
        sequence: 3,
    },

    {
        id: 'bus-scene',
        config: busSceneConfig,
        sequence: 4,
    },

    {
        id: 'swimming-pool-scene',
        config: poolSceneConfig,
        sequence: 5,
    },

    {
        id: 'playtime-scene-part1',
        config: playtimeScenePart1Config,
        sequence: 6,
        callback: id => {
            const el = document.getElementById(id);
            jump(el, {
                duration: 0,
            });
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
        sequence: 6,
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
        id: 'lunch-scene-part1',
        config: lunchScenePart1Config,
        sequence: 7,
        callback: id => {
            const el = document.getElementById(id);
            jump(el, {
                duration: 0,
            });
            //Swipe bottom
            const hammer = new Hammer(el);
            hammer.get('swipe').set({direction: Hammer.DIRECTION_VERTICAL});
            hammer.on('swipeup', () => {
                const scenePart2 = document.getElementById('lunch-scene-part2');
                jump(scenePart2, {callback: () => frameNumberLunch.update(n => n + 1)});
                disableScroll();
            });
        }
    },

    {
        id: 'lunch-scene-part2',
        config: lunchScenePart2Config,
        sequence: 7,
        callback: id => {
            const el = document.getElementById(id);

            //up
            const hammer = new Hammer(el);
            hammer.get('swipe').set({direction: Hammer.DIRECTION_VERTICAL});
            hammer.on('swipedown', () => {
                const scenePart1 = document.getElementById('lunch-scene-part1');
                jump(scenePart1);
                disableScroll();
            });
        }
    },

    {
        id: 'class-scene-part1',
        config: class1SceneConfig,
        sequence: 8,
        callback: id => {
            const el = document.getElementById(id);
            jump(el, {
                duration: 0,
            });
            //bottom
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
        sequence: 8,
        callback: id => {
            const el = document.getElementById(id);

            //up
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
        sequence: 9,
    },

    {
        id: 'replay-pool',
        config: replayPoolSceneConfig,
        sequence: 10,
    },

    {
        id: 'replay-playtime',
        config: replayPlaytimeSceneConfig,
        sequence: 11,
    },

    {
        id: 'replay-classroom',
        config: replayClassroomSceneConfig,
        sequence: 12,
    },

    {
        id: 'end-scene',
        config: endSceneConfig,
        sequence: 13,

    }
]
