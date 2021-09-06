<script>
    import { onMount } from "svelte";
    import tsParticles from "tsparticles";

    import Logo from "../assets/vhlogo.svelte";

    import Panel from "./Panel.svelte";

    onMount(() => {
        tsParticles.load("logo-container", {
            detectRetina: false,
            fpsLimit: 60,
            interactivity: {
                detectsOn: "window",
                events: {
                    onHover: {
                        enable: true,
                        mode: "bubble",
                    },
                    resize: true,
                },
                modes: {
                    bubble: {
                        color: ["#f9a602", "e6bb67"], //bg color: "#303b53",
                        distance: 64,
                        duration: 2,
                        opacity: 1,
                        size: 5,
                        speed: 2.4,
                    },
                },
            },
            particles: {
                color: {
                    value: [
                        "#e6bb67",
                        "#e6bb67",
                        "#f6dcb2",
                        "#f6dcb2",
                        "#f6dcb2",
                        "f6dcb2",
                        "#fff",
                    ],
                },
                links: {
                    blink: false,
                    color: ["#e6bb67", "#e6bb67", "f6dcb2"],
                    consent: false,
                    distance: 13,
                    enable: true,
                    opacity: 1,
                    width: 1,
                },
                move: {
                    attract: {
                        enable: false,
                        rotate: {
                            x: 600,
                            y: 1200,
                        },
                    },
                    bounce: false,
                    direction: "none",
                    enable: true,
                    outMode: "bounce",
                    random: false,
                    speed: 0.2,
                    straight: false,
                },
                number: {
                    density: {
                        enable: false,
                        area: 20000,
                    },
                    limit: 0,
                    value: 175,
                },
                opacity: {
                    animation: {
                        enable: true,
                        minimumValue: 0.05,
                        speed: 4,
                        sync: false,
                    },
                    random: false,
                    value: 1,
                },
                shape: {
                    type: ["square", "circle", "circle", "circle", "triangle"],
                },
                size: {
                    animation: {
                        enable: false,
                        minimumValue: 0.1,
                        speed: 40,
                        sync: false,
                    },
                    random: true,
                    value: 2.4,
                },
            },
            polygon: {
                draw: {
                    enable: true,
                    lineColor: "#fff",
                    lineWidth: 0.2,
                },
                move: {
                    radius: 3,
                },
                inlineArrangement: "equidistant",
                scale: 0.6,
                type: "inline",
                data: {
                    path: "M1259.83 782.15h-18.44a7.3 7.3 0 00-6.38 4.44l-77.7 209.65-78-209.64a7.32 7.32 0 00-6.39-4.44h-18.44a3.07 3.07 0 00-3.09 4.44l91.19 245.18a6 6 0 00.93 1.6l-9.83 26.53-101.27-273.3a7.3 7.3 0 00-6.38-4.44h-18.44a3.08 3.08 0 00-3.09 4.44l114.16 308a6.59 6.59 0 001.92 2.63 3.1 3.1 0 003.24 2.13h18.44a6.13 6.13 0 002.11-.41 3.18 3.18 0 001.64-.85 6.91 6.91 0 002.63-3.19l114.28-308.32a3.08 3.08 0 00-3.09-4.45zM1354.93 782.15h-18.44a7.3 7.3 0 00-6.38 4.44L1215.83 1095a3.08 3.08 0 003.09 4.44h18.44a7.31 7.31 0 006.38-4.44L1358 786.6a3.08 3.08 0 00-3.07-4.45zM1240.89 960.6h-18.44a7.3 7.3 0 00-6.38 4.44L1167.92 1095a3.07 3.07 0 003.06 4.44h18.51a7.31 7.31 0 006.3-4.33L1244 965a3.07 3.07 0 00-3.11-4.4zM1229.63 940.83h18.44a7.3 7.3 0 006.38-4.44L1310 786.48c.77-2.07-.11-3.8-2-4.29a3.89 3.89 0 00-.42 0H1288a5.22 5.22 0 00-1.5.25 7.78 7.78 0 00-3.3 2.28 5.24 5.24 0 00-.78 1.37l-56.1 151.37c-.25 1.91 1.07 3.37 3.31 3.37z",
                    size: {
                        width: 2360,
                        height: 2260,
                    },
                },
            },
        });
    });
</script>

<Panel>
    <div id="logo-container" />
    <div class="subtitle">
        <span class="subtitle-text"> Welcome aboard VH VIII. </span>
    </div>
    <button
        ><!--<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">-->Apply<!--</a>--></button
    >
</Panel>

<style>
    .logo-container {
        align-self: center;
        /*background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 1) 0%,
            rgba(0, 0, 0, 0.5) 50%,
            rgba(0, 0, 0, 0) 100%
        );*/
        background-image: url("../assets/logo.png");
        background-size: 80%;
        background-color: white;
        box-shadow: 0px 0px 10px #fabc05;
        background-repeat: no-repeat;
        background-position: center;
        width: 13vw;
        height: 13vw;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: auto;
        border-radius: 50%;
    }

    .subtitle {
        min-width: 15vw;
        padding: 0.5vh 2vw;
        border-radius: 50px;
        /*background: linear-gradient(
            to top,
            rgba(0, 0, 0, 1) 0%,
            rgba(0, 0, 0, 0.8) 20%,
            rgba(0, 0, 0, 0.2) 80%,
            rgba(0, 0, 0, 0) 100%
        );*/
    }

    .subtitle-text {
        font-size: 2rem;
    }
    a {
        text-decoration: none;
        color: #fff;
    }
</style>
