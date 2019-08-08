import ChatService from '../services/chat_service';

export default {
  namespaced: true,

  state: {
    currentMatch: '',
    newMessage: '',
    messages: []
  },

  mutations: {
    getMessages(state) {
      ChatService.loadChat(currentMatch).then(response => {
        state.messages = response;
      })
    }
  },

  actions: {
    getMessages(context) {
      context.commit("getMessages")
    }
  },

  getters: {
    // isLoggedIn(state) {
    //   return state.account != "";
    // }
  }
}