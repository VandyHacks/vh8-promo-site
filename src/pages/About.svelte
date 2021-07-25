<script>
    import Logo from "../assets/vhlogo.svelte";
</script>

<div id="about">
    <div class="modal">
        <div>
            <Logo width="100px" />
        </div>
        <h1>hello about</h1>
        <ul>
            <li>Mission: VH VII</li>
            <li>Date: October 10, 2021</li>
            <li>Location: The Wond'ry</li>
            <li>Details: Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quae deleniti perspiciatis tempore porro. Officiis laboriosam quos consectetur sed reprehenderit consequuntur, placeat hic in! Iste, id facere? Dolore, eum quae!</li>
        </ul>
        <button>return</button>
    </div>
</div>

<style>
    #about {
        background-color: #121212;
        max-width: 100vw;
        height: 100vh;
        padding: 10vh 10vw;
    }
    .logo-container {
        width: 20vw;
        height: 20vw;
        padding: 0;
    }
    .modal {
        background: rgba(0, 0, 0, 0.25);
        border-radius: 20px;
        color: #fff;
        padding: 1vh 5vw;
        word-wrap: break-word;
        font-size: 1.75rem;
    }
</style>