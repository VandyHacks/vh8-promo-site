<script>
    import { navigate } from "svelte-routing";

    export let name;

    const handleClick = () => {
        navigate(`/${name}`, { replace: false });
    }
    
</script>

<button on:click={handleClick}>{name.toUpperCase()}</button>

<style>
    button {
        background-color: black;
        color: white;
        border: none;
        border-radius: 12px;
    }
    button:hover {
        cursor: pointer;
        background-color: #060606;
    }
</style>