# Reflexion
Final Gobelins project.

### Start project
>`npm install`

>`npm run dev`

### Create a scene

1 - Create `(nameOfYourScene)Config.js` in `src/configs/scenes`

2 - Open `src/configs/scenesConfig.js`

Add your scene
````
import YourSceneConfig from '../configs/scenes/(nameOfYourScene)Config.js'

(...)

{
    id: 'name-of-your-scene',
    config: YourSceneConfig
}
````

### Create frames in your scene

1 - Go to your  `(nameOfYourScene)Config.js`
2 - Add a frame
````
{
    id: 'id-of-your-frame',
    x: 50,
    y: 50,
    width: 35,
    height: 25,
    content: Exemple,
    anchor: anchor.center,
    callback: (id) => {
        ...
    }
}
````
For the `content` parameter your need to add a svelte component in `src/components/frames/folderOFYourScene/` 
and import  this component in your scene config.

Transition and animation of the frame need to be setup in the callback section. 
You can select your element with the id parameter.

The content of your frame are in the component.
