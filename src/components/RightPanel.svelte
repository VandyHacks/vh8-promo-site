<script>
    import { navigate } from 'svelte-routing';

    import Button from './Button.svelte';
    import Panel from './Panel.svelte';
</script>

<Panel>
    <Button image="orangePlanet.png" name="sponsors" />
    <Button image="purplePlanet.png" name="speakers" />
    <Button image="redPlanet.png" name="winners" url="https://vandyhacks-retro-edn.devpost.com/project-gallery" />
</Panel>