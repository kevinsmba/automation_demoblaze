import { getUser } from "./example";


describe('Bring the whole elements in the array', () => {
  let response;
  beforeEach(async () => {
    response = await getUser();
  });
  it('should make a successful GET request', async () => {
    await response;
    console.log(response.data.data);
  });
  //expect(response.data.data[0].Year).toBe(2020);
  it('should check if the ID Nation attribute match in all objects', async () => {
    const dataResponse = response.data.data;
    dataResponse.forEach(nations => {
      console.log(nations['ID Nation']);
      expect(nations['ID Nation']).toBe('01000US');
    })
  })
});