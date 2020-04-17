import { NgModule } from '@angular/core';
import { defineCustomElements } from 'sloth-components/loader';

import { NumericValueAccessor } from './directives/number-value-accessor';
import { SlothComponent } from './directives/proxies';

defineCustomElements(window);

const DECLARATIONS = [
  // proxies
  SlothComponent,

  // Value Accessors
  NumericValueAccessor,
];

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  imports: [],
  providers: [],
})
export class SlothComponentsModule { }
