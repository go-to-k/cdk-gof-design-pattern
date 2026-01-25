import { defineConfig } from 'tsdown';

export default defineConfig([
  {
    name: 'bin',
    entry: ['bin/cdk-gof-design-pattern.ts'],
    format: 'cjs',
    outDir: 'dist/bin',
    clean: true,
    sourcemap: true,
    platform: 'node',
    target: 'node24',
    external: ['aws-cdk-lib', 'constructs', 'source-map-support'],
  },
  {
    name: 'lib',
    entry: ['lib/**/*.ts', '!lib/**/*.d.ts'],
    format: 'cjs',
    outDir: 'dist',
    clean: true,
    sourcemap: true,
    platform: 'node',
    target: 'node24',
    external: ['aws-cdk-lib', 'constructs', 'source-map-support'],
  },
  {
    name: 'singleton',
    entry: ['lib/stack/singleton/lambda/index.ts'],
    format: 'cjs',
    outDir: 'lib/stack/singleton/lambda/dist',
    clean: true,
    platform: 'node',
    target: 'node24',
    external: ['aws-sdk'],
  },
]);
