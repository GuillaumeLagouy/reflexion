import TweenMax from "gsap";
import anchor from "../../../constants/anchor";

import Title from "../../../components/Title.svelte";
import ScrollDown from "../../../components/instructions/ScrollDown.svelte";

export default [
    {
        id: 's5-bell',
        x: 50,
        y: 26,
        anchor: anchor.center,
        width: 30,
        height: 30,
    },

    {
        id: 's5-title',
        x: 50,
        y: 50,
        anchor: anchor.center,
        width: 30,
        height: 10,
        content: Title,
        title: 'LA CANTINE',
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                border: 0,
                webkitBorderImage: 'none',
            });
            window.addEventListener('scroll', () => {
                const lane1 = document.getElementById('s5-lane-1');
                if(el.getBoundingClientRect().top <= 0){
                    TweenMax.to(lane1, 1, {display: 'block', opacity: 1});
                    TweenMax.to(el, 1, {opacity: 0});
                } else {
                    TweenMax.to(lane1, 1, { opacity: 0});
                    TweenMax.to(el, 1, { opacity: 1});
                }
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
