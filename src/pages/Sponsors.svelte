<script>
    import Modal from "../components/Modal.svelte";
    import SponsorItem from "../components/SponsorItem.svelte";
</script>

<div id="sponsors">
    <Modal title="sponsors">
        <div id="content">
            <div class="sponsors-row">
                <SponsorItem big={false} image="https://via.placeholder.com/200x200" text="My name is Cat. I am a project manager in Capple. I specialized in search optimization, particularly in the field of cat food" />
                <SponsorItem big={true} image="https://via.placeholder.com/200x200" text="My name is Lion. I am a senior software engineer in Lion Valley. I don't know what I'm doing most of the time" />
                <SponsorItem big={false} image="https://via.placeholder.com/200x200" text="My name is dog. I am the CEO of Dogs Inc., a company which thrives to create a more sustainable earth for future generation of canines." />
            </div>
            <div class="sponsors-row">
                <SponsorItem big={false} image="https://via.placeholder.com/200x200" text="My name is Cat. I am a project manager in Capple. I specialized in search optimization, particularly in the field of cat food" />
                <SponsorItem big={true} image="https://via.placeholder.com/200x200" text="My name is Lion. I am a senior software engineer in Lion Valley. I don't know what I'm doing most of the time" />
                <SponsorItem big={false} image="https://via.placeholder.com/200x200" text="My name is dog. I am the CEO of Dogs Inc., a company which thrives to create a more sustainable earth for future generation of canines." />
            </div>
        </div>
    </Modal>
</div>

<style>
    #sponsors {
        background-color: #121212;
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
    }
</style>