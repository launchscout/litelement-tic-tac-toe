import { html, fixture, expect } from '@open-wc/testing';

import '../src/tic-tac-toe.js';

describe('<tic-tac-toe>', () => {
  it('has a default property heading', async () => {
    const el = await fixture('<tic-tac-toe></tic-tac-toe>');

    expect(el.heading).to.equal('Hello world!');
  });

  it('allows property heading to be overwritten', async () => {
    const el = await fixture(html`
      <tic-tac-toe heading="different heading"></tic-tac-toe>
    `);

    expect(el.heading).to.equal('different heading');
  });
});
