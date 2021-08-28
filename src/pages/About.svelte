<script>
    import Modal from "../components/Modal.svelte";
</script>

<div id="about">
    <Modal title="ABOUT">
        <ul>
            <li>Mission: VH VIII</li>
            <li>Date: October 10, 2021</li>
            <li>Location: The Wond'ry</li>
            <li>
                Details: Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Optio quae deleniti perspiciatis tempore porro. Officiis
                laboriosam quos consectetur sed reprehenderit consequuntur,
                placeat hic in! Iste, id facere? Dolore, eum quae!
            </li>
        </ul>
    </Modal>
</div>

<style>
    #about {
        background-color: #121212;
        max-width: 100vw;
        min-height: 100vh;
        padding: 10vh 10vw;
        box-sizing: border-box;
    }
    
    ul {
        margin-left: 5vw;
    }
</style>