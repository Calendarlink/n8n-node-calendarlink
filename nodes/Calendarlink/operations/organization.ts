import { INodeProperties } from 'n8n-workflow';

export const calendarlinkOrganizationOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['organization'],
			},
		},

		options: [
			{
				name: 'Get',
				value: 'get',
				action: 'Get organization',
				description: 'Get organization',
				routing: {
					request: {
						method: 'GET',
						url: '/user',
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'organizations',
								},
							},
						],
					},
				},
			},
		],
		default: 'get',
	},
];
