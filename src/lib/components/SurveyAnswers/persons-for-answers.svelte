<script lang="ts">
	import * as Table from '$lib/components/ui/table';
	export let persons: any[];
</script>

<Table.Root>
	<Table.Caption>Emperador Financiero - {new Date().getFullYear()}</Table.Caption>
	<Table.Header>
		<Table.Row>
			<Table.Head>Nombre</Table.Head>
			<Table.Head>Token</Table.Head>
			<Table.Head>Fecha</Table.Head>
		</Table.Row>
	</Table.Header>
	<Table.Body>
		{#each persons as person}
			<Table.Row>
				<Table.Cell>{person.user.name}</Table.Cell>
				<Table.Cell
					><a target="_blank" href={`https://dep.emperadorfinanciero.com/${person.token}`}
						>{person.token}</a
					></Table.Cell
				>
				<Table.Cell class="text-right">-</Table.Cell>
			</Table.Row>
		{/each}
	</Table.Body>
</Table.Root>
