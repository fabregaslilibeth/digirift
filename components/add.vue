<template>
  <v-text-field
    v-model="task"
    label="Add task"
    hint="What are you gonna do next"
    :clearable="true"
    :counter="true"
    :error-messages="errorMessage"
    @change="validate"
  ></v-text-field>
</template>

<script setup lang="ts">
import { useStore } from "vuex";

const store = useStore();

const task = ref('')
const filled = ref(false);
const errorMessage = ref('')
const list = store.state.list

const validate = (e: HTMLInputElement) => {
  errorMessage.value = ''
  const parkedTask = e.target.value

  const index = list.findIndex(task => task.description.toLowerCase() === parkedTask.toLowerCase() && ! task.isCompleted) 

  if (index >= 0) {
    errorMessage.value = 'This task already exists.'
    return
  }
  add(parkedTask as string)
};

const add = (parkedTask: string) => {
  store.commit('add', parkedTask)
  task.value = ''
  filled.value = false
};
</script>
