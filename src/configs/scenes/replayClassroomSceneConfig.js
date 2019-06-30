import TweenMax from 'gsap';

import anchor from '../../constants/anchor';
import {frameNumberReplayClass} from '../../stores/frameStore';

import Maxim from '../../components/Maxim.svelte';
import Classroom from '../../components/frames/replay-classroom/Classroom.svelte';
import StomachSound from '../../components/frames/replay-classroom/StomachSound.svelte';
import Alone from '../../components/frames/replay-classroom/Alone.svelte';
import ClassroomDezoom from '../../components/frames/replay-classroom/ClassroomDezoom.svelte';

export default [
    {
        id: 'classroom',
        x: 50,
        y: 40,
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
            TweenMax.to(el, 1, {autoAlpha: 1, onComplete: () => {
                 frameNumberReplayClass.update(n => n + 1);
            }});
        }

    },

    {
        id: 'stomach-sound',
        x: 5,
        y: 95,
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
                if(value !== 1) return;
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
        width: 35,
        height: 35,
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                opacity: 0,
                visibility: 'hidden',
            })
        }
    },

    {
        id: 'classroom-dezoom',
        x: 50,
        y: 50,
        anchor: anchor.center,
        width: 70,
        height: 70,
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                opacity: 0,
                visibility: 'hidden',
            })
        }
    },

    {
        id: 'maxim',
        x: 95,
        y: 75,
        anchor: anchor.bottomRight,
        width: 50,
        height: 20,
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                opacity: 0,
                visibility: 'hidden',
            })
        }
    },

    {
        id: 'next',
    },
]
