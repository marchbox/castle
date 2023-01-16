const WIKIPEDIA_URL_PREFIX = 'https://en.wikipedia.org/wiki/';

export default {
	name: 'page',
	type: 'document',
	title: 'Page',
	fields: [
		{
			name: 'title',
			type: 'string',
			title: 'Title',
			validation: Rule => Rule.required(),
		},
		{
			name: 'slug',
			type: 'slug',
			title: 'Slug',
			validation: Rule => Rule.required(),
			options: {
				source: 'title',
			},
		},
		{
			name: 'image',
			type: 'image',
			title: 'Image',
			description: 'A portrait or a logo',
		},
		{
			name: 'category',
			type: 'reference',
			title: 'Category',
			validation: Rule => Rule.required(),
			to: [{type: 'category'}],
		},
		{
			name: 'facts',
			type: 'array',
			title: 'Facts',
			of: [
				{type: 'facts-ship'},
				{type: 'facts-park'},
			],
		},
		{
			name: 'parent',
			type: 'reference',
			title: 'Parent',
			to: [{type: 'page'}],
		},
		{
			name: 'tags',
			type: 'array',
			title: 'Tags',
			of: [
				{
					type: 'reference',
					to: [{type: 'tag'}],
				},
			],
			options: {
				layout: 'tags',
			},
		},
		{
			name: 'related',
			type: 'array',
			title: 'Related',
			of: [{
				type: 'reference',
				to: [{type: 'page'}],
			}],
		},
		{
			name: 'wikipedia',
			type: 'string',
			title: 'Wikipedia page',
			description: `Wikipedia page’s URL, but without the “${WIKIPEDIA_URL_PREFIX}” part`,
			// TODO: Figure out how to check if the link returns 200.
			validation: Rule => Rule.regex(/\s/, {invert: true}).custom(val => true),
		},
	],
}
