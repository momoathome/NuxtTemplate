<script setup lang="ts"></script>

<template>
  <section class="w-full min-h-60vh animate-fade-in z-5 animate-duration-200 relative">
    <!-- Layer 1 -->
    <!-- change ### top-px ### to increase or decrease thickness of arrow -->
    <div
      class="bg-base h-[calc(100%+2px)] w-full top-2px left-0 z-0 hero-clip absolute dark:bg-base_light"
    />
    <!-- Layer 2 -->
    <div
      class="bg-base_light h-[calc(100%+2px)] top-0 left-0 w-[calc(100%)] z-1 hero-clip absolute dark:bg-base"
    />

    <!-- Heading -->
    <div
      class="flex flex-col h-full text-center w-full gap-44 items-center justify-center"
    >
      <div class="mt-12 max-w-30ch z-5 md:max-w-55ch xl:max-w-75ch">
        <h1 class="font-bold text-base leading-none transition text-3rem md:text-4.5rem xl:text-6rem dark:text-base_light">
          Snow0wl
        </h1>
      </div>
      <div class="z-5">
        <h2 class="text-base leading-none transition text-2rem dark:text-base_light">Home</h2>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.hero-clip {
  clip-path: polygon(50% 100%, 0 0, 100% 0);
}
</style>
