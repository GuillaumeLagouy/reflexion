<script>
    import {onMount} from 'svelte';
    import TweenMax from 'gsap';

    onMount(() => {
        const frame = document.getElementById('main-scene-container');
        const canvas = document.getElementById('bubble-erase');
        const ctx = canvas.getContext("2d");
        const erase = document.getElementById('erase-indication');

        canvas.width = frame.getBoundingClientRect().width;
        canvas.height = frame.getBoundingClientRect().height;

        canvas.addEventListener("touchmove", e => {
            if (e.cancelable) {
                e.preventDefault();
            }
            erase.style.display = 'none';
            const x = e.touches[0].pageX - canvas.getBoundingClientRect().left;
            const y = e.touches[0].pageY - canvas.getBoundingClientRect().top;
            ctx.beginPath();
            ctx.arc(x, y, 20, 0, Math.PI * 2);
            ctx.fillStyle = 'white';
            ctx.fill();
        }, {passive: false});


        TweenMax.to(erase, 1, {
            y: '-=100px',
            repeat: -1,
            opacity: 0,
            repeatDelay: 1,
            ease: Power2.easeInOut,
        })
    })
</script>

<style>
    #main-scene-container{
        width: 100%;
        height: 100%;
        position: relative;
    }
    .scene-element{
        width: 100%;
        height: 100%;
        position: absolute;
        background-position: center center;
        background-size: 150%;
        background-repeat: no-repeat;
        pointer-events: none;
    }
    canvas{
        position: absolute;
        z-index: 2;
    }
    #boy{
        background-image: url("./assets/png/replay-playtime/S9-Boy.png");
        z-index: 3;
    }
    #monster{
        background-image: url("./assets/png/replay-playtime/S9-Monster.png");
        z-index: 4;
    }
    #bubble{
        background-image: url("./assets/png/replay-playtime/S9-Bubble.png");
        background-size: 140%;
        pointer-events: none;
        z-index: 1;
    }
    #erase-indication{
        z-index: 5;
        position: absolute;
        width: 50px;
        height: 50px;
        border-radius: 100%;
        background-color: #487DFF;
        opacity: .3;
        left: 50%;
        top: 20%;
        pointer-events: none;
    }
</style>

<div id="main-scene-container">
    <div id="boy" class="scene-element"></div>
    <div id="monster" class="scene-element"></div>
    <div id="erase-indication"></div>
    <canvas id="bubble-erase"></canvas>
    <div id="bubble" class="scene-element"></div>
</div>
