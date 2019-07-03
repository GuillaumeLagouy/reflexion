<script>
    import {onMount} from 'svelte';
    import {activeSceneNb} from '../../../stores/scenesStore';
    import TweenMax from 'gsap';

    let titleSrc = '/assets/png/bus/S2_FeedTitle.png';
    let likeSrc = '/assets/png/bus/S2_NoLike.png';
    let retweetSrc = '/assets/png/bus/S2_NoRetweet.png';

    onMount(() => {
        let yStart;
        let translate = 0;
        let maximumSize = 0;
        document.querySelectorAll('.feed').forEach((item) => {maximumSize += item.offsetWidth});

        const frame = document.querySelector('#scene2-frame5');
        const phone = document.querySelector('#phone-hitbox');
        const feed = document.querySelector('#social-media-feed');

        function setActive(e, item) {
            const actions = item.querySelectorAll('.like, .retweet');
            actions.forEach((a) => {
                if(e.touches[0].clientY - translate > item.offsetTop + a.offsetTop + feed.offsetTop - 50 && e.touches[0].clientY - translate < a.offsetTop + a.offsetHeight + feed.offsetTop + item.offsetTop && e.touches[0].clientX > a.offsetLeft + feed.offsetLeft + frame.offsetLeft + item.offsetLeft && e.touches[0].clientX < a.offsetWidth + a.offsetLeft + feed.offsetLeft + frame.offsetLeft + item.offsetLeft)
                    a.src = a.classList.contains('like')?'/assets/png/bus/S2_Like.png':'/assets/png/bus/S2_Retweet.png';
            });
        }

        phone.addEventListener("touchstart", (e) => {
            yStart = e.touches[0].clientY;
            document.querySelectorAll('.feed').forEach( (p) => setActive(e, p));
        });

        phone.addEventListener("touchmove", (e) => move(e));

        function move(e) {
            e.preventDefault();
            if (yStart < e.touches[0].clientY && translate < 0) translate += 8;
            else if (yStart > e.touches[0].clientY && translate > -maximumSize - 100) translate -= 8;
            document.querySelectorAll('#social-media-feed .feed').forEach((item) => {
                item.style.transform = `translateY(${translate}px)`;
            });
            if (translate < -maximumSize - 99) {
                phone.removeEventListener('touchmove', move);
                TweenMax.to('#bus-scene', .5, {opacity: 0, onComplete: () => {
                        activeSceneNb.update(n => n = 5);
                }});
            }
        }
    });
</script>

<style>
    #phone {
        background-image: url("/assets/png/bus/S2_CellPhone.png");
        background-repeat: no-repeat;
        background-position: bottom;
        background-size: 100%;
        height: 100%;
        width: 100%;
    }

    #hand {
        background-image: url("/assets/png/bus/S2_CellPhoneHand.png");
        background-repeat: no-repeat;
        background-position: bottom;
        background-size: 100%;
        height: 100%;
        width: 100%;
        position: absolute;
        top: 4px;
    }

    #phone-hitbox {
        position: absolute;
        width: 47%;
        height: 63%;
        top: 17%;
        left: 21%;
    }

    #navbar {
        background-image: url("/assets/png/bus/S2_FeedTop.png");
        background-position: top;
        background-repeat : no-repeat;
        background-size: 100%;
        position: absolute;
        width: 46.5%;
        height: 10%;
        top: 17.2%;
        left: 21.2%;
    }

    #social-media-feed {
        padding-top: 50px;
        background-color: white;
        position: absolute;
        width: calc(46% + 2px);
        height: 57%;
        top: calc(17% + 4px);
        left: calc(21% + 2px);
        display: flex;
        overflow: hidden;
        flex-direction: column;
    }

    #social-media-feed .feed {
        width: 90%;
        min-height: min-content;
        margin-left: 5%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: baseline;
        transform: translate(0);
    }

    .publication {
        border: 3px solid black;
        width: 100%;
        height: auto;
    }

    #social-media-feed img:first-of-type:not(.like) {
        width: 50%;
        margin-bottom: 10px;
    }

    .feed div {
        margin-top: 10px;
        margin-bottom: 30px;
    }

    .feed div img {
        height: 25px;
    }
</style>

<div id="phone"></div>
<div id="social-media-feed">
    <div class="feed">
        <img src={titleSrc} alt=""/>
        <img class="publication" src="/assets/png/bus/S2_Feed1.png" alt=""/>
        <div>
            <img class="like" src={likeSrc} alt=""/>
            <img class="retweet" src={retweetSrc} alt=""/>
        </div>
    </div>
    <div class="feed">
        <img src={titleSrc} alt=""/>
        <img class="publication" src="/assets/png/bus/S2_Feed2.png" alt=""/>
        <div>
            <img class="like" src={likeSrc} alt=""/>
            <img class="retweet" src={retweetSrc} alt=""/>
        </div>
    </div>
    <div class="feed">
        <img src={titleSrc} alt=""/>
        <img class="publication" src="/assets/png/bus/S2_Feed3.png" alt=""/>
        <div>
            <img class="like" src={likeSrc} alt=""/>
            <img class="retweet" src={retweetSrc} alt=""/>
        </div>
    </div>
    <div class="feed">
        <img src={titleSrc} alt=""/>
        <img class="publication" src="/assets/png/bus/S2_Feed4.png" alt=""/>
        <div>
            <img class="like" src={likeSrc} alt=""/>
            <img class="retweet" src={retweetSrc} alt=""/>
        </div>
    </div>
    <div class="feed">
        <img src={titleSrc} alt=""/>
        <img class="publication" src="/assets/png/bus/S2_Feed5.png" alt=""/>
        <div>
            <img class="like" src={likeSrc} alt=""/>
            <img class="retweet" src={retweetSrc} alt=""/>
        </div>
    </div>
</div>
<div id="navbar"></div>
<div id="hand"></div>
<div id="phone-hitbox"></div>
