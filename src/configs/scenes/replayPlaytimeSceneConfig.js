import TweenMax from 'gsap';

import anchor from '../../constants/anchor';
import {frameNumberReplayPlaytime} from '../../stores/frameStore';
import {activeSceneNb} from "../../stores/scenesStore";

import Title from '../../components/Title.svelte';
import MainScene from '../../components/frames/replay-playtime/MainScene.svelte';
import Maxim from '../../components/frames/replay-playtime/Maxim.svelte';
import BtnNext from '../../components/frames/wakeup/BtnNext.svelte';
import TimelineMax from "gsap/TimelineMax";

export default [
    {
        id: 's9-title',
        x: 5,
        y: 5,
        anchor: anchor.topLeft,
        width: 40,
        height: 10,
        content: Title,
        title: 'SOUVENIR DE LA RÉCRÉATION',
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                opacity: 0,
                visibility: 'hidden',
            });
            TweenMax.to(el, 1, {autoAlpha: 1, delay: 1, onComplete: () => {
                frameNumberReplayPlaytime.update(n => n + 1);
            }});
        }
    },

    {
        id: 's9-main-scene',
        x: 50,
        y: 50,
        anchor: anchor.center,
        width: 65,
        height: 60,
        content: MainScene,
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                opacity: 0,
                visibility: 'hidden',
            });
            frameNumberReplayPlaytime.subscribe(value => {
                if(value !== 1) return;
                TweenMax.to(el, 1, {autoAlpha: 1, delay: 1, onComplete: () => {
                    setTimeout(() => {
                        frameNumberReplayPlaytime.update(n => n + 1);
                    }, 5000);
                }});
            });
        }
    },

    {
        id: 's9-maxim',
        x: 105,
        y: -5,
        anchor: anchor.topRight,
        width: 55,
        height: 40,
        content: Maxim,
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                zIndex: 5,
                opacity: 0,
                visibility: 'hidden',
                border: 0,
                borderImage: 'none',
                webkitBorderImage: 'none',
            });
            frameNumberReplayPlaytime.subscribe(value => {
                if(value !== 2) return;
                TweenMax.to(el, 1, {autoAlpha: 1, delay: 1, onComplete: () => {
                    frameNumberReplayPlaytime.update(n => n + 1);
                }});
            });
        }
    },

    {
        id: 's9-btn-next',
        x: 95,
        y: 95,
        anchor: anchor.bottomRight,
        width: 15,
        height: 8,
        content: BtnNext,
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                opacity: 0,
                display: 'none',
            });
            frameNumberReplayPlaytime.subscribe(value => {
                if(value !== 3) return;
                const tl = new TimelineMax();
                tl.to(el, 1, {display: 'block', opacity: 1, delay: 2});
                tl.to(el, 1, {x: 10, repeat: -1, yoyo:true});
            });
        }
    }
]
