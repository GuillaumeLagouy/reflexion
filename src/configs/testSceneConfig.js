import TweenMax from 'gsap';
import anchor from '../constants/anchor';

export default [
    {
        id: 'frame1',
        x: 0,
        y: 0,
        width: 200,
        height: 200,
        anchor: anchor.topLeft,
        callback: (id) => {
            const el = document.querySelector(`#${id}`);
            el.style.background = '#dcc0ff';
        }
    },

    {
        id: 'frame2',
        x: 0,
        y: 100,
        width: 200,
        height: 100,
        anchor: anchor.bottomLeft,
        callback: (id) => {
            const el = document.querySelector(`#${id}`);
            el.style.background = '#55e9ff';
        }
    },

    {
        id: 'frame3',
        x: 100,
        y: 0,
        width: 400,
        height: 200,
        anchor: anchor.topRight,
        callback: (id) => {
            const el = document.querySelector(`#${id}`);
            el.style.background = '#8eff75';
        }
    },

    {
        id: 'frame4',
        x: 100,
        y: 100,
        width: 400,
        height: 200,
        anchor: anchor.bottomRight,
        callback: (id) => {
            const el = document.querySelector(`#${id}`);
            el.style.background = '#8eff75';
            TweenMax.to(el, 1, {rotation: 180})
        }
    },

    {
        id: 'frame5',
        x: 50,
        y: 50,
        width: 400,
        height: 200,
        anchor: anchor.center,
        callback: (id) => {
            const el = document.querySelector(`#${id}`);
            el.style.background = '#8eff75';
            TweenMax.to(el, 1, {rotation: 180})
        }
    },
];
