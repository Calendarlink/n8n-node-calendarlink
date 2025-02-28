import { INodeProperties } from 'n8n-workflow';

export const calendarlinkResources: INodeProperties[] = [
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
			{
				name: 'Event Collection',
				value: 'eventCollection',
			},
		],
		default: 'organization',
	}
];
