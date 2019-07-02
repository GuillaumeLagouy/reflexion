<script>
    import {onMount} from 'svelte';
    import {frameNumberPool, gender} from '../../../stores/frameStore';
    import TweenMax from 'gsap';

    let faceSrc = '/assets/png/Swimming-pool/S3_Expression0.png';
    const shapeSrc = {
        c1: '/assets/png/Swimming-pool/S3_m0.png',
        c2: '/assets/png/Swimming-pool/S3_m1.png',
        c3: '/assets/png/Swimming-pool/S3_m2.png',
        c4: '/assets/png/Swimming-pool/S3_m3.png',
        c5: '/assets/png/Swimming-pool/S3_m4.png'
    };
    const characterSrc = ['/assets/png/Swimming-pool/S3_Male0.png', '/assets/png/Swimming-pool/S3_Male1.png', '/assets/png/Swimming-pool/S3_Male2.png', '/assets/png/Swimming-pool/S3_Male3.png', '/assets/png/Swimming-pool/S3_Male4.png'];
    const characterSrcB = ['/assets/png/Swimming-pool/S3_Male0b.png', '/assets/png/Swimming-pool/S3_Male1b.png', '/assets/png/Swimming-pool/S3_Male2b.png', '/assets/png/Swimming-pool/S3_Male3b.png', '/assets/png/Swimming-pool/S3_Male4b.png'];
    let slide = 0;
    let sadnessLevel = 0;

    function charClickHandler() {
        const slideNumber = this.classList[0].substr(this.classList[0].length - 1, this.classList[0].length);
        if(slide !== slideNumber) {
            slide = parseInt(slideNumber);
            slideTo();
        }
    }

    function slideHandler() {
        if (this.id === 'right-arrow' && slide < 4) slide += 1;
        else if (this.id === 'left-arrow' && slide > 0) slide -= 1;
        if (slide === 0) document.querySelector('#left-arrow').removeEventListener('touchstart', slideHandler);
        else document.querySelector('#left-arrow').addEventListener('touchstart', slideHandler);
        if (slide === 4) document.querySelector('#right-arrow').removeEventListener("touchstart", slideHandler);
        else document.querySelector('#right-arrow').addEventListener('touchstart', slideHandler);
        slideTo();
    }

    function slideTo() {
        if(sadnessLevel < 4) sadnessLevel += 1;
        if(sadnessLevel === 4) frameNumberPool.update(n => n = 3);
        document.querySelector('#face').src = `./assets/png/swimming-pool/S3_Expression${sadnessLevel}.png`;

        document.querySelectorAll('.character img').forEach( (item, index) => {
            if(Math.floor(index / 2) === slide && item.classList.contains('brilliance'))
                TweenMax.to(item, 0, {autoAlpha: 1});
            else if(Math.floor(index / 2) !== slide && item.classList.contains('brilliance'))
                TweenMax.to(item, 0, {autoAlpha: 0});
        });

        TweenMax.to('#left-cross, #right-cross', 0, {height: 0});
        TweenMax.to('ul', 0.5, {xPercent: -20 * slide});
        TweenMax.to('#left-cross', 0.2, {height: '55%', delay: 0.5});
        TweenMax.to('#right-cross', 0.2, {height: '55%', delay: 0.7});
    }

    onMount(() => {
        const frame = document.querySelector('#scene3-frame2');
        const image = document.querySelector('#changing-room');

        frameNumberPool.subscribe(value => {
            if (value !== 2) return;
            let previousDoor;
            gender.subscribe(genderValue => {
                if (genderValue === 'male') {
                    previousDoor = document.querySelector('#boys-room');
                    document.querySelector('#female').remove();
                } else {
                     previousDoor = document.querySelector('#girls-room');
                     document.querySelector('#male').remove();
                     shapeSrc.c1 = '/assets/png/Swimming-pool/S3_f0.png';
                     shapeSrc.c2 = '/assets/png/Swimming-pool/S3_f1.png';
                     shapeSrc.c3 = '/assets/png/Swimming-pool/S3_f2.png';
                     shapeSrc.c4 = '/assets/png/Swimming-pool/S3_f3.png';
                     shapeSrc.c5 = '/assets/png/Swimming-pool/S3_f4.png';
                     characterSrc[0] = '/assets/png/Swimming-pool/S3_Female0.png';
                     characterSrc[1] = '/assets/png/Swimming-pool/S3_Female1.png';
                     characterSrc[2] = '/assets/png/Swimming-pool/S3_Female2.png';
                     characterSrc[3] = '/assets/png/Swimming-pool/S3_Female3.png';
                     characterSrc[4] = '/assets/png/Swimming-pool/S3_Female4.png';
                     characterSrcB[0] = '/assets/png/Swimming-pool/S3_Female0b.png';
                     characterSrcB[1] = '/assets/png/Swimming-pool/S3_Female1b.png';
                     characterSrcB[2] = '/assets/png/Swimming-pool/S3_Female2b.png';
                     characterSrcB[3] = '/assets/png/Swimming-pool/S3_Female3b.png';
                     characterSrcB[4] = '/assets/png/Swimming-pool/S3_Female4b.png';
                }
                Object.assign(image.style, {
                    width: `${frame.offsetWidth}px`,
                    height: `${frame.offsetHeight}px`,
                    left: `${-previousDoor.offsetLeft * 2}px`,
                    top: `${-previousDoor.offsetTop * 2 + 10}px`
                });
                const x = frame.offsetLeft;
                const y = frame.offsetTop;
                Object.assign(frame.style, {
                    top: `${previousDoor.offsetTop + previousDoor.parentNode.offsetTop}px`,
                    left: `${previousDoor.offsetLeft + previousDoor.parentNode.offsetLeft}px`,
                    width: `${previousDoor.offsetWidth}px`,
                    height: `${previousDoor.offsetHeight}px`
                });
                TweenMax.to(frame, 1, {top: `${y}px`, left: `${x}px`, width: `${image.offsetWidth}px`, height: `${image.offsetHeight}px`, delay: 2 });

                document.querySelector('#right-arrow').addEventListener('touchstart', slideHandler);
                document.querySelectorAll('.character img').forEach((item) => { item.addEventListener('touchstart', charClickHandler) });

                TweenMax.to(frame, 0.2, {autoAlpha: 1});
                TweenMax.to(image, 1, {left: 0, top: 0, delay: 2});

                TweenMax.to('#mini-bulle-1', 0.5, {autoAlpha: 1, scale: 1, delay: 3});
                TweenMax.to('#mini-bulle-2', 0.5, {autoAlpha: 1, scale: 1, delay: 3.5});
                TweenMax.to('#mini-bulle-3', 0.5, {autoAlpha: 1, scale: 1, delay: 4});
                TweenMax.to('#bubble', 1, {autoAlpha: 1, scale: 1, delay: 4.5});
                TweenMax.to('#left-cross', 0.2, {height: '55%', delay: 5.5});
                TweenMax.to('#right-cross', 0.2, {height: '55%', delay: 5.7});
                TweenMax.to('.brilliance', 0.2, {y: -2, x: -2, repeat: -1, yoyo: true, yoyoEase: true});
            });
        });
    });
