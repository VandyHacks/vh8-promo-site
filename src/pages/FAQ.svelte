<script>
    import FAQItem from '../components/FAQItem.svelte';
    import Layout from '../components/Layout.svelte';
    import Modal from "../components/Modal.svelte";
import Schedule from './Schedule.svelte';
</script>

<Layout>
    <div id="faq">
        <Modal title="FAQ">
            <div id="list-container">
                <ul id="list">
                    <FAQItem question="What is a hackathon?" answer="Hackathons are events where students from across the country come together for a weekend of innovation and creativity. Participants have 36 hours to create anything that shows off their creativity and passion for development. You may choose any platform, programming language, or format to show your stuff. You can even present a storyboard or idea; there’s no end to the possibilities!" />
                    <FAQItem question="How does registration work?" answer="Sign in, and submit your application at apply.vandyhacks.org! You'll also be able to check the status of your application on our registration portal." />
                    <FAQItem question="When is the registration deadline?" answer="Registration closes on October 1st at 12:00 pm CDT." />
                    <FAQItem question="What if I've never been to a hackathon?" answer="Not to worry! A few days before the event, you’ll receive an email with a link to our hacker guide, which will contain all the information you need to make the most out of your weekend. During the event, the VandyHacks Team will be around to help answer any questions. As always, feel free to email us at info@vandyhacks.org, or reach out on Discord." />
                    <FAQItem question="What do I need?" answer="Some kind of device you can write code on and an internet connection!" />
                    <FAQItem question="How are teams formed? Do I need a team?" answer="Teams are formed in the #team-matching channel on Discord where you can find people that share interests, and get building! We'll also provide a virtual space to meet teams. However, teams are not required, so feel free to work individually." />
                    <FAQItem question="Will there be other activities besides hacking?" answer="Of course! We'll have workshops you can learn from, sponsored events you can network at, virtual game nights where you can meet other hackers, and so much more! We will have the complete schedule on our website soon!" />
                    <FAQItem question="Can I submit my older projects?" answer="You are free to work on any project you like; however, we require that all Devpost submissions be projects that were started and made during our hackathon and uniquely for VandyHacks VIII." />
                    <FAQItem question="Can teams be a mix of virtual and in-person hackers?" answer="Yes!" />
                    <FAQItem question="Who can participate in-person?" answer="Due to Vanderbilt University's COVID-19 protocols and regulations, only Vanderbilt students can attend VandyHacks VIII in-person. We will make sure that virtual hackers still have a great experience, though! All project submission and judging will be held online to ensure fairness, and mini events will have online equivalents." />
                    <FAQItem question="What does a virtual hackathon mean?" answer="An entirely remote hackathon encompasses everything that an in-person hackathon has, except now you can do it from the comfort of your own bedroom! This includes a Discord server to meet other hackers, pre-recorded workshops, virtual game nights, and a live stream of the closing ceremony." />
                    <FAQItem question="Where can I find the Discord invite?" answer="Once we've approved your application, we'll send you an email with the invitation to the Discord server. The invitation may end up in your spam folder - if it's still not there, feel free to send us an email at info@vandyhacks.org!" />
                    <FAQItem question="Who can apply?" answer="Anyone who is 18 years or older and is currently enrolled in college or university with a valid student ID. This means both international and non-Vandy students are welcome, as well!" />
                    <FAQItem question="I have no coding experience. Can I still attend?" answer="Even more reason for you to come! We will be hosting beginners' workshops for you to get started, and our mentors can help you out along the way. We greatly encourage new hackers to attend, and no prior experience is necessary!" />
                    <FAQItem question="I'm currently residing outside of the U.S. Can I still attend?" answer="Yes, you can still attend! Due to shipping restrictions, if you reside outside the U.S., we will be unable to send you any swag items or physical prizes. However, other than that, you are fully able to participate in all of the hacking and the other events we will be holding!" />
                    <FAQItem question="How do I submit a project?" answer="This year, we'll be submitting projects on Devpost. More detailed instructions on project submission will be featured in our hacker guide." />
                    <FAQItem question="Am I eligible to win a prize?" answer="If you're currently living in the U.S. and study at a university in the U.S., you are eligible to win and receive a prize. If you're currently living outside the U.S. but study at a university inside the U.S., you are eligible to win but ineligible to receive a prize. If you currently live outside the U.S. and study at a university outside the U.S., you are ineligible to win or receive a prize, but you are still able to participate in all other hackathon festivities." />
                    <FAQItem question="What if I'm interested in being a mentor?" answer="Send us an email at info@vandyhacks.org!" />
                    <FAQItem question="I have more questions!" answer="Send us an email at info@vandyhacks.org! We'll be happy to answer!" />
                </ul>
            </div>
        </Modal>
    </div>
</Layout>

<style>
    #faq {
		background-color: transparent;
		z-index: 2;
        max-width: 80vw;
        min-height: 80vh;
        padding: 10vh 10vw;
    }

    #list-container {
        max-height: 50vh;
        overflow: scroll;
    }

    #list {
        padding-left: 5vw;
    }
</style>