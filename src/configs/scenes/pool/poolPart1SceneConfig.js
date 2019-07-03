import anchor from '../../../constants/anchor';

import Title from '../../../components/Title.svelte';
import Time from '../../../components/Time.svelte';
import ScrollDown from '../../../components/instructions/ScrollDown.svelte';
import Pool from '../../../components/frames/swimming-pool/Pool.svelte';
import TweenMax from "gsap";
import {frameNumberBus} from "../../../stores/frameStore";

export default [
    {
        id: 's3-pool',
        x: 50,
        y: 26,
        anchor: anchor.center,
        width: 30,
        height: 30,
        content: Pool,
        callback: id => {
            const el = document.getElementById(id);
            TweenMax.from(el, 0.5, {yPercent: -100, autoAlpha: 0});
        }
    },

    {
        id: 's3-title',
        x: 50,
        y: 50,
        anchor: anchor.center,
        width: 40,
        height: 10,
        content: Title,
        title: 'COURS DE NATATION',
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                border: 0,
                webkitBorderImage: 'none',
                zIndex: 1
            });
            TweenMax.from(el, 0.5, {autoAlpha: 0});
        }
    },

    {
        id: 's3-time',
        x: 50,
        y: 56,
        anchor: anchor.center,
        width: 30,
        height: 10,
        content: Time,
        time: "9 : 00",
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                border: 0,
                webkitBorderImage: 'none',
                zIndex: 1
            });
        }
    },


    {
        id: 's3-instruction-scroll-down',
        x: 98,
        y: 95,
        anchor: anchor.bottomRight,
        width: 10,
        height: 35,
        content: ScrollDown,
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                border: 0,
                borderImage: 'none',
                webkitBorderImage: 'none',
            });
        }
    },
]
