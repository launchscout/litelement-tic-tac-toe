import { storiesOf, html, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';

import TicTacToe from '../src/TicTacToe.js';
import '../src/tic-tac-toe.js';

import readme from '../README.md';

storiesOf('tic-tac-toe', module)
  .addDecorator(withKnobs)
  .add('Documentation', () => withClassPropertiesKnobs(TicTacToe), { notes: { markdown: readme } })
  .add(
    'Alternative Header',
    () => html`
      <tic-tac-toe .header=${'Something else'}></tic-tac-toe>
    `,
  );
