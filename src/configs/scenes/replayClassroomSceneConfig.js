import TweenMax from 'gsap';
import TimelineMax from 'gsap/TimelineMax';


import anchor from '../../constants/anchor';
import {frameNumberReplayClass} from '../../stores/frameStore';

import Maxim from '../../components/Maxim.svelte';
import Classroom from '../../components/frames/replay-classroom/Classroom.svelte';
import StomachSound from '../../components/frames/replay-classroom/StomachSound.svelte';
import Alone from '../../components/frames/replay-classroom/Alone.svelte';
import ClassroomDezoom from '../../components/frames/replay-classroom/ClassroomDezoom.svelte';
import {Howl} from "howler";

export default [
    /*{
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
    },*/

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
                if(value !== 0) return;
                //const classroom = document.getElementById('classroom');
                //const stomach = document.getElementById('stomach-sound');

                const tl = new TimelineMax();
                //tl.to(classroom, .1, {autoAlpha: 0}, 2);
                //tl.to(stomach, .1, {autoAlpha: 0}, 2);
                tl.to(el, 1, {autoAlpha: 1});
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
               if(value !== 1) return;
               TweenMax.to(el, 1, {autoAlpha: 1, onComplete: () => {
                   frameNumberReplayClass.update(n => n + 1);
               }});
            });
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
