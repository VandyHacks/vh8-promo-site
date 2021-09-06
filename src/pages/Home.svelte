<script>
	import LeftPanel from "../components/LeftPanel.svelte";
	import MainPanel from "../components/MainPanel.svelte";
	import RightPanel from "../components/RightPanel.svelte";
	import Layout from "../components/Layout.svelte";
</script>

<Layout>
	<div id="home">
		<!-- <LeftPanel /> -->
		<MainPanel />
		<!-- <RightPanel /> -->
	</div>
</Layout>
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
	}
</style>
