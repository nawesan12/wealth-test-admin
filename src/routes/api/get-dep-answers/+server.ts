import { json, error } from '@sveltejs/kit';
import { prisma } from '$lib/database/client';
/** @type {import('./$types').RequestHandler} */
export async function GET() {
	// TODO: Detect if Angelo is the request owner

	const surveys = await prisma.business.findMany({});

	if (!surveys) {
		return error(400, 'We could not read the surveys from database!');
	}

	if (surveys.length === 0) {
		return json({ msg: 'There are not surveys!' });
	}

	return json(surveys);
}
