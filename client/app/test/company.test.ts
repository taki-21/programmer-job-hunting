import { reccomendCompany, companyNameSearch, searchCompany } from '../src/lib/api/company';

// APIから返却される企業情報が5件であるかを確認する
test('check length of recommend companies', async () => {
  const response = await reccomendCompany();
  let companiesLen:number = response.data.length;
  // 5社のおすすめ企業が返ってきているか確認
  expect(companiesLen).toBe(5);
});

// companyNameSearch()のテスト
test('check company name search', async () => {
  const response = await companyNameSearch('company', '0');
  // 会社情報が返されていることを確認する
  expect(response.data.length).toBeGreaterThan(0);
  
  // 存在しない会社名を検索したときは何も返ってこない
  const response2 = await companyNameSearch('hogehoge', '0');  
  expect(response2.data.length).toBe(0);
}); 


// searchCompany()のテスト
test('check search company', async () => {
  const response = await searchCompany(0);
  // 0件以上の会社情報が返されていることを確認する
  expect(response.data.length).toBeGreaterThan(0);
  
  // 次のページに遷移すると同様に0件以上の会社情報が返される
  const response2 = await searchCompany(1);
  expect(response2.data.length).toBeGreaterThan(0);

  // 1ページ目と2ページ目では異なるデータが返されることを確認する
  expect(response.data === response2.data).toBeFalsy();
});


