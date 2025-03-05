import { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { calendarlinkOrganizationOperations } from './operations/organization';
import { calendarlinkResources } from './resources';
import { calendarlinkEventCollectionOperations } from './operations/eventCollection';
import { calendarlinkEventOperations } from './operations/event';

export class Calendarlink implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Calendarlink',
		name: 'calendarlink',
		icon: 'file:calendarlink.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with Calendarlink API',
		defaults: {
			name: 'Calendarlink',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'calendarlinkApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://my.calendarlink.com/api/v1',
			url: '',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
		},
		/**
		 * In the properties array we have two mandatory options objects required
		 *
		 * [Resource & Operation]
		 *
		 * https://docs.n8n.io/integrations/creating-nodes/code/create-first-node/#resources-and-operations
		 *
		 * In our example, the operations are separated into their own file (HTTPVerbDescription.ts)
		 * to keep this class easy to read.
		 *
		 */
		properties: [
			// Resources
			... calendarlinkResources,

			// Operations
			... calendarlinkOrganizationOperations,
			... calendarlinkEventCollectionOperations,
			... calendarlinkEventOperations,
		],

	};
}
