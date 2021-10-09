<script>
    import Modal from "../components/Modal.svelte";
    import Timeline from "../components/Timeline.svelte";

    import Layout from "../components/Layout.svelte";
    import { currentlyActive } from '../stores.js';
    currentlyActive.set("schedule");
</script>

<Layout>
    <Modal title="SCHEDULE">
        <Timeline />
    </Modal>
</Layout>
