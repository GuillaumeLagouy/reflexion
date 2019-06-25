import anchor from "../../constants/anchor";
import {frameNumberClass} from '../../stores/frameStore';
import TweenMax from 'gsap';

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

                // When the interaction ends
                //frameNumberClass.update(n => n + 1);
            })
        }
    },
/*
    {
        id: 's6-noise',
        x: 5,
        y: 146,
        anchor: anchor.bottomLeft,
        width: 30,
        height: 15,
        content: Noise,
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                display: 'none',
                opacity: 0,
            });

            frameNumberClass.subscribe(value => {
                console.log(value);
               if(value !== 2) return;
               TweenMax.to(el, 1, {display: 'block', opacity: 1, onComplete: () => {
                   frameNumberClass.update(n => n + 1);
               }});
            });
        }
    },

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
    },

    {
        id: 's6-360',
        x: 100,
        y: 154,
        anchor: anchor.bottomRight,
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
            });

            frameNumberClass.subscribe(value => {
               if(value !== 4) return;
               console.log(value);
               TweenMax.to(el, 1, {visibility: 'visible', zIndex: 2})
            });

        }
    },

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
