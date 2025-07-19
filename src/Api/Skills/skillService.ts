import axios from "axios";
import { ParentService } from "../parentService";

class SkillService extends ParentService {
  CreateData(data?: any, thunkApi?: any): void {}
  async GetData(user_id?: number, thunkApi?: any) {
    try {
      const response = await axios.get(
        `http://localhost:3000/get-skills/${user_id}`
      );
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
}

export const skillService = new SkillService();
