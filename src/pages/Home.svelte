<script>
	import LeftPanel from "../components/LeftPanel.svelte";
	import MainPanel from "../components/MainPanel.svelte";
	import RightPanel from "../components/RightPanel.svelte";
	import Layout from "../components/Layout.svelte";
	import { isContentHidden, currentlyActive } from "../stores";
	currentlyActive.set("");
</script>

<Layout>
	<div id="home" class:hidden={$isContentHidden}>
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
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		color: #fff;
	}
</style>
