import { INodeProperties } from 'n8n-workflow';

export const calendarlinkEventOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['event'],
			},
		},

		options: [
			{
				name: 'Create',
				value: 'create',
				action: 'Create event',
				description: 'Create an event',
				routing: {
					request: {
						method: 'POST',
						returnFullResponse: true,
						ignoreHttpStatusErrors: true,
						body: {
							collection_id: '={{$parameter.collection_id}}',
							title: '={{$parameter.title}}',
							start: '={{$parameter.start}}',
							end: '={{$parameter.end}}',
							date_format: 'Y-m-d\\TH:i:s.v\\Z',
							description: '={{$parameter.description}}',
							location: '={{$parameter.location}}',
							rsvp: {
								enabled: '={{$parameter.rsvp_enabled}}',
							},
						},
					},
				},
			},
		],
		default: 'create',
	},
	{
		displayName: 'Organization ID',
		required: true,
		name: 'companyId',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['event'],
			},
		},
		routing: {
			request: {
				url: '=/{{$value}}/event',
			},
		},
	},
	{
		displayName: 'Collection ID',
		name: 'collection_id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['event'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Title',
		name: 'title',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['event'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Start DateTime',
		name: 'start',
		type: 'dateTime',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['event'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'End DateTime',
		name: 'end',
		type: 'dateTime',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['event'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['event'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Location',
		name: 'location',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['event'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'RSVP Enabled',
		name: 'rsvp_enabled',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['event'],
				operation: ['create'],
			},
		},
	},
];
