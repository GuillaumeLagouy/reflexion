<script>
    import {get} from 'svelte/store';

    import Scene from './components/Scene.svelte';
    import scenesConfig from './configs/scenesConfig';
    import {activeSceneNb} from './stores/scenesStore';

    let activeSceneNbValue = get(activeSceneNb);

    activeSceneNb.subscribe(value => {
        activeSceneNbValue = value;
    });
</script>

<style></style>

{#each scenesConfig as sceneConfig}
    {#if activeSceneNbValue === sceneConfig.sequence}
        <Scene
                id={sceneConfig.id}
                framesConfig={sceneConfig.config}
                sequence={sceneConfig.sequence}
                config={sceneConfig}
        />
    {/if}
{/each}
