<script>
    import Button from './Button.svelte';
    export let content;
</script>

<div id="home">
    <Button id="about-button" image="bluePlanet.png" name="about" />
    <Button id="faq-button" image="dustPlanet.png" name="faq" />
    <slot />
    <Button id="sponsors-button" image="orangePlanet.png" name="sponsors" />
    <Button id="winners-button" image="redPlanet.png" name="winners" url="https://vandyhacks-retro-edn.devpost.com/project-gallery" />
    <!-- <Button image="grayPlanet.png" name="schedule" /> -->
    <!-- <Button image="purplePlanet.png" name="speakers" /> -->
</div>

<style>
	#home {
		background-color: transparent;
		z-index: 2;
		text-align: center;
		max-width: 100vw;
		height: 100vh;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		color: #fff;
		z-index: 2;
	}
</style>