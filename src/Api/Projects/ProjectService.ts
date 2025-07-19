import axios from "axios";
import { ParentService } from "../parentService";

class ProjectService extends ParentService {
  CreateData(data?: any, thunkApi?: any): void {}
  async GetData(user_id?: any, thunkApi?: any) {
    try {
      const response = await axios.get(
        `http://localhost:3000/get-projects/${user_id}`
      );

      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
}

export const projectService = new ProjectService();
