import { json, error } from '@sveltejs/kit';
import { prisma } from '$lib/database/client';
import { generarToken } from '$lib/utils';
/** @type {import('./$types').RequestHandler} */
export async function GET() {
	// TODO: Detect if Angelo is the request owner

	const token = await prisma.accessInfoToken.create({
		data: {
			token: generarToken()
		}
	});

	if (!token) {
		return error(400, 'Could not create token!');
	}

	return json(token);
}
