import { json, error } from '@sveltejs/kit';
import { prisma } from '$lib/database/client';

export async function GET() {
	try {
		const accessInfoTokens = await prisma.accessInfoToken.findMany();

		if (!accessInfoTokens || accessInfoTokens.length === 0) {
			return json({ msg: 'There are no surveys!' });
		}

		// Fetch users for each accessInfoToken concurrently
		const usersPromises = accessInfoTokens.map((token) => {
			return prisma.user.findUnique({
				where: {
					id: token.userId as string // Assuming the field name is userId
				}
			});
		});

		// Wait for all user data promises to resolve
		const users = await Promise.all(usersPromises);

		// Combine accessInfoTokens with their respective users
		const surveys = accessInfoTokens.map((token, index) => {
			return {
				...token,
				user: users[index] // Attach the user to each accessInfoToken
			};
		});

		return json(surveys);
	} catch (err) {
		return error(500, 'Internal Server Error');
	}
}
