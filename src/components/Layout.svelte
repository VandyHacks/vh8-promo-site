<script>
    import Button from './Button.svelte';
    import Footer from './Footer.svelte';   
	import { currentlyActive, hasActive, isContentHidden } from '../stores.js';
	isContentHidden.set(false);
</script>

<div class:hasActive={$hasActive}>
    <Button id="about-button" image="bluePlanet.svg" name="about" active={$currentlyActive === "about"}/>
    <Button id="faq-button" image="dustPlanet.svg" name="faq" active={$currentlyActive === "faq"}/>
    <Button id="sponsors-button" image="orangePlanet.svg" name="sponsors" active={$currentlyActive === "sponsors"}/>
    <Button id="winners-button" image="redPlanet.svg" name="winners" url="https://vandyhacks-retro-edn.devpost.com/project-gallery" hasPlanetEffect={false} active={false}/>
	<div class="content">
		<slot />
	</div>
    <Footer />
    <!-- <Button image="grayPlanet.png" name="schedule" /> -->
    <!-- <Button image="purplePlanet.png" name="speakers" /> -->
</div>

<style>
	.content {
		background-color: transparent;
		z-index: 2;
        width: 80vw;
        height: 80vh;
        padding: 10vh 10vw;
    }
</style>