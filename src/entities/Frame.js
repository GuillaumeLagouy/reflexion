import anchorFunc from '../constants/anchorFunctions';
import anchor from '../constants/anchor';

export default class Frame {
    constructor(config, container) {
        this.config = config;
        this.container = container;

        this.setRelativeSize();
        this.setRelativePosition();
    }

    setRelativeSize(){
        if(this.config.square){
            this.config.width = (this.config.width * this.container.offsetWidth) / 100;
            this.config.height = this.config.width;
        } else {
            this.config.width = (this.config.width * this.container.offsetWidth) / 100;
            this.config.height = (this.config.height * this.container.offsetHeight) / 100;
        }
    }

    setRelativePosition(){
        // topLeft by default
        this.config.anchor = !this.config.anchor ? anchor.topLeft : this.config.anchor;

        const {x, y} = anchorFunc[this.config.anchor](this.container, this.config);
        this.config.x = x;
        this.config.y = y;
    }
}
