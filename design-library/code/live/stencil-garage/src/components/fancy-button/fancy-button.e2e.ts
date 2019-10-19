import { newE2EPage } from '@stencil/core/testing';

describe('fancy-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<fancy-button></fancy-button>');

    const element = await page.find('fancy-button');
    expect(element).toHaveClass('hydrated');
  });
});
