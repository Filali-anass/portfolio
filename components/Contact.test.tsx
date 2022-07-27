import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Contact from './Contact';

test('allows me to submit a messsage', () => {
  render(<Contact />);

  userEvent.type(screen.getByLabelText(/name/i), 'Anass');
  userEvent.type(screen.getByLabelText(/email/i), 'test@gmail.com');
  userEvent.type(screen.getByLabelText(/phone/i), '0677889900');
  userEvent.type(
    screen.getByLabelText(/message/i),
    'Hello We should work together',
  );

  userEvent.click(screen.getByTestId('btn-submit'));
});
