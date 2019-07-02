import TweenMax from 'gsap';
import TimelineMax from 'gsap/TimelineMax';

import anchor from '../../constants/anchor';
import {frameNumberEnd} from '../../stores/frameStore';

import BtnLink from '../../components/BtnLink.svelte';
import Mirror from '../../components/frames/end/Mirror.svelte';
import Maxim1 from '../../components/frames/end/maxim/Maxim1.svelte';
import Maxim2 from '../../components/frames/end/maxim/Maxim2.svelte';
import Maxim3 from '../../components/frames/end/maxim/Maxim3.svelte';
import Testimonial1 from '../../components/frames/end/testimonial/Testimonial1.svelte';
import Testimonial2 from '../../components/frames/end/testimonial/Testimonial2.svelte';
import Testimonial3 from '../../components/frames/end/testimonial/Testimonial3.svelte';

export default [
    {
        id: 's12-mirror',
        x: 50,
        y: 45,
        anchor: anchor.center,
        width: 40,
        height: 75,
        content: Mirror,
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                backgroundColor: 'white',
                zIndex: 1,
                opacity: 0,
                visibility: 'hidden',
                border: 0,
                backgroundImage: 'none',
                webkitBorderImage: 'none',
            });
            TweenMax.to(el, 1, {autoAlpha: 1});

            const maxim1 = document.getElementById('s12-maxim-1');
            const maxim2 = document.getElementById('s12-maxim-2');
            const maxim3 = document.getElementById('s12-maxim-3');
            const testimonial1 = document.getElementById('s12-testimonial-1');
            const testimonial2 = document.getElementById('s12-testimonial-2');
            const testimonial3 = document.getElementById('s12-testimonial-3');

            const tl = new TimelineMax({});
            const delay = 5;

            tl.to(maxim1, 1, {autoAlpha: 1});
            tl.to(maxim2, 1, {autoAlpha: 1});
            tl.to(maxim3, 1, {autoAlpha: 1, onComplete: () => {
                   frameNumberEnd.update(n => n + 1);
            }});
            tl.to(testimonial1, 1, {autoAlpha: 1}, 4);
            tl.to(maxim1, 1, {autoAlpha: 0}, 4);
            tl.to(testimonial2, 1, {autoAlpha: 1}, 5);
            tl.to(maxim2, 1, {autoAlpha: 0}, 5);
            tl.to(testimonial3, 1, {autoAlpha: 1}, 6);
            tl.to(maxim3, 1, {autoAlpha: 0}, 6);



            /*const elements = [maxim1, maxim2, maxim3, testimonial1, testimonial2, testimonial3];
            elements.forEach((element, index) => {
                setTimeout(() => {
                    let value = index - 3;
                    TweenMax.to(element, 1, {autoAlpha: 1});
                    if(value >= 0){
                        TweenMax.to(elements[value], 1, {autoAlpha: 0});
                    }
                    console.log(value);
                }, index * 1000);
            })*/

        }
    },

    {
        id: 's12-maxim-1',
        x: 3,
        y: 5,
        anchor: anchor.topLeft,
        width: 35,
        height: 30,
        content: Maxim1,
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                opacity: 0,
                visibility: 'hidden',
                border: 0,
                backgroundImage: 'none',
                webkitBorderImage: 'none',
                zIndex: 2,
            });
            //TweenMax.to(el, 1, {autoAlpha: 1, delay: 3});
        }
    },

    {
        id: 's12-maxim-2',
        x: 2,
        y: 50,
        anchor: anchor.topLeft,
        width: 35,
        height: 30,
        content: Maxim2,
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                opacity: 0,
                visibility: 'hidden',
                border: 0,
                backgroundImage: 'none',
                webkitBorderImage: 'none',
                zIndex: 2,
            });
            //TweenMax.to(el, 1, {autoAlpha: 1, delay: 5});
        }
    },

    {
        id: 's12-maxim-3',
        x: 98,
        y: 10,
        anchor: anchor.topRight,
        width: 35,
        height: 30,
        content: Maxim3,
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                opacity: 0,
                visibility: 'hidden',
                border: 0,
                backgroundImage: 'none',
                webkitBorderImage: 'none',
                zIndex: 2,
            });
            /*TweenMax.to(el, 1, {autoAlpha: 1, delay: 7, onComplete: () => {
                frameNumberEnd.update(n => n + 1);
            }});*/
        }
    },

    {
        id: 's12-testimonial-1',
        x: 3,
        y: 5,
        anchor: anchor.topLeft,
        width: 35,
        height: 30,
        content: Testimonial1,
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                opacity: 0,
                visibility: 'hidden',
                border: 0,
                backgroundImage: 'none',
                webkitBorderImage: 'none',
                zIndex: 2,
            });
        }
    },

    {
        id: 's12-testimonial-2',
        x: 2,
        y: 50,
        anchor: anchor.topLeft,
        width: 35,
        height: 30,
        content: Testimonial2,
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                opacity: 0,
                visibility: 'hidden',
                border: 0,
                backgroundImage: 'none',
                webkitBorderImage: 'none',
                zIndex: 2,
            });
        }
    },

    {
        id: 's12-testimonial-3',
        x: 98,
        y: 10,
        anchor: anchor.topRight,
        width: 35,
        height: 30,
        content: Testimonial3,
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                opacity: 0,
                visibility: 'hidden',
                border: 0,
                backgroundImage: 'none',
                webkitBorderImage: 'none',
                zIndex: 2,
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
        link: 'EN PARLER',
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                backgroundColor: 'white',
                opacity: 0,
                visibility: 'hidden',
            });
            frameNumberEnd.subscribe(value => {
                if(value !== 1) return;
                TweenMax.to(el, 1, {autoAlpha: 1, delay: 4});
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
                if(value !== 1) return;
                TweenMax.to(el, 1, {autoAlpha: 1, delay: 4});
            });
        }
    },
]
