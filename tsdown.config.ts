import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: ['bin/cdk-gof-design-pattern.ts', 'lib/**/*.ts'],
  format: 'cjs',
  outDir: 'dist',
  clean: true,
  sourcemap: true,
  platform: 'node',
  target: 'node24',
  external: ['aws-cdk-lib', 'constructs', 'source-map-support'],
});
