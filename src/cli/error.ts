import chalk from 'chalk';

import { LogError } from '../types';

function formatError(message) {
  return [chalk.bgRed.white(' ERROR '), message].join(' ');
}

export default function logError(error?: LogError): void {
  if (typeof error === 'string') {
    console.error(formatError(error));
    return;
  }

  if (error) {
    console.error(
      formatError(
        error.stderr?.trim() ||
          error.stdout?.trim() ||
          // error.stack?.split('\n')[2].trim() ||
          error
      )
    );
    return;
  }
  // Wrapped in an else statement for testing
  console.error(formatError('Something went wrong!'));
}
