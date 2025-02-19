import { INodeProperties } from 'n8n-workflow';

export const calendarlinkOrganizationResources: INodeProperties[] = [
	{
		displayName: 'Resource',
		name: 'resource',
		type: 'options',
		noDataExpression: true,
		options: [
			{
				name: 'Organization',
				value: 'organization',
			},
		],
		default: 'organization',
	},
];
