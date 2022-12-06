<template>
  <!-- prettier-ignore -->
  <div class="bg-base_light flex flex-col font-sans min-h-100vh text-dark-800 dark:( text-light-700 bg-base ) ">
    
    <TheHeader />

    <div class="flex-grow">
      <slot />
    </div>

    <!-- <TheFooter /> -->
  </div>
</template>

<script setup></script>
