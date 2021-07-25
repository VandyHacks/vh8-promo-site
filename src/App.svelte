<script>
	import { Router, Route } from "svelte-routing";

	import Home from "./pages/Home.svelte";
	import Sponsors from "./pages/Sponsors.svelte";
	import About from "./pages/About.svelte";

	export let url = "";
</script>

<Router url="{url}">
	<Route path="sponsors" component="{Sponsors}" />
	<Route path="about" component="{About}" />
	<Route path="/">
		<Home />
	</Route>
</Router>