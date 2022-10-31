<template>
  <div>
    <HelloWorld />
    <section>
      <div class="carousel w-auto">
        <div
          id="slide1"
          class="contener bg-green-400 carousel-item relative w-full"
        >
          <img src="@/assets/projetA.png" class="w-full" />
          <div class="texte_centrer text-7xl text-white">
            

           
            <p>Interface Application web transfert d'argent</p>
          </div>
          <div
            class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
          ></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
export default {
    components: { HelloWorld }
}
</script>

<style>
.texte_centrer {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>