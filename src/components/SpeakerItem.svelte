<script>
    export let speakerName;
    export let image;
    export let eventName;
    export let eventDesc;
</script>

<div class="container">
    <div class="imageContainer">
        <img class="image" src={image} />
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
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .image {
        object-fit: contain;
        height: 29vh;
        border-radius: 10px;
    }
    .text {
        flex-grow: 3;
        flex-basis: 0;
        display: flex;
        flex-direction: column;
        gap: 0.5em;
    }
    .eventName {
        font-size: 1.2em;
    }
    .eventDesc {
        font-size: 0.6em;
    }
</style>
