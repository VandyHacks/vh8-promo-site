<script>
    export let speakerName;
    export let image;
    export let eventName;
    export let eventDesc;
</script>

<div class="container">
    <div class="imageContainer">
        <img class="image" src={image} alt={speakerName} />
    </div>
    <div class="text">
        <div class="eventName">{@html eventName}</div>
        <div class="eventDesc">{@html eventDesc}</div>
    </div>
</div>

<style>
    .container {
        display: flex;
        flex-direction: row;
    }
    .imageContainer {
        flex-grow: 1;
        flex-basis: 0;
    }
    .image {
        object-fit: contain;
        height: 25vh;
    }
    .text {
        flex-grow: 3;
        flex-basis: 0;
        display: flex;
        flex-direction: column;
        gap: 0.5em;
    }
    .eventName {
        font-size: 1em;
    }
    .eventDesc {
        font-size: 0.5em;
    }
</style>
