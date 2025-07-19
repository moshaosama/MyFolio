import axios from "axios";
import { ParentService } from "../parentService";

class SkillService extends ParentService {
  CreateData(): void {}
  async GetData(user_id?: number, thunkApi?: any) {
    try {
      const response = await axios.get(
        `https://myfolioserver-production.up.railway.app//get-skills/${user_id}`
      );
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
}

export const skillService = new SkillService();
