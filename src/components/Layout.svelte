<script>
    import Button from './Button.svelte';
	import { onDestroy } from 'svelte';
	import { currentlyActive, hasActive } from '../stores.js';	
</script>

<div class:hasActive={$hasActive}>
    <Button id="about-button" image="bluePlanet.svg" name="about" active={$currentlyActive === "about"}/>
    <Button id="faq-button" image="dustPlanet.svg" name="faq" active={$currentlyActive === "faq"}/>
    <Button id="sponsors-button" image="orangePlanet.svg" name="sponsors" active={$currentlyActive === "sponsors"}/>
    <Button id="winners-button" image="redPlanet.svg" name="winners" url="https://vandyhacks-retro-edn.devpost.com/project-gallery" noPlanetEffect={true} active={false}/>
    <slot/>
    <!-- <Button image="grayPlanet.png" name="schedule" /> -->
    <!-- <Button image="purplePlanet.png" name="speakers" /> -->
</div>