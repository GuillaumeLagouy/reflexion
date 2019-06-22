<script>
    import Marzipano from 'marzipano';
    import {onMount} from 'svelte';
    import {DeviceOrientationControlMethod} from '../../../constants/DeviceOrientationControlMethod';

    onMount(() => {
        const panoElement = document.getElementById('pano');
        const viewerOpts = {
            controls: {
                mouseViewMode: 'drag',
            }
        };

        const viewer = new Marzipano.Viewer(panoElement, viewerOpts);

        const deviceOrientationControlMethod = new DeviceOrientationControlMethod();
        const controls = viewer.controls();
        controls.registerMethod('deviceOrientation', deviceOrientationControlMethod);

        deviceOrientationControlMethod.getPitch(function(err, pitch) {
            if (!err) {
                view.setPitch(pitch);
            }
        });
        controls.enableMethod('deviceOrientation');

        const levels = [
            {'tileSize': 256, 'size': 256, 'fallbackOnly': true},
            {'tileSize': 512, 'size': 512},
            {'tileSize': 512, 'size': 1024},
            {'tileSize': 512, 'size': 2048}
        ];
        const geometry = new Marzipano.CubeGeometry(levels);
        const source = Marzipano.ImageUrlSource.fromString(
            './assets/png/classroom/tiles/0-classe_360_4/{z}/{f}/{y}/{x}.jpg',
            { cubeMapPreviewUrl: './assets/png/classroom/tiles/0-classe_360_4/preview.jpg' }
        );

        const limiter = Marzipano.RectilinearView.limit.traditional(1524.5, 100*Math.PI/180, 120*Math.PI/180);

        const view = new Marzipano.RectilinearView(null,limiter);

        const scene = viewer.createScene({
            source: source,
            geometry: geometry,
            view: view,
            pinFirstLevel: true
        });
        scene.switchTo();
    })

</script>

<style>
    #pano{
        height: 100%;
    }
</style>

<div id="pano"></div>
