<script>
    import Modal from "../components/Modal.svelte";
    import Layout from "../components/Layout.svelte";
    import { currentlyActive } from '../stores.js';
    currentlyActive.set("about");
</script>

<Layout>
    <Modal title="ABOUT" let:hidden={hidden}>
        <ul>
            <li>Mission: VH VIII</li>
            <li>Date: October 10, 2021</li>
            <li>Location: Discord (non-Vanderbilt students) and the Wond'ry (Vanderbilt students)</li>
            <li>
                VandyHacks is Vanderbilt’s student-run hackathon, where participants from all over the world create innovative projects over the course of 36 hours. This year, our hackathon will be a hybrid event on October 8th-10th. Virtual and in-person hackers can come together to attend skill workshops, network with sponsors, and win cool prizes.
            </li>
        </ul>
    </Modal>
</Layout>

<style>
    ul {
        margin-left: 5vw;
    }
</style>