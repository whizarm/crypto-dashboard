import {
  transformDataForTable,
  TransactionsTableRow,
} from '../transformDataForTable';
import etherscanData from 'test/_mocks/etherscan';

describe('transformDataForTable', () => {
  test('should return an empty array when data is undefined or empty', () => {
    const dataUndefined = transformDataForTable(undefined);
    const dataEmpty = transformDataForTable({
      status: '0',
      message: 'No transactions found',
      result: [],
    });

    expect(dataUndefined).toEqual([]);
    expect(dataEmpty).toEqual([]);
  });

  test('should transform data correctly for table rows', () => {
    const expectedData: TransactionsTableRow[] = [
      {
        blockNumber: '13384202',
        fee: '0.002335071 ETH',
        from: '0x62eA30cFe51b1D1E7F0a8d3244Af46B3A91332f1',
        hash: '0x6328888664b652f90492736e781dd4cc6912efd41cdea04b1a17f3538d23ef29',
        time: '10/9/2021, 11:12:30 AM',
        to: '0x76e51bc8fa0beebcf3e45de408fa43c9dc5ffb27',
        value: '0 ETH',
      },
      {
        blockNumber: '13301219',
        fee: '0.008280901 ETH',
        from: '0x62eA30cFe51b1D1E7F0a8d3244Af46B3A91332f1',
        hash: '0x8ea753c69a17d41f6a76f7e281f29d374e906ab998e767ec9117cf02ced7a394',
        time: '9/26/2021, 11:53:04 AM',
        to: '0x76e51bc8fa0beebcf3e45de408fa43c9dc5ffb27',
        value: '0.12 ETH',
      },
    ];

    const transformedData = transformDataForTable(etherscanData);
    expect(transformedData).toEqual(expectedData);
  });
});
