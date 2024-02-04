<script lang="ts">
	import Button from '../ui/button/button.svelte';
	import * as Sheet from '$lib/components/ui/sheet';
</script>

<h2>Respuestas DEP</h2>

<Sheet.Root>
	<Sheet.Trigger>
		<Button>Ver Informes</Button>
	</Sheet.Trigger>
	<Sheet.Content>
		<Sheet.Header>
			<Sheet.Title>Respuetas DEP</Sheet.Title>
			<Sheet.Content>
				<ul>Aca va la lista de personas que hicieron su diagnostico</ul>
			</Sheet.Content>
		</Sheet.Header>
	</Sheet.Content>
</Sheet.Root>
