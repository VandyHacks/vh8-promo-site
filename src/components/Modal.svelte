<script>
    import Logo from "../assets/vhlogo.svelte";
    import Button from '../components/Button.svelte';

    export let title;
</script>

<div class="modal">
    <div class="logo-container">
        <Logo width="5vw" height="auto" />
        <h1>{title}</h1>
    </div>
    <slot></slot>
    <div class="return-button">
        <Button planetButton={false} name="return" path="" />
    </div>
</div>

<style>
    .modal {
        background: rgba(0, 0, 0, 0.25);
        border-radius: 20px;
        color: #fff;
        padding: 1vh 5vw;
        word-wrap: break-word;
        font-size: 1.75rem;
	    box-sizing: border-box;
        margin: 0;
        position: relative;
        z-index: 4;
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