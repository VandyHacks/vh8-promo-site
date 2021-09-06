<script>
    import FAQItem from '../components/FAQItem.svelte';
    import Layout from '../components/Layout.svelte';
    import Modal from "../components/Modal.svelte";
</script>

<Layout>
    <div id="faq">
        <Modal title="FAQ">
            <div id="list-container">
                <ul id="list">
                    <FAQItem question="Can teams be a mix of virtual and in-person hackers?" answer="Yes!" />
                    <FAQItem question="Who can participate in-person?" answer="Due to Vanderbilt University's COVID-19 protocols and regulations, only Vanderbilt students can attend VandyHacks VIII in-person. We will make sure that virtual hackers still have a great experience, though! All project submission and judging will be held online to ensure fairness, and mini events will have online equivalents." />
                </ul>
            </div>
        </Modal>
    </div>
</Layout>

<style>
    #faq {
		background-color: transparent;
		z-index: 2;
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