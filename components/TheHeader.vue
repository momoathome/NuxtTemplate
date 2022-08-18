<template>
  <!-- prettier-ignore -->
  <header class="m-auto w-full flex py-2 lg:py-0 px-6 b-b-1px b-base/15 dark:b-base_light/10" >
    <div class="flex justify-between items-center w-full">
      <!-- Logo  -->
      <div class="text-2xl font-semibold whitespace-nowrap no-underline dark:text-white">NovisV2</div>

      <Navbar />
      
    </div>

    <div class="flex gap-3 items-center">
      <!-- Darkmode Component - Button -->
      <DarkButton class="text-xl" />
      <!-- Gihub Button -->
     <GithubButton to="https://github.com/momoathome" class="text-xl" />
    </div>

  </header>
</template>

<script setup lang="ts"></script>

<style scoped></style>
