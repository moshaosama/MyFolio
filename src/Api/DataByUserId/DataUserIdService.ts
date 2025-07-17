import axios from "axios";

class DataUserIdService {
  async getLinks(userId?: any, thunkApi?: any) {
    try {
      const response = await axios.get(`http://localhost:3000/links/${userId}`);
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
  async DeleteLink(data: { linkName: string; userId: number }, thunkApi?: any) {
    try {
      const response = await axios.delete(
        `http://localhost:3000/links/${data.userId}`,
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
    data?: { userId: number; imageName: string },
    thunkApi?: any
  ) {
    try {
      const response = await axios.put(
        `http://localhost:3000/edit-image/${data?.userId}`,
        {
          imageName: data?.imageName,
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
        `http://localhost:3000/edit-tags/${data.userId}`,
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
        `http://localhost:3000/edit-name/${data.userId}`,
        {
          Name: data?.Name,
        }
      );
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
}

export const dataUserIdService = new DataUserIdService();
