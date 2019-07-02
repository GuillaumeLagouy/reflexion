import anchor from '../../constants/anchor';
import TweenMax from 'gsap';
import {frameNumberPool} from '../../stores/frameStore';
import ChangingRooms from '../../components/frames/swimming-pool/ChangingRooms.svelte';
import Room from '../../components/frames/swimming-pool/Room.svelte';
import Next from '../../components/frames/swimming-pool/Next.svelte';
import Bus from '../../components/frames/swimming-pool/Bus.svelte';
import SwimmingMonster from '../../components/frames/swimming-pool/SwimmingMonster.svelte';

export default [
    {
        id: 'scene3-frame1',
        x: 50,
        y: 50,
        width: 50,
        height: 50,
        anchor: anchor.center,
        content: ChangingRooms,
        callback: (id) => {
            const el = document.querySelector(`#${id}`);
            Object.assign(el.style, {
                opacity: "0",
                visibility: "hidden"
            });
            frameNumberPool.subscribe(value => {
                console.log(value);
                value === 1 ? TweenMax.to(el, 1, {autoAlpha: 1}) : TweenMax.to(el, 0, {autoAlpha: 0, delay: 1});
            });
        }
    },

    {
        id: 'scene3-frame2',
        x: 5,
        y: 10,
        width: 90,
        height: 80,
        anchor: anchor.topLeft,
        content: Room,
        callback: (id) => {
            const el = document.querySelector(`#${id}`);
            Object.assign(el.style, {
                opacity: "0",
                visibility: "hidden",
                backgroundColor: "white",
            });
            frameNumberPool.subscribe(value => {
                if (value === 2) TweenMax.to(el, 0.2, {autoAlpha: 1});
            });
        }
    },
    {
        id: 'scene3-frame3',
        x: 90,
        y: 90,
        width: 15,
        height: 10,
        anchor: anchor.center,
        content: Next,
        callback: (id) => {
            const el = document.querySelector(`#${id}`);
            Object.assign(el.style, {
                opacity: "0",
                visibility: "hidden",
                zIndex: "1"
            });
            frameNumberPool.subscribe(value => {
                value === 3 ? TweenMax.to(el, 1, {autoAlpha: 1, delay: 1.1}) : null;
            });
        }
    },
    {
        id: 'scene3-frame4',
        x: 10,
        y: 30,
        width: 80,
        height: 45,
        anchor: anchor.topLeft,
        content: SwimmingMonster,
        callback: (id) => {
            const el = document.querySelector(`#${id}`);
            Object.assign(el.style, {
                opacity: "0",
                visibility: "hidden",
            });
            frameNumberPool.subscribe(value => {
                value === 4 ? TweenMax.to(el, 1, {autoAlpha: 1, delay: 1.1}) : TweenMax.to(el, 1, {
                    autoAlpha: 0,
                    delay: 1.1
                });
            });
        }
    },
    {
        id: 'scene3-frame5',
        x: 0,
        y: 0,
        width: 100,
        height: 100,
        anchor: anchor.topLeft,
        content: Bus,
        callback: (id) => {
            const el = document.querySelector(`#${id}`);
            Object.assign(el.style, {
                opacity: "0",
                visibility: "hidden",
                border: "transparent",
                zIndex: "1"
            });
            frameNumberPool.subscribe(value => {
                if (value !== 5) return;
                TweenMax.to(el, 0, {autoAlpha: 1});
            });
        }
    },
];
