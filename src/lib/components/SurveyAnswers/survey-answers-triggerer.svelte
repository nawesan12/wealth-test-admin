<script lang="ts">
	import Button from '../ui/button/button.svelte';
	import * as Sheet from '$lib/components/ui/sheet';
	import { onMount } from 'svelte';
	import { getPersonsForAnswers } from '@/utils';
	import PersonsForAnswers from './persons-for-answers.svelte';

	let persons: any[] = [];

	onMount(() => {
		getPersonsForAnswers().then((data) => {
			persons = data;
		});
	});
</script>

<section class="space-y-4">
	<h2 class="font-semibold text-xl">Respuestas DEP</h2>

	<Sheet.Root>
		<Sheet.Trigger>
			<Button>Ver Informes</Button>
		</Sheet.Trigger>
		<Sheet.Content>
			<Sheet.Header>
				<Sheet.Title>Respuetas DEP</Sheet.Title>
				<Sheet.Content>
					{#if persons.length === 0}
						'Cargando...'
					{:else}
						<PersonsForAnswers {persons} />
					{/if}
				</Sheet.Content>
			</Sheet.Header>
		</Sheet.Content>
	</Sheet.Root>
</section>
