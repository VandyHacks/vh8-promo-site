<script>
    import { createEventDispatcher } from "svelte";
    import { navigate } from "svelte-routing";
    import { currentlyActive } from '../stores.js';

    export let name;
    export let image;
    export let path = name;
    export let url;
    export let id;
    export let active = false;
    export let planetButton = true;
    export let noPlanetEffect = false;

    const dispatch = createEventDispatcher();

    const handleClick = () => {
        if (planetButton && !noPlanetEffect) {
            dispatch("clickPlanet");
            active = true;
            currentlyActive.set(name);
        } else if (!planetButton) {
            currentlyActive.set("");
        }
        setTimeout( () => {
            if (url) {
                navigate(url);
            } else {
                navigate(`/${path}`, { replace: false });
            }
        }, 1400);
    }
    
</script>

<button id={id} style="background-image: url(assets/{image})" class:planetButton class:active on:click={handleClick}>{name.toLowerCase()}</button>

<style>
    .planetButton {
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: center;
        padding: 0.4em;
        background-color: rgba(0, 0, 0, 0);
        position: fixed;
        z-index: 3;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 1.4s ease-in-out;
        /* font-size: 8vw; */
        /* width: 40vw;
        height: 40vh; */
    }
</style>
