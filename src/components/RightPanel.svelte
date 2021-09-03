<script>
    import { navigate } from 'svelte-routing';

    import Button from './Button.svelte';
    import Panel from './Panel.svelte';
</script>

<Panel>
    <Button name="sponsors" />
    <Button name="speakers" />
    <button on:click={() => navigate("https://vandyhacks-retro-edn.devpost.com/project-gallery")}>WINNERS</button>
</Panel>