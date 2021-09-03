<script>
    import { navigate } from "svelte-routing";

    export let name;
    export let image;
    export let path = name;
    export let url;

    const handleClick = () => {
        if (url) {
            navigate(url);
        } else {
            navigate(`/${path}`, { replace: false });
        }
    }
    
</script>

<button style="background-image: url(assets/{image})" class="panelButton" on:click={handleClick}>{name.toLowerCase()}</button>

<style>
    .panelButton {
        background-size: 45%;
        background-repeat: no-repeat;
        background-position: center;
        padding: 0.4em;
        background-color: rgba(0, 0, 0, 0);
        width: 20vw;
        height: 20vh;
    }
</style>
