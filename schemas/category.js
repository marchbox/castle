export default {
	name: 'category',
	type: 'document',
	title: 'Category',
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
	],
}
