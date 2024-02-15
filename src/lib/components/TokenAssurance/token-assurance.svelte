<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(() => {
		//@ts-ignore
		const authenticated = JSON.parse(localStorage.getItem('admin-access-token'));
		if (authenticated !== undefined) {
			return;
		}

		goto('/');
	});
</script>
