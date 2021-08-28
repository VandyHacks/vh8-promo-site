<script>
    import FAQItem from '../components/FAQItem.svelte';
    import Modal from "../components/Modal.svelte";
</script>

<div id="faq">
    <Modal title="FAQ">
        <div id="list-container">
            <ul id="list">
                <FAQItem question="Is this a virtual event?" answer="This is the answer" />
                <FAQItem question="Can non-Vandy students join?" answer="This is the answer" />
                <FAQItem question="Will there be food?" answer="Yes! We have partnered up with local catering services to provide you lunch and dinner! (No breakfast, though, you're on your own!)" />
                <FAQItem question="How many people can be on my team?" answer="This is the answer" />
                <FAQItem question="What are the prizes?" answer="This is the answer" />
                <FAQItem question="I don't know how to code. Are there any workshops?" answer="This is the answer" />
            </ul>
        </div>
    </Modal>
</div>

<style>
    #faq {
        background-color: #121212;
        max-width: 100vw;
        min-height: 100vh;
        padding: 10vh 10vw;
    }

    #list-container {
        overflow: auto;
    }

    #list {
        padding-left: 5vw;
    }
</style>