<script>
    import Scene from './components/Scene.svelte';
    import scenesConfig from './configs/scenesConfig'
</script>

<style>

</style>


{#each scenesConfig as sceneConfig}
    <Scene id={sceneConfig.id} framesConfig={sceneConfig.config} />
{/each}
