new Vue({
	el: '#layout',
	data: {
		
		drawer: null,
		items: [{
				icon: 'lightbulb_outline',
				text: 'Notes'
			},
			{
				icon: 'touch_app',
				text: 'Reminders'
			},
			{
				divider: true
			},
			{
				heading: 'Labels'
			},
			{
				icon: 'add',
				text: 'Create new label'
			},
			{
				divider: true
			},
			{
				icon: 'archive',
				text: 'Archive'
			},
			{
				icon: 'delete',
				text: 'Trash'
			},
			{
				divider: true
			},
			{
				icon: 'settings',
				text: 'Settings'
			},
			{
				icon: 'chat_bubble',
				text: 'Trash'
			},
			{
				icon: 'help',
				text: 'Help'
			},
			{
				icon: 'phonelink',
				text: 'App downloads'
			},
			{
				icon: 'keyboard',
				text: 'Keyboard shortcuts'
			}
		]
	},
	props: {
		source: String
	}

});