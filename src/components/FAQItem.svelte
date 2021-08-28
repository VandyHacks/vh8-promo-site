<script>
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

<div on:click={toggle} class="noselect">
    <li style="list-style-image: url('/assets/{icon}.svg');" class="outer-list">
        {question}
        {#if expanded}
            <ul class="inner-list">
                <li class="answer">{answer}</li>
            </ul>
        {/if}
    </li>
</div>

<style>
    .outer-list {
        margin-top: 1.25rem;
    }

    .inner-list {
        list-style: none inside;
        padding-left: 1em;
        font-size: 0.7em;
    }

    .answer {
        padding: 1.25rem 1.25rem 0 1.25rem;
    }

    .noselect {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
</style>
