<script>
    import Modal from "../components/Modal.svelte";
    import Layout from "../components/Layout.svelte";
    import { currentlyActive } from '../stores.js';
    import SpeakerItem from "../components/SpeakerItem.svelte";
    currentlyActive.set("speakers");

    const speakers = {
        'Jeff Rothschild': {
            image: 'assets/jeff-rothschild.jpg',
            eventName: 'Jeff Rothschild — Entrepreneur and Investor',
            eventDesc: 'Jeff Rothschild was co-founder of the storage software company Veritas Software and the online gaming company Mpath Interactive. Jeff joined Facebook in 2005 as VP Infrastructure Enginereering and spent 10 years  focused on scalability, availability, and performance.<br /><br />Since leaving Facebook in 2015, Jeff has been working as an investor and mentor to entrepreneurs and is on the board of Pure Storage. Jeff also serves as Vice-Chair of the Board of Trust of Vanderbilt University, where he had earned his BA in Psychology and MS in Computer Science. Jeff’s philanthropic and impact investing activities include educational projects supporting disadvantaged students, a shoe company in Guatemala, an ophthalmologic hospital providing restorative eye surgery in western Kenya, and farmers cooperatives and credit unions, also in Kenya.',
        },
        'Anuradha Bajpai': {
            image: 'assets/anuradha-bajpai.jpg',
            eventName: 'Anuradha Bajpai — Strategic Cloud Engineer at Google',
            eventDesc: 'Anuradha has 17 years of experience architecting, designing and implementing cloud based scalable applications.<br /><br />Currently she is working with Google as Strategic Cloud Engineer. In the last 2 years since joining Google, she has received more than 15 awards in addition to a prestigious Google Stratosphere Award for her outstanding work and contributions at Google Cloud. At Google Cloud Professional services, Anuradha provides technical leadership on architecting and migrating business critical applications for major enterprise customers<br /><br />Anuradha has significant experience in global delivery and leading Software Engineers for multiple projects In her previous role as product owner architect at Siemens, she led the first delivery of the MindSphere Integrated Lake product. She has also co-founded a social networking startup that selected in an Accelerator Program at one of the tech hubs in Google Entrepreneurs network and secured an offer for further investment. She led start-up from idea to launch and scaled for users from more than 60 countries.',
        },
        'Kevin B Johnso': {
            image: 'assets/kevin-johnson.jpeg',
            eventName: 'Kevin B Johnson — Pediatrician and Informatician at Vanderbilt University School of Medicine',
            eventDesc: 'Kevin B. Johnson, MD, MS, FAAP, FACMI, FAMIA, FIAHSI is a Professor and Chair of Biomedical Informatics, with a joint appointment in the Department of Pediatrics at Vanderbilt University Medical Center. He received his MD from Johns Hopkins Hospital in Baltimore and his MS in Medical Informatics from Stanford University. In 1992 he returned to Johns Hopkins where he served as a Pediatric Chief Resident. He was a member of the faculty in both Pediatrics and Biomedical Information Sciences at Johns Hopkins until 2002, when he was recruited to Vanderbilt University. He also is a board-certified Pediatrician.<br /><br /> Dr. Johnson is an internationally respected developer and evaluator of clinical technology. His research interests have been related to developing and encouraging adoption of clinical information systems to improve patient safety and compliance with practice guidelines. He is widely known for his work with e-prescribing and computer documentation, as well as his recent creative endeavors to communicate science to audiences, including a feature length documentary about health information exchange.<br /><br /> He is the author of over 150 publications and has won dozens of awards over his Notably, he was elected to the American College of Medical Informatics in 2004, The Pediatric Society in 2010, the National Academy of Medicine (Institute of Medicine) in and the International Association of Health Science Informatics in 2021.',
        },
        'Quincy Larson': {
            image: 'assets/quincy-larson.png',
            eventName: 'Quincy Larson — Founder of the freeCodeCamp',
            eventDesc: 'Quincy is a teacher and school director. In his 30s, he learned to code and worked as a software engineer. He founded freeCodeCamp.org, a community of people around the world who learn to code together. As of 2021, half a million people use freeCodeCamp each day, and it has helped thousands of people successfully transition into software development careers.',
        },
    };
    let selectedSpeaker = Object.entries(speakers)[0][0];

    const changeSpeaker = (e) => {
        selectedSpeaker = e.target.innerHTML;
    }
</script>

<Layout>
    <Modal title="SPEAKERS">
        <div id="content">
            <div id="buttons">
                {#each Object.keys(speakers) as name, i}
                    <span class="speaker-button" on:click={changeSpeaker}>{name}</span> {#if i < Object.keys(speakers).length - 1}⋅{/if}
                {/each}
            </div>
            <SpeakerItem speakerName={selectedSpeaker} {...speakers[selectedSpeaker]} />
        </div>
    </Modal>
</Layout>

<style>
    #buttons {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: flex-start;
        overflow: visible;
    }

    .speaker-button {
        cursor: pointer;
        text-shadow: 0px 0px 15px #fabc05;
    }

    #content {
        display: flex;
        flex-direction: column;
        gap: 2vh;
        height: calc(50vh - 2em);
        overflow: auto;
        margin-block-end: 1em;
    }
</style>