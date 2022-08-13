<script setup lang="ts">
const isActive = ref(false)
const isDDMDown = ref(false)

const showMenu = () => {
  isActive.value = !isActive.value
}
const showDDM = () => {
  isDDMDown.value = !isDDMDown.value
}
</script>

<template>
  <nav
    class="m-auto w-full flex py-2.25 lg:py-0 px-6 b-b-1px b-primary/15 dark:b-light-900/10"
  >
    <div class="flex justify-between items-center w-full">
      <NuxtLink
        to="/"
        class="text-2xl font-semibold whitespace-nowrap no-underline text-dark-800 dark:text-white"
      >
      </NuxtLink>

      <ul
        class="fixed left--100% top-8.25 flex-col w-full h-screen text-center py-2 z-50 transition-left flex bg-light-900 dark:bg-primary md:( border-r-1 border-t-1 border-primary dark:border-light-900 w-30% h-full ) lg:( border-none static flex-row w-auto h-auto py-0 m-0 )"
        :class="{active: isActive}"
      >
        <li class="nav-item">
          <NuxtLink to="/" class="nav-item-link">Home</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink to="/about" class="nav-item-link">About</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink to="" class="nav-item-link">Link</NuxtLink>
        </li>
        <li class="nav-item nav-item-link relative cursor-pointer">
          <div class="flex justify-center" @click="showDDM()">
            <span>DropDown </span>

            <div i-fa6-solid-sort-down class="ms-1" />
          </div>

          <div
            class="lg:( origin-top-right absolute right-0 left--3 mt-4.35 w-40 rounded-md shadow-lg bg-light-900 dark:bg-primary ring-1 ring-primary dark:ring-light-900 )"
            :class="[isDDMDown ? 'block' : 'hidden']"
          >
            <div class="py-1">
              <NuxtLink to="" class="nav-item-link dropDown-item"> Link </NuxtLink>
              <NuxtLink to="" class="nav-item-link dropDown-item"> Link </NuxtLink>
              <NuxtLink
                to=""
                class="nav-item-link dropDown-item b-none pt-3 pb-0 lg:py-2.5"
              >
                Link
              </NuxtLink>
            </div>
          </div>
        </li>
        <li class="nav-item b-none">
          <NuxtLink to="" class="nav-item-link">Link</NuxtLink>
        </li>
      </ul>

      <div
        class="mobil-button block lg:hidden px-6px cursor-pointer"
        :class="{active: isActive}"
        @click="showMenu()"
      >
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </div>

    <DarkButton class="text-2xl" />
    <NuxtLink
      to="https://github.com/momoathome"
      rel="noopener noreferrer"
      target="_blank"
      class="icon-btn self-center px-1.5 py-1 text-2xl"
    >
      <div i-carbon-logo-github />
    </NuxtLink>
  </nav>
</template>

<style lang="scss" scoped>
.active {
  left: 0;
}

.dark .router-link-exact-active {
  color: white;
}

.router-link-exact-active {
  color: #0d9488;
}

.mobil-button.active {
  .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }
  .bar:nth-child(2) {
    opacity: 0;
  }
  .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
}
</style>
