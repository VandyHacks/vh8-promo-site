<script>
	import { Router, Route } from "svelte-routing";

	import Home from "./pages/Home.svelte";
	import Sponsors from "./pages/Sponsors.svelte";
	import About from "./pages/About.svelte";
	import FAQ from "./pages/FAQ.svelte";
	import Speakers from "./pages/Speakers.svelte";
	import Schedule from "./pages/Schedule.svelte";
	import { onMount } from "svelte";
	import tsParticles from "tsparticles";
	onMount(() => {
		tsParticles.load("background-stars", {
			particles: {
				number: {
					value: 200,
					density: {
						enable: true,
						value_area: 800,
					},
				},
				color: {
					value: "#ffffff",
				},
				shape: {
					type: ["star", "circle", "circle", "circle", "star"],
					stroke: {
						width: 0,
						color: "#000000",
					},
				},
				opacity: {
					value: 0.8,
					random: true,
					anim: {
						enable: true,
						speed: 12.0,
						opacity_min: 0.6,
						sync: false,
					},
				},
				size: {
					value: 1,
					random: true,
					anim: {
						enable: true,
						speed: 0.3,
						size_min: 1,
						sync: false,
					},
				},
				line_linked: {
					enable: true,
					distance: 45,
					color: "#ffffff",
					opacity: 0.7,
					width: 1.2,
				},
				move: {
					enable: true,
					speed: 0.3,
					direction: "top",
					random: true,
					straight: false,
					out_mode: "out",
					bounce: false,
					attract: {
						enable: true,
						rotateX: 2000,
						rotateY: 2000,
					},
				},
			},
			interactivity: {
				detect_on: "window",
				events: {
					onDiv: [
						{
							enable: true,
							selectors: ".titlespace",
							mode: "bounce",
							type: "rectangle",
						},
					],
					resize: true,
					onhover: {
						enable: true,
						mode: ["bubble", "trail"],
						parallax: {
							enable: true,
							force: 100,
							smooth: 6,
						},
					},
					onclick: {
						enable: true,
						mode: "push",
					},
					resize: true,
				},
				modes: {
					grab: {
						distance: 400,
						line_linked: {
							opacity: 1,
						},
					},
					bubble: {
						color: "#e6bb67", //bg color: "#303b53",
						distance: 100,
						size: 4.8,
						duration: 2,
						opacity: 0.9,
						speed: 2.4,
					},
					repulse: {
						distance: 400,
						duration: 0.4,
					},
					push: {
						particles_nb: 1,
					},
					trail: {
						delay: 1.5,
						quantity: 1,
					},
					remove: {
						particles_nb: 2,
					},
				},
			},
			retina_detect: true,
			pauseOnOutsideViewport: true,
		});
	});

	export let url = "";
</script>

<div id="main">
	<a
	  id="mlh-trust-badge"
	  style="display:block;max-width:80px;min-width:40px;position:fixed;right:50px;top:0;width:10%;z-index:10000"
	  href="https://mlh.io/seasons/2021/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2021-season&utm_content=gray"
	  target="_blank"
	  ><img
		src="https://s3.amazonaws.com/logged-assets/trust-badge/2021/mlh-trust-badge-2021-gray.svg"
		alt="Major League Hacking 2021 Hackathon Season"
		style="width:100%"
	/></a>
	<Router {url}>
		<Route path="sponsors" component={Sponsors} />
		<Route path="about" component={About} />
		<Route path="faq" component={FAQ} />
		<Route path="speakers" component={Speakers} />
		<Route path="schedule" component={Schedule} />
		<Route path="/">
			<Home />
		</Route>
	</Router>
	<div id="background-stars" />
</div>

<style>
	#main {
		background-color: #0c1645;
		max-width: 100vw;
		height: 100vh;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		color: #fff;
	}

	#background-stars {
		position: absolute;
		width: 100%;
		height: 100%;
		overflow: hidden;
		z-index: 0;
	}
</style>