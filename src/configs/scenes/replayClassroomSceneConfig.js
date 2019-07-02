import TweenMax from 'gsap';
import TimelineMax from 'gsap/TimelineMax';


import anchor from '../../constants/anchor';
import {frameNumberReplayClass} from '../../stores/frameStore';

import Maxim from '../../components/frames/replay-classroom/Maxim.svelte';
import Classroom from '../../components/frames/replay-classroom/Classroom.svelte';
import StomachSound from '../../components/frames/replay-classroom/StomachSound.svelte';
import Alone from '../../components/frames/replay-classroom/Alone.svelte';
import ClassroomDezoom from '../../components/frames/replay-classroom/ClassroomDezoom.svelte';
import BtnNext from '../../components/frames/wakeup/BtnNext.svelte';
import Title from '../../components/Title.svelte';

export default [
    {
        id: 's9-title',
        x: 5,
        y: 5,
        anchor: anchor.topLeft,
        width: 40,
        height: 10,
        content: Title,
        title: 'SOUVENIR DE LA CLASSE',
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                backgroundColor: 'white',
                opacity: 0,
                visibility: 'hidden',
            });
            TweenMax.to(el, 1, {autoAlpha: 1, delay: 1, onComplete: () => {
                frameNumberReplayClass.update(n => n + 1);
            }});
        }
    },

    {
        id: 'classroom',
        x: 50,
        y: 50,
        anchor: anchor.center,
        width: 65,
        height: 60,
        content: Classroom,
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                opacity: 0,
                visibility: 'hidden',
            });
            frameNumberReplayClass.subscribe(value => {
                if(value !== 1) return;
                TweenMax.to(el, 1, {autoAlpha: 1, onComplete: () => {
                     frameNumberReplayClass.update(n => n + 1);
                }});
            });
        }

    },

    {
        id: 'stomach-sound',
        x: 5,
        y: 100,
        anchor: anchor.bottomLeft,
        width: 48,
        height: 20,
        content: StomachSound,
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                opacity: 0,
                visibility: 'hidden',
                border: 0,
                borderImage: 'none',
                webkitBorderImage: 'none',
            });
            frameNumberReplayClass.subscribe(value => {
                if(value !== 2) return;
                TweenMax.to(el, 1, {autoAlpha: 1, delay: 1});
            })
        }
    },

    {
        id: 'alone',
        x: 50,
        y: 50,
        anchor: anchor.center,
        square: true,
        width: 100,
        height: 100,
        content: Alone,
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                opacity: 0,
                visibility: 'hidden',
                zIndex: 1,
                backgroundColor: 'white',
                border: 0,
                borderImage: 'none',
                webkitBorderImage: 'none',
            });
            frameNumberReplayClass.subscribe(value => {
                if(value !== 3) return;
                TweenMax.to(el, .1, {autoAlpha: 1, delay: 2.5});
            });
        }
    },

    {
        id: 'classroom-dezoom',
        x: 50,
        y: 50,
        anchor: anchor.center,
        width: 100,
        height: 100,
        content: ClassroomDezoom,
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                opacity: 0,
                visibility: 'hidden',
                zIndex: 2,
                border: 0,
                backgroundImage: 'none',
                webkitBorderImage: 'none',
            });
            frameNumberReplayClass.subscribe(value => {
               if(value !== 4) return;
               TweenMax.to('#s9-title', 0, {autoAlpha: 0});
               TweenMax.to(el, 1, {autoAlpha: 1, onComplete: () => {
                   frameNumberReplayClass.update(n => n + 1);
               }});
            });
        }
    },

    {
        id: 'maxim',
        x: -2,
        y: 0,
        anchor: anchor.topLeft,
        width: 50,
        height: 30,
        content: Maxim,
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                opacity: 0,
                visibility: 'hidden',
                zIndex: 3,
                border: 0,
                borderImage: 'none',
                webkitBorderImage: 'none',
            });
            frameNumberReplayClass.subscribe(value => {
                if(value !== 5) return;
                TweenMax.to(el, 1, {autoAlpha: 1, delay: 2, onComplete: () => {
                    frameNumberReplayClass.update(n => n + 1);
                }});
            })
        }
    },

    {
        id: 'next',
        x: 95,
        y: 95,
        anchor: anchor.bottomRight,
        width: 15,
        height: 8,
        content: BtnNext,
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                display: 'none',
                opacity: 0,
                zIndex: 4,
            });
            frameNumberReplayClass.subscribe(value => {
                if(value !== 6) return;
                const tl = new TimelineMax();
                tl.to(el, 1, {display: 'block', opacity: 1, delay: 2});
                tl.to(el, 1, {x: 10, repeat: -1, yoyo:true});
            })
        }
    },
]
