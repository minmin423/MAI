
<script setup>
import Portfolio from './components/Portfolio.vue';
</script>

<template>

<div class="w-full min-h-screen">
  <!-- NAVIGATION BAR -->
  <nav class="flex fixed top-0 left-0 right-0 justify-between h-16 items-center px-32 rounded-b-md bg-slate-100/70 shadow-md z-50">
    <div>
      <img src="./assets/images/logo2.png" alt="logo" class="h-10">
    </div>
    <div class="flex space-x-10 font-dmsans font-semibold text-pinkish gap-10">
      <a href="###">HOME</a>
      <a href="###">PORTFOLIO</a>
      <a href="###">ABOUT</a>
      <a href="###">CONTACT</a>
    </div>
  </nav>
<!-- END OF NAVIGATION BAR -->


  <!-- START OF BODY -->
  <div class="flex relative w-full h-screen items-center justify-between px-32">

    <!-- START OF MAPLE -->

    <div style="background-image: url(maple.png); background-repeat: no-repeat;" class="h-[50vh] w-[52vw] absolute right-0 top-0"> </div>
    <div style="background-image: url(maple2.png); background-repeat: no-repeat; background-size: 100%;" class="h-1/2 w-[41vw] absolute left-0 bottom-0"> </div>
   
      <!-- END OF MAPLE -->

      <div class="flex w-full h-full absolute top-0 right-0 left-0 bottom-0 px-32 py-40">
        <div class="flex justify-start items-center w-1/2 h-full">
          <img src="./assets/images/profile.jpg" alt="profile" class="border-4 border-pinkish/50 h-4/5 rounded-md z-40">
        </div>
    

        <!-- START OF NAMES -->

      <div class="flex flex-col justify-center items-end text-pinkish text-5xl z-40 font-bold w-1/2 h-full">

        <div class="flex flex-col items-end w-fit">
          <p class="leading-8">MARIA ANDRHEA IVHON</p>
          <p class="leading-8 opacity-50">MARIA ANDRHEA IVHON</p>
          <p class="leading-8 opacity-20">MARIA ANDRHEA IVHON</p>

          <div class="flex w-full text-xs text-black font-medium pt-2">
            <p>an aspiring front-end developer / UI/UX designer / Graphic Designer.</p>
          </div>
        </div>      
      </div>
      <!-- END OF NAMES -->
    </div>
  </div>
  <!-- END OF BODY -->

  <Portfolio/>
</div>
</template>