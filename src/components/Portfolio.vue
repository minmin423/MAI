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
 <div class="flex gap-5 px-32 py-10 w-full h-96">
    <a class="w-1/4 relative" href="" target="_blank">
        <div class="absolute bg-black/0 inset-0 hover:bg-black/30 text-white/0 hover:text-white/100 flex items-end text-xl pl-5 h-full">
            TEST
        </div>
        <div style="
            background-image: url('../../public/uidesigns/attendancesystem-mobile-list@3x.png');
            background-repeat: no-repeat;
            background-size: auto 100%;
            background-position: center;"
            class="w-full h-full">     
        </div>
    </a>  

    <a class="w-1/4 relative" href="" target="_blank">
        <div class="absolute bg-black/0 inset-0 hover:bg-black/30 text-white/0 hover:text-white/100 flex items-end text-xl pl-5 h-full">
            TEST
        </div>
        <div style="
            background-image: url('../../public/uidesigns/attendancesystem-mobile-list@3x.png');
            background-repeat: no-repeat;
            background-size: auto 100%;
            background-position: center;"
            class="w-full h-full">     
        </div>
    </a>  

    <a class="w-1/4 relative" href="" target="_blank">
        <div class="absolute bg-black/0 inset-0 hover:bg-black/30 text-white/0 hover:text-white/100 flex items-end text-xl pl-5 h-full">
            TEST
        </div>
        <div style="
            background-image: url('../../public/uidesigns/attendancesystem-mobile-list@3x.png');
            background-repeat: no-repeat;
            background-size: auto 100%;
            background-position: center;"
            class="w-full h-full">     
        </div>
    </a>  

    <a class="w-1/4 relative" href="" target="_blank">
        <div class="absolute bg-black/0 inset-0 hover:bg-black/30 text-white/0 hover:text-white/100 flex items-end text-xl pl-5 h-full">
            TEST
        </div>
        <div style="
            background-image: url('../../public/uidesigns/attendancesystem-mobile-list@3x.png');
            background-repeat: no-repeat;
            background-size: auto 100%;
            background-position: center;"
            class="w-full h-full">     
        </div>
    </a>  
    
 </div>


    </div>

</template>

<script setup>
import { ref } from 'vue';

const uidesigns = ref([
    {name:"Attendance System", url:"/uidesigns/attendancesystem.png", href: "https://www.behance.net/gallery/184483719/Attendance-System-Website/modules/1042477149"},
    {name:"E-Commerce - Dates Fruit PH", url:"/uidesigns/datesfruitph.png", href:"https://www.behance.net/gallery/184482817/E-Commerce-UI-Design/modules/1042472751"},
    {name:"Attendance System - Mobile", url:"/uidesigns/attendancesystem-mobile-lobby@3x.png", href: "https://www.behance.net/gallery/184483521/Attendance-System-UI-Design/modules/1042476249"},
    {name:"Upcoming Events", url:"/uidesigns/I7-website@2x.png", href: "https://www.behance.net/gallery/184483299/Upcoming-Events-UI-Design/modules/1042475027"},
])
</script>