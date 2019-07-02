import anchor from "../../../constants/anchor";
import Lane1 from "../../../components/frames/lunch/Lane1.svelte";
import Lane2 from "../../../components/frames/lunch/Lane2.svelte";
import {frameNumberLunch} from "../../../stores/frameStore";
import TweenMax from "gsap";
import Eat from "../../../components/frames/lunch/Eat.svelte";
import BtnNext from "../../../components/frames/wakeup/BtnNext.svelte";
import TimelineMax from "gsap/TimelineMax";

export default [
    {
        id: 's5-lane-1',
        x: 16,
        y: 20,
        anchor: anchor.topLeft,
        width: 42,
        height: 35,
        content: Lane1,
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                zIndex: 1,
                display: 'block',
                opacity: 0,
                visibility: 'hidden',
            });
            frameNumberLunch.subscribe(value => {
                if(value !== 1) return;
                TweenMax.to(el, 1, {autoAlpha: 1, delay: 0.5})
            });
        }
    },

    {
        id: 's5-lane-2',
        x: 79,
        y: 23.5,
        anchor: anchor.topRight,
        width: 20,
        height: 35,
        content: Lane2,
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                zIndex: 2,
                display: 'none',
                opacity: 0,
                backgroundColor: 'white',
            });
            frameNumberLunch.subscribe(value => {
                if(value !== 2) return;
                TweenMax.to(el, 1, {
                    display: 'block',
                    opacity: 1,
                    left: '-=2vw',
                    top: '+=2vw',
                    onComplete: () => {
                        frameNumberLunch.update(n => n + 1);
                    }});
            })
        }
    },

    {
        id: 's5-eat',
        x: 25,
        y: 90,
        anchor: anchor.bottomLeft,
        width: 25,
        height: 25,
        square: true,
        content: Eat,
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                zIndex: 3,
                display: 'none',
                opacity: 0,
                backgroundColor: 'white',
            });
            frameNumberLunch.subscribe(value => {
                if(value !== 3) return;
                TweenMax.to(el, 1, {delay: 1, display: 'block', opacity: 1, onComplete: () => {
                        const btnNext = document.getElementById('s5-next');
                        const tl = new TimelineMax();
                        tl.to(btnNext, 1, {display: 'block', opacity: 1, delay: 1});
                        tl.to(btnNext, 1, {x: 10, repeat: -1, yoyo:true});
                    }})
            });
        }
    },

    {
        id: 's5-next',
        x: 90,
        y: 90,
        anchor: anchor.bottomRight,
        width: 15,
        height: 8,
        content: BtnNext,
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                display: 'none',
                opacity: 0,
            });
        }
    }
]
