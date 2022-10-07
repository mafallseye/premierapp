<template>
  <div class="home">
    <HelloWorld />

    <section>
      <div class="carousel w-auto">
        <div
          id="slide1"
          class="contener bg-green-400 carousel-item relative w-full"
        >
          <img src="@/assets/dev.jpg" class="w-full" />
          <div class="texte_centrer text-7xl text-white">
            <p class="text-xl">Maguette fall SEYE</p>

            <typical
              class="typicalWrapper"
              :steps="[
                'Developpeur web fullstack ',
                1000,
                'Developpeur  en react js',
                500,
                'Developpeur  en vue js',
                1000,
                'Developpeur  en Python',
                1000,
                'Developpeur en PHP',
                1000,
              ]"
              :loop="Infinity"
              :wrapper="'h3'"
            ></typical>
            <a
              href="CV-maguette-fall-seye.pdf"
              download="CV-maguette-fall-seye.pdf"
            >
              <button
                type="button"
                class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-green-400 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Mon cv
              </button>
            </a>
          </div>
          <div
            class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
          ></div>
        </div>
      </div>
    </section>
    <section class="">
      <div
        class="p-4 w-auto   text-center bg-white shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700"
      >
        <h5 class="mb-2 main text-3xl font-bold text-green-400 dark:text-white">
          <a
            href="#"
            class="block p-2 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-green-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5
              class="mb-2 text-2xl text-transform: uppercase font-bold tracking-tight text-green-400 dark:text-white"
            >
             a propos de moi
            </h5>
            
          </a>
        </h5>
        <p class="text-left text-gray-500 sm:text-lg dark:text-gray-400">
          Je m'appelle Maguette fall SEYE, spécialisée en developpement web et
          mobile.Passionnée en informatique surtout dans le domaine de
          developpement web et mobile je me suis également spécialisée en réseau
          informatique .Je travail dans le domain de developpement
          web(fullStack) et mobile dépuis 4 ans
        </p>
        <div
          class="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4"
        >
          <div class="avatar">
            <div class="w-50 rounded-full">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="teal">
      <div
        class="p-4 bg-green-400 w-full text-center bg-white shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700"
      >
        <p class="mb-5 text-base text-white sm:text-lg dark:text-gray-400">
          Mes projets:
        </p>
      </div>
    </section>
    <section>
      <section class="bg-white dark:bg-gray-900">
        <div class="mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div
            class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0"
          >
            <div class="border p-8">
              <div class="carousel w-full h-full">
                <div id="slide1" class="carousel-item relative w-full">
                  <img src="@/assets/inter1.png" class="w-full" />
                  <div
                    class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
                  >
                    <a href="#slide4" class="btn btn-circle">❮</a>
                    <a href="#slide2" class="btn btn-circle">❯</a>
                  </div>
                </div>
                <div id="slide2" class="carousel-item relative w-full">
                  <img src="@/assets/inter.png" class="w-full" />
                  <div
                    class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
                  >
                    <a href="#slide1" class="btn btn-circle">❮</a>
                    <a href="#slide3" class="btn btn-circle">❯</a>
                  </div>
                </div>
                <div id="slide3" class="carousel-item relative w-full">
                  <img src="@/assets/inter2.png" class="w-full" />
                  <div
                    class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
                  >
                    <a href="#slide2" class="btn btn-circle">❮</a>
                    <a href="#slide4" class="btn btn-circle">❯</a>
                  </div>
                </div>
                <div id="slide4" class="carousel-item relative w-full">
                  <img src="@/assets/intere4.png" class="w-full" />
                  <div
                    class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
                  >
                    <a href="#slide3" class="btn btn-circle">❮</a>
                    <a href="#slide1" class="btn btn-circle">❯</a>
                  </div>
                </div>
              </div>
              <p class="mb-2 text-sm font-bold flex dark:text-white">
                Application transfert d'argent fait en vue js
                <button
                  type="button"
                  class="text-white bg-green-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-0.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <svg
                    aria-hidden="true"
                    class="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="sr-only">Icon description</span>
                </button>
              </p>
            </div>
            <div class="border p-8">
              <div class="carousel">
                <div class="carousel-item w-full">
                  <img src="@/assets/swagger.png" class="w-full" />
                </div>
              </div>
              <p class="mb-2 text-xl font-bold dark:text-white">
                Creation d'api rest en Flask(Framwork python) et swagger
                <button
                  type="button"
                  class="text-white bg-green-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-0.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <svg
                    aria-hidden="true"
                    class="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="sr-only">Icon description</span>
                </button>
              </p>
            </div>
            <div class="border p-8">
              <div class="carousel">
                <div class="carousel-item w-full">
                  <img src="@/assets/inter0.png" class="w-full" />
                </div>
              </div>
              <p class="mb-2 text-xl font-bold dark:text-white">
                Mon Portfolio
                <button
                  type="button"
                  class="text-white bg-green-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-0.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <svg
                    aria-hidden="true"
                    class="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="sr-only">Icon description</span>
                </button>
              </p>
            </div>

            <div class="border p-8">
              <div
                class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
              >
                <svg
                  class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">Finance</h3>
              <p class="text-gray-500 dark:text-gray-400">
                Audit-proof software built for critical financial operations
                like month-end close and quarterly budgeting.
              </p>
            </div>
            <div class="border p-8">
              <div
                class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
              >
                <svg
                  class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"
                  ></path>
                </svg>
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">
                Enterprise Design
              </h3>
              <p class="text-gray-500 dark:text-gray-400">
                Craft beautiful, delightful experiences for both marketing and
                product with real cross-company collaboration.
              </p>
            </div>
            <div class="border p-8">
              <div
                class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
              >
                <svg
                  class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">Operations</h3>
              <p class="text-gray-500 dark:text-gray-400">
                Keep your company’s lights on with customizable, iterative, and
                structured workflows built for all efficient teams and
                individual.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  </div>

  <section class="bg-green-400 dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-sm text-center">
        <!-- <h1
            class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500"
          >
            404
          </h1> -->
        <!-- <p
            class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white"
          >
            Something's missing.
          </p> -->
        <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
          Besoin de developpeur web ? .
        </p>
        <a
          @click="showContact()"
          class="inline-flex cursor-pointer text-gray-900 bg-white hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
          >Contactez moi</a
        >
      </div>
    </div>
  </section>

  <Footer />
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import typical from "vue-typical";
import Footer from "@/components/Footer.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    typical,
    Footer,
  },
  data() {
    return {};
  },
  methods: {
    showContact() {
      this.$router.push("/contact");
    },
  },
};
</script>
<style scoped>
.teal {
  background-color: teal;
}
.contener {
  position: relative;
  text-align: center;
}
.texte_centrer {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.typicalWrapper {
  font-size: 40px;
  font-family: cursive;
}
.main{
  
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-left: 40%;
}
</style>
