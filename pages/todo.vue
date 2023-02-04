<template>
  <div class="container">
    <v-card class="mx-auto text-h5 font-weight-bold" title="Checklist">
      <v-tabs>
        <v-tab v-for="tab in tabs" @click="activeTab = tab">
          <p class="text-body-2">{{ tab }}</p>
          <span v-if="flashAnimate"></span>
          <v-slide-y-reverse-transition>
            <div v-if="flashAnimate && tab === 'Completed'" color="text-green-lighten-1">
              <v-icon color="success">
                    mdi-check
                  </v-icon>
            </div>
          </v-slide-y-reverse-transition>
        </v-tab>
      </v-tabs>

      <div v-if="activeTab === 'Pending'">
        <pending @completed="animate" />
      </div>

      <div v-else>
        <completed />
      </div>
    </v-card>

    <div class="my-12">
      <add />
    </div>
  </div>
</template>

<script setup lang="ts">
  const activeTab = ref('Pending')

  const tabs = ref(['Pending', 'Completed'])

  const flashAnimate = ref(false) 
  const animate = () => {
    flashAnimate.value = true
    setTimeout(() => {
      flashAnimate.value = false
    }, 500)
  }
</script>

<style lang="scss">
.container {
  max-width: 480px;
  margin: 30px auto;
}

.duration-200 {
  animation-duration: 200ms;
}
</style>
