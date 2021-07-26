<script>
    import Logo from "../assets/vhlogo.svelte";
    import Button from '../components/Button.svelte';
    import FAQItem from '../components/FAQItem.svelte';
</script>

<div id="faq">
    <div class="modal">
        <div class="logo-container">
            <Logo width="120px" />
            <h1>FAQ</h1>
        </div>
        <ul id="list">
            <FAQItem question="Is this a virtual event?" answer="This is the answer" />
            <FAQItem question="Can non-Vandy students join?" answer="This is the answer" />
            <FAQItem question="Will there be food?" answer="Yes! We have partnered up with local catering services to provide you lunch and dinner! (No breakfast, though, you're on your own!)" />
            <FAQItem question="How many people can be on my team?" answer="This is the answer" />
            <FAQItem question="What are the prizes?" answer="This is the answer" />
            <FAQItem question="I don't know how to code. Are there any workshops?" answer="This is the answer" />
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
    #faq {
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