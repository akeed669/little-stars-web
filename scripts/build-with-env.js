// scripts/build-with-env.js
import { spawn } from 'child_process';
import fs from 'fs';

// Read environment variables from .env.local
const envFile = '.env.local';
if (fs.existsSync(envFile)) {
    const envContent = fs.readFileSync(envFile, 'utf8');
    const envVars = {};

    envContent.split('\n').forEach(line => {
        if (line.trim() && !line.startsWith('#')) {
            const [key, ...valueParts] = line.split('=');
            envVars[key.trim()] = valueParts.join('=').trim();
        }
    });

    // Set environment variables for the build process
    Object.assign(process.env, envVars);
}

// Run the build command
const buildProcess = spawn('npm', ['run', 'build'], {
    stdio: 'inherit',
    env: process.env
});

buildProcess.on('close', (code) => {
    if (code === 0) {
        console.log('Build completed successfully!');
    } else {
        console.error('Build failed with code:', code);
        process.exit(code);
    }
});