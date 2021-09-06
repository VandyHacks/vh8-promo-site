<script>
    import Layout from "../components/Layout.svelte";
    import Modal from "../components/Modal.svelte";
    import SponsorItem from "../components/SponsorItem.svelte";
    import { currentlyActive } from '../stores.js';
    currentlyActive.set("sponsors");
</script>

<Layout>
    <div id="sponsors">
        <Modal title="SPONSORS">
            <div id="content">
                <!--<div class="sponsors-row">
                    <SponsorItem big={false} image="https://via.placeholder.com/200x200" text="My name is Cat. I am a project manager in Capple. I specialized in search optimization, particularly in the field of cat food" />
                    <SponsorItem big image="https://via.placeholder.com/200x200" text="My name is Lion. I am a senior software engineer in Lion Valley. I don't know what I'm doing most of the time" />
                    <SponsorItem big={false} image="https://via.placeholder.com/200x200" text="My name is dog. I am the CEO of Dogs Inc., a company which thrives to create a more sustainable earth for future generation of canines." />
                </div>
                <div class="sponsors-row">
                    <SponsorItem big={false} image="https://via.placeholder.com/200x200" text="My name is Cat. I am a project manager in Capple. I specialized in search optimization, particularly in the field of cat food" />
                    <SponsorItem big image="https://via.placeholder.com/200x200" text="My name is Lion. I am a senior software engineer in Lion Valley. I don't know what I'm doing most of the time" />
                    <SponsorItem big={false} image="https://via.placeholder.com/200x200" text="My name is dog. I am the CEO of Dogs Inc., a company which thrives to create a more sustainable earth for future generation of canines." />
                </div>-->
                TBD
            </div>
        </Modal>
    </div>
</Layout>

<style>
    #sponsors {
		background-color: transparent;
		z-index: 2;
        max-width: 100vw;
        min-height: 100vh;
        padding: 10vh 10vw;
    }
    #content {
        display: flex;
        flex-direction: column;
        overflow: auto;
        height: 50vh;
    }
    .sponsors-row {
        display: flex;
        align-items: baseline;
    }
</style>