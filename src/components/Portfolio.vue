<template>
    <div class="h-screen w-full">
        
        <div class="flex flex-col text-pinkish jusify-center items-center font-medium w-full text-[110px] px-56 py-10">
                <p class="flex leading-3 opacity-20 justify-end w-full -mb-5">PORTFOLIO</p>
                <div class="flex justify-center items-center relative w-[98vw] h-full">
                    <div class="absolute left-0 h-2 bg-pinkish w-[450px]"></div>
                    <p class="z-30 leading-none">PORTFOLIO</p>
                    <div class="absolute right-0 h-2 bg-pinkish w-[450px]"></div>
                </div>
                <p class="flex leading-3 opacity-50 justify-start w-full -mt-5">PORTFOLIO</p>
        </div>

        <div class="w-full h-[71px] px-72 -mt-20 flex gap-2 justify-end items-end">
            <div class="flex flex-col  font-medium">
                <p class="text-black/50 hover:text-black z-50 cursor-pointer"
                    v-for="(item, index) in menuItems"
                    :key="index"
                    @click="itemIndexClicked(index)"
                    :class="{'text-black/100' : index == itemIndex}"
                    >{{item}}</p>
            </div>

            <div class="flex flex-col py-1 h-full"
                :class="{'justify-center': itemIndex == 1, 'justify-start': itemIndex == 0, 'justify-end': itemIndex == 2}">
                <img src="../assets/images/heart.png" alt="heart" class="h-3 w-3">
            </div>
        </div>
      
    </div>

</template>

<script setup>
    import { ref } from 'vue';

    const menuItems = ref([
        "Graphic Design", "UI Design", "Other Works"
    ]);
    const itemIndex = ref(0);

    const itemIndexClicked = (index) => {
        itemIndex.value = index;
    };
</script>