export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11')
];

export const server_loads = [];

export const dictionary = {
		"/": [3],
		"/selected/catfeed": [4,[2]],
		"/selected/hrlitto": [5,[2]],
		"/selected/kostprobe": [6,[2]],
		"/selected/mirroredspaces": [7,[2]],
		"/selected/newreality": [8,[2]],
		"/selected/realmirror": [9,[2]],
		"/selected/type/iii": [10,[2]],
		"/selected/vorspiel": [11,[2]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';