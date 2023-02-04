<template>
  <div>
    <div v-if="completedTasks.length < 1" class="ma-10 text-subtitle-1 font-italic">
      No completed tasks
    </div>
    <div v-else>
      <v-list subheader two-line flat>
        <v-list-item-group multiple>
          <v-list-item class="d-flex text-wrap" v-for="task in completedTasks">
            <template class="d-flex text-wrap">
              <v-list-item-content class="d-flex">
                <v-list-item-title class="pt-4 pl-8 w-40">
                  <v-icon color="success">
                    mdi-check
                  </v-icon>
                  {{ task.description }} 
                </v-list-item-title>
              </v-list-item-content>
            </template>
          </v-list-item>
        </v-list-item-group>
      </v-list> 
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";

const store = useStore()

const list = store.state.list

const completedTasks = computed(() => {
  return list.filter(task => task.isCompleted)
})
</script>
