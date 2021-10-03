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
        width: 90%;
    }
    .text {
        flex-grow: 1;
        flex-basis: 0;
        display: flex;
        flex-direction: column;
        gap: 0.7em;
    }
    .eventName {
        font-size: 1.5em;
    }
    .eventDesc {
        font-size: 0.7em;
    }
</style>
