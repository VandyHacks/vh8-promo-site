<script>
    import { navigate } from "svelte-routing";

    export let name;
    export let path = name;

    const handleClick = () => {
        navigate(`/${path}`, { replace: false });
    }
    
</script>

<button on:click={handleClick}>{name.toUpperCase()}</button>