</script>

<style>
    *::selection {
        background: transparent;
    }

    #changing-room {
        background-image: url("/assets/png/Swimming-pool/S3_BoysRoom.png");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        position: absolute;
    }

    #mini-bulle-1, #mini-bulle-2, #mini-bulle-3 {
        position: absolute;
    }

    #mini-bulle-1 {
        width: 14px;
        top: 48%;
        left: 60%;
        transform-origin: bottom left;
        transform: scale(0);
        opacity: 0;
    }
    #mini-bulle-2 {
        width: 17px;
        top: 44%;
        left: 62.5%;
        transform-origin: bottom left;
        transform: scale(0);
        opacity: 0;

    }
    #mini-bulle-3 {
        width: 20px;
        left: 65%;
        top: 40%;
        transform-origin: bottom left;
        transform: scale(0);
        opacity: 0;
    }

    #bubble {
        background-image: url("/assets/png/Swimming-pool/S3_Bubble.png");
        width: 30%;
        height: 30%;
        background-size: contain;
        background-repeat: no-repeat;
        position: absolute;
        left: 67.5%;
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
        height: 85%;
        display: flex;
        overflow: hidden;
        position: absolute;
        top: 10%;
    }

    li {
        width: 100%;
        text-align: center;
        align-self: flex-end;
    }

    li img {
        width: 25%;
        margin-right: 14px;
    }

    .content {
        width: 60%;
        height: 80%;
        position: absolute;
        top: 10%;
        left: calc(20% - 30px);
    }

    .arrow {
        width: 10%;
        position: absolute;
        top: 45%;
        cursor: pointer;
    }

    #right-arrow {
        right: 0;
    }

    #monster-model {
        height: 80%;
        width: auto;
        position: absolute;
        left: 25%;
        top: 10%;
        z-index: -1;
    }

    .cross {
        position: absolute;
        width: 100%;
        left: 30%;
        background-size: contain;
        background-repeat: no-repeat;
        z-index: -1;
    }

    #left-cross {
         top: 25%;
         background-image: url("/assets/png/Swimming-pool/S3_FirstCross.png");
    }

    #right-cross {
        bottom: 20%;
        background-image: url("/assets/png/Swimming-pool/S3_SecondCross.png");
    }

    #face {
        position: absolute;
        top: 56%;
        left: 53.5%;
        width: 3%;
    }

    .character img {
        position: absolute;
        width: 8.5%;
    }

    .male-0 {
        top: 36.5%;
        left: 36%;
    }

    .male-1 {
        left: 43.5%;
        top: 41%;
    }

    .male-2 {
        left: 51.25%;
        top: 38%;
    }

    .male-3 {
        left: 63%;
        top: 39%;
    }

    .male-4 {
        width: 9.5% !important;
        left: 66%;
        top: 57%;
    }

    .female-0 {
        left: 36%;
        top: 36.5%;
    }

    .female-1 {
        left: 43.5%;
        top: 41%;
    }

    .female-2 {
        left: 51%;
        top: 37%;
    }

    .female-3 {
        left: 63%;
        top: 39%;
    }

    .female-4 {
        left: 66%;
        top: 57%;
        width: 10% !important;
    }

    #s3-monster {
        width: 15.5%;
        position: absolute;
        left: 48%;
        top: 47%;
    }

    .character .brilliance {
        opacity: 0;
        visibility: hidden;
    }

    .character .brilliance:first-of-type {
        opacity: 1;
        visibility: visible;
    }

