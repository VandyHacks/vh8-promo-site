<script>
    export let image;
    export let factor;
</script>

<div class="content">
    <img class="image" style="width: {factor}" src="{image}" alt="placeholder" />
</div>

<style>
    .content {
        display: flex;
        width: 100%;
        justify-content: center;
    }
    .image {
        border-radius: 10px;
    }
</style>
