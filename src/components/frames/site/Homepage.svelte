<script>
    import TweenMax from 'gsap';
    import lottie from 'lottie-web';
    import {onMount} from 'svelte';
    import {activeSceneNb} from '../../../stores/scenesStore';
    import {frameNumberHomePage} from '../../../stores/frameStore';

    let soundSrc = './assets/png/homepage/sound_on.png';

    onMount( () => {
        lottie.loadAnimation({
            container: document.querySelector('#animation'),
            renderer: 'svg',
            loop: false,
            autoplay: true,
            path: './assets/json/data.json'
        });

        const trace = lottie.loadAnimation({
            container: document.querySelector('#trace'),
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: './assets/json/data_tache.json'
        });

        setTimeout(function(){ trace.play(); }, 1700);

        TweenMax.from('#start', 1, { autoAlpha: 0, y: 20, delay: 3, onComplete: () => {
            TweenMax.to('#sleep', 1, {display: 'block', opacity: 1, delay: .5});
        }});
        TweenMax.to('#header', 1, { backgroundColor: "#FFF084", delay: 2.3 });
    });

    function start() {
        if(screen.width < 1400 && screen.width > 700) { // condition tablette
            TweenMax.to('#trace', 3, {scale: 3, rotate: 180, onComplete: () => {
                activeSceneNb.update((value => value = 1));
            }});
            TweenMax.to('#animation, nav, #sleep', 1, {yPercent: -50, autoAlpha: 0, delay: 0.5});
            TweenMax.to('#start', 1, {yPercent: 50, autoAlpha: 0, delay: 0.5});
        }
        else {
            const parent = this.parentNode;
            this.remove();
            parent.style.top = "50vh";
            const img = document.createElement('img');
            const p = document.createElement('p');
            p.innerHTML = 'Cette expérience se joue sur tablette';
            img.src = './assets/png/homepage/pad.png';
            parent.appendChild(img);
            parent.appendChild(p);
        }
    }

    function sound() {
        soundSrc = soundSrc === './assets/png/homepage/sound_on.png'?'./assets/png/homepage/sound_off.png':soundSrc = './assets/png/homepage/sound_on.png';
    }

    function about() {
        frameNumberHomePage.update(value => value = 1);
    }

</script>

<style>
    #header {
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        background-color: #FFE74C;
    }

    #trace {
        width: 100vw;
        height: 100vh;
        position: absolute;
        overflow: hidden;
    }

    #animation {
        position: absolute;
        top: -10vh;
        height: 100vh;
        width: 100vw;
    }

    #start {
        position: absolute;
        top: 60vh;
        width: 100vw;
        text-align: center;
        z-index: 1;
    }

    #start button {
        font-family: "MikadoBold", sans-serif;
        font-size: 30px;
        text-transform: uppercase;
        background: none;
        border: 7px solid white;
        border-image: url('/assets/png/FrameBorder.png') 50 stretch;
        -webkit-border-image: url('/assets/png/FrameBorder.png') 50 stretch;
        height: auto;
        padding: 15px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }

    nav {
        position: absolute;
        width: 90vw;
        left: 5vw;
        top: 5vh;
        display: flex;
        justify-content: space-between;
        z-index: 1;
    }

    nav a {
        cursor: pointer;
    }

    nav a:last-of-type {
        color: black;
        text-decoration: none;
        position: relative;
        font-family: MikadoRegular, sans-serif;
        font-size: 30px;
    }

    nav a:last-of-type:after {
         content: "";
         position: absolute;
         bottom: 10px;
         width: 100%;
         transform-origin: center;
         transform: scaleX(0);
         height: 2px;
         margin: 5px 0 0;
         transition: all 0.2s ease-in-out;
         left: 0;
         background: black;
    }

    nav a:last-of-type:hover:after {
        transform: scaleX(1);
    }

    #sleep {
        position: absolute;
        bottom: 10%;
        right: 10%;
        display: none;
        opacity: 0;
    }
    #sleep-img{
        width: 400px;
    }


    @media (max-width: 768px) {
        #sleep {
            bottom: 0;
            right: 0;
        }

        #animation {
            top: 0;
        }
    }
</style>

<header id="header">
    <nav>
        <a id="sound" on:click={sound}><img src={soundSrc} alt="Activer le son"/></a>
        <a on:click={about}>À propos</a>
    </nav>
    <div id="trace"></div>
    <div id="animation"></div>
    <div id="start"><button on:click={start}>Commencer</button></div>
    <div id="sleep"><img id="sleep-img" src="./assets/gif/Home_Zzz.gif" alt="sleeping"/></div>
</header>
