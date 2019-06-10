import rough from 'roughjs/dist/rough.umd';

export class Frame {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    draw(){
        const padding = 20;

        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.style.height = this.height;
        svg.style.width = this.width;
        const rs = rough.svg(svg);
        let node = rs.rectangle(0, 0, this.width, this.height);
        svg.appendChild(node);

        document.body.appendChild(svg);
    }
}
