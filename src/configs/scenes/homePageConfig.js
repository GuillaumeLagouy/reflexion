import anchor from '../../constants/anchor';
import Homepage from "../../components/frames/site/Homepage.svelte";
import AboutPage from "../../components/frames/site/Aboutpage.svelte";
import {frameNumberHomePage} from '../../stores/frameStore';
import TweenMax from 'gsap';

export default [
    {
        id: 'homepage',
        x: 0,
        y: 0,
        width: 100,
        height: 100,
        anchor: anchor.topLeft,
        content: Homepage,
        callback: (id) => {
            const el = document.querySelector(`#${id}`);
            Object.assign(el.style, {
                visibility: 'hidden',
                opacity: 0,
                borderWidth : 0
            });
            frameNumberHomePage.subscribe(value => {
                value === 0?TweenMax.to(el, 1, {autoAlpha: 1}):TweenMax.to(el, 1, {autoAlpha: 0});
            })
        }
    },
    {
        id: 'about-page',
        x: 0,
        y: 0,
        width: 100,
        height: 100,
        anchor: anchor.topLeft,
        content: AboutPage,
        callback: (id) => {
            const el = document.querySelector(`#${id}`);
            Object.assign(el.style, {
                visibility: 'hidden',
                opacity: 0,
                borderWidth : 0,
                overflowY: 'auto'
            });
            frameNumberHomePage.subscribe(value => {
                value === 1?TweenMax.to(el, 1, {autoAlpha: 1}):TweenMax.to(el, 1, {autoAlpha: 0});
            })
        }
    }

];