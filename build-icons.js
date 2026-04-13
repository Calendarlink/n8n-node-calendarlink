const { cpSync, globSync } = require('fs');
const path = require('path');

for (const src of ['nodes', 'credentials']) {
	for (const file of globSync(path.join(src, '**', '*.{png,svg}'))) {
		const dest = path.join('dist', file);
		cpSync(file, dest);
	}
}
