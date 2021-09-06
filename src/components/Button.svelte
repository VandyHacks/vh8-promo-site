<script>
    import { navigate } from "svelte-routing";

    export let name;
    export let image;
    export let path = name;
    export let url;
    export let id;

    const handleClick = () => {
        if (url) {
            navigate(url);
        } else {
            navigate(`/${path}`, { replace: false });
        }
    }
    
</script>

<button id={id} style="background-image: url(assets/{image})" class="panelButton floater" on:click={handleClick}>{name.toLowerCase()}</button>

<style>
    .panelButton {
        background-size: 45%;
        background-repeat: no-repeat;
        background-position: center;
        padding: 0.4em;
        background-color: rgba(0, 0, 0, 0);
        width: 40vw;
        height: 40vh;
    }
</style>
