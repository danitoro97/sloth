import { newSpecPage } from '@stencil/core/testing';
import { SlothInput } from './sloth-input';

describe('sloth-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SlothInput],
      html: `<sloth-input></sloth-input>`,
    });
    expect(page.root).toEqualHtml(`
      <sloth-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sloth-input>
    `);
  });
});
