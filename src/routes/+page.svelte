<script lang="ts">
	import { goto } from '$app/navigation';

	let user: string;
	let pass: string;

	function access(e: any) {
		e.preventDefault();

		if ('angelonisi' != user) {
			alert('Usuario incorrecto!');
			return;
		}

		if ('abundancia' != pass) {
			alert('Clave incorrecta!');
			return;
		}

		localStorage.setItem('admin-access-token', 'angelo');
		setTimeout(() => goto('/admin'), 0);
	}
</script>

<main class="grid h-screen place-items-center franklin">
	<div class="px-4 bg-white rounded-lg py-8 max-w-xl w-screen sm:px-6 lg:px-8">
		<div class="mx-auto max-w-lg">
			<h1 class="text-center text-2xl font-bold text-black sm:text-3xl">Emperador Financiero</h1>

			<p class="mx-auto mt-4 max-w-md text-center text-gray-500">Frase empresarial random</p>

			<form on:submit={access} class="mb-0 mt-6 space-y-4 rounded-lg p-4 sm:p-6 lg:p-8">
				<p class="text-center text-lg font-medium">Administrador</p>

				<div>
					<label for="email" class="sr-only">Email</label>

					<div class="relative">
						<input
							type="text"
							class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm"
							placeholder="Nombre de usuario"
							bind:value={user}
						/>

						<span class="absolute inset-y-0 end-0 grid place-content-center px-4">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="size-4 text-gray-400"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
								/>
							</svg>
						</span>
					</div>
				</div>

				<div>
					<label for="password" class="sr-only">Contraseña</label>

					<div class="relative">
						<input
							type="password"
							class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm"
							placeholder="Contraseña"
							bind:value={pass}
						/>

						<span class="absolute inset-y-0 end-0 grid place-content-center px-4">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="size-4 text-gray-400"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
								/>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
								/>
							</svg>
						</span>
					</div>
				</div>

				<button
					type="submit"
					class="block w-full rounded-lg bg-blue-600 hover:bg-[#09f] px-5 py-3 text-sm font-medium text-white"
				>
					Acceder
				</button>
			</form>
		</div>
	</div>
</main>
