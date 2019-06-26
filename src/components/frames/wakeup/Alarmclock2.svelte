<script>
    import { onMount } from 'svelte'

    let src = '/assets/gif/S1_Alarmclock_2.gif';

    function stopGif(){
        src = '/assets/png/S1_Alarmclock_2.png';
    }

    onMount(() => {
        const frameContainer = document.getElementById('alarmclock2-container');
        const img = document.getElementById('alarmclock2');
        frameContainer.addEventListener('click', () => {
            img.style.height = '90%';
        })
    });
</script>

<style>
    .frame-container{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }

    img{
        height: 130%;
    }
</style>

<div id='alarmclock2-container' class='frame-container'>
    <img id='alarmclock2' {src} on:click={stopGif}>
</div>
