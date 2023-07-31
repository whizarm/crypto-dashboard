import { afterAll, afterEach, beforeAll } from 'vitest';
import { setupServer } from 'msw/node';
import etherscan from './mockHandlers/etherscan';
import bscscan from './mockHandlers/bscscan';
import ethplorer from './mockHandlers/ethplorer';
import binplorer from './mockHandlers/binplorer';

export const handlers = [etherscan, bscscan, ethplorer, binplorer];

const server = setupServer(...handlers);

beforeAll(() => {
  location.replace(`http://localhost`);
  server.listen({ onUnhandledRequest: 'error' });
});
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
