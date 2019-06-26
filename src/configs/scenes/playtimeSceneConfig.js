import TweenMax from 'gsap';
import TimelineMax from 'gsap/TimelineMax';

import anchor from '../../constants/anchor';
import {frameNumberPlaytime} from "../../stores/frameStore";
import {activeSceneNb} from "../../stores/scenesStore";

import Title from '../../components/Title.svelte';
import Playground from '../../components/frames/playtime/Playground.svelte';

export default [
    {
        id: 's4-bell',
        x: 50,
        y: 26,
        anchor: anchor.center,
        width: 30,
        height: 30,
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
            const playground = document.getElementById('s4-playground');
            window.addEventListener('scroll', () => {
                if(el.getBoundingClientRect().top <= 0){
                    TweenMax.to(playground, 1, {display: 'block', opacity: 1, onComplete: () => {
                        frameNumberPlaytime.update(n => n + 1);
                    }});
                    TweenMax.to(el, 1, {opacity: 0});
                } else {
                    TweenMax.to(playground, 1, {display: 'none', opacity: 0});
                    TweenMax.to(el, 1, {opacity: 1});
                }
            })
        }
    },

    {
        id: 's4-playground',
        x: 50,
        y: 100,
        anchor: anchor.center,
        width: 100,
        height: 100,
        content: Playground,
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                webkitBorderImage: 'none',
                opacity: 0,
                border: 0,
            });
        }
    },

    {
        id: 's4-insult',
        x: 78,
        y: 132,
        anchor: anchor.bottomRight,
        width: 10,
        height: 10,
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                opacity: 0,
                zIndex: 2,
            });
            frameNumberPlaytime.subscribe(value => {
                if(value !== 1) return;
                el.addEventListener('click', () => {
                    const tl = new TimelineMax({onComplete: () => {
                        activeSceneNb.update(n => n +1);
                    }});
                    tl.to(el, .5, {display: 'block', opacity: 1})
                      .to(el, .5, {width: 500, height: 350, top: '-=150', left: '-=150'}, 2)
                });

            })
        }
    },

    {
        id: 's4-bubbles',
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
