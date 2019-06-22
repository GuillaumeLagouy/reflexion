import anchor from '../../constants/anchor';

import Title from '../../components/Title.svelte';

export default [
    {
        id: 's4-bell',
        x: 50,
        y: 26,
        anchor: anchor.center,
        width: 30,
        height: 30,
    },

    {
        id: 's4-title',
        x: 50,
        y: 50,
        anchor: anchor.center,
        width: 30,
        height: 10,
        content: Title,
        title: 'LA RÉCRÉATION',
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                border: 0,
                webkitBorderImage: 'none',
            })
        }
    },

    {
        id: 's4-playground',
        x: 50,
        y: 50,
        anchor: anchor.center,
        width: 100,
        height: 100,
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                border: '2px solid red',
                webkitBorderImage: 'none',
            });
        }
    },

    {
        id: 's4-insult',
        x: 80,
        y: 80,
        anchor: anchor.bottomRight,
        width: 10,
        height: 10,
    },

    {
        id: 's4-bubbles',
        x: 50,
        y: 50,
        anchor: anchor.center,
        width: 100,
        height: 100,
        callback: id => {
            const el = document.getElementById(id);
            Object.assign(el.style, {
                border: 0,
                webkitBorderImage: 'none',
                backgroundColor: 'lightgrey',
            })
        }
    }
]
