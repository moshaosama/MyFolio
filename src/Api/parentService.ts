export abstract class ParentService {
  protected url = "https://myfolioserver-production.up.railway.app/";
  abstract CreateData(data?: any, thunkApi?: any): void;
  abstract GetData(_?: any, thunkApi?: any): void;
}
