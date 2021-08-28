<script>
    export let speakerName;
    export let image;
    export let eventName;
    export let eventDesc;
</script>

<div class="container">
    <div class="pic">
        <img class="image" src="{image}" alt="placeholder" />
        <div>{speakerName}</div>
    </div>
    <div class="text">
        <div class="eventName">{@html eventName}</div>
        <div class="eventDesc">{eventDesc}</div>
    </div>
</div>

<style>
    .container {
        display: grid;
        grid-template-columns: 1fr 2.5fr;
        grid-template-rows: 1fr;
        grid-template-areas: "pic text";
        min-height: 20vh;
        align-items: center;
    }
    .pic {
        display: flex;
        grid-area: pic;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 5vh 0;
        box-sizing: border-box;
    }
    .image {
        width: 50%;
        margin-bottom: 3%;
        border-radius: 10px;
    }
    .text {
        display: flex;
        flex-direction: column;
        align-items: center;
        grid-area: text;
    }
    .eventName {
        display: flex;
        max-width: 90%;
        padding: 1vh 5vw;
        margin-bottom: -3%;
        flex-direction: column;
        justify-content: center;
        max-height: 30%;
        border-radius: 10px;
        text-align: center;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 2;
    }
    .eventDesc {
        width: 60%;
        min-height: 50%;
        max-height: 90%;
        font-size: 0.7em;
        border-radius: 10px;
        padding: 5%;
        background-color: rgba(100, 100, 100, 0.75);
    }
</style>
