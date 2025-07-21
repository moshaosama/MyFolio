import axios from "axios";

class ContactService {
  async getContact(userId: number, thunkApi?: any) {
    try {
      const response = await axios.get(
        `https://myfolioserver-production.up.railway.app/get-contact/${userId}`
      );

      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }

  async EditContact(data?: any, thunkApi?: any) {
    try {
      const response = await axios.put(
        `https://myfolioserver-production.up.railway.app/edit-contact`,
        data
      );
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
}

export const contactService = new ContactService();
