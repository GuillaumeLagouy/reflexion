import TweenMax from 'gsap';

import anchor from '../../constants/anchor';
import {frameNumberEnd} from '../../stores/frameStore';

import Maxim from '../../components/Maxim.svelte';
import BtnLink from '../../components/BtnLink.svelte';
import Testimonial from '../../components/frames/end/Testimonial.svelte';

export default [
    {
        id: 's12-mirror',
        x: 50,
        y: 40,
        anchor: anchor.center,
        width: 40,
        height: 75,
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                backgroundColor: 'white',
                zIndex: '-1',
                opacity: 0,
                visibility: 'hidden',
            });
            TweenMax.to(el, 1, {autoAlpha: 1, onComplete: () => {
                frameNumberEnd.update(n => n + 1);
            }});
        }
    },

    {
        id: 's12-maxim-1',
        x: 3,
        y: 10,
        anchor: anchor.topLeft,
        width: 30,
        height: 15,
        content: Maxim,
        maxim: 'Ce ne sont pas les petits malaises qu’on retiendra de toi, mais les grandes choses que tu accompliras.',
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                backgroundColor: 'white',
                opacity: 0,
                visibility: 'hidden',
            });
            frameNumberEnd.subscribe(value => {
                if(value !== 1) return;
                TweenMax.to(el, 1, {autoAlpha: 1, delay: 1, onComplete: () => {
                    frameNumberEnd.update(n => n + 1);
                }});
            });
        }
    },

    {
        id: 's12-maxim-2',
        x: 2,
        y: 50,
        anchor: anchor.topLeft,
        width: 30,
        height: 15,
        content: Maxim,
        maxim: 'Tu te compares aux autres, tout comme les autres se comparent à toi. Nous sommes beaux dans nos différences.',
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                backgroundColor: 'white',
                opacity: 0,
                visibility: 'hidden',
            });
            frameNumberEnd.subscribe(value => {
                if(value !== 2) return;
                TweenMax.to(el, 1, {autoAlpha: 1, delay: 1, onComplete: () => {
                    frameNumberEnd.update(n => n + 1);
                }});
            });
        }
    },

    {
        id: 's12-maxim-3',
        x: 98,
        y: 10,
        anchor: anchor.topRight,
        width: 31,
        height: 15,
        content: Maxim,
        maxim: 'Ceux qui te jugent comptent-ils pour toi ? Pose-toi cette question et tu sauras quelle importance accorder à leurs remarques.',
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                backgroundColor: 'white',
                opacity: 0,
                visibility: 'hidden',
            });
            frameNumberEnd.subscribe(value => {
                if(value !== 3) return;
                TweenMax.to(el, 1, {autoAlpha: 1, delay: 1, onComplete: () => {
                    frameNumberEnd.update(n => n + 1);
                }});
            });
        }
    },

    {
        id: 's12-testimonial-1',
        x: 97,
        y: 45,
        anchor: anchor.topRight,
        width: 30,
        height: 15,
        content: Testimonial,
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                backgroundColor: 'white',
                opacity: 0,
                visibility: 'hidden',
            });
            frameNumberEnd.subscribe(value => {
                if(value !== 4) return;
                TweenMax.to(el, 1, {autoAlpha: 1, delay: 1, onComplete: () => {
                    frameNumberEnd.update(n => n + 1);
                }});
            });
        }
    },

    {
        id: 's12-fsj',
        x: 30,
        y: 95,
        anchor: anchor.bottomLeft,
        width: 15,
        height: 10,
        content: BtnLink,
        link: 'FIL SANTÉ JEUNE',
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                backgroundColor: 'white',
                opacity: 0,
                visibility: 'hidden',
            });
            frameNumberEnd.subscribe(value => {
                if(value !== 5) return;
                TweenMax.to(el, 1, {autoAlpha: 1, delay: 1});
            });
        }
    },

    {
        id: 's12-share',
        x: 70,
        y: 95,
        anchor: anchor.bottomRight,
        width: 15,
        height: 10,
        content: BtnLink,
        link: 'PARTAGER',
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                backgroundColor: 'white',
                opacity: 0,
                visibility: 'hidden',
            });
            frameNumberEnd.subscribe(value => {
                if(value !== 5) return;
                TweenMax.to(el, 1, {autoAlpha: 1, delay: 1, onComplete: () => {
                    frameNumberEnd.update(n => n + 1);
                }});
            });
        }
    },
]
