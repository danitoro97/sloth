import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { angularOutputTarget, ValueAccessorConfig } from '@stencil/angular-output-target';
import { reactOutputTarget } from '@stencil/react-output-target';

const angularValueAccessorBindings: ValueAccessorConfig[] = [
  {
    elementSelectors: ['sloth-component'],
    event: 'slideChanged',
    targetAttr: 'value',
    type: 'number',
  },
];

export const config: Config = {
  namespace: 'sloth',
  plugins: [sass()],
  outputTargets: [
    angularOutputTarget({
      componentCorePackage: 'sloth-components',
      directivesProxyFile: '../angular/src/directives/proxies.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
    reactOutputTarget({
      componentCorePackage: 'sloth-components',
      proxiesFile: '../react/src/components.ts',
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    { type: 'experimental-dist-module', dir: 'dist/module' },
    { type: 'docs-readme' },
    { type: 'docs-json', file: './stuff.json' },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
