<script>
	import Button from '../ui/button/button.svelte';

	function goBack() {
		window.history.back();
	}
</script>

<Button class="m-8 fixed" on:click={goBack}>&larr;</Button>
