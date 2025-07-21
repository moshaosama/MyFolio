import axios from "axios";
import { ParentService } from "../parentService";

class SkillService extends ParentService {
  async CreateData(
    data?: { skill_name: string; userId: number },
    thunkApi?: any
  ) {
    try {
      const response = await axios.post("https://myfolioserver-production.up.railway.app/create-skill", {
        skill_name: data?.skill_name,
        userId: data?.userId,
      });
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
  async GetData(user_id?: number, thunkApi?: any) {
    try {
      const response = await axios.get(
        `https://myfolioserver-production.up.railway.app/get-skills/${user_id}`
      );
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }

  async DeleteSkill(skill_id?: number, thunkApi?: any) {
    try {
      const response = await axios.delete(
        `https://myfolioserver-production.up.railway.app/delete-skill/${skill_id}`
      );
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
}

export const skillService = new SkillService();
