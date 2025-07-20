import axios from "axios";
import { ParentService } from "../parentService";

class ExperienceService extends ParentService {
  async CreateData(data?: any, thunkApi?: any) {}
  async GetData(userId?: number, thunkApi?: any) {
    try {
      const response = await axios.get(
        `http://localhost:3000/get-experience/${userId}`
      );

      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
}

export const experienceService = new ExperienceService();
