import axios from "axios";
import { ParentService } from "../parentService";

class NavbarService extends ParentService {
  async CreateData(userId?: any, thunkApi?: any) {
    try {
      const response = await axios.post(`https://myfolioserver-production.up.railway.app/create-links`, {
        userId: userId,
      });
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
  GetData(_?: any): void {}
}

export const navbarService = new NavbarService();
