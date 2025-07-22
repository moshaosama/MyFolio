import axios from "axios";

class ChatGbtService {
  async StartChat() {
    try {
      const response = await axios.post(
        "https://myfolioserver-production.up.railway.app/start-chat"
      );

      return response.data;
    } catch (err) {}
  }

  async SendMessage(
    data?: { message: string; session: string; user_id: number },
    thunkApi?: any
  ) {
    try {
      const response = await axios.post(
        "https://myfolioserver-production.up.railway.app/start-chat/chat",
        data
      );

      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
}

export const chatgbtService = new ChatGbtService();
