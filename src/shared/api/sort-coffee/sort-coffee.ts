import { client } from '../client';
import type { SortCoffee } from './types.d.ts';

export const getSortCoffee = async (): Promise<SortCoffee> => {
	return (await client.get('https://random-data-api.com/api/coffee/random_coffee')).data;
};
