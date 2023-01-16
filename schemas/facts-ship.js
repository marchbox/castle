export default {
	name: 'facts-ship',
	type: 'object',
	title: 'Facts (Ship)',
	fieldsets: [
		{
			name: 'timeline',
			title: 'Timeline',
		},
	],
	fields: [
		{
			name: 'ordered',
			type: 'date',
			title: 'Ordered',
			options: {
				dateFormat: 'YYYY',
			},
			fieldset: 'timeline',
		},
		{
			name: 'laidDown',
			type: 'date',
			title: 'Laid down',
			options: {
				dateFormat: 'YYYY-MM-DD',
			},
			fieldset: 'timeline',
		},
		{
			name: 'launched',
			type: 'date',
			title: 'Launched',
			options: {
				dateFormat: 'YYYY-MM-DD',
			},
			fieldset: 'timeline',
		},
		{
			name: 'completed',
			type: 'date',
			title: 'Completed',
			options: {
				dateFormat: 'YYYY-MM-DD',
			},
			fieldset: 'timeline',
		},
		{
			name: 'christened',
			type: 'date',
			title: 'Christened',
			options: {
				dateFormat: 'YYYY-MM-DD',
			},
			fieldset: 'timeline',
		},
		{
			name: 'inaugural',
			type: 'date',
			title: 'Inaugural',
			description: 'Date of the inaugural sailing',
			options: {
				dateFormat: 'YYYY-MM-DD',
			},
			fieldset: 'timeline',
		},
		{
			name: 'shipyard',
			type: 'reference',
			title: 'Shipyard',
			to: [{type: 'page'}],
		},
	],
}
