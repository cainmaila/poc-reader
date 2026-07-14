import { cpSync, rmSync } from 'fs';
import { join } from 'path';

const root = process.cwd();
const prerenderedDir = join(root, '.svelte-kit/output/prerendered/pages');
const clientDir = join(root, '.svelte-kit/output/client');
const buildDir = join(root, 'build');

// Remove existing build directory
rmSync(buildDir, { recursive: true, force: true });

// Copy prerendered HTML
cpSync(prerenderedDir, buildDir, { recursive: true });

// Copy client resources
cpSync(clientDir, buildDir, { recursive: true });

console.log('✓ Build output created successfully at', buildDir);
