<script>
    export let image;
    export let factor;
    export let url;
</script>

<div class="content">
    <img class="image" style="width: {factor}" src="{image}" alt="placeholder" on:click={window.open(url, '_blank')}/>
</div>

<style>
    .content {
        display: flex;
        width: 100%;
        justify-content: center;
    }
    .image {
        border-radius: 10px;
        cursor: pointer;
    }
</style>
