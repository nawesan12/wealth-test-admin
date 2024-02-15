import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { cubicOut } from 'svelte/easing';
import type { TransitionConfig } from 'svelte/transition';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

type FlyAndScaleParams = {
	y?: number;
	x?: number;
	start?: number;
	duration?: number;
};

export const flyAndScale = (
	node: Element,
	params: FlyAndScaleParams = { y: -8, x: 0, start: 0.95, duration: 150 }
): TransitionConfig => {
	const style = getComputedStyle(node);
	const transform = style.transform === 'none' ? '' : style.transform;

	const scaleConversion = (valueA: number, scaleA: [number, number], scaleB: [number, number]) => {
		const [minA, maxA] = scaleA;
		const [minB, maxB] = scaleB;

		const percentage = (valueA - minA) / (maxA - minA);
		const valueB = percentage * (maxB - minB) + minB;

		return valueB;
	};

	const styleToString = (style: Record<string, number | string | undefined>): string => {
		return Object.keys(style).reduce((str, key) => {
			if (style[key] === undefined) return str;
			return str + `${key}:${style[key]};`;
		}, '');
	};

	return {
		duration: params.duration ?? 200,
		delay: 0,
		css: (t) => {
			const y = scaleConversion(t, [0, 1], [params.y ?? 5, 0]);
			const x = scaleConversion(t, [0, 1], [params.x ?? 0, 0]);
			const scale = scaleConversion(t, [0, 1], [params.start ?? 0.95, 1]);

			return styleToString({
				transform: `${transform} translate3d(${x}px, ${y}px, 0) scale(${scale})`,
				opacity: t
			});
		},
		easing: cubicOut
	};
};

export const id = () => {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
		const r = (Math.random() * 16) | 0,
			v = c == 'x' ? r : (r & 0x3) | 0x8;
		return v.toString(16);
	});
};

export function generarToken() {
	const paises = [
		'Argentina',
		'Brasil',
		'Chile',
		'Francia',
		'Italia',
		'Japon',
		'Mexico',
		'Peru',
		'Rusia',
		'Suecia',
		'Paris',
		'Londres',
		'Bangkok',
		'Dubai',
		'Estambul',
		'NuevaYork',
		'Roma',
		'Pekin',
		'Tokio',
		'CiudaddeMexico'
	];
	const elementos = [
		'Diamante',
		'Oro',
		'Platino',
		'Rubi',
		'Esmeralda',
		'Zafiro',
		'Amatista',
		'Topacio',
		'Opalo',
		'Cuarzo'
	];
	const desarrolloPersonal = [
		'Abundancia',
		'Superacion',
		'Prosperidad',
		'Felicidad',
		'Exito',
		'Gratitud',
		'Consciencia',
		'Realizacion',
		'Empoderamiento',
		'Transformacion'
	];

	const formatos = [
		() =>
			`${paises[Math.floor(Math.random() * paises.length)]}${elementos[Math.floor(Math.random() * elementos.length)]}${desarrolloPersonal[Math.floor(Math.random() * desarrolloPersonal.length)]}`,
		() =>
			`${paises[Math.floor(Math.random() * paises.length)]}${elementos[Math.floor(Math.random() * elementos.length)]}`,
		() =>
			`${elementos[Math.floor(Math.random() * elementos.length)]}${desarrolloPersonal[Math.floor(Math.random() * desarrolloPersonal.length)]}`,
		() =>
			`${desarrolloPersonal[Math.floor(Math.random() * desarrolloPersonal.length)]}${paises[Math.floor(Math.random() * paises.length)]}`,
		() =>
			`${desarrolloPersonal[Math.floor(Math.random() * desarrolloPersonal.length)]}${elementos[Math.floor(Math.random() * elementos.length)]}`
	];

	// Seleccionar un formato aleatorio
	const formatoAleatorio = formatos[Math.floor(Math.random() * formatos.length)];

	return formatoAleatorio();
}
