<script>
    export let big;
    export let image;
    export let text;
</script>

<div class="content {big ? 'big' : 'small'}">
    <div class="image-wrapper">
        <img class="image" src="{image}" alt="placeholder" />
    </div>
    <div class="text-wrapper">
        <div class="text">{text}</div>
    </div>
</div>

<style>
    .content {
        width: 100%;
    }
    .big {
        flex: 5;
    }
    .small {
        flex: 4;
    }
    .image-wrapper {
        display: flex;
        justify-content: center;
        margin-bottom: -15%;
    }
    .image {
        border: solid 1px white;
        border-radius: 10px;
        margin: 0 5% 0 5%;
        width: 50%;
    }
    .text-wrapper {
        display: flex;
        justify-content: center;
        height: 80%;
    }
    .text {
        border: solid 1px white;
        border-radius: 10px;
        margin: 5%;
        font-size: 0.7em;
        width: 60%;
        padding: 15% 5% 15% 5%;
        text-align: center;
    }
</style>
