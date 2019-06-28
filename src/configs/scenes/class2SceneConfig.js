import anchor from "../../constants/anchor";
import {frameNumberClass} from '../../stores/frameStore';
import {activeSceneNb} from '../../stores/scenesStore';
import TweenMax from 'gsap';
import TimelineMax from 'gsap/TimelineMax';

import Class from "../../components/frames/class/Class.svelte";
import MathFrame from '../../components/frames/class/MathFrame.svelte';
import Noise from '../../components/frames/class/Noise.svelte';
import Alone from '../../components/frames/class/Alone.svelte';
import Class360 from '../../components/frames/class/Class360.svelte';
import Ink from '../../components/frames/class/Ink.svelte';

export default [

    {
        id: 's6-class',
        x: 50,
        y: 50,
        anchor: anchor.center,
        width: 50,
        height: 50,
        content: Class,
    },

    {
        id: 'S6-math',
        x: 100,
        y: 0,
        anchor: anchor.topRight,
        width: 55,
        height: 100,
        content: MathFrame,
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                display: 'none',
                zIndex: 2,
                border: 0,
                borderImage: 'none',
                webkitBorderImage: 'none',
            });

            frameNumberClass.subscribe(value => {
                if(value !== 1) return;
                TweenMax.from(el, 1, {x: 850, rotation: '8deg', scale: 1.1, delay: 1});
                TweenMax.to(el, .1, {display: 'block'});
            })
        }
    },

    {
        id: 's6-noise',
        x: 2,
        y: 97,
        anchor: anchor.bottomLeft,
        width: 40,
        height: 20,
        content: Noise,
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                display: 'none',
                opacity: 0,
                border: 0,
                borderImage: 'none',
                webkitBorderImage: 'none',
                zIndex: 4,
                backgroundColor: 'transparent',
            });
            frameNumberClass.subscribe(value => {
                if(value !== 2) return;
                TweenMax.to(el, 1, {display: 'block', opacity: 1, onComplete: () => {
                    frameNumberClass.update(n => n + 1);
                }});
            });
        }
    },
    /*
    {
        id: 's6-alone',
        x: 50,
        y: 100,
        anchor: anchor.center,
        width: 12,
        height: 22,
        content: Alone,
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                display: 'none',
            });

            frameNumberClass.subscribe(value => {
                if(value !== 3) return;
                const classFrame = document.getElementById('s6-class');
                const mathframe = document.getElementById('S6-math');
                const noise = document.getElementById('s6-noise');

                TweenMax.staggerTo([classFrame, noise, mathframe], 1, {display: 'none', opacity: 0, onComplete: () => {
                    TweenMax.to(el, 1, {display: 'block'});
                    frameNumberClass.update(n => n + 1);
                }});
            })
        }
    },*/

    {
        id: 's6-360',
        x: 50,
        y: 50,
        anchor: anchor.center,
        width: 100,
        height: 100,
        content: Class360,
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                border: 0,
                borderImage: 'none',
                webkitBorderImage: 'none',
                visibility: 'hidden',
                zIndex: 5,
            });

            frameNumberClass.subscribe(value => {
               if(value !== 3) return;

               const tl = new TimelineMax({onComplete: () => {
                   activeSceneNb.update(n => n + 1);
               }});
               tl.to(el, 1, {visibility: 'visible', delay: 1});
               tl.to('#class-scene-part2', 1, {opacity: 0, delay: 10});
            });

        }
    },
    /*
    {
        id: 's6-ink',
        x: 50,
        y: 50,
        anchor: anchor.center,
        width: 100,
        height: 100,
        content: Ink,
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                display: 'none',
            });
        }
    },*/
]
