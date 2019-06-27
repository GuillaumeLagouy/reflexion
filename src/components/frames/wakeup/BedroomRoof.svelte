<script>
    import {frameNumber} from '../../../stores/frameStore'

    let bedroomRoofSrc = '/assets/png/S1_BedroomRoofOff.png';
    const eyeSrc = '/assets/png/eyeFrames/eye_0.png';
    let eyeSrcNb = 0;

    function openEye() {
        const eye = document.getElementById("eye");
        const indicationTapEye = document.getElementById('indicationTapEye');

        indicationTapEye.style.display = 'none';

        eyeSrcNb += 2;
        if(eyeSrcNb <= 10) {
            eye.src = `/assets/png/eyeFrames/eye_${eyeSrcNb}.png`;
        }
        if(eyeSrcNb === 10){
            frameNumber.update(n => n + 1);
            const roof = document.getElementById('bedroomRoof');
            roof.src = '/assets/png/S1_BedroomRoofOn.png';
        }
    }
</script>

<style>
    .frame-container{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        position: relative;
    }

    img{
        height: 105%;
        width: auto;
        position: absolute;
        touch-action: manipulation;
    }
    #bedroomRoof{
        pointer-events: none;
    }
    #eye{
        width: 100%;
    }
    #indicationTapEye{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #E0E9FF;
        z-index: 4;
        opacity: 1;
        pointer-events: none;
        animation: spinner4 950ms linear infinite;
    }

    @keyframes spinner4 {
        to {
            transform: scale(1.5);
            opacity: 0;
        }
    }
</style>

<div class='frame-container'>
    <div id="indicationTapEye"></div>
    <img id="bedroomRoof" src={bedroomRoofSrc} alt="">
    <img id="eye" src={eyeSrc} on:click={openEye} alt="">
</div>
