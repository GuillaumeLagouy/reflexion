import anchor from "../../constants/anchor";
import Title from "../../components/Title.svelte";

export default [
    {
        id: 's5-bell',
        x: 50,
        y: 26,
        anchor: anchor.center,
        width: 30,
        height: 30,
    },

    {
        id: 's5-title',
        x: 50,
        y: 50,
        anchor: anchor.center,
        width: 30,
        height: 10,
        content: Title,
        title: 'LA CANTINE',
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                border: 0,
                webkitBorderImage: 'none',
            })
        }
    },

    {
        id: 's5-lane-1',
        x: 10,
        y: 20,
        anchor: anchor.topLeft,
        width: 40,
        height: 30,
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                zIndex: 1,
            });
        }
    },

    {
        id: 's5-lane-2',
        x: 80,
        y: 40,
        anchor: anchor.topRight,
        width: 40,
        height: 30,
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                zIndex: 2,
            });
        }
    },

    {
        id: 's5-eat',
        x: 50,
        y: 50,
        anchor: anchor.center,
        width: 40,
        height: 35,
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                zIndex: 3,
            });
        }
    },
]
