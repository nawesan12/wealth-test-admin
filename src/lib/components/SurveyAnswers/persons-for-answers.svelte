<script lang="ts">
	export let persons: any[];
	import * as Table from '$lib/components/ui/table';
</script>

<Table.Root>
	<Table.Caption>A list of your recent invoices.</Table.Caption>
	<Table.Header>
		<Table.Row>
			<Table.Head class="w-[100px]">Nombre</Table.Head>
			<Table.Head>Token</Table.Head>
			<Table.Head>Fecha</Table.Head>
		</Table.Row>
	</Table.Header>
	<Table.Body>
		{#each persons as person}
			<Table.Row>
				<Table.Cell class="font-medium">INV001</Table.Cell>
				<Table.Cell
					><a target="_blank" href={`https://dep.emperadorfinanciero.com/${person.token}`}
						>{person.token}</a
					></Table.Cell
				>
				<Table.Cell>{person.user.name}</Table.Cell>
				<Table.Cell class="text-right">-</Table.Cell>
			</Table.Row>
		{/each}
	</Table.Body>
</Table.Root>
