<script setup lang="ts">
/* Mobile Menu */
const isActive = ref(false)
const showMenu = () => {
  isActive.value = !isActive.value
}

/* Dropdown Menu */
const isDDMDown = ref(false)
const target = ref()
const showDDM = () => {
  isDDMDown.value = !isDDMDown.value
}
onClickOutside(target, (e) => (isDDMDown.value = false))
</script>

<template>
  <div>
    <nav
      class="bg-base_light flex-col flex h-screen w-full py-2 px-6 transition-left top-12 left--100% z-10 fixed md:( border-r-1 border-t-1 border-base dark:border-base_light w-30% h-full ) lg:( border-none static flex-row w-auto h-auto py-0 m-0 ) dark:bg-base "
      :class="[isActive ? 'left-0' : '']"
    >
      <!-- Navigation Links -->
      <NuxtLink to="/" class="nav-item-link"> Home </NuxtLink>
      <NuxtLink to="/about" class="nav-item-link"> About </NuxtLink>
      <NuxtLink to="" class="nav-item-link"> Link </NuxtLink>

      <!-- Dropdown item -->
      <div class="cursor-pointer nav-item-link relative">
        <!-- Nav Item to trigger Dropdown Menu -->
        <div class="flex" @click="showDDM()">
          <span>Informations</span>
          <div i-fa6-solid-sort-down class="ms-1 lg:mt-0.5" />
        </div>

        <!-- Dropdown menu -->
        <div
          class="transition lg:( origin-top-right absolute right-0 left--1 mt-3 w-40 z-20 rounded-md shadow-lg bg-base_light dark:bg-base ring-1 ring-base dark:ring-base_light ) "
          :class="[isDDMDown ? 'block' : 'hidden']"
          @click="showDDM"
          ref="target"
        >
          <div class="py-1">
            <NuxtLink to="" class="dropDown-item"> Link </NuxtLink>
            <NuxtLink to="" class="dropDown-item"> Link </NuxtLink>
            <NuxtLink to="" class="dropDown-item"> Link </NuxtLink>
            <NuxtLink to="" class="dropDown-item"> Link </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Navigation links -->
      <NuxtLink to="" class="nav-item-link"> Link </NuxtLink>
    </nav>

    <!-- Mobile button -->
    <div class="cursor-pointer px-3 mobil-button block lg:hidden" @click="showMenu()">
      <span class="bar" :class="[isActive ? 'translate-y-8px rotate-45' : '']"></span>
      <span class="bar" :class="[isActive ? 'opacity-0' : '']"></span>
      <span class="bar" :class="[isActive ? 'translate-y--8px rotate--45' : '']"></span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dark .router-link-exact-active {
  color: rgb(var(--base_light));
}

.router-link-exact-active {
  color: #0d9488;
}
</style>
