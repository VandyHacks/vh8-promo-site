<script>
    import { fly } from 'svelte/transition';
    import Logo from "../assets/vhlogo.svelte";
    import Button from '../components/Button.svelte';
	import { isContentHidden } from '../stores.js';
    export let title;
    export let special;
</script>

<div class="modal" class:special class:hidden={$isContentHidden} in:fly="{{ y: -1000, duration: 500 }}">
    <div class="logo-container">
        <Logo width="5vw" height="auto" />
        <h1 class:special>{title}</h1>
    </div>
    <slot></slot>
    <div class="return-button">
        <Button id="return-button" planetButton={false} name="return" path="" />
    </div>
</div>

<style>
    h1.special {
        color: rgba(0, 0, 0, 1);
    }
    div.special {
        background: rgba(255, 255, 255, 0.5) !important;
    }
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
        height: 75vh;
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