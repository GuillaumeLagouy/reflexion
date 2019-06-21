import anchor from '../../constants/anchor';
import TweenMax from 'gsap';
import {frameNumber} from "../../stores/frameStore";
import ChangingRooms from '../../components/frames/swimming-pool/ChangingRooms.svelte';
import Room from '../../components/frames/swimming-pool/Room.svelte';
import Next from '../../components/Next.svelte';
import Bus from "../../components/frames/swimming-pool/Bus.svelte";
import SwimmingMonster from '../../components/frames/swimming-pool/SwimmingMonster.svelte';

export default [
    {
        id: 'scene2-frame1',
        x: 50,
        y: 50,
        width: 50,
        height: 49.9,
        anchor: anchor.center,
        content: ChangingRooms,
        callback: (id) => {
            const el = document.querySelector(`#${id}`);
            Object.assign(el.style, {
                opacity: "0",
                visibility: "hidden"
            });
            TweenMax.from(el, 1, {top: "100%"});
            TweenMax.to(el, 1, {autoAlpha: 1});
            frameNumber.subscribe(value => {
                if (value !== 0) TweenMax.to(el, 0, {autoAlpha: 0, delay: 1});
            });
        }
    },

    {
        id: 'scene2-frame2',
        x: 50,
        y: 53,
        width: 90,
        height: 80,
        anchor: anchor.center,
        content: Room,
        callback: (id) => {
            const el = document.querySelector(`#${id}`);
            Object.assign(el.style, {
                opacity: "0",
                visibility: "hidden",
                backgroundColor: "white",
            });
            frameNumber.subscribe(value => {
                if(value === 1) TweenMax.to(el, 0.2, {autoAlpha: 1});
            });
        }
    },
    {
        id: 'scene2-frame3',
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
                backgroundColor: "white",
                zIndex: "1"
            });
            frameNumber.subscribe(value => {
               value === 2? TweenMax.to(el, 1, {autoAlpha: 1, delay: 1.1}):null;
            });
            el.addEventListener('touchstart', function () {
                frameNumber.update(n => n = 3);
                TweenMax.to(document.querySelector('#scene2-frame2'), 1, {autoAlpha: 0, delay: 1});
                TweenMax.to(el, 1, {autoAlpha: 0, delay: 1.1});
            });
        }
    },
    {
        id: 'scene2-frame4',
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
            frameNumber.subscribe(value => {
                if(value !== 3) TweenMax.to(el, 2, {autoAlpha: 0});
                else TweenMax.to(el, 1, {autoAlpha: 1, delay: 2.1});
            });
        }
    },
    {
        id: 'scene2-frame5',
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
            frameNumber.subscribe(value => {
                if (value !== 4) return;
                TweenMax.to(el, 0, {autoAlpha: 1});

            });
        }
    }
];
