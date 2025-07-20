export abstract class ParentService {
  protected url = "http://localhost:3000/";
  abstract CreateData(data?: any, thunkApi?: any): void;
  abstract GetData(_?: any, thunkApi?: any): void;
}
