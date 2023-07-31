import etherscan from 'test/_mocks/etherscan';
import { rest } from 'msw';

export default rest.get('https://api.etherscan.io/api', (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(etherscan));
});
