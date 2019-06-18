import anchor from '../../constants/anchor'

export default [
    {
        id: 'frame1-test2',
        x: 50,
        y: 50,
        width: 40,
        height: 40,
        square: true,
        anchor: anchor.center,
        callback: (id) => {
            const el = document.querySelector(`#${id}`);
            el.style.backgroundColor = "#dfd2a2";
        }
    }
]
