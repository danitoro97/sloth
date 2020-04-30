import { newE2EPage } from '@stencil/core/testing';

describe('sloth-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sloth-input></sloth-input>');

    const element = await page.find('sloth-input');
    expect(element).toHaveClass('hydrated');
  });
});
