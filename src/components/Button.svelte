<script>
import { createEventDispatcher } from "svelte";

    import { navigate } from "svelte-routing";

    export let name;
    export let image;
    export let path = name;
    export let url;
    export let id;
    export let active = false;
    export let noPlanetEffect = false;

    const dispatch = createEventDispatcher();

    const handleClick = () => {
        dispatch("clickPlanet");
        // console.log("HI!HI!")
        if (!noPlanetEffect) {
            active = !active;
        }
        // if (url) {
        //     navigate(url);
        // } else {
        //     navigate(`/${path}`, { replace: false });
        // }
    }
    
</script>

<button id={id} style="background-image: url(assets/{image})" class="planetButton" class:active on:click={handleClick}>{name.toLowerCase()}</button>

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
        transition: all 1s;
        /* font-size: 8vw; */
        /* width: 40vw;
        height: 40vh; */
    }
</style>
