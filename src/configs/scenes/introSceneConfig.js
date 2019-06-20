import TimelineMax from 'gsap/TimelineMax';
import TweenMax from 'gsap';
import { get } from 'svelte/store'

import anchor from '../../constants/anchor';
import {frameNumber} from '../../stores/frameStore';

import Alarmclock1 from '../../components/frames/wakeup/Alarmclock1.svelte';
import Sleep from '../../components/frames/wakeup/SleepGif.svelte';
import Alarmclock2 from '../../components/frames/wakeup/Alarmclock2.svelte';
import BedroomRoof from '../../components/frames/wakeup/BedroomRoof.svelte';
import Bedroom from '../../components/frames/wakeup/Bedroom.svelte';
import BtnNext from '../../components/frames/wakeup/BtnNext.svelte'

export default [
    {
        id: 'frame1',
        x: 50,
        y: 50,
        width: 40,
        height: 40,
        content: Alarmclock1,
        anchor: anchor.center,
        callback: (id) => {
            const el = document.querySelector(`#${id}`);

            el.style.transform = 'rotate(-3deg)';
            el.style.backgroundColor = 'white';
            const a = TweenMax.to(el, .1, {rotation: '8deg', repeat: -1, delay: .3, ease: Back.easeIn, yoyo: true, yoyoEase: true});

            el.addEventListener('click', ()=>{
                TweenMax.to(el, .6, {opacity:0, display: 'none'});
                a.kill();
                frameNumber.update(n => n + 1);
            })
        }
    },

    {
        id: 'frame2',
        x: 90,
        y: 95,
        anchor: anchor.bottomRight,
        width: 50,
        height: 50,
        content: Sleep,
        callback: (id) => {
            const el = document.querySelector(`#${id}`);

            el.style.display = 'none';
            el.style.opacity = 0;
            el.style.border = 'none';
            el.style.borderImage = "none";

            frameNumber.subscribe(value => {
                if(value !== 1) return;

                const tl = new TimelineMax();
                tl.to(el, .5, {opacity: 1, display: 'block', delay: .5});
                tl.to(el, .5, { display: 'none', delay: .5});
            });
        }
    },

    {
        id: 'frame3',
        x: 50,
        y: 50,
        anchor: anchor.center,
        width: 48,
        height: 42,
        content: Alarmclock2,
        callback: (id) => {
            const el = document.querySelector(`#${id}`);

            el.style.display = 'none';
            el.style.opacity = 0;
            el.style.transform = 'rotate(-3deg)';
            el.style.backgroundColor = 'white';

            frameNumber.subscribe(value => {
                if(value !== 1) return;
                TweenMax.to(el, .1, {display: 'block', delay: 2, opacity: 1});
                const a = TweenMax.to(el, .1, {rotation: '10deg', repeat: -1, delay: .3, ease: Back.easeIn, yoyo: true, yoyoEase: true});
                el.addEventListener('click', () => {
                    a.kill();
                    TweenMax.to(el, .3, {y: -85, rotation: 0});
                    //el.style.transform = 'rotate(0deg)';
                    frameNumber.update(n => n + 1);
                })
            });
        }
    },

    {
        id: 'frame4',
        x: 90,
        y: 75,
        anchor: anchor.bottomRight,
        width: 40,
        height: 35,
        content: BedroomRoof,
        callback: (id) => {
            const el = document.querySelector(`#${id}`);

            el.style.display = 'none';
            el.style.opacity = 0;
            el.style.zIndex = 1;

            frameNumber.subscribe(value => {
                if(value !== 2) return;

                TweenMax.to(el, 1, {display: 'block', opacity: 1, delay: .8});
            })
        }
    },

    {
        id: 'frame5',
        x: 22,
        y: 88,
        anchor: anchor.bottomLeft,
        width: 30,
        height: 30,
        square: true,
        content: Bedroom,
        callback: (id) => {
            const el = document.querySelector(`#${id}`);

            el.style.display = 'none';
            el.style.opacity = 0;
            el.style.zIndex = 2;
            el.style.backgroundColor = 'white';

            frameNumber.subscribe(value => {
                if(value === 3) {
                    TweenMax.to(el, 1, {display: 'block', opacity: 1, delay: 1})
                }
            })
        }
    },

    {
        id: 'btnNext',
        x: 93,
        y: 93,
        anchor: anchor.bottomRight,
        width: 15,
        height: 8,
        content: BtnNext,
        callback: (id) => {
            const el = document.querySelector(`#${id}`);

            el.style.display = 'none';
            el.style.opacity = 0;
            el.style.zIndex = 3;

            frameNumber.subscribe(value => {
                if(value === 3){
                    const tl = new TimelineMax();
                    tl.to(el, 1, {display: 'block', opacity: 1, delay: 2});
                    tl.to(el, 1, {x: 10, repeat: -1, yoyo:true});
                }
            })
        }
    }
]
