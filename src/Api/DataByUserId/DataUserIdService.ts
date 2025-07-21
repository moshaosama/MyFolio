import axios from "axios";

export type FieldValue =
  | "ResumeLink"
  | "LinkedinLink"
  | "GitHubLink"
  | "TwitterLink"
  | "MediumLink";

class DataUserIdService {
  async getLinks(userId?: any, thunkApi?: any) {
    try {
      const response = await axios.get(`https://myfolioserver-production.up.railway.app/links/${userId}`);
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
  async DeleteLink(data: { linkName: string; userId: number }, thunkApi?: any) {
    try {
      const response = await axios.delete(
        `https://myfolioserver-production.up.railway.app/links/${data.userId}`,
        {
          data: {
            linkName: data.linkName,
          },
        }
      );
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }

  async EditImageUser(
    data?: { userId: number; imageName: FormData },
    thunkApi?: any
  ) {
    try {
      const response = await axios.put(
        `https://myfolioserver-production.up.railway.app/edit-image/${data?.userId}`,
        data?.imageName,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }

  async EditTags(data?: { Tags: string; userId: number }, thunkApi?: any) {
    try {
      const response = await axios.put(
        `https://myfolioserver-production.up.railway.app/edit-tags/${data?.userId}`,
        {
          Tags: data?.Tags,
        }
      );
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }

  async EditName(data?: { Name: string; userId: number }, thunkApi?: any) {
    try {
      const response = await axios.put(
        `https://myfolioserver-production.up.railway.app/edit-name/${data?.userId}`,
        {
          Name: data?.Name,
        }
      );
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }

  async EditBio(data?: { Bio: string; userId: number }, thunkApi?: any) {
    try {
      const response = await axios.put(
        `https://myfolioserver-production.up.railway.app/edit-bio/${data?.userId}`,
        {
          Bio: data?.Bio,
        }
      );
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }

  async EditLinks(
    data?: { value: any; userId: number; Field: any },
    thunkApi?: any
  ) {
    try {
      const response = await axios.put(
        `https://myfolioserver-production.up.railway.app/edit-links/${data?.userId}`,
        {
          [data?.Field!]: data?.value,
        }
      );
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
}

export const dataUserIdService = new DataUserIdService();
