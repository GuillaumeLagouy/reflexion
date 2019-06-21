<script>
    import {onMount} from 'svelte';
    import {frameNumber, gender} from '../../../stores/frameStore';
    import TweenMax from 'gsap';

    let miniBulle1Src = "./assets/png/Swimming-pool/S3_MiniBubble1.png";
    let miniBulle2Src = "./assets/png/Swimming-pool/S3_MiniBubble2.png";
    let miniBulle3Src = "./assets/png/Swimming-pool/S3_MiniBubble3.png";
    let mouthSrc = './assets/png/Swimming-pool/S3_Mouth.png';
    let leftArrowSrc = './assets/png/Swimming-pool/S3_LeftArrow.png';
    let rightArrowSrc = './assets/png/Swimming-pool/S3_RightArrow.png';
    let monsterSrc = './assets/png/Swimming-pool/S3_MonsterShape.png';
    let male1Src = "./assets/png/Swimming-pool/S3_m0.png";
    let male2Src = "./assets/png/Swimming-pool/S3_m1.png";
    let male3Src = "./assets/png/Swimming-pool/S3_m2.png";
    let male4Src = "./assets/png/Swimming-pool/S3_m3.png";
    let male5Src = "./assets/png/Swimming-pool/S3_m4.png";
    let female1Src = "./assets/png/Swimming-pool/S3_f0.png";
    let female2Src = "./assets/png/Swimming-pool/S3_f1.png";
    let female3Src = "./assets/png/Swimming-pool/S3_f2.png";
    let female4Src = "./assets/png/Swimming-pool/S3_f3.png";
    let female5Src = "./assets/png/Swimming-pool/S3_f4.png";

    onMount(() => {
        const frame = document.querySelector('#scene2-frame2');
        const image = document.querySelector('#changing-room');

        frameNumber.subscribe(value => {
            if (value !== 1) return;
                let previousDoor;
                gender.subscribe(genderValue => {
                    if (genderValue === 'male') {
                        previousDoor = document.querySelector('#boys-room');
                        document.querySelectorAll('.female').forEach((item) => {
                            item.parentNode.remove();
                        });
                    } else {
                        previousDoor = document.querySelector('#girls-room');
                        image.style.backgroundImage = 'url("./assets/png/Swimming-pool/S3_GirlsRoom.png")';
                            document.querySelectorAll('.male').forEach((item) => {
                            item.parentNode.remove();
                        });
                    }
                    Object.assign(image.style, {
                        width: `${frame.offsetWidth}px`,
                        height: `${frame.offsetHeight}px`,
                        left: -previousDoor.offsetLeft * 2 + 'px',
                        top: -previousDoor.offsetTop * 2 + 10 + 'px'
                    });
                    const x = frame.offsetLeft;
                    const y = frame.offsetTop;
                    Object.assign(frame.style, {
                        top: previousDoor.offsetTop + previousDoor.parentNode.offsetTop + 'px',
                        left: previousDoor.offsetLeft + previousDoor.parentNode.offsetLeft + 'px',
                        width: `${previousDoor.offsetWidth}px`,
                        height: `${previousDoor.offsetHeight}px`,
                    });
                    TweenMax.to(frame, 1, {
                        top: `${y}px`,
                        left: `${x}px`,
                        width: `${image.offsetWidth}px`,
                        height: `${image.offsetHeight}px`,
                        delay: 2
                    });
                    TweenMax.to(frame, 0.2, {autoAlpha: 1});
                    TweenMax.to(image, 1, {left: 0, top: 0, delay: 2});

                    let slide = 0;
                    const slideHandler = function () {
                        if (this.id === 'right-arrow' && slide < 4) slide += 1;
                        else if (this.id === 'left-arrow' && slide > 0) slide -= 1;
                        if (slide === 0) document.querySelector('#left-arrow').removeEventListener('touchstart', slideHandler);
                        else document.querySelector('#left-arrow').addEventListener('touchstart', slideHandler);
                        if (slide === 4) {
                            document.querySelector('#right-arrow').removeEventListener("touchstart", slideHandler);
                            TweenMax.to(document.querySelector('#mouth'), 0.5, {autoAlpha: 1, delay: 1.1});
                            frameNumber.update(n => n = 2);
                        } else document.querySelector('#right-arrow').addEventListener('touchstart', slideHandler);
                        TweenMax.to(document.querySelector('#left-cross'), 0, {height: 0});
                        TweenMax.to(document.querySelector('#right-cross'), 0, {height: 0});
                        TweenMax.to(document.querySelector('ul'), 0.5, {xPercent: -20 * slide});
                        TweenMax.to(document.querySelector('#left-cross'), 0.2, {height: 93, delay: 0.5});
                        TweenMax.to(document.querySelector('#right-cross'), 0.2, {height: 110, delay: 0.7});
                    };
                    document.querySelectorAll('.arrow').forEach((arrow) => {
                        arrow.addEventListener('touchstart', slideHandler);
                    });
                    TweenMax.to(document.querySelector('#mini-bulle-1'), 0.5, {autoAlpha: 1, scale: 1, delay: 3});
                    TweenMax.to(document.querySelector('#mini-bulle-2'), 0.5, {autoAlpha: 1, scale: 1, delay: 3.5});
                    TweenMax.to(document.querySelector('#mini-bulle-3'), 0.5, {autoAlpha: 1, scale: 1, delay: 4});
                    TweenMax.to(document.querySelector('#bubble'), 1, {autoAlpha: 1, scale: 1, delay: 4.5});
                    TweenMax.to(document.querySelector('#left-cross'), 0.2, {height: 93, delay: 5.5});
                    TweenMax.to(document.querySelector('#right-cross'), 0.2, {height: 110, delay: 5.7});
                });
        });
    });
