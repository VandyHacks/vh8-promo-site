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

<button id={id} style="background-image: url(assets/{image})" class="planetButton floater" on:click={handleClick}>{name.toLowerCase()}</button>

<style>
    .planetButton {
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: center;
        padding: 0.4em;
        background-color: rgba(0, 0, 0, 0);
        position: fixed;
        z-index: 10;
        display: flex;
        align-items: center;
        justify-content: center;
        /* font-size: 8vw; */
        /* width: 40vw;
        height: 40vh; */
    }
</style>
