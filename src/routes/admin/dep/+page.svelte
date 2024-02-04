<script>
	import AccessTokenCreator from '$lib/components/AccesTokenCreator/access-token-creator.svelte';
	import SurveyAnswersTriggerer from '$lib/components/SurveyAnswers/survey-answers-triggerer.svelte';
	import ServiceCard from '@/components/ServiceCard/service-card.svelte';
</script>

<main class="flex flex-col items-center justify-center gap-8 mx-auto w-screen h-screen">
	<section class="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
		<ServiceCard>
			<AccessTokenCreator />
		</ServiceCard>
		<ServiceCard>
			<SurveyAnswersTriggerer />
		</ServiceCard>
	</section>
</main>
