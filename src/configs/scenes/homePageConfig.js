import anchor from '../../constants/anchor';
import Homepage from "../../components/frames/site/Homepage.svelte";

export default [
    {
        id: 'homepage',
        x: 0,
        y: 0,
        width: 100,
        height: 100,
        anchor: anchor.topLeft,
        content: Homepage,
        callback: (id) => {
            const el = document.querySelector(`#${id}`);
            el.style.borderWidth = 0;
        }
    }
]
;