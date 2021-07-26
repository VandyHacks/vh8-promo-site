<script>
    import Logo from "../assets/vhlogo.svelte";
    import Button from '../components/Button.svelte';

    export let question;
    export let answer;
    
    let expanded = false;
    let icon = "rightTriangle";

    function toggle() {
        expanded = !expanded;
        if (expanded) {
            icon = "downTriangle";
        } else {
            icon = "rightTriangle";
        }
    }
</script>

<div on:click={toggle}>
    <li style="list-style-image: url('/assets/{icon}.svg');">
        {question}
        {#if expanded}
            <ul class="inner-list">
                <li>{answer}</li>
            </ul>
        {/if}
    </li>
</div>

<style>
    .inner-list {
        list-style: none inside;
        padding-left: 1em;
        font-size: 0.7em;
    }
</style>
