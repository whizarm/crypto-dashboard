import ethplorer from 'test/_mocks/ethplorer';
import { rest } from 'msw';

export default rest.get(
  'https://api.ethplorer.io/getAddressInfo/*',
  (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(ethplorer));
  },
);
