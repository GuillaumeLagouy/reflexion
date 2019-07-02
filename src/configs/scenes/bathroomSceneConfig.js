import anchor from '../../constants/anchor';
import { frameNumberBathroom } from '../../stores/frameStore';
import TweenMax from 'gsap';
import {activeSceneNb} from '../../stores/scenesStore';

import Shower from '../../components/frames/bathroom/Shower.svelte';
import Tap from '../../components/frames/bathroom/Tap.svelte';
import Sink from '../../components/frames/bathroom/Sink.svelte';
import Mirror from '../../components/frames/bathroom/Mirror.svelte';
import BtnNext from '../../components/frames/wakeup/BtnNext.svelte';
import TimelineMax from "gsap/TimelineMax";

export default [
    {
        id: 'shower',
        x: 50,
        y: 50,
        width: 26,
        height: 70,
        anchor: anchor.center,
        content: Shower,
        callback: (id) => {
            const el = document.querySelector(`#${id}`);

            el.style.backgroundColor = 'white';
            el.style.opacity = 0;

            TweenMax.to(el, 1, {opacity: 1});
        }
    },

    {
        id: 'tap',
        x: 85,
        y: 90,
        width: 30,
        height: 20,
        anchor: anchor.bottomRight,
        content: Tap,
        callback: (id) => {
            const el = document.querySelector(`#${id}`);

            el.style.backgroundColor = 'white';
            el.style.zIndex = 2;
            el.style.display = 'none';
            el.style.opacity = 0;

            TweenMax.to(el, 1, {delay: 3, display: 'block', opacity: 1})
        }
    },

    {
        id: 'sink',
        x: 50,
        y: 50,
        width: 40,
        height: 55,
        anchor: anchor.center,
        content: Sink,
        callback: (id) => {
            const el = document.querySelector(`#${id}`);

            el.style.display = 'block';
            el.style.opacity = 0;
            el.style.zIndex = 3;
            el.style.backgroundColor = 'white';

            frameNumberBathroom.subscribe(value => {
                if(value === 1) {
                    TweenMax.to(el, 1, {opacity: 1});
                    setTimeout(() => {
                        frameNumberBathroom.update(n => n + 1);
                    }, 10000);
                }
            })
        }
    },

    {
        id: 'mirror',
        x: 50,
        y: 50,
        width: 60,
        height: 90,
        anchor: anchor.center,
        content: Mirror,
        callback: (id) => {
            const el = document.querySelector(`#${id}`);

            Object.assign(el.style, {
                display: 'none',
                opacity: 1,
                zIndex: 4,
                backgroundColor: 'white',
            });

            frameNumberBathroom.subscribe(value => {
                if(value === 2) {
                    TweenMax.to(el, 1, {display: 'block', opacity: 1});
                    frameNumberBathroom.update(n => n + 1);
                }
            })
        }
    },

    {
        id: 's2-btnNext',
        x: 90,
        y: 90,
        anchor: anchor.bottomRight,
        width: 15,
        height: 8,
        content: BtnNext,
        callback: id => {
            const el = document.getElementById(id);

            Object.assign(el.style, {
                backgroundColor: 'white',
                display: 'none',
                opacity: 0,
                zIndex: 5,
            });

            frameNumberBathroom.subscribe(value => {
                if(value !== 3) return;
                const tl = new TimelineMax();
                tl.to(el, 1, {display: 'block', opacity: 1, delay: 2});
                tl.to(el, 1, {x: 10, repeat: -1, yoyo:true});
            });
        },
    }
]
