import anchor from '../../constants/anchor';
import { frameNumberBathroom } from '../../stores/frameStore';
import TweenMax from 'gsap';

import Shower from '../../components/frames/bathroom/Shower.svelte';
import Tap from '../../components/frames/bathroom/Tap.svelte';
import Sink from '../../components/frames/bathroom/Sink.svelte';
import Mirror from '../../components/frames/bathroom/Mirror.svelte';

export default [
    {
        id: 'shower',
        x: 50,
        y: 50,
        width: 30,
        height: 70,
        anchor: anchor.center,
        content: Shower,
        callback: (id) => {
            const el = document.querySelector(`#${id}`);

            el.style.backgroundColor = 'white';
            el.style.opacity = 0;

            TweenMax.to(el, 1, {opacity: 1});
        }
    },

    {
        id: 'tap',
        x: 75,
        y: 90,
        square: true,
        width: 15,
        height: 15,
        anchor: anchor.bottomRight,
        content: Tap,
        callback: (id) => {
            const el = document.querySelector(`#${id}`);

            el.style.backgroundColor = 'white';
            el.style.zIndex = 2;
            el.style.display = 'none';
            el.style.opacity = 0;

            TweenMax.to(el, 1, {delay: 3, display: 'block', opacity: 1})
        }
    },

    {
        id: 'sink',
        x: 50,
        y: 50,
        width: 40,
        height: 55,
        anchor: anchor.center,
        content: Sink,
        callback: (id) => {
            const el = document.querySelector(`#${id}`);

            el.style.display = 'none';
            el.style.opacity = 0;
            el.style.zIndex = 3;
            el.style.backgroundColor = 'white';

            frameNumberBathroom.subscribe(value => {
                if(value === 1) {
                    TweenMax.to(el, 1, {display: 'block', opacity: 1});
                    setTimeout(() => {
                        frameNumberBathroom.update(n => n + 1);
                    }, 5000);
                }
            })
        }
    },

    {
        id: 'mirror',
        x: 50,
        y: 50,
        width: 60,
        height: 90,
        anchor: anchor.center,
        content: Mirror,
        callback: (id) => {
            const el = document.querySelector(`#${id}`);

            el.style.display = 'none';
            el.style.opacity = 0;
            el.style.zIndex = 4;
            el.style.backgroundColor = 'white';

            frameNumberBathroom.subscribe(value => {
                if(value === 2) {
                    TweenMax.to(el, 1, {display: 'block', opacity: 1});
                }
            })
        }
    },

    {

    }
]