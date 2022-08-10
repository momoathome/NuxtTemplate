<template>
  <div class="my-2">
    <div class="mb-4 text-center text-xl">
      Counter : {{ numberFormat(counter.count) }}
    </div>
    <div
      class="flex flex-col items-center justify-items-center space-y-2 md:space-y-0 md:flex-row md:space-x-2"
    >
      <button class="counter-btn" @click.prevent="counter.increment">increment</button>
      <button class="counter-btn" @click.prevent="counter.decrement">decrement</button>
      <button
        class="counter-btn disabled:cursor-default disabled:bg-gray disabled:hover:bg-gray disabled:focus:ring-gray focus:ring-opacity-0"
        :disabled="isDisabled"
        @click.prevent="counter.increment2x"
      >
        counter x2
      </button>
      <button class="counter-btn" @click.prevent="counter.reset">reset</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useCounter} from '~/stores/counter'
const counter = useCounter()
const isDisabled = ref(true)

counter.$subscribe((state) => {
  if (state.events.newValue !== 0 && isDisabled.value == true) {
    toggleDisabled()
  } else if (state.events.newValue === 0 && isDisabled.value == false) {
    toggleDisabled()
  }
})

const toggleDisabled = () => {
  isDisabled.value = !isDisabled.value
}
</script>
