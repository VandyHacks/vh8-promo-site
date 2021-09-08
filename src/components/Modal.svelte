<script>
    import Logo from "../assets/vhlogo.svelte";
    import Button from '../components/Button.svelte';
	import { isContentHidden } from '../stores.js';
    export let title;
</script>

<div class="modal" class:hidden={$isContentHidden}>
    <div class="logo-container">
        <Logo width="5vw" height="auto" />
        <h1>{title}</h1>
    </div>
    <slot></slot>
    <div class="return-button">
        <Button id="return-button" planetButton={false} name="return" path="" />
    </div>
</div>

<style>
    .modal {
        background: rgba(0, 0, 0, 0.5);
        border-radius: 20px;
        color: #fff;
        padding: 1vh 3vw;
        word-wrap: break-word;
        font-size: 1.75rem;
	    box-sizing: border-box;
        margin: 0;
        position: relative;
        z-index: 4;
        min-width: 80vw;
        max-height: 100%;
        /* overflow: scroll; */
    }
    .logo-container {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        gap: 1vw;
        width: 20vw;
        padding: 0;
    }
    h1 {
        font-size: 3rem;
        font-weight: 500;
    }
    .return-button {
        display: flex;
        justify-content: flex-end;
    }
</style>