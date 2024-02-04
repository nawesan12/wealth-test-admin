<script>
	import Button from '../ui/button/button.svelte';

	function goBack() {
		window.history.back();
	}
</script>

<Button on:click={goBack}>&larr;</Button>
