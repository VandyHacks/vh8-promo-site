<script>
    import Button from './Button.svelte';
    import Footer from './Footer.svelte';   
	import { currentlyActive, hasActive, isContentHidden } from '../stores.js';
    import { onDestroy, onMount } from 'svelte';
	isContentHidden.set(false);

    const handleClick = (e) => {
        if (!document.getElementById("content").contains(e.target)) {
            const button = document.getElementById("return-button");
            if (button) {
                button.click();
            }
        }
    }

    onMount(() => {
        document.getElementById("background-stars").addEventListener("click", handleClick);
    });

    onDestroy(() => {
        document.getElementById("background-stars").removeEventListener("click", handleClick);
    });
</script>

<div class:hasActive={$hasActive} on:click={handleClick}>
    <Button id="about-button" image="bluePlanet.svg" name="about" active={$currentlyActive === "about"}/>
    <Button id="faq-button" image="pinkPlanet.svg" name="faq" active={$currentlyActive === "faq"}/>
    <Button id="sponsors-button" image="yellowPlanet.svg" name="sponsors" active={$currentlyActive === "sponsors"}/>
    <Button id="winners-button" image="redPlanet.svg" name="winners" url="https://vandyhacks-retro-edn.devpost.com/project-gallery" hasPlanetEffect={false} active={false}/>
	<div id="content" class="content">
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