<script>
    import {gender} from '../../../stores/frameStore';
    import {get} from 'svelte/store';
    let genderValue = get(gender);
    let string = genderValue === 'male' ? ' mon chéri' : ' ma chérie';


</script>

<style>
    .frame-container{
        width: 100%;
        height: 100%;
        background-image: url("./assets/png/home/S7-Mother.png");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 100%
    }
    .bubble-container{
        width: 100%;
        height: 90%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    p{
        font-family: MikadoRegular, sans-serif;
        font-size: 35px;
        margin-left: 30px;
    }
</style>

<div class="frame-container">
    <div class="bubble-container">
        <p><span class="big">Comment s'est passée <br> ta journée {string} ?</p>
    </div>
</div>
