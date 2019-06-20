import anchor from '../../constants/anchor';
import TweenMax from 'gsap';
import {frameNumber, gender} from "../../stores/frameStore";
import ChangingRooms from '../../components/frames/swimming-pool/ChangingRooms.svelte';
import Room from '../../components/frames/swimming-pool/Room.svelte';
import Next from '../../components/Next.svelte';
import Bus from "../../components/frames/swimming-pool/Bus.svelte";
import SwimmingMonster from '../../components/frames/swimming-pool/SwimmingMonster.svelte';

export default [
    {
        id: 'scene2-frame1',
        x: 50,
        y: 50,
        width: 50,
        height: 49.9,
        anchor: anchor.center,
        content: ChangingRooms,
        callback: (id) => {
            const el = document.querySelector(`#${id}`);
            const changingRooms = el.querySelector('#changing-rooms');
            Object.assign(el.style, {
                opacity: "0",
                visibility: "hidden"
            });
            TweenMax.from(el, 1, {top: "100%"});
            TweenMax.to(el, 1, {autoAlpha: 1});
            el.querySelectorAll('.door').forEach((door) => {
                door.addEventListener('touchstart', function () {
                    if (this.id === "girls-room") {
                        gender.update(n => n = "female");
                        changingRooms.style.backgroundImage = 'url("./assets/png/Swimming-pool/Porte_filles_ouverte.png")';
                    } else {
                        changingRooms.style.backgroundImage = 'url("./assets/png/Swimming-pool/Porte_garçons_ouverte.png")';
                        gender.update(n => n = "male");
                    }
                    Object.assign(changingRooms.style, {
                        height: changingRooms.offsetHeight + "px",
                        width: changingRooms.offsetWidth + "px"
                    });
                    let w, h, x, y;
                    this.classList.add('opened-door');
                    y = this.offsetTop;
                    x = this.offsetLeft;
                    w = this.offsetWidth;
                    h = this.offsetHeight;
                    changingRooms.style.backgroundPosition = (-x) + "px " + (-y) + "px";
                    TweenMax.to(el, 1, {left: x + el.offsetLeft, top: y + el.offsetTop, width: w, height: h});
                    frameNumber.update(n => n + 1);
                    TweenMax.to(el, 0, {autoAlpha: 0, delay: 1});
                });
            });
        }
    },

    {
        id: 'scene2-frame2',
        x: 50,
        y: 53,
        width: 90,
        height: 80,
        anchor: anchor.center,
        content: Room,
        callback: (id) => {
            const el = document.querySelector(`#${id}`);
            const image = el.querySelector("#changing-room");
            Object.assign(el.style, {
                opacity: "0",
                visibility: "hidden",
                backgroundColor: "white",
            });
            frameNumber.subscribe(value => {
                if (value === 1) {
                    let previousDoor;
                    gender.subscribe(genderValue => {
                        if (genderValue === "male") {
                            previousDoor = document.querySelector('#boys-room');
                            document.querySelectorAll('.female').forEach((item) => {
                                item.parentNode.remove();
                            });
                        } else {
                            previousDoor = document.querySelector('#girls-room');
                            image.style.backgroundImage = 'url("./assets/png/Swimming-pool/Vestiaires_filles.png")';
                            document.querySelectorAll('.male').forEach((item) => {
                                item.parentNode.remove();
                            });
                        }
                        Object.assign(image.style, {
                            width: el.offsetWidth + "px",
                            height: el.offsetHeight + "px",
                            left: -previousDoor.offsetLeft * 2 + "px",
                            top: -previousDoor.offsetTop * 2 + 10 + "px"
                        });
                        const x = el.offsetLeft;
                        const y = el.offsetTop;
                        Object.assign(el.style, {
                            top: previousDoor.offsetTop + previousDoor.parentNode.offsetTop + "px",
                            left: previousDoor.offsetLeft + previousDoor.parentNode.offsetLeft + "px",
                            width: previousDoor.offsetWidth + "px",
                            height: previousDoor.offsetHeight + "px",
                        });
                        TweenMax.to(el, 1, {autoAlpha: 1});
                        TweenMax.to(el, 1, {
                            top: y + "px",
                            left: x + "px",
                            width: image.offsetWidth + "px",
                            height: image.offsetHeight + "px",
                            delay: 2
                        });
                        TweenMax.to(image, 1, {left: 0, top: 0, delay: 2});
                        TweenMax.to(el.querySelector('#mini-bulle-1'), 0.5, {autoAlpha: 1, scale: 1, delay: 3});
                        TweenMax.to(el.querySelector('#mini-bulle-2'), 0.5, {autoAlpha: 1, scale: 1, delay: 3.5});
                        TweenMax.to(el.querySelector('#mini-bulle-3'), 0.5, {autoAlpha: 1, scale: 1, delay: 4});
                        TweenMax.to(el.querySelector('#nuage'), 1, {autoAlpha: 1, scale: 1, delay: 4.5});
                        TweenMax.to(el.querySelector('#left-cross'), 0.2, {height: 93, delay: 5.5});
                        TweenMax.to(el.querySelector('#right-cross'), 0.2, {height: 110, delay: 5.7});
                        let slide = 0;
                        const slideHandler = function () {
                            if (this.id === "right-arrow" && slide < 4) slide += 1;
                            else if (this.id === "left-arrow" && slide > 0) slide -= 1;
                            if (slide === 0) el.querySelector('#left-arrow').removeEventListener("touchstart", slideHandler);
                            else el.querySelector('#left-arrow').addEventListener("touchstart", slideHandler);
                            if (slide === 4) {
                                el.querySelector('#right-arrow').removeEventListener("touchstart", slideHandler);
                                TweenMax.to(el.querySelector('#mouth'), 0.5, {autoAlpha: 1, delay: 1.1});
                                frameNumber.update(n => n + 1);
                            } else el.querySelector('#right-arrow').addEventListener("touchstart", slideHandler);

                            TweenMax.to(el.querySelector('#left-cross'), 0, {height: 0});
                            TweenMax.to(el.querySelector('#right-cross'), 0, {height: 0});
                            TweenMax.to(el.querySelector('ul'), 0.5, {xPercent: -20 * slide});
                            TweenMax.to(el.querySelector('#left-cross'), 0.2, {height: 93, delay: 0.5});
                            TweenMax.to(el.querySelector('#right-cross'), 0.2, {height: 110, delay: 0.7});
                        };
                        document.querySelectorAll('.arrow').forEach((arrow) => {
                            arrow.addEventListener("touchstart", slideHandler);
                        });
                    });
                }
            });
        }
    },
    {
        id: 'scene2-frame3',
        x: 90,
        y: 90,
        width: 15,
        height: 10,
        anchor: anchor.center,
        content: Next,
        callback: (id) => {
            const el = document.querySelector(`#${id}`);
            Object.assign(el.style, {
                opacity: "0",
                visibility: "hidden",
                backgroundColor: "white",
                zIndex: "999"
            });
            frameNumber.subscribe(value => {
                value === 2 ? TweenMax.to(el, 1, {autoAlpha: 1, delay: 1}) : null;
            });
            el.addEventListener('touchstart', function () {
                frameNumber.update(n => n + 1);
                TweenMax.to(document.querySelector('#scene2-frame2'), 1, {autoAlpha: 0, delay: 1});
                TweenMax.to(el, 1, {autoAlpha: 0, delay: 1.1});
            });
        }
    },
    {
        id: 'scene2-frame4',
        x: 10,
        y: 30,
        width: 80,
        height: 45,
        anchor: anchor.topLeft,
        content: SwimmingMonster,
        callback: (id) => {
            const el = document.querySelector(`#${id}`);
            const monster = el.querySelector('#swimming-monster');
            const water = el.querySelector('#water');
            let monsterX = 0, waterX = 0;
            Object.assign(el.style, {
                opacity: "0",
                visibility: "hidden",
            });
            frameNumber.subscribe(value => {
                value === 3 ? TweenMax.to(el, 1, {autoAlpha: 1, delay: 2.1}) : null;
            });
            el.addEventListener('touchstart', function () {
                monsterX += 80;
                waterX += 60;
                TweenMax.to(monster, 0.25, {bottom: 5});
                TweenMax.to(monster, 0.25, {bottom: -15, delay: 0.25});
                TweenMax.to(monster, 0.5, {right: monsterX, ease: Power1.easeIn});
                TweenMax.to(water, 0.2, {backgroundPosition: -waterX + "px bottom"});
                if (monsterX > 460) {
                    frameNumber.update(n => n + 1);
                    TweenMax.to(el, 2, {autoAlpha: 0});
                }
            });
        }
    },
    {
        id: 'scene2-frame5',
        x: 0,
        y: 0,
        width: 100,
        height: 100,
        square: false,
        anchor: anchor.topLeft,
        content: Bus,
        callback: (id) => {
            const el = document.querySelector(`#${id}`);
            Object.assign(el.style, {
                opacity: "0",
                visibility: "hidden",
                border: "transparent",
                zIndex: "999"
            });
            frameNumber.subscribe(value => {
                if (value === 4) {
                    TweenMax.to(el, 0, {autoAlpha: 1});
                    TweenMax.to(el.querySelector('#bus'), 4, {left: "100%", delay: 1});
                }
            });
        }
    }
];
