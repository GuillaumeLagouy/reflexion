import rough from 'roughjs/dist/rough.umd';

export default class Frame {
    constructor(id, posX, posY, width, height) {
        this.id = id;
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.height = height;
    }

    create(){
        const div = document.createElement('div');

        div.style.width = `${this.width}px`;
        div.style.height = `${this.height}px`;
        div.classList.add('frame');
        div.setAttribute('id', this.id);

        return div;
    }

    // TODO : WIP of sketchy frame with Rough JS
    drawRough(){
        const padding = 10;

        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute('id', this.id);
        svg.style.height = this.height + padding;
        svg.style.width = this.width + padding;
        svg.style.transform = `translate(${this.posX}px,${this.posY}px)`;
        const rs = rough.svg(svg);
        let node = rs.rectangle(2, 2, this.width, this.height);
        svg.appendChild(node);
        document.body.appendChild(svg);

        return {node, svg};
    }
}
