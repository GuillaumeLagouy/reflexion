import anchor from "../../../constants/anchor";
import Title from "../../../components/Title.svelte";
import TweenMax from "gsap";
import {frameNumberPlaytime} from "../../../stores/frameStore";
import ScrollDown from "../../../components/instructions/ScrollDown.svelte";

export default [
    {
        id: 's4-bell',
        x: 50,
        y: 26,
        anchor: anchor.center,
        width: 30,
        height: 30,
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                backgroundImage: 'url("./assets/png/playtime/S4_Ring.png")',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                backgroundSize: '100%',
            })
        }
    },

    {
        id: 's4-title',
        x: 50,
        y: 50,
        anchor: anchor.center,
        width: 30,
        height: 10,
        content: Title,
        title: 'LA RÉCRÉATION',
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                border: 0,
                webkitBorderImage: 'none',
            });
        }
    },

    {
        id: 's4-time',
        x: 50,
        y: 60,
        anchor: anchor.center,
        width: 30,
        height: 10,
        content: Title,
        title: '11 : 30',
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                border: 0,
                borderImage: 'none',
                webkitBorderImage: 'none',
            });
        }
    },

    {
        id: 's4-instruction-scroll-down',
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
