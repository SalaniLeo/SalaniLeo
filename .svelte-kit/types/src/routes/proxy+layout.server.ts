// @ts-nocheck
import type { LayoutServerLoad } from './$types';

export const load = async ({ url: { pathname } }: Parameters<LayoutServerLoad>[0]) => {
	return { pathname };
};