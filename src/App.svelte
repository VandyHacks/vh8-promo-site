<script>
	import { Router, Route } from "svelte-routing";

	import Home from "./pages/Home.svelte";
	import Sponsors from "./pages/Sponsors.svelte";
	import About from "./pages/About.svelte";
	import FAQ from "./pages/FAQ.svelte";
	import Speakers from "./pages/Speakers.svelte";
	import Schedule from "./pages/Schedule.svelte";

	export let url = "";
</script>

<Router url="{url}">
	<Route path="sponsors" component="{Sponsors}" />
	<Route path="about" component="{About}" />
	<Route path="faq" component="{FAQ}" />
	<Route path="speakers" component="{Speakers}" />
	<Route path="schedule" component="{Schedule}" />
	<Route path="/">
		<Home />
	</Route>
</Router>