<template>
  <div>
    <div v-if="pendingTasks.length < 1" class="ma-10 text-subtitle-1 font-italic">
      No pending tasks
    </div>
    <div v-else>
      <v-list subheader two-line flat>
        <v-list-item-group multiple>
          <v-list-item class="d-flex text-wrap" v-for="task in pendingTasks">
            <template v-slot:default="{ active }">
              <v-list-item-content class="d-flex">
                <v-checkbox
                :readonly="true"
                  color="#ddd"
                  @change="markAsComplete(task.description)"
                ></v-checkbox>
                <v-list-item-title class="pt-4 pl-8 w-40 text-subtitle-2">
                  {{ task.description }}
                </v-list-item-title
                >
              </v-list-item-content>
            </template>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'

const store = useStore()

const list = store.state.list

const pendingTasks = computed(() => {
  return list.filter((task) => !task.isCompleted)
})

const emit = defineEmits<{
  (e: 'completed'): void
}>()

const markAsComplete = (completedTask: string) => {
  store.commit('update', completedTask)
  emit('completed')
}
</script>
