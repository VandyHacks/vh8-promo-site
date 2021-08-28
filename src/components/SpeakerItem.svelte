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
        grid-template-columns: 1fr 3fr;
        grid-template-rows: 1fr;
        grid-template-areas: "pic text";
        padding-bottom: 5%;
        min-height: 50vh;
    }
    .pic {
        display: flex;
        grid-area: pic;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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
        width: 90%;
        padding: 2%;
        margin-bottom: -3%;
        flex-direction: column;
        justify-content: center;
        min-height: 30%;
        border: solid 1px white;
        border-radius: 10px;
        text-align: center;
    }
    .eventDesc {
        width: 80%;
        height: 90%;
        font-size: 0.8em;
        border: solid 1px white;
        border-radius: 10px;
        padding: 5%;
    }
</style>
