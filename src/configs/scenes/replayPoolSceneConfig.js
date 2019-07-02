import anchor from '../../constants/anchor';
import TweenMax from 'gsap';
import Room from '../../components/frames/replay-pool/Room.svelte';
import BtnNext from "../../components/frames/wakeup/BtnNext.svelte";
import {frameNumberReplayPool} from "../../stores/frameStore";
import Maxim from "../../components/Maxim.svelte";
import Title from "../../components/Title.svelte";
import TimelineMax from "gsap/TimelineMax";

export default [
    {
        id: 's10-title',
        x: 5,
        y: 2.5,
        anchor: anchor.topLeft,
        width: 40,
        height: 10,
        content: Title,
        title: 'SOUVENIR DES VESTIAIRES',
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                opacity: 0,
                visibility: 'hidden',
            });
            TweenMax.to(el, 1, {
                autoAlpha: 1, delay: 1, onComplete: () => {
                    frameNumberReplayPool.update(n => n = 1);
                }
            });
        }
    },
    {
        id: 'scene3-frame6',
        x: 5,
        y: 15,
        width: 90,
        height: 80,
        anchor: anchor.topLeft,
        content: Room,
        callback: (id) => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                opacity: "0",
                visibility: "hidden",
            });
            frameNumberReplayPool.subscribe((value) => value === 1 ? TweenMax.to(el, 0.2, {autoAlpha: 1}) : null);
        }
    },

    {
        id: 's10-maxim',
        x: 5,
        y: 95,
        anchor: anchor.bottomLeft,
        width: 55,
        height: 15,
        content: Maxim,
        maxim: "Tu te compares aux autres, tout comme les autres se comparent à toi. Nous sommes beaux dans nos différences.",
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                backgroundColor: 'white',
                zIndex: 1,
                opacity: 0,
                visibility: 'hidden',
            });
            frameNumberReplayPool.subscribe(value => {
                if (value !== 2) return;
                TweenMax.to(el, 1, {
                    autoAlpha: 1, delay: 1, onComplete: () => {
                        frameNumberReplayPool.update(n => n = 3);
                    }
                });
            });
        }
    },
    {
        id: 'scene3-frame7',
        x: 90,
        y: 90,
        width: 15,
        height: 8,
        anchor: anchor.center,
        content: BtnNext,
        callback: (id) => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                display: 'none',
                backgroundColor: 'white',
                opacity: 0,
                zIndex: 1
            });
            frameNumberReplayPool.subscribe(value => {
                if(value !== 3) return;
                const tl = new TimelineMax();
                tl.to(el, 1, {display: 'block', opacity: 1, delay: 2});
                tl.to(el, 1, {x: 10, repeat: -1, yoyo:true});
            });
        }
    },
];
