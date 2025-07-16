import axios from "axios";
import { ParentService } from "../parentService";

class UserService extends ParentService {
  async CreateData(_?: any, thunkApi?: any) {
    try {
      const response = await axios.post(`${this.url}create-new-user`);
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
  GetData(_: any, thunkApi: any): void {}
}

export const userService = new UserService();
