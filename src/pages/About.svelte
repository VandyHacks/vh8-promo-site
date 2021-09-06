<script>
    import Modal from "../components/Modal.svelte";
    import Layout from "../components/Layout.svelte";
    import { currentlyActive } from '../stores.js';
    currentlyActive.set("about");
</script>

<Layout hasActive={true}>
    <div id="about">
        <Modal title="ABOUT">
            <ul>
                <li>Mission: VH VIII</li>
                <li>Date: October 10, 2021</li>
                <li>Location: Discord (non-Vanderbilt students) and the Wond'ry (Vanderbilt students)</li>
                <li>
                    VandyHacks is Vanderbilt’s student-run hackathon, where participants from all over the world create innovative projects over the course of 36 hours. This year, our hackathon will be a hybrid event on October 8th-10th. Virtual and in-person hackers can come together to attend skill workshops, network with sponsors, and win cool prizes.
                </li>
            </ul>
        </Modal>
    </div>
</Layout>

<style>
    #about {
		background-color: transparent;
		z-index: 2;
        max-width: 100vw;
        min-height: 100vh;
        padding: 10vh 10vw;
        box-sizing: border-box;
    }

    ul {
        margin-left: 5vw;
    }
</style>