<script lang="ts">
	import ServiceCard from '@/components/ServiceCard/service-card.svelte';
	import ServiceTitle from '@/components/ServiceCard/service-title.svelte';
	import TokenAssurance from '@/components/TokenAssurance/token-assurance.svelte';
	import Button from '@/components/ui/button/button.svelte';
</script>

<TokenAssurance />
<main class="flex flex-col items-center justify-center gap-8 py-8 mx-auto w-full h-full">
	<section class="grid grid-cols-1 gap-4 max-w-xl lg:grid-cols-3 lg:gap-8">
		<ServiceCard>
			<ServiceTitle>Admin DEP</ServiceTitle>
			<Button variant="link" href="/admin/dep">Acceder</Button>
		</ServiceCard>
	</section>
</main>
