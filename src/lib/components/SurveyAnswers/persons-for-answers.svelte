<script lang="ts">
	export let persons: any[];
</script>

{#each persons as person}
	<li>
		<a target="_blank" href={`https://dep.emperadorfinanciero.com/${person.token}`}>
			{person.user.name} - {person.token}
		</a>
	</li>
{/each}
