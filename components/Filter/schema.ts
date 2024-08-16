import * as z from 'zod';

const RelevanceEnum = z.enum(['relevance', 'latest']);
type RelevanceEnum = z.infer<typeof RelevanceEnum>;

export const filterSchema = z.object({
	relevance: RelevanceEnum,
	title: z.string(),
	fromYear: z.number(),
	fromMonth: z.number(),
	toYear: z.number(),
	toMonth: z.number(),
	author: z.array(z.string()),
});
