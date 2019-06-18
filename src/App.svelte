<script>
    import Scene from './components/Scene.svelte';
    import scenesConfig from './configs/scenesConfig'
</script>

<style>

</style>


{#each scenesConfig as sceneConfig}
    <Scene framesConfig={sceneConfig.config} />
{/each}
