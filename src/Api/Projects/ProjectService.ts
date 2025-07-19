import axios from "axios";
import { ParentService } from "../parentService";

class ProjectService extends ParentService {
  async CreateData(user_id?: any, thunkApi?: any) {
    try {
      const response = await axios.post(
        `http://localhost:3000/create-projects/${user_id}`
      );

      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
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

  async DeleteProject(project_id?: number, thunkApi?: any) {
    try {
      const response = await axios.delete(
        `http://localhost:3000/delete-project/${project_id}`
      );

      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
}

export const projectService = new ProjectService();
