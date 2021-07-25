<script>
    import Button from './Button.svelte';
</script>

<div id="left-panel">
    <Button name="about" />
    <Button name="faq" />
    <Button name="schedule" />
</div>


<style>
	#left-panel {
		display: flex;
        min-width: 25vw;
		flex-direction: column;
		justify-content: center;
		color: #fff;
	}
</style>