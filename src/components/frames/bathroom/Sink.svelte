<script>
    import { onMount } from 'svelte';

    let sinkSrc = '/assets/png/bathroom/S1_Sink.png';
    let mirrorSrc = '/assets/png/bathroom/S1_Mirror.png';
    let monsterSmallSrc = '/assets/png/bathroom/S1_MonsterSmall.png';

    onMount(() => {
        const canvas = document.getElementById("mist");
        canvas.width = 180;
        canvas.height = 320;

        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "lightblue";
        ctx.globalAlpha = 0.9;
        ctx.rect(0, 0, canvas.width, canvas.height);
        ctx.fill();
        ctx.globalAlpha = 1.0;
        canvas.addEventListener("touchmove", e => {
            e.preventDefault();
            const x = e.touches[0].pageX - canvas.getBoundingClientRect().left;
            const y = e.touches[0].pageY - canvas.getBoundingClientRect().top;
            ctx.globalCompositeOperation = "destination-out";
            ctx.beginPath();
            ctx.arc(x, y, 20, 0, Math.PI * 2);
            ctx.fill();
        }, false);
    })
</script>

<style>
    .frame-container{
        width: 100%;
        height: 100%;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    img{
        position: absolute;
        height: 100%;
    }
    canvas{
        transform: translateX(10px);
    }
    #monsterSmall {
        z-index: 2;
        background: transparent;
        pointer-events: none;
    }
    #mist {
        z-index: 3;
        background: transparent;
        filter: blur(4px);
    }
    #mirror {
        z-index: 2;
        background: transparent;
        pointer-events: none;
    }
    #sink {
        z-index: 4;
        background: transparent;
        pointer-events: none;
    }
</style>

<div class="frame-container">
    <img id="monsterSmall" src={monsterSmallSrc} alt="">
    <img id="mirror" src={mirrorSrc} alt="">
    <img id="sink" src={sinkSrc} alt="">
    <canvas id="mist"></canvas>
</div>
