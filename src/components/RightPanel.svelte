<script>
    import { navigate } from 'svelte-routing';

    import Button from './Button.svelte';
    import Panel from './Panel.svelte';
</script>

<Panel>
    <Button id="sponsors-button" image="orangePlanet.png" name="sponsors" />
    <!-- <Button image="purplePlanet.png" name="speakers" /> -->
    <Button id="winners-button" image="redPlanet.png" name="winners" url="http://vandyhacks-retro-edn.devpost.com/project-gallery" />
</Panel>