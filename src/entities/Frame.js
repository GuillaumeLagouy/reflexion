export default class Frame {
    constructor(config, container) {
        this.config = config;
        this.container = container;
        this.setPositionX();
        this.setPositionY();
    }

    setPositionX(){
        this.config.x = (this.config.x * this.container.offsetWidth)/100;
    }

    setPositionY(){
        this.config.y = (this.config.y * this.container.offsetHeight)/100;
    }
}
