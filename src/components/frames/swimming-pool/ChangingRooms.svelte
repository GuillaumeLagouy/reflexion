<script>
    import {frameNumberPool, gender} from '../../../stores/frameStore';
    import TweenMax from 'gsap';

    function selectDoor(e) {
        const frame = document.querySelector('#scene3-frame1');
        const changingRooms = document.querySelector('#changing-rooms');

        if (e.currentTarget.id === 'girls-room') {
            gender.update(n => n = 'female');
            changingRooms.style.backgroundImage = 'url("./assets/png/Swimming-pool/S3_GirlsDoorOpen.png")';
        } else {
            gender.update(n => n = 'male');
            changingRooms.style.backgroundImage = 'url("./assets/png/Swimming-pool/S3_BoysDoorOpen.png")';
        }
        Object.assign(changingRooms.style, {
            height: `${changingRooms.offsetHeight}px`,
            width: `${changingRooms.offsetWidth}px`
        });
        let w, h, x, y;
        y = this.offsetTop;
        x = this.offsetLeft;
        w = this.offsetWidth;
        h = this.offsetHeight;
        changingRooms.style.backgroundPosition = `${-x}px ${-y}px`;
        TweenMax.to(frame, 1, {left: x + frame.offsetLeft, top: y + frame.offsetTop, width: w, height: h});
        frameNumberPool.update(n => n + 1);
    }
</script>

<style>
    img::selection {
        background: none;
    }

    #changing-rooms {
        background-image: url("./assets/png/Swimming-pool/S3_ChangingRooms.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        height: 100%;
        transition: all 1s;
    }

    .door {
        position: absolute;
        top: 27%;
        height: 34%;
        width: 16%;
        cursor: pointer;
    }

    #girls-room {
        left: 27%;
    }

    #boys-room {
        left: 59%;
    }
</style>

<div class="door" id="girls-room" on:click={selectDoor}></div>
<div class="door" id="boys-room" on:click={selectDoor}></div>
<div id="changing-rooms"></div>
