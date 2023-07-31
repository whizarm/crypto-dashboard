import bscscan from 'test/_mocks/bscscan';
import { rest } from 'msw';

export default rest.get('https://api.bscscan.com/api', (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(bscscan));
});
