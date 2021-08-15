<script>
    import Modal from "../components/Modal.svelte";
    import SpeakerItem from "../components/SpeakerItem.svelte";
</script>

<div id="speakers">
    <Modal title="speakers">
        <div id="content">
            <SpeakerItem speakerName="Cat Brown" image="https://via.placeholder.com/200x200" eventName="Navigating the Tech Workplace<br />(Oct. 10 @8 P.M.)" eventDesc="Want to know what it is really like to be a cat in a big tech company? Join Ms. Brown, a senior project manager in Capple, for an insightful conversation on this very topic." />
            <SpeakerItem speakerName="Dog White" image="https://via.placeholder.com/200x200" eventName="Another Event" eventDesc="Woof woof." />
            <SpeakerItem speakerName="Dog White" image="https://via.placeholder.com/200x200" eventName="Another Event" eventDesc="Woof woof." />
        </div>
    </Modal>
</div>

<style>
    #speakers {
        background-color: #121212;
        max-width: 100vw;
        min-height: 100vh;
        padding: 10vh 10vw;
    }
    #content {
        overflow-y: auto;
        height: 50vh;
    }
</style>