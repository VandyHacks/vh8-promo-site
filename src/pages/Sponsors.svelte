<script>
    import Layout from "../components/Layout.svelte";
    import Modal from "../components/Modal.svelte";
    import SponsorItem from "../components/SponsorItem.svelte";
    import { currentlyActive } from '../stores.js';
    currentlyActive.set("sponsors");
</script>

<Layout>
    <div id="sponsors">
        <Modal title="SPONSORS" special={true}>
            <div id="content">
                <div class="sponsors-row">
                    <SponsorItem image="assets/imc.png" factor="50%" />
                    <SponsorItem image="assets/asurion.png" factor="105%" />
                    <SponsorItem image="assets/capital-one.png" factor="50%" />
                </div>
                <div class="sponsors-row">
                    <SponsorItem image="assets/echo3d.jpg" factor="30%" />
                    <SponsorItem image="assets/hrt.png" factor="50%" />
                    <SponsorItem image="assets/l3harris.png" factor="50%" />
                </div>
            </div>
        </Modal>
    </div>
</Layout>

<style>
    #content {
        display: flex;
        flex-direction: column;
        overflow: auto;
        height: 46vh;
        gap: 1em;
    }
    .sponsors-row {
        display: flex;
        align-items: baseline;
    }
</style>