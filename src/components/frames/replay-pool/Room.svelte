<script>
    import {onMount} from 'svelte';
    import {gender, frameNumberReplayPool} from '../../../stores/frameStore';

    const shapeSrc = {
        c1: '/assets/png/Swimming-pool/S3_m0.png',
        c2: '/assets/png/Swimming-pool/S3_m1.png',
        c3: '/assets/png/Swimming-pool/S3_m2.png',
        c4: '/assets/png/Swimming-pool/S3_m3.png',
        c5: '/assets/png/Swimming-pool/S3_m4.png'
    };
    const mainShapeSrc = {
        c1: '/assets/png/Swimming-pool/S3_Male0s.png',
        c2: '/assets/png/Swimming-pool/S3_Male1s.png',
        c3: '/assets/png/Swimming-pool/S3_Male2s.png',
        c4: '/assets/png/Swimming-pool/S3_Male3s.png',
        c5: '/assets/png/Swimming-pool/S3_Male4s.png'
    };
    const characterSrc = ['/assets/png/Swimming-pool/S3_Male0.png', '/assets/png/Swimming-pool/S3_Male1.png', '/assets/png/Swimming-pool/S3_Male2.png', '/assets/png/Swimming-pool/S3_Male3.png', '/assets/png/Swimming-pool/S3_Male4.png'];
    let slideDisplay = 0, slideMonster = 0, slide = 0;
    let miniBubble1Src = '/assets/png/swimming-pool/S3_MiniBubble1.png';
    let miniBubble2Src = '/assets/png/swimming-pool/S3_MiniBubble2.png';
    let miniBubble3Src = '/assets/png/swimming-pool/S3_MiniBubble3.png';


    function charSlideHandler() {
        const rightArrow = document.querySelectorAll('.right-arrow');
        const leftArrow = document.querySelectorAll('.left-arrow');
        if (this.classList.contains('right-arrow') && slide < 3) slide += 1;
        else if (this.classList.contains('left-arrow') && slide > 0) slide -= 1;
        if (slide === 0) leftArrow.forEach((arrow, index) => {
            if(index > 0) arrow.removeEventListener('touchstart', charSlideHandler)
        });
        else leftArrow.forEach((arrow, index) => {
            if(index > 0) arrow.addEventListener('touchstart', charSlideHandler)
        });
        if (slide === 3) {
            rightArrow.forEach( (arrow, index) => {
                if(index > 0) arrow.removeEventListener('touchstart', charSlideHandler)
            });
        }
        else rightArrow.forEach( (arrow, index) => {
            if(index > 0) arrow.addEventListener('touchstart', charSlideHandler)
        });
        slideTo('char');
    }

    function monsterSlideHandler() {
        if (this.classList.contains('right-arrow') && slideMonster < 4) {
            slideMonster += 1;
            if(slideDisplay < slideMonster) slideDisplay = slideMonster;
        }
        else if (this.classList.contains('left-arrow') && slideMonster > 0) slideMonster -= 1;
        if (slide === 0) document.querySelector('.bubble-0 .left-arrow').removeEventListener('touchstart', monsterSlideHandler);
        else document.querySelector('.bubble-0 .left-arrow').addEventListener('touchstart', monsterSlideHandler);
        if (slide === 4) document.querySelector('.bubble-0 .right-arrow').removeEventListener('touchstart', monsterSlideHandler);
        document.querySelector('.bubble-0 .right-arrow').addEventListener('touchstart', monsterSlideHandler);
        slideTo('monster');
    }

    function slideTo(type) {
        if(type === 'char') {
            const bubbles = document.querySelectorAll('#mini-bubble > div');
            bubbles.forEach((item, index) => {
                if(index > 0) {
                    const selector = document.querySelector('.' + item.classList[0]);
                    TweenMax.to(selector.querySelectorAll('.left-cross, .right-cross'), 0, {height: 0});
                    TweenMax.to(selector.querySelector('ul'), 0.5, {xPercent: -25 * slide});
                    TweenMax.to(selector.querySelector('.left-cross'), 0.2, {height: '55%', delay: 0.5});
                    TweenMax.to(selector.querySelector('.right-cross'), 0.2, {height: '55%', delay: 0.7});
                }
            });
        } else {
            TweenMax.to('.bubble-0 .left-cross, .bubble-0 .right-cross', 0, {height: 0});
            TweenMax.to('.bubble-0 ul', 0.5, {xPercent: -20 * slideMonster});
            TweenMax.to('.bubble-0 .left-cross', 0.2, {height: '55%', delay: 0.5});
            TweenMax.to('.bubble-0 .right-cross', 0.2, {height: '55%', delay: 0.7});
        }
        TweenMax.to(`.bubble-${slideDisplay} .mini-bubble-1`, 0.5, {autoAlpha: 1, scale: 1});
        TweenMax.to(`.bubble-${slideDisplay} .mini-bubble-2`, 0.5, {autoAlpha: 1, scale: 1, delay: 0.5});
        TweenMax.to(`.bubble-${slideDisplay} .mini-bubble-3`, 0.5, {autoAlpha: 1, scale: 1, delay: 1});
        TweenMax.to(`.bubble-${slideDisplay}`, 1, {autoAlpha: 1, scale: 1, delay: 1.5, onComplete: () => {
            if(slideDisplay === 5) frameNumberReplayPool.update(n => n = 2);
            if(slideDisplay === 4) slideDisplay += 1;
        }});
    }

    setInterval(() => {
        if(slide < 3) slide += 1;
        else slide = 0;
        slideTo('char');
    }, 3000);

    onMount(() => {
        gender.subscribe(genderValue => {
            if (genderValue === 'male') document.querySelector('#female').remove();
            else {
                document.querySelector('#male').remove();
                shapeSrc.c1 = '/assets/png/Swimming-pool/S3_f0.png';
                shapeSrc.c2 = '/assets/png/Swimming-pool/S3_f1.png';
                shapeSrc.c3 = '/assets/png/Swimming-pool/S3_f2.png';
                shapeSrc.c4 = '/assets/png/Swimming-pool/S3_f3.png';
                shapeSrc.c5 = '/assets/png/Swimming-pool/S3_f4.png';
                mainShapeSrc.c1 = '/assets/png/Swimming-pool/S3_Female0s.png';
                mainShapeSrc.c2 = '/assets/png/Swimming-pool/S3_Female1s.png';
                mainShapeSrc.c3 = '/assets/png/Swimming-pool/S3_Female2s.png';
                mainShapeSrc.c4 = '/assets/png/Swimming-pool/S3_Female3s.png';
                mainShapeSrc.c5 = '/assets/png/Swimming-pool/S3_Female4s.png';
                characterSrc[0] = '/assets/png/Swimming-pool/S3_Female0.png';
                characterSrc[1] = '/assets/png/Swimming-pool/S3_Female1.png';
                characterSrc[2] = '/assets/png/Swimming-pool/S3_Female2.png';
                characterSrc[3] = '/assets/png/Swimming-pool/S3_Female3.png';
                characterSrc[4] = '/assets/png/Swimming-pool/S3_Female4.png';
            }

            document.querySelectorAll('.right-arrow').forEach( (arrow, index) => {
                if(index > 0) arrow.addEventListener('touchstart', charSlideHandler);
                else arrow.addEventListener('touchstart', monsterSlideHandler);
            });


            TweenMax.to('.bubble-0 .mini-bubble-1', 0.5, {autoAlpha: 1, scale: 1, delay: 2});
            TweenMax.to('.bubble-0 .mini-bubble-2', 0.5, {autoAlpha: 1, scale: 1, delay: 2.5});
            TweenMax.to('.bubble-0 .mini-bubble-3', 0.5, {autoAlpha: 1, scale: 1, delay: 3});
            TweenMax.to('.bubble-0', 1, {autoAlpha: 1, scale: 1, delay: 3.5});
            TweenMax.to('.left-cross', 0.2, {height: '55%', delay: 4.5});
            TweenMax.to('.right-cross', 0.2, {height: '55%', delay: 4.7});
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
        width: 100%;
        height: 100%;
    }

    .container, #mini-bubble div {
        position: absolute;
        width: 100%;
        height: 100%;
    }

    #mini-bubble img {
        position: absolute;
        transform-origin: bottom left;
        transform: scale(0);
        opacity: 0;
    }

    #mini-bubble .bubble-0 {
        top: 6%;
    }

    #mini-bubble .bubble-1 {
        top: 5%;
        left: -12%;
        transform: rotate(275deg);
    }

    #mini-bubble .bubble-2 {
        top: 14%;
        left: 1%;
        transform: rotate(273deg);
    }

    #mini-bubble .bubble-3 {
        top: -6%;
        left: -4%;
    }

    #mini-bubble .bubble-4 {
        top: -4%;
        left: 10%;
    }

    #mini-bubble .bubble-5 {
        top: 14%;
        left: 13%;
    }

    .mini-bubble-1 {
        width: 5px;
        top: 44%;
        left: 62%;
    }

    .mini-bubble-2 {
        width: 8px;
        top: 42%;
        left: 63.5%;

    }
    .mini-bubble-3 {
        width: 11px;
        left: 65%;
        top: 40%;
    }

    .bubble {
        background-image: url("/assets/png/Swimming-pool/S3_Bubble.png");
        width: 20%;
        height: 20%;
        background-size: contain;
        background-repeat: no-repeat;
        position: absolute;
        transform-origin: bottom left;
        transform: scale(0);
        opacity: 0;
        visibility: hidden;
        overflow: hidden;
        z-index: 1;
    }

    .bubble.bubble-0 {
        top: 26%;
        left: 64%;
        z-index: 2;
    }

    .bubble.bubble-1 {
        left: 22.5%;
        top: 9%;
    }

    .bubble.bubble-2 {
        left: 38%;
        top: 19%;
    }

    .bubble.bubble-3 {
        left: 54%;
        top: 13%;
    }

    .bubble.bubble-4 {
        left: 73.5%;
        top: 16%;
    }

    .bubble.bubble-5 {
        left: 77%;
        top: 35%;
    }

    .bubble-0 .model {
        left: 20%;
    }

    .bubble-0 li img {
        width: 24%;
    }

    .carousel.container {
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

    .bubble:not(.bubble-0) ul {
        width: 400%;
    }

    .bubble:not(.bubble-0) li img {
        width: 29%;
    }

    li {
        width: 100%;
        text-align: center;
        align-self: flex-end;
    }



    .content {
        width: 60%;
        height: 90%;
        position: absolute;
        top: 5%;
        left: 10%;
    }

    .left-arrow, .right-arrow {
        width: 10%;
        position: absolute;
        top: 45%;
        cursor: pointer;
    }

    .right-arrow {
        right: 0;
    }

    .model {
        height: 80%;
        width: auto;
        position: absolute;
        left: 40%;
        top: 5%;
        z-index: -1;
    }

    .left-cross, .right-cross {
        position: absolute;
        width: 100%;
        left: 30%;
        background-size: contain;
        background-repeat: no-repeat;
        z-index: -1;
    }

    .left-cross {
         top: 25%;
         background-image: url("/assets/png/Swimming-pool/S3_FirstCross.png");
    }

    .right-cross {
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

    #male-0, #female-0 {
        top: 36.5%;
        left: 36.5%;
        width: 8%;
    }

    #male-1, #female-1 {
        left: 44%;
        top: 41%;
    }

    #male-2, #female-2  {
        left: 51%;
        top: 37%;
    }

    #male-3 , #female-3 {
        left: 63%;
        top: 39%;
    }

    #male-4, #female-4 {
        left: 65.5%;
        top: 56%;
        width: 9.5%;
    }

    #s3-monster {
        width: 15.5%;
        position: absolute;
        left: 48%;
        top: 47%;
    }

</style>

<div id="changing-room">
    <div class="character" id="male">
        <img id="male-0" src={characterSrc[0]} alt=""/>
        <img id="male-1" src={characterSrc[1]} alt=""/>
        <img id="male-2" src={characterSrc[2]} alt=""/>
        <img id="male-3" src={characterSrc[3]} alt=""/>
        <img id="male-4" src={characterSrc[4]} alt=""/>
    </div>
    <div class="character" id="female">
        <img id="female-0" src={characterSrc[0]} alt=""/>
        <img id="female-1" src={characterSrc[1]} alt=""/>
        <img id="female-2" src={characterSrc[2]} alt=""/>
        <img id="female-3" src={characterSrc[3]} alt=""/>
        <img id="female-4" src={characterSrc[4]} alt=""/>
    </div>
    <img id="s3-monster" src="/assets/png/swimming-pool/S3_Monster.png" alt=""/>
    <img id="face" src='/assets/png/Swimming-pool/S3_Expression0.png' alt="">
    <div class="container">
        <div class="bubble bubble-0">
            <div class="content">
                <div class="left-cross"></div>
                <div class="right-cross"></div>
                <img class="left-arrow" src="/assets/png/swimming-pool/S3_LeftArrow.png" alt=""/>
                <div class="carousel container">
                    <ul>
                        <li><img src={shapeSrc.c1} alt=""/></li>
                        <li><img src={shapeSrc.c2} alt=""/></li>
                        <li><img src={shapeSrc.c3} alt=""/></li>
                        <li><img src={shapeSrc.c4} alt=""/></li>
                        <li><img src={shapeSrc.c5} alt=""/></li>
                    </ul>
                </div>
                <img class="model" src="/assets/png/swimming-pool/S3_MonsterShape.png" alt=""/>
                <img class="right-arrow" src="/assets/png/swimming-pool/S3_RightArrow.png" alt=""/>
            </div>
        </div>
        <div class="bubble bubble-1">
            <div class="content">
                <div class="left-cross"></div>
                <div class="right-cross"></div>
                <img class="left-arrow" src="/assets/png/swimming-pool/S3_LeftArrow.png" alt=""/>
                <div class="carousel container">
                    <ul>
                        <li><img src={shapeSrc.c2} alt=""/></li>
                        <li><img src={shapeSrc.c3} alt=""/></li>
                        <li><img src={shapeSrc.c4} alt=""/></li>
                        <li><img src={shapeSrc.c5} alt=""/></li>
                    </ul>
                </div>
                <img class="model" src={mainShapeSrc.c1} alt=""/>
                <img class="right-arrow" src="/assets/png/swimming-pool/S3_RightArrow.png" alt=""/>
            </div>
        </div>
        <div class="bubble bubble-2">
            <div class="content">
                <div class="left-cross"></div>
                <div class="right-cross"></div>
                <img class="left-arrow" src="/assets/png/swimming-pool/S3_LeftArrow.png" alt=""/>
                <div class="carousel container">
                    <ul>
                        <li><img src={shapeSrc.c1} alt=""/></li>
                        <li><img src={shapeSrc.c3} alt=""/></li>
                        <li><img src={shapeSrc.c4} alt=""/></li>
                        <li><img src={shapeSrc.c5} alt=""/></li>
                    </ul>
                </div>
                <img class="model" src={mainShapeSrc.c2} alt=""/>
                <img class="right-arrow" src="/assets/png/swimming-pool/S3_RightArrow.png" alt=""/>
            </div>
        </div>
        <div class="bubble bubble-3">
            <div class="content">
                <div class="left-cross"></div>
                <div class="right-cross"></div>
                <img class="left-arrow" src="./assets/png/swimming-pool/S3_LeftArrow.png" alt=""/>
                <div class="carousel container">
                    <ul>
                        <li><img src={shapeSrc.c1} alt=""/></li>
                        <li><img src={shapeSrc.c2} alt=""/></li>
                        <li><img src={shapeSrc.c4} alt=""/></li>
                        <li><img src={shapeSrc.c5} alt=""/></li>
                    </ul>
                </div>
                <img class="model" src={mainShapeSrc.c3} alt=""/>
                <img class="right-arrow" src="/assets/png/swimming-pool/S3_RightArrow.png" alt=""/>
            </div>
        </div>
        <div class="bubble bubble-4">
            <div class="content">
                <div class="left-cross"></div>
                <div class="right-cross"></div>
                <img class="left-arrow" src="/assets/png/swimming-pool/S3_LeftArrow.png" alt=""/>
                <div class="carousel container">
                    <ul>
                        <li><img src={shapeSrc.c1} alt=""/></li>
                        <li><img src={shapeSrc.c2} alt=""/></li>
                        <li><img src={shapeSrc.c3} alt=""/></li>
                        <li><img src={shapeSrc.c5} alt=""/></li>
                    </ul>
                </div>
                <img class="model" src={mainShapeSrc.c4} alt=""/>
                <img class="right-arrow" src="/assets/png/swimming-pool/S3_RightArrow.png" alt=""/>
            </div>
        </div>
        <div class="bubble bubble-5">
            <div class="content">
                <div class="left-cross"></div>
                <div class="right-cross"></div>
                <img class="left-arrow" src="/assets/png/swimming-pool/S3_LeftArrow.png" alt=""/>
                <div class="carousel container">
                    <ul>
                        <li><img src={shapeSrc.c1} alt=""/></li>
                        <li><img src={shapeSrc.c2} alt=""/></li>
                        <li><img src={shapeSrc.c3} alt=""/></li>
                        <li><img src={shapeSrc.c4} alt=""/></li>
                    </ul>
                </div>
                <img class="model" src={mainShapeSrc.c5} alt=""/>
                <img class="right-arrow" src="/assets/png/swimming-pool/S3_RightArrow.png" alt=""/>
            </div>
        </div>
    </div>
    <div id="mini-bubble" class="container">
        <div class="bubble-0">
            <img class="mini-bubble-1" src={miniBubble1Src} alt=""/>
            <img class="mini-bubble-2" src={miniBubble2Src} alt=""/>
            <img class="mini-bubble-3" src={miniBubble3Src} alt=""/>
        </div>
        <div class="bubble-1">
            <img class="mini-bubble-1" src={miniBubble1Src} alt=""/>
            <img class="mini-bubble-2" src={miniBubble2Src} alt=""/>
            <img class="mini-bubble-3" src={miniBubble3Src} alt=""/>
        </div>
        <div class="bubble-2">
            <img class="mini-bubble-1" src={miniBubble1Src} alt=""/>
            <img class="mini-bubble-2" src={miniBubble2Src} alt=""/>
            <img class="mini-bubble-3" src={miniBubble3Src} alt=""/>
        </div>
        <div class="bubble-3">
            <img class="mini-bubble-1" src={miniBubble1Src} alt=""/>
            <img class="mini-bubble-2" src={miniBubble2Src} alt=""/>
            <img class="mini-bubble-3" src={miniBubble3Src} alt=""/>
        </div>
        <div class="bubble-4">
            <img class="mini-bubble-1" src={miniBubble1Src} alt=""/>
            <img class="mini-bubble-2" src={miniBubble2Src} alt=""/>
            <img class="mini-bubble-3" src={miniBubble3Src} alt=""/>
        </div>
        <div class="bubble-5">
            <img class="mini-bubble-1" src={miniBubble1Src} alt=""/>
            <img class="mini-bubble-2" src={miniBubble2Src} alt=""/>
            <img class="mini-bubble-3" src={miniBubble3Src} alt=""/>
        </div>
    </div>
</div>
