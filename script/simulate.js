#!/usr/bin/env node
// script/simulate.js
// CLI entry point for simulation harness (hands-free, ergonomic)

const { spawn } = require('child_process');
const minimist = require('minimist');

async function main() {
	const argv = minimist(process.argv.slice(2));
	const scenario = argv.scenario || argv.s || 'terminal';
	const config = argv.config || argv.c || null;
	const output = argv.output || argv.o || 'json';

	// Build args for ts-node
	const tsNodeArgs = [
		require.resolve('ts-node/dist/bin.js'),
		require('path').resolve(__dirname, '../test/simulationMain.ts'),
		'--grep', scenario
	];
	if (config) {
		tsNodeArgs.push('--config', config);
	}
	if (output === 'json') {
		tsNodeArgs.push('--json');
	}

	const child = spawn(process.execPath, tsNodeArgs, { stdio: 'inherit' });
	child.on('exit', code => process.exit(code));
}

main();
