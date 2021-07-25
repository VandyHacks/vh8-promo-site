<script>
	import LeftPanel from '../components/LeftPanel.svelte';
	import MainPanel from '../components/MainPanel.svelte'
	import RightPanel from '../components/RightPanel.svelte';
</script>

<div id="home">
	<LeftPanel />
	<MainPanel />
	<RightPanel />
</div>


<style>
	#home {
		background-color: #121212;
		text-align: center;
		max-width: 100vw;
		height: 100vh;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		color: #fff;
	}
</style>