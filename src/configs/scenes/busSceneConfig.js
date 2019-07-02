import anchor from '../../constants/anchor';

import BusCellPhone from '../../components/frames/bus/BusCellPhone.svelte';
import BusInterior from '../../components/frames/bus/BusInterior.svelte';
import BusMonster from '../../components/frames/bus/BusMonster.svelte';
import BusStop from '../../components/frames/bus/BusStop.svelte';
import Clock from '../../components/frames/bus/Clock.svelte';

import TweenMax from 'gsap';

import {frameNumberBus} from '../../stores/frameStore';
import {activeSceneNb} from '../../stores/scenesStore';
import Title from "../../components/Title.svelte";

export default [
    {
        id: 'scene2-frame1',
        x: 50,
        y: 35,
        width: 35,
        height: 35,
        square: true,
        content: Clock,
        anchor: anchor.center,
        callback: (id) => {
            const el = document.querySelector(`#${id}`);
            Object.assign(el.style, {
                opacity: '0',
                visibility: 'hidden'
            });
            TweenMax.to(el, 1, {autoAlpha: 1});
            TweenMax.from(el, 1, {yPercent: 100});
            frameNumberBus.subscribe(value => value !== 0 ? TweenMax.to(el, 1, {autoAlpha: 0}) : null);
        }
    },
    {
        id: 's2-title',
        x: 50,
        y: 70,
        anchor: anchor.center,
        width: 30,
        height: 10,
        content: Title,
        title: 'LE CAR SCOLAIRE',
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                border: 0,
                webkitBorderImage: 'none',
                zIndex: 1
            });
            TweenMax.from(el, 1, {yPercent: 100, autoAlpha: 0});
            frameNumberBus.subscribe(value => value !== 0 ? TweenMax.to(el, 1, {yPercent: -100, autoAlpha: 0}) : null);
        }
    },
    {
        id: 'scene2-frame2',
        x: 50,
        y: 25,
        width: 70,
        height: 30,
        anchor: anchor.center,
        content: BusStop,
        callback: (id) => {
            const el = document.querySelector(`#${id}`);
            Object.assign(el.style, {
                opacity: '0',
                visibility: "hidden"
            });
            frameNumberBus.subscribe(value => value === 1 ? TweenMax.to(el, 1, {autoAlpha: 1, delay: 1}) : null);
        }
    },
    {
        id: 'scene2-frame3',
        x: 50,
        y: 60,
        width: 70,
        height: 30,
        content: BusInterior,
        anchor: anchor.center,
        callback: (id) => {
            const el = document.querySelector(`#${id}`);
            Object.assign(el.style, {
                opacity: '0',
                visibility: 'hidden'
            });
            frameNumberBus.subscribe(value => value === 2 ? TweenMax.to(el, 1, {autoAlpha: 1}) : null);
        }
    },
    {
        id: 'scene2-frame4',
        x: 50,
        y: 95,
        width: 70,
        height: 30,
        content: BusMonster,
        anchor: anchor.center,
        callback: (id) => {
            const el = document.querySelector(`#${id}`);
            Object.assign(el.style, {
                opacity: '0',
                visibility: 'hidden'
            });
            frameNumberBus.subscribe(value => value === 3 ? TweenMax.to(el, 1, {autoAlpha: 1}) : null);
        }
    },

    {
        id: 'scene2-frame5',
        x: 100,
        y: 100,
        width: 50,
        height: 100,
        anchor: anchor.bottomRight,
        content: BusCellPhone,
        callback: (id) => {
            const el = document.querySelector(`#${id}`);
            Object.assign(el.style, {
                opacity: '0',
                visibility: 'hidden',
                border: 0,
                webkitBorderImage: 'none',
                position: 'fixed',
                zIndex: '1',
                bottom: '0',
                top: 'auto'
            });
            frameNumberBus.subscribe(value => {
                if (value === 4) {
                    TweenMax.to(el, 0, {autoAlpha: 1});
                    TweenMax.from(el, 0.5, {yPercent: 50, rotation: -45});
                    TweenMax.to('#scene2-frame2, #scene2-frame3, #scene2-frame4', 0.5, {autoAlpha: 0.4});
                } else TweenMax.to(el, 0, {autoAlpha: 0});
            });
        }
    },
];
