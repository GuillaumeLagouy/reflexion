<script>
    import {onMount} from 'svelte';
    import TweenMax from 'gsap';
    import {frameNumberPool} from '../../../stores/frameStore';

    let monsterSrc = './assets/png/swimming-pool/S3_SwimmingMonster.png';
    let steamSrc = './assets/png/swimming-pool/S3_Steam.png';
    let monsterX = 0, waterX = 0;

    function swim() {
        monsterX += 80;
        waterX += 60;
        TweenMax.to('#swimming-monster', 0.25, {bottom: 5});
        TweenMax.to('#swimming-monster', 0.25, {bottom: -15, delay: 0.25});
        TweenMax.to('#swimming-monster', 0.5, {right: monsterX, ease: Power1.easeIn});
        TweenMax.to('#water', 0.2, {backgroundPosition: -waterX + 'px bottom'});
        if (monsterX > 460) frameNumberPool.update(n => n + 1);
    }

    onMount(() => {
        const swipe = new Hammer(document.querySelector('#pool'));
        swipe.on('swipe', function(ev) {
        	if(ev.deltaX > 0) return;
            monsterX += ev.distance / 5;
            waterX += 60;
            TweenMax.to('#swimming-monster', 0.25, {bottom: 5});
            TweenMax.to('#swimming-monster', 0.25, {bottom: -15, delay: 0.25});
            TweenMax.to('#swimming-monster', 0.5, {right: monsterX, ease: Power1.easeIn});
            TweenMax.to('#water', 0.2, {backgroundPosition: -waterX + 'px bottom'});
            if (monsterX > 460) frameNumberPool.update(n => n + 1);
        });
        TweenMax.to('#steam', 1, {y: -10, repeat: -1, yoyo: true, yoyoEase: true});
    });
</script>

<style>
    img::selection {
        background: none;
    }

    #pool {
        background-image: url("./assets/png/Swimming-pool/S3_Pool.png");
        background-size: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-position: right;
    }

    #swimming-monster {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 40%;
    }

    #water {
        background-image: url("./assets/png/Swimming-pool/S3_Water.png");
        height: 100%;
        width: 100%;
        background-position: 0 bottom;
        background-repeat: repeat-x;
        position: absolute;
        bottom: -23%;
        background-size: 220%;
    }

    #steam {
        width: 100%;
        position: absolute;
        top: 0;
        z-index: -1;
    }
</style>

<div id="pool">
    <img id="steam" src={steamSrc} alt=""/>
    <img id="swimming-monster" src={monsterSrc} alt=""/>
    <div id="water"></div>
</div>
