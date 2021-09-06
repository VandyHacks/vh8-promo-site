<script>
    import Button from './Button.svelte';
	import { currentlyActive } from '../stores.js';
    export let hasActive = false;
    const handleClick = () => {
        hasActive = true;
    }
</script>

<div class:hasActive>
    <Button id="about-button" image="bluePlanet.svg" name="about" on:clickPlanet={handleClick} active={$currentlyActive === "about"}/>
    <Button id="faq-button" image="dustPlanet.png" name="faq" on:clickPlanet={handleClick} active={$currentlyActive === "faq"}/>
    <Button id="sponsors-button" image="orangePlanet.png" name="sponsors" on:clickPlanet={handleClick} active={$currentlyActive === "sponsors"}/>
    <Button id="winners-button" image="redPlanet.png" name="winners" url="https://vandyhacks-retro-edn.devpost.com/project-gallery" noPlanetEffect={true} active={false}/>
    <slot />
    <!-- <Button image="grayPlanet.png" name="schedule" /> -->
    <!-- <Button image="purplePlanet.png" name="speakers" /> -->
</div>