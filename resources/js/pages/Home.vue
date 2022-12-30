<template>
    <div class="container">
        <h1 class="text-2xl mb-2 font-black uppercase">This is Home</h1>
        <p>Hey everyone, this is {{ foo }}</p>
    </div>
</template>

<script setup>
defineOptions({
    name: "PageHome",
});

let foo = $ref("Bar");
</script>
