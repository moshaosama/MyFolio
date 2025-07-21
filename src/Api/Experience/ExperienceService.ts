import axios from "axios";
import { ParentService } from "../parentService";

class ExperienceService extends ParentService {
  async CreateData(
    data?: {
      Date: string;
      Title: string;
      Foundation: string;
      Description: string;
      Icon: string;
      Position: string;
      user_id: number;
    },
    thunkApi?: any
  ) {
    try {
      const response = await axios.post(
        `http://localhost:3000/create-experience/${data?.user_id}`,
        {
          Date: data?.Date,
          Title: data?.Title,
          Foundation: data?.Foundation,
          Description: data?.Description,
          Icon: data?.Icon,
          Position: data?.Position,
        }
      );

      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
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

  async DeleteExperience(experience_id?: number, thunkApi?: any) {
    try {
      const response = await axios.delete(
        `http://localhost:3000/delete-experience/${experience_id}`
      );

      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
}

export const experienceService = new ExperienceService();
