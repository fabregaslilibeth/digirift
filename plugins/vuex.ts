import { createStore } from "vuex";
const store = createStore({
  state() {
    return {
      list: [
        {
          description: "Go shopping",
          isCompleted: false,
        },
        {
          description: "Pay bills",
          isCompleted: false,
        },
      ],
    }
  },
  mutations: {
    add(state, payload) {
      state.list.push({
        description: payload,
        isCompleted: false,
      })
    },

    update(state, completedTask) {
      const index = state.list.findIndex(task => task.description.toLowerCase() === completedTask.toLowerCase() && ! task.isCompleted) 
      const updatedTask = {
        description: completedTask,
        isCompleted: true
      }
  
      state.list.splice(index, 1, updatedTask)
    }
  },
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store);
  // Install the store instance as a plugin
});
