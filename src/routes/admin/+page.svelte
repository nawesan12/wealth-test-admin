<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import ServiceCard from '@/components/ServiceCard/service-card.svelte';
	import ServiceTitle from '@/components/ServiceCard/service-title.svelte';
</script>

<main class="flex flex-col items-center justify-center gap-8 mx-auto w-screen h-screen">
	<section class="grid grid-cols-1 gap-4 max-w-xl lg:grid-cols-3 lg:gap-8">
		<ServiceCard>
			<ServiceTitle>DEP</ServiceTitle>
			<Button variant="link" href="/admin/dep">Acceder</Button>
		</ServiceCard>
	</section>
</main>
