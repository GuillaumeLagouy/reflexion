export const addBubble = (nb, container, width, height, timing, callback) => {
    const bubbleContainerW = container.offsetWidth;
    const bubbleContainerH = container.offsetHeight;
    const bubbleContainerT = container.offsetTop;
    const bubbleContainerL = container.offsetLeft;

    for(let i = 0; i <= nb; i ++){
        setTimeout(() => {
            const imgNb = Math.floor(Math.random() * 3) + 1;
            const div = document.createElement('div');
            const randomTop = Math.floor(Math.random() * (bubbleContainerT + bubbleContainerW)) + bubbleContainerT  + 'px';
            const randomLeft = Math.floor(Math.random() * (bubbleContainerL + bubbleContainerH)) + bubbleContainerL + 'px';
            Object.assign(div.style, {
                width: width + 'px',
                height: height + 'px',
                top: randomTop,
                left: randomLeft,
                position: 'absolute',
                backgroundSize: '95%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                backgroundImage: 'url(./assets/png/playtime/bubbles/Bubble'+ imgNb +'.png)',
            });

            container.appendChild(div);

            if(i === 100) callback();
        }, i * timing);
    }
};
