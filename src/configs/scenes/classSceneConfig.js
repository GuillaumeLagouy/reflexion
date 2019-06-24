import anchor from "../../constants/anchor";

import Title from "../../components/Title.svelte";
import Class360 from '../../components/frames/class/Class360.svelte';

export default [
    {
        id: 's6-bell',
        x: 50,
        y: 26,
        anchor: anchor.center,
        width: 30,
        height: 30,
    },

    {
        id: 's6-title',
        x: 50,
        y: 50,
        anchor: anchor.center,
        width: 30,
        height: 10,
        content: Title,
        title: 'TITRE',
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                border: 0,
                webkitBorderImage: 'none',
            });
            const classFrame = document.getElementById('s6-class');
            const initialTop = Math.round(el.getBoundingClientRect().top);
            window.addEventListener('scroll', () => {
                const titlePosPercent = 100 - ((Math.round(el.getBoundingClientRect().top) * 100)/initialTop);

                classFrame.style.opacity = `${(titlePosPercent / 100)}`;
            });
        }
    },

    {
        id: 's6-class',
        x: 50,
        y: 100,
        anchor: anchor.center,
        width: 50,
        height: 50,
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
               opacity: 0,
            });
        }
    },

    {
        id: 'S6-math',
        x: 100,
        y: 0,
        anchor: anchor.topRight,
        width: 40,
        height: 100,
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                display: 'none',
            });
        }
    },

    {
        id: 's6-noise',
        x: 10,
        y: 90,
        anchor: anchor.bottomLeft,
        width: 30,
        height: 10,
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                display: 'none',
            });
        }
    },

    {
        id: 's6-alone',
        x: 50,
        y: 50,
        anchor: anchor.center,
        width: 10,
        height: 20,
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                display: 'none',
            });
        }
    },

    {
        id: 's6-360',
        x: 50,
        y: 50,
        anchor: anchor.center,
        width: 100,
        height: 100,
        content: Class360,
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                border: 0,
                borderImage: 'none',
                display: 'none',
            })
        }
    },

    {
        id: 's6-ink',
        x: 50,
        y: 50,
        anchor: anchor.center,
        width: 100,
        height: 100,
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                display: 'none',
            });
        }
    },
]
