import anchor from '../../constants/anchor';

import Title from '../../components/Title.svelte';
import ScrollDown from '../../components/instructions/ScrollDown.svelte';
import Ruler from '../../components/frames/class/Ruler.svelte';
import Time from "../../components/Time.svelte";
import TweenMax from "gsap";
import {frameNumberBus} from "../../stores/frameStore";


export default [
    {
        id: 's6-ruler',
        x: 50,
        y: 26,
        anchor: anchor.center,
        width: 30,
        height: 30,
        content: Ruler,
    },

    {
        id: 's6-title',
        x: 50,
        y: 50,
        anchor: anchor.center,
        width: 30,
        height: 10,
        content: Title,
        title: 'LA CLASSE',
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                border: 0,
                webkitBorderImage: 'none',
            });
        }
    },

    {
        id:'s2-time',
        x: 50,
        y: 57,
        anchor: anchor.center,
        width: 30,
        height: 10,
        content: Time,
        time: "14 : 30",
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
        id: 's6-instruction-scroll-down',
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
            })
        }
    },
]
