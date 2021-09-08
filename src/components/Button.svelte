<script>
    import { createEventDispatcher } from "svelte";
    import { navigate } from "svelte-routing";
    import { currentlyActive, isContentHidden } from '../stores.js';

    export let name;
    export let image;
    export let path = name;
    export let url;
    export let id;
    export let active = false;
    export let planetButton = true;
    export let hasPlanetEffect = true;

    const dispatch = createEventDispatcher();

    const handleClick = () => {
        if (!active) {
            if (hasPlanetEffect) {
                isContentHidden.set(true);
                if (planetButton) {
                    dispatch("clickPlanet");
                    active = true;
                    currentlyActive.set(name);
                } else {
                    currentlyActive.set(""); 
                }
            }
            
            setTimeout(() => {
                if (url) {
                    window.open(url, '_blank');
                } else {
                    navigate(`/${path}`, { replace: false });
                }
            }, (hasPlanetEffect ? 500 : 0));
        }
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
        transition: all 0.5s cubic-bezier(0.5, 0, 0, 1), font-size 0s;
        /* font-size: 8vw; */
        /* width: 40vw;
        height: 40vh; */
    }
</style>
