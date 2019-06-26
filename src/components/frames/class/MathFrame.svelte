<script>
    import Draggable from 'gsap/Draggable'
    import {onMount} from 'svelte';
    import {frameNumberClass} from '../../../stores/frameStore';

    onMount(() => {
        let goodAnswer = 0;

        Draggable.create('.draggable', {
            bounds: '.exercice',
            onDragEnd: function(e){
                const responses = document.getElementsByClassName('exercice_question_response');
                Array.from(responses).forEach(response => {
                    if(this.target.dataset.response === response.dataset.response && this.hitTest(response, '50%')){
                        /*
                        const responsePos = response.getBoundingClientRect();

                        const responseX = responsePos.top + responsePos.width/2;
                        const responseY = responsePos.left + responsePos.height/2;

                        this.target.style.top = responseX + 'px';
                        this.target.style.left = responseY + 'px';
                        */
                        this.disable();
                        goodAnswer ++;
                    }
                    if(goodAnswer === 3) {
                        frameNumberClass.update(n => n + 1);
                    }
                });
            }
        });

    });
</script>

<style>
    .frame-container{
        width: 100%;
        height: 100%;
    }
    #mathFrame{
        background-image: url("./assets/png/classroom/S6-Sheet.png");
        background-position: left center;
        background-size: 130%;
        background-repeat: no-repeat;
    }
    p{
        font-family: 'MikadoBold';
        font-size: 75px;
        text-align: center;
    }
    ul{
        display: flex;
    }
    li{
        font-family: 'MikadoBold';
        font-size: 60px;
        line-height: 75px;
    }
    .exercice{
        height: 100%;
        margin-left: 35%;
        padding-top: 25%;
    }
    .exercice_question{
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    }
    .exercice_question_response{
        margin-left: 20px;
        width: 66px;
        height: 76px;
    }
    .exercice_response_item{
        width: 65px;
        height: 75px;
        margin-right: 20px;
        padding: 5px;
        background-color: white;
    }
    .sketchy-border{
        border: 5px solid white;
        border-image: url('./assets/png/FrameBorder.png') 50 stretch;
        -webkit-border-image: url('./assets/png/FrameBorder.png') 50 stretch;
    }
</style>

<div id="mathFrame" class="frame-container">
    <section  class="exercice">
        <div class="exercice_question">
            <p class="exercice_question_instruction">7 x 5 =</p>
            <p id="target" class="exercice_question_response sketchy-border" data-response="1"></p>
        </div>
        <div class="exercice_question">
            <p class="exercice_question_instruction">6 x 4 =</p>
            <p class="exercice_question_response sketchy-border" data-response="2"></p>
        </div>
        <div class="exercice_question">
            <p class="exercice_question_instruction">8 x 7 =</p>
            <p class="exercice_question_response sketchy-border" data-response="3"></p>
        </div>
        <ul>
            <li class="exercice_response_item sketchy-border draggable" data-response="1">35</li>
            <li class="exercice_response_item sketchy-border draggable" data-response="2">24</li>
            <li class="exercice_response_item sketchy-border draggable" data-response="3">56</li>
        </ul>
    </section>

</div>


