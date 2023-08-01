import { expect, vi } from 'vitest';
import matchers from '@testing-library/jest-dom/matchers';
import dynamicContext from '../src/test/_mocks/dynamicContext';
import * as dynamic from '@dynamic-labs/sdk-react';

vi.mock('@dynamic-labs/sdk-react', async () => {
  const actual: typeof dynamic = await vi.importActual(
    '@dynamic-labs/sdk-react',
  );
  return {
    ...actual,
    DynamicWidget: () => 'Connect your wallet',
    useDynamicContext: () => dynamicContext,
  };
});

expect.extend(matchers);
