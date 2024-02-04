<script lang="ts">
	import { toast } from 'svelte-sonner';
	import Button from '../ui/button/button.svelte';

	$: token = '';

	async function createToken() {
		try {
			const res = await fetch('/api/create-access-token-for-dep');

			const data = await res.json();
			console.log(data);
			token = data.token;
			toast.success('Token creado!');
		} catch (error) {
			toast.error('No se pudo crear el token!');
			console.log(error);
		}
	}
</script>

<section>
	<h2>Crear token de acceso</h2>
	<Button on:click={createToken}>Obtener</Button>
	<p>{token}</p>
</section>
