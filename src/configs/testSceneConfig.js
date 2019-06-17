import TweenMax from 'gsap';

export default [
    {
        id: 'frame1',
        x: 0,
        y: 0,
        width: 200,
        height: 200,
        callback: (id) => {
            const el = document.querySelector(`#${id}`);
            el.style.background = '#dcc0ff';
        }
    },

    {
        id: 'frame2',
        x: 10,
        y: 0,
        width: 200,
        height: 100
    },

    {
        id: 'frame3',
        x: 90,
        y: 90,
        width: 400,
        height: 200
    },
];
