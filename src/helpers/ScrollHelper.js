const disableScroll = () => {
    window.addEventListener('touchmove', e => {
        e.preventDefault();
    }, {passive: false});

    window.addEventListener('wheel', e => {
        e.preventDefault()
    }, {passive: false});
};
export  {disableScroll};
