<script setup lang="ts">
const isActive = ref(false)

const showMenu = () => {
  isActive.value = !isActive.value
}
</script>

<template>
  <nav class="m-auto w-full flex py-2 px-6 b-b-1px b-primary/15 dark:b-light-900/10">
    <div class="flex justify-between items-center w-full">
      <NuxtLink
        to="/"
        class="text-2xl font-semibold whitespace-nowrap no-underline text-dark-800 dark:text-white"
      >
      </NuxtLink>

      <ul
        class="fixed left--100% top-8 flex-col w-full h-screen text-center py-2 z-50 transition-left flex bg-light-900 dark:bg-primary md:( border-r-1 border-t-1 border-light-900 w-35% ) lg:( border-none static flex-row w-auto h-auto py-0 m-0 )"
        :class="{active: isActive}"
      >
        <li class="nav-item">
          <NuxtLink to="/" class="nav-item-link">Home</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink to="/about" class="nav-item-link">about</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink to="" class="nav-item-link">Ranking</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink to="" class="nav-item-link">Information</NuxtLink>
        </li>
        <li class="nav-item b-none">
          <NuxtLink to="" class="nav-item-link">Login</NuxtLink>
        </li>
      </ul>

      <div
        class="mobil-button block lg:hidden cursor-pointer"
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
