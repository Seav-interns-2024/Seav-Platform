<script setup lang="ts">

</script>

<template>
    <div>
        <title>STI Training Academy</title>
        <header class="shadow-sm bg-grey h-16">
            <nav class="container mx-auto pl-4 pr-4 flex justify-between items-center h-full">
                <NuxtLink to="/">
                    <img src="/assets/images/STIAT-logo.png" class="h-12 w-auto pl-1" alt="Logo"> 
                </NuxtLink>
            </nav>
        </header>

        <div class="container mx-auto p-4">
            <slot />
        </div>
    </div>
</template>


<style scoped>

</style>
