import axios from "axios";
import { ParentService } from "../parentService";

class UserService extends ParentService {
  async CreateData(_?: any, thunkApi?: any) {
    try {
      const response = await axios.post(
        `https://myfolioserver-production.up.railway.app/create-new-user`
      );
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
  async GetData(userId?: number, thunkApi?: any) {
    try {
      const response = await axios.get(
        `https://myfolioserver-production.up.railway.app/get-user/${userId}`
      );
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
}

export const userService = new UserService();
