import TweenMax from 'gsap';
import TimelineMax from 'gsap/TimelineMax';

import anchor from '../../../constants/anchor';
import {frameNumberPlaytime} from "../../../stores/frameStore";
import {activeSceneNb} from "../../../stores/scenesStore";
import {addBubble} from "../../../components/frames/playtime/bubble";

import Playground from '../../../components/frames/playtime/Playground.svelte';
import Insult from '../../../components/frames/playtime/Insult.svelte';
import Find from '../../../components/frames/playtime/Find.svelte';

export default [
    {
        id: 's4-playground',
        x: 50,
        y: 50,
        anchor: anchor.center,
        width: 100,
        height: 100,
        content: Playground,
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                webkitBorderImage: 'none',
                opacity: 0,
                visibility: 'hidden',
                border: 0,
            });
            frameNumberPlaytime.subscribe(value => {
                if(value !== 1) return;
                TweenMax.to(el, 1, {autoAlpha: 1, onComplete: () => {
                    frameNumberPlaytime.update(n => n + 1);
                }});
            })
        }
    },

    {
        id:'s4-find',
        x: 7,
        y: 7,
        anchor: anchor.topLeft,
        width: 60,
        height: 50,
        content: Find,
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                border: 0,
                borderImage: 'none',
                webkitBorderImage: 'none',
                opacity: 0,
                visibility: 'hidden',
                zIndex: 3,
                overflow: 'visible',
            });
            frameNumberPlaytime.subscribe(value => {
                if(value !== 2) return;
                TweenMax.to(el, 1, {autoAlpha: 1, onComplete: () => {
                    frameNumberPlaytime.update(n => n + 1);
                }});
            })
        }
    },

    {
        id: 's4-insult',
        x: 78,
        y: 84,
        anchor: anchor.bottomRight,
        width: 10,
        height: 10,
        content: Insult,
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                opacity: 0,
                zIndex: 2,
            });
            frameNumberPlaytime.subscribe(value => {
                if(value !== 3) return;
                el.addEventListener('click', () => {
                    const find = document.getElementById('s4-find');
                    TweenMax.to(find, .3, {autoAlpha: 0});
                    const tl = new TimelineMax({});
                    tl.to(el, .5, {
                        display: 'block',
                        opacity: 1,
                    })
                      .to(el, .5, {
                          width: 650,
                          height: 500,
                          top: '-=300',
                          left: '-=300',
                          backgroundColor: 'white',
                          onComplete: () => {
                              frameNumberPlaytime.update(n => n + 1);
                          }
                    }, 2)
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
                zIndex: 3,
            });
            frameNumberPlaytime.subscribe(value => {
                if(value !== 5) return;
                el.style.display = 'block';
                addBubble(200, el, 500, 200, 20,() => {
                    setTimeout(() => {
                        activeSceneNb.update(n => n + 1);
                    }, 1000);
                });
            });
        }
    },
]
