import { render, screen } from '@testing-library/react';

import Hello from './hello';

test('helloコンポーネントのpropsチェック', () => {
  const name = 'Kikki';
  render(<Hello name={name} />);
  const titleElement = screen.getByText(`Hello ${name}!!`);
  expect(titleElement).toBeInTheDocument();
});
