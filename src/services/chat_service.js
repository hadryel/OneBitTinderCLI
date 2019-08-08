import axios from 'axios';
import store from '../store';

export default {
  async load() {
    let response = await axios.get('chat', { headers: store.getters['accountHeaders'] })
    return response.data.matches;
  },
  async loadChat(matchId) {
    let response = await axios.get(`chat/${matchId}`, { headers: store.getters['accountHeaders'] })
    return response.data.chat;
  }
}