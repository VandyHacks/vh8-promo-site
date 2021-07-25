<script>
    import Logo from "../assets/vhlogo.svelte";
    import Button from '../components/Button.svelte';
</script>

<div id="about">
    <div class="modal">
        <div class="logo-container">
            <Logo width="120px" />
            <h1>ABOUT</h1>
        </div>
        <ul>
            <li>Mission: VH VII</li>
            <li>Date: October 10, 2021</li>
            <li>Location: The Wond'ry</li>
            <li>
                Details: Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quae deleniti 
                perspiciatis tempore porro. Officiis laboriosam quos consectetur sed reprehenderit 
                consequuntur, placeat hic in! Iste, id facere? Dolore, eum quae!
            </li>
        </ul>
        <div class="return-button">
            <Button name="return" path="" />
        </div>
    </div>
</div>

<style>
    h1 {
        font-size: 3rem;
    }
    #about {
        background-color: #121212;
        max-width: 100vw;
        min-height: 100vh;
        padding: 10vh 10vw;
    }
    .logo-container {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        gap: 1vw;
        width: 20vw;
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
    .return-button {
        display: flex;
        justify-content: flex-end;
    }
</style>