import { INodeProperties } from 'n8n-workflow';

export const calendarlinkEventCollectionOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['eventCollection'],
			},
		},

		options: [
			{
				name: 'Get',
				value: 'get',
				action: 'Get event collection',
				description: 'Get Event Collection',
				routing: {
					request: {
						method: 'GET',
					},
				},
			},
		],
		default: 'get',
	},
	{
		displayName: 'Organization ID',
		required: true,
		name: 'companyId',
		type: 'string',
		default:'',
		displayOptions: {
			show: {
				resource: [
					'eventCollection',
				],
			},
		},
		routing: {
			request: {
				url: '=/{{$value}}/collection',
			},
		},
	},
];
