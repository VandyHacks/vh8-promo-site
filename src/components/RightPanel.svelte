<script>
    import Button from './Button.svelte';
</script>

<div id="right-panel">
    <Button name="sponsors" />
    <Button name="speakers" />
    <Button name="winners" />
</div>


<style>
	#right-panel {
		display: flex;
        min-width: 25vw;
		flex-direction: column;
		justify-content: center;
		color: #fff;
	}
</style>