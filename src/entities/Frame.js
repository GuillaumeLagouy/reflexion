import anchorFunc from '../constants/anchorFunctions';
import anchor from '../constants/anchor';

export default class Frame {
    constructor(config, container) {
        this.config = config;
        this.container = container;
        this.setPosition();
    }

    setPosition(){
        // topLeft by default
        this.config.anchor = !this.config.anchor ? anchor.topLeft : this.config.anchor;

        const {x, y} = anchorFunc[this.config.anchor](this.container, this.config);
        this.config.x = x;
        this.config.y = y;
    }
}