</script>

<style>
    img::selection {
        background: none;
    }

    #changing-room {
        background-image: url("./assets/png/Swimming-pool/S3_BoysRoom.png");
        background-size: 100%;
        background-repeat: no-repeat;
        position: absolute;
    }

    #mini-bulle-1, #mini-bulle-2, #mini-bulle-3 {
        position: absolute;
    }

    #mini-bulle-1 {
        width: 14px;
        top: 48%;
        left: 57%;
        transform-origin: bottom left;
        transform: scale(0);
        opacity: 0;
    }
    #mini-bulle-2 {
        width: 17px;
        top: 44%;
        left: 59.5%;
        transform-origin: bottom left;
        transform: scale(0);
        opacity: 0;

    }
    #mini-bulle-3 {
        width: 20px;
        left: 62%;
        top: 40%;
        transform-origin: bottom left;
        transform: scale(0);
        opacity: 0;
    }

    #bubble {
        background-image: url("./assets/png/Swimming-pool/S3_Bubble.png");
        width: 30%;
        height: 30%;
        background-size: contain;
        background-repeat: no-repeat;
        position: absolute;
        left: 65%;
        top: 19%;
        transform-origin: bottom left;
        transform: scale(0);
        opacity: 0;
        visibility: hidden;
        overflow: hidden;
    }

    .carousel-container {
         position: absolute;
         top: 3%;
         width: 79%;
         overflow: hidden;
         left: 11%;
         height: 90%;
    }

    ul {
        width: 500%;
        height: 100%;
        display: flex;
        overflow: hidden;
        position: absolute;
        top: 12%;
    }

    li {
        width: 100%;
        height: 71%;
    }

    li img {
        margin-left: 37.5%;
        margin-top: 13%;
        width: 24%;
    }

    .content {
        width: 60%;
        height: 80%;
        position: absolute;
        top: 10%;
        left: 15%;
    }

    .arrow {
        width: 20px;
        position: absolute;
        top: calc(50% - 10px);
        cursor: pointer;
    }

    #right-arrow {
        right: 0;
    }

    #monster-model {
        height: 80%;
        width: auto;
        position: absolute;
        left: calc(50% - 44px);
        top: calc(50% - 60px);
    }

    .cross {
        position: absolute;
        width: 90px;
        left: 24%;
        height: 0;
        background-size: contain;
        background-repeat: no-repeat;
    }

    #left-cross {
         top: 15%;
         background-image: url("./assets/png/Swimming-pool/S3_FirstCross.png");
    }

    #right-cross {
        bottom: calc(15% + 10px);
        background-image: url("./assets/png/Swimming-pool/S3_SecondCross.png");
    }

    #mouth {
        position: absolute;
        top: 57%;
        left: calc(50% + 15px);
        width: 17px;
        opacity: 0;
        visibility: hidden;
    }

</style>

<div id="changing-room">
    <img id="mini-bulle-1" src={miniBulle1Src} alt=""/>
    <img id="mini-bulle-2" src={miniBulle2Src} alt=""/>
    <img id="mini-bulle-3" src={miniBulle3Src} alt=""/>
    <img id="mouth" src={mouthSrc} alt="">
    <div id="bubble">
        <div class="content">
            <div id="left-cross" class="cross"></div>
            <div id="right-cross" class="cross"></div>
            <img id="left-arrow" class="arrow" src={leftArrowSrc} alt=""/>
            <div class="carousel-container">
                <ul>
                    <li><img class="male" src={male1Src} alt=""/></li>
                    <li><img class="male" src={male2Src} alt=""/></li>
                    <li><img class="male" src={male3Src} alt=""/></li>
                    <li><img class="male" src={male4Src} alt=""/></li>
                    <li><img class="male" src={male5Src} alt=""/></li>
                    <li><img class="female" src={female1Src} alt=""/></li>
                    <li><img class="female" src={female2Src} alt=""/></li>
                    <li><img class="female" src={female3Src} alt=""/></li>
                    <li><img class="female" src={female4Src} alt=""/></li>
                    <li><img class="female" src={female5Src} alt=""/></li>
                </ul>
            </div>
            <img id="monster-model" src={monsterSrc} alt=""/>
            <img id="right-arrow" class="arrow" src={rightArrowSrc} alt=""/>
        </div>
    </div>
</div>