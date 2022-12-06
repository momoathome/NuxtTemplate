<template>
  <!-- prettier-ignore -->
  <header class="flex m-auto w-full py-2 px-6 b-b-1px b-base/15 lg:py-0 dark:b-base_light/10" >
    <div class="flex w-full justify-between items-center">
      <!-- Logo  -->
      <div class="font-semibold text-2xl whitespace-nowrap no-underline dark:text-base_light">Snow0wl</div>

      <Navbar />
      
    </div>

    <div class="flex gap-3 items-center">
      <!-- Darkmode Component - Button -->
      <DarkButton class="text-xl leading-none" />
      <!-- Gihub Button -->
     <GithubButton to="https://github.com/momoathome" class="text-xl" />
    </div>

  </header>
</template>

<script setup lang="ts"></script>

<style scoped></style>
