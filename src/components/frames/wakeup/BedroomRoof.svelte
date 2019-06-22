<script>
    import {frameNumber} from '../../../stores/frameStore'

    let bedroomRoofSrc = '/assets/png/S1_BedroomRoofOff.png';
    const eyeSrc = '/assets/png/eyeFrames/eye_0.png';
    let eyeSrcNb = 0;

    function openEye() {
        const eye = document.getElementById("eye");
        eyeSrcNb++;
        if(eyeSrcNb <= 10) {
            eye.src = `/assets/png/eyeFrames/eye_${eyeSrcNb}.png`;
        } else {
            console.log("test");
            frameNumber.update(n => n + 1);
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
</style>

<div class='frame-container'>
    <img id="bedroomRoof" src={bedroomRoofSrc} alt="">
    <img id="eye" src={eyeSrc} on:click={openEye} alt="">
</div>
