import axios from "axios";
import { ParentService } from "../parentService";

interface DataEdit {
  project_id: number;
  title: string;
  description: string;
  githubLink: string;
  liveDemoLink: string;
}

class ProjectService extends ParentService {
  async CreateData(user_id?: any, thunkApi?: any) {
    try {
      const response = await axios.post(
        `https://myfolioserver-production.up.railway.app/create-projects/${user_id}`
      );

      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
  async GetData(user_id?: any, thunkApi?: any) {
    try {
      const response = await axios.get(
        `https://myfolioserver-production.up.railway.app/get-projects/${user_id}`
      );

      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }

  async DeleteProject(project_id?: number, thunkApi?: any) {
    try {
      const response = await axios.delete(
        `https://myfolioserver-production.up.railway.app/delete-project/${project_id}`
      );

      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
  async GetSkillProject(project_id?: number, thunkApi?: any) {
    try {
      const response = await axios.get(
        `https://myfolioserver-production.up.railway.app/get-skill-project/skills/${project_id}`
      );

      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }

  async DeleteSkillProject(skillProject_id?: number, thunkApi?: any) {
    try {
      const response = await axios.delete(
        `https://myfolioserver-production.up.railway.app/delete-skill-project/skills/${skillProject_id}`
      );

      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }

  async CreateSkillProject(
    data?: { skill_name: string; project_id: number },
    thunkApi?: any
  ) {
    try {
      const response = await axios.post(
        `https://myfolioserver-production.up.railway.app/create-skill-project`,
        data
      );

      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }

  async EditProject(data?: DataEdit, thunkApi?: any) {
    try {
      const response = await axios.put(
        `https://myfolioserver-production.up.railway.app/edit-project/${data?.project_id}`,
        {
          title: data?.title,
          description: data?.description,
          githubLink: data?.githubLink,
          liveDemoLink: data?.liveDemoLink,
        }
      );

      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
}

export const projectService = new ProjectService();
