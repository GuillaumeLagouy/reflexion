import anchor from '../../constants/anchor';
import TweenMax from 'gsap';
import Room from '../../components/frames/replay-pool/Room.svelte';
import BtnNext from "../../components/frames/wakeup/BtnNext.svelte";
import {frameNumberReplayPool} from "../../stores/frameStore";

export default [
    {
        id: 'scene3-frame6',
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
            });
            TweenMax.to(el, 0.2, {autoAlpha: 1});
        }
    },
    {
        id: 'scene3-frame7',
        x: 90,
        y: 90,
        width: 15,
        height: 10,
        anchor: anchor.center,
        content: BtnNext,
        callback: (id) => {
            const el = document.querySelector(`#${id}`);
            Object.assign(el.style, {
                opacity: "0",
                visibility: "hidden",
                zIndex: "1"
            });
            frameNumberReplayPool.subscribe(value => {
                value === 2? TweenMax.to(el, 1, {autoAlpha: 1, delay: 1.1}):null;
            });
        }
    }
];