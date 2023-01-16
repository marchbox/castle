export default {
	name: 'tag',
	type: 'document',
	title: 'Tag',
	fields: [
		{
			name: 'slug',
			type: 'slug',
			title: 'Slug',
			validation: Rule => Rule.required(),
		},
		{
			name: 'name',
			type: 'string',
			title: 'Name',
			validation: Rule => Rule.required(),
		},
		{
			name: 'description',
			type: 'text',
			title: 'Description',
		},
		{
			name: 'parent',
			type: 'reference',
			title: 'Parent',
			to: [{type: 'tag'}],
		}
	],
}
