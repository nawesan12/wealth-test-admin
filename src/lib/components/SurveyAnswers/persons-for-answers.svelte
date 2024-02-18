<script lang="ts">
	export let persons: any[];
</script>

{#each persons as person}
	<li>{person.name}</li>
{/each}
