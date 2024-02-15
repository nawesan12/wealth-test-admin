<script lang="ts">
	import ServiceCard from '@/components/ServiceCard/service-card.svelte';
	import ServiceTitle from '@/components/ServiceCard/service-title.svelte';
</script>

<main class="flex flex-col items-center justify-center gap-8 mx-auto w-full h-full">
	<section class="grid grid-cols-1 gap-4 max-w-xl lg:grid-cols-3 lg:gap-8">
		<ServiceCard>
			<ServiceTitle>DEP</ServiceTitle>
			<a href="/admin/dep">Acceder</a>
		</ServiceCard>
	</section>
</main>
