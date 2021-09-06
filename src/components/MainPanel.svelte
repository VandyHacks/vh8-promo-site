<script>
    import Logo from "../assets/vhlogo.svelte";

    import Panel from "./Panel.svelte";
</script>

<Panel>
    <div class="logo-container">
        
    </div>
    <div class="subtitle">
        <span class="subtitle-text">
            Welcome aboard VH VIII.
        </span>
    </div>
    <button><!--<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">-->Apply<!--</a>--></button>
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

    .subtitle-text{
        font-size: 2rem;
    }
    a {
        text-decoration: none;
        color: #fff;
    }
</style>
