import TweenMax from 'gsap';
import anchor from '../../constants/anchor';
import {frameNumber} from "../../stores/frameStore";

export default [
    {
        id: 'frame1',
        x: 50,
        y: 50,
        width: 35,
        height: 25,
        anchor: anchor.center,
        callback: (id) => {
            const el = document.querySelector(`#${id}`);
            el.style.background = '#dcc0ff';

            el.addEventListener('click', () => {
                frameNumber.update(n => n + 1);
                el.style.opacity = 0
            });
        }
    },

    {
        id: 'frame2',
        x: 95,
        y: 95,
        width: 35,
        height: 35,
        anchor: anchor.bottomRight,
        callback: (id) => {
            const el = document.querySelector(`#${id}`);
            el.style.background = '#ffdda1';
            el.style.opacity = 0;

            frameNumber.subscribe(value => {
                value === 1 ? el.style.opacity = 1 : null;
            });
            el.addEventListener('click', ()=>{
                frameNumber.update(n => n + 1);
                el.style.opacity = 0;
            })
        }
    },

    {
        id: 'frame3',
        x: 50,
        y: 50,
        width: 52.5,
        height: 37.5,
        anchor: anchor.center,
        callback: (id) => {
            const el = document.querySelector(`#${id}`);
            el.style.background = '#8782ff';
            el.style.opacity = 0;

            frameNumber.subscribe(value => {
                value === 2 ? el.style.opacity = 1 : null;
            });
            el.addEventListener('click', () => {
                el.style.opacity = 0;
            })
        }
    },
];
