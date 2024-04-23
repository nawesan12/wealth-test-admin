<script lang="ts">
	import Button from '../ui/button/button.svelte';
	import * as AlertDialog from '$lib/components/ui/alert-dialog';
	import { onMount } from 'svelte';
	import { getPersonsForAnswers } from '@/utils';
	import PersonsForAnswers from './persons-for-answers.svelte';

	let persons: any[] = [];

	console.log(persons);

	onMount(() => {
		getPersonsForAnswers().then((data) => {
			persons = data;
		});
	});
</script>

<section class="space-y-4">
	<h2 class="font-semibold text-xl">Respuestas DEP</h2>

	<AlertDialog.Root>
		<AlertDialog.Trigger><Button>Ver Informes</Button></AlertDialog.Trigger>
		<AlertDialog.Content>
			<AlertDialog.Header>
				<AlertDialog.Title>Respuestas DEP</AlertDialog.Title>
				<AlertDialog.Description>
					{#if persons.length === 0}
						'Cargando...'
					{:else}
						<PersonsForAnswers {persons} />
					{/if}
				</AlertDialog.Description>
			</AlertDialog.Header>
			<AlertDialog.Footer>
				<AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
				<AlertDialog.Action>Continue</AlertDialog.Action>
			</AlertDialog.Footer>
		</AlertDialog.Content>
	</AlertDialog.Root>
</section>