</style>

<div id="changing-room">
    <div class="character" id="male">
        <img class="male-0 brilliance" src={characterSrcB[0]} alt=""/>
        <img class="male-0" src={characterSrc[0]} alt=""/>
        <img class="male-1 brilliance" src={characterSrcB[1]} alt=""/>
        <img class="male-1" src={characterSrc[1]} alt=""/>
        <img class="male-2 brilliance" src={characterSrcB[2]} alt=""/>
        <img class="male-2" src={characterSrc[2]} alt=""/>
        <img class="male-3 brilliance" src={characterSrcB[3]} alt=""/>
        <img class="male-3" src={characterSrc[3]} alt=""/>
        <img class="male-4 brilliance" src={characterSrcB[4]} alt=""/>
        <img class="male-4" src={characterSrc[4]} alt=""/>
    </div>
    <div class="character" id="female">
        <img class="female-0 brilliance" src={characterSrcB[0]} alt=""/>
        <img class="female-0" src={characterSrc[0]} alt=""/>
        <img class="female-1 brilliance" src={characterSrcB[1]} alt=""/>
        <img class="female-1" src={characterSrc[1]} alt=""/>
        <img class="female-2 brilliance" src={characterSrcB[2]} alt=""/>
        <img class="female-2" src={characterSrc[2]} alt=""/>
        <img class="female-3 brilliance" src={characterSrcB[3]} alt=""/>
        <img class="female-3" src={characterSrc[3]} alt=""/>
        <img class="female-4 brilliance" src={characterSrcB[4]} alt=""/>
        <img class="female-4" src={characterSrc[4]} alt=""/>
    </div>
    <img id="s3-monster" src="/assets/png/swimming-pool/S3_Monster.png" alt=""/>
    <img id="mini-bulle-1" src="/assets/png/swimming-pool/S3_MiniBubble1.png" alt=""/>
    <img id="mini-bulle-2" src="/assets/png/swimming-pool/S3_MiniBubble2.png" alt=""/>
    <img id="mini-bulle-3" src="/assets/png/swimming-pool/S3_MiniBubble3.png" alt=""/>
    <img id="face" src={faceSrc} alt="">
    <div id="bubble">
        <div class="content">
            <div id="left-cross" class="cross"></div>
            <div id="right-cross" class="cross"></div>
            <img id="left-arrow" class="arrow" src="/assets/png/swimming-pool/S3_LeftArrow.png" alt=""/>
            <div class="carousel-container">
                <ul>
                    <li><img src={shapeSrc.c1} alt=""/></li>
                    <li><img src={shapeSrc.c2} alt=""/></li>
                    <li><img src={shapeSrc.c3} alt=""/></li>
                    <li><img src={shapeSrc.c4} alt=""/></li>
                    <li><img src={shapeSrc.c5} alt=""/></li>
                </ul>
            </div>
            <img id="monster-model" src="/assets/png/swimming-pool/S3_MonsterShape.png" alt=""/>
            <img id="right-arrow" class="arrow" src="/assets/png/swimming-pool/S3_RightArrow.png" alt=""/>
        </div>
    </div>
</div>
