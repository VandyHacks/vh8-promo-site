<script>
    import Button from './Button.svelte';
    export let hasActive = false;
    const handleClick = () => {
        console.log("HI!");
        hasActive = !hasActive;
    }
</script>

<div class:hasActive>
    <Button id="about-button" image="bluePlanet.svg" name="about" on:clickPlanet={handleClick}/>
    <Button id="faq-button" image="dustPlanet.png" name="faq" on:clickPlanet={handleClick}/>
    <slot />
    <Button id="sponsors-button" image="orangePlanet.png" name="sponsors" on:clickPlanet={handleClick}/>
    <Button id="winners-button" image="redPlanet.png" name="winners" url="https://vandyhacks-retro-edn.devpost.com/project-gallery" noPlanetEffect={true}/>
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