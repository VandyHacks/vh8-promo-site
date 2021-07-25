<script>
    import Button from './Button.svelte';
    import Logo from "../assets/vhlogo.svelte";
</script>

<div id="main-panel">
    <Logo />
    <p>Welcome aboard VH VIII</p>
    <Button name="apply" />
</div>

<style>
	#main-panel {
		display: flex;
        min-width: 25vw;
		flex-direction: column;
		justify-content: center;
		color: #fff;
	}
</style>