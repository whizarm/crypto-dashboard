import binplorer from 'test/_mocks/binplorer';
import { rest } from 'msw';

export default rest.get(
  'https://api.binplorer.com/getAddressInfo/*',
  (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(binplorer));
  },
);
