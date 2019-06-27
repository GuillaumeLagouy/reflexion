import TweenMax from 'gsap';
import TimelineMax from 'gsap/TimelineMax';

import anchor from '../../constants/anchor';
import {frameNumberHome} from "../../stores/frameStore";

import Stain from '../../components/frames/home/Stain.svelte';
import School from '../../components/frames/home/School.svelte';
import House from '../../components/frames/home/House.svelte';
import Bathroom from '../../components/frames/home/Bathroom.svelte';
import Mirror from '../../components/frames/home/Mirror.svelte';
import Mother from '../../components/frames/home/Mother.svelte';
import BtnRemember from '../../components/BtnRemember.svelte';

export default [
    {
        id: 's7-stain',
        x: 50,
        y: 50,
        anchor: anchor.center,
        width: 100,
        height: 100,
        content: Stain,
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                visibility: 'hidden',
                opacity: 0,
                border: 0,
                backgroundImage: 'none',
                webkitBorderImage: 'none',
            });
            TweenMax.to(el, 2, {autoAlpha: 1, onComplete: () => {
                frameNumberHome.update(n => n + 1);
            }});
        },
    },

    {
        id: 's7-school',
        x: 5,
        y: 10,
        anchor: anchor.topLeft,
        width: 40,
        height: 35,
        content: School,
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                visibility: 'hidden',
                opacity: 0,
                backgroundColor: 'white',
                zIndex: 1,
            });
            frameNumberHome.subscribe(value => {
                if(value !== 1) return;
                TweenMax.to(el, 1, {autoAlpha: 1, rotation: '4deg', delay: 0.5, onComplete: () => {
                    frameNumberHome.update(n => n + 1);
                }});
            });
        },
    },

    {
        id: 's7-house',
        x: 90,
        y: 25,
        anchor: anchor.topRight,
        width: 40,
        height: 35,
        content: House,
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                visibility: 'hidden',
                opacity: 0,
                backgroundColor: 'white',
                zIndex: 2,
            });
            frameNumberHome.subscribe(value => {
                if(value !== 3) return;
                TweenMax.to(el, 1, {autoAlpha: 1, rotation: '-4deg', delay: 1, onComplete: () => {
                        frameNumberHome.update(n => n + 1);
                }});
            });
        },
    },

    {
        id: 's7-bathroom',
        x: 10,
        y: 95,
        anchor: anchor.bottomLeft,
        width: 40,
        height: 35,
        content: Bathroom,
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                visibility: 'hidden',
                opacity: 0,
                backgroundColor: 'white',
                zIndex: 3,
            });
            frameNumberHome.subscribe(value => {
                if(value !== 5) return;
                TweenMax.to(el, 1, {autoAlpha: 1, rotation: '-4deg', delay: 1, onComplete: () => {
                        frameNumberHome.update(n => n + 1);
                        // ⚠️ L'update est récupéré dans le composant Bathroom puis réenvoyé dans le config,
                        // Pour le dev' je récupère directement cette update.
                }});
            })
        },
    },

    {
        id: 's7-mirror',
        x: 50,
        y: 45,
        anchor: anchor.center,
        width: 50,
        height: 75,
        content: Mirror,
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                visibility: 'hidden',
                opacity: 0,
                backgroundColor: 'white',
                zIndex: 4,
            });
            frameNumberHome.subscribe(value => {
                if(value !== 6) return;
                const school = document.getElementById('s7-school');
                const house = document.getElementById('s7-house');
                const bathroom = document.getElementById('s7-bathroom');
                const stain = document.getElementById('s7-stain');

                TweenMax.from(el, 1, {scale: 1.1});
                TweenMax.to(el, 1, {autoAlpha: 1});

                const tl = new TimelineMax({delay: 0.5, onComplete: () => {
                    frameNumberHome.update(n => n + 1);
                }});
                tl.to(school, 0.5, {x: '-= 500px', autoAlpha: 0}, 0)
                    .to(house, 0.5, {x: '+= 500px', autoAlpha: 0}, 0)
                    .to(bathroom, 0.5, {x: '-= 500px', autoAlpha: 0}, 0)
                    .to(stain, 0.5, {scale: 0.5, autoAlpha: 0}, 0);
            });
        },
    },

    {
        id: 's7-mother',
        x: 5,
        y: 5,
        anchor: anchor.topLeft,
        width: 35,
        height: 20,
        content: Mother,
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                display: 'none',
                border: 0,
                borderImage: 'none',
                webkitBorderImage: 'none',
                zIndex: 5,
            });
            frameNumberHome.subscribe(value => {
                if(value !== 7) return;
                const tl = new TimelineMax({delay: 2, onComplete: () => {
                    frameNumberHome.update(n => n + 1);
                }});
                tl.from(el, 1, {x: '-=200px'}, 0)
                    .to(el, 1, {display: 'block'}, 0);
            })
        },
    },

    {
        id: 's7-btnRemember',
        x: 50,
        y: 92,
        anchor: anchor.center,
        width: 25,
        height: 10,
        content: BtnRemember,
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                visibility: 'hidden',
                opacity: 0,
                border: 0,
                borderImage: 'none',
                webkitBorderImage: 'none',
                zIndex: 6,
            });
            frameNumberHome.subscribe(value => {
                if(value !== 8) return;
                TweenMax.from(el, 0.5, {y: '+=100px'});
                TweenMax.to(el, 0.5, {autoAlpha: 1});
            });
        },
    }
]
