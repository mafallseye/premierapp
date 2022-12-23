<template>
  <div>
    <HelloWorld />
    <section class="bg-white dark:bg-gray-900 mt-5">
      <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <section class="bg-white dark:bg-gray-900">
            <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
              <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                Contactez Moi
              </h2>

              <form  class="space-y-8" ref="form" @submit.prevent="sendEmail">
                <div>
                  <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nom &
                   Nom complet</label>
                  <input type="text" id="username" v-model="from_name" name="from_name"
                    class="shadow-sm bg-white-50 border border-gray-900 text-gray-900 text-sm focus:ring-green-400 focus:border-green-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="exemple:MOdou Diop" required />
                </div>
                <div>
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    email</label>
                  <input type="email" id="email" v-model="email_id" name="email_id"
                    class="shadow-sm bg-white-50 border border-gray-900 text-gray-900 text-sm focus:ring-green-400 focus:border-green-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="name@gmail.com" required />
                </div>
                <div>
                  <label for="entreprise"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">entreprise</label>
                  <input type="text" id="entreprise" v-model="entreprise" name="entreprise"
                    class="block p-3 w-full text-sm text-gray-900 bg-white-50 border border-gray-900 shadow-sm focus:ring-green-400 focus:border-green-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="nom de l'entreprise" required />
                </div>

                <div class="sm:col-span-2">
                  <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Votre
                    message</label>
                  <textarea id="message" v-model="message" name="message" rows="6"
                    class="block w-full text-sm text-gray-900 bg-white-50 shadow-sm border border-gray-900 focus:ring-green-400 focus:border-green-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-400 dark:focus:border-green-400"></textarea>
                </div>
                <button type="submit" value="Send"
                  class="py-3 px-5 text-sm font-medium text-center text-gray-900 rounded-lg bg-green-400 sm:w-fit hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-400 dark:bg-green-400 dark:hover:bg-green-700 dark:focus:ring-green-800">
                  Envoyer
                </button>
              </form>
            </div>
          </section>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="p-4 w-full max-w-md bg-white dark:bg-gray-800 dark:border-gray-700">
            <div class="flow-root">
              <ul role="list" class="divide-gray-200 dark:divide-gray-700">
                <li class="py-3 sm:py-4">
                  <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                      <div class="overflow-hidden relative w-10 h-10 bg-green-200 rounded-full dark:bg-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                          stroke="currentColor"
                          class="absolute left-2 right-2 top-2 w-6 h-6 bg-green-200 text-green-400">
                          <path stroke-linecap="round" stroke-linejoin="round"
                            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                      </div>
                    </div>
                    <div class="flex-1 min-w-0">
                      <h1 class="text-xl font-bold text-gray-900 truncate dark:text-white">
                        Addresse
                      </h1>
                      <p class="text-sm text-gray-500 dark:text-gray-400">
                        Sicap Mbao en face ancienne sous-prefecture Dakar,
                        Sénégal
                      </p>
                    </div>
                  </div>
                </li>
                <li class="py-3 sm:py-4">
                  <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                      <div class="overflow-hidden relative w-10 h-10 bg-green-200 rounded-full dark:bg-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                          stroke="currentColor"
                          class="absolute left-2 right-2 top-2 w-6 h-6 bg-green-200 text-green-400">
                          <path stroke-linecap="round"
                            d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                        </svg>
                      </div>
                    </div>
                    <div class="flex-1 min-w-0">
                      <h1 class="text-xl font-bold text-gray-900 truncate dark:text-white">
                        Ecrivez-Moi
                      </h1>
                      <p class="text-sm text-gray-500 dark:text-gray-400">
                        maguettefseye@gmaail.com
                      </p>
                    </div>
                  </div>
                </li>
                <li class="py-3 sm:py-4">
                  <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                      <div class="overflow-hidden relative w-10 h-10 bg-green-200 rounded-full dark:bg-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                          class="absolute left-2 right-2 top-2 w-6 h-6 bg-green-200 text-green-400">
                          <path fill-rule="evenodd"
                            d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                            clip-rule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div class="flex-1 min-w-0">
                      <h1 class="text-xl font-bold text-gray-900 truncate dark:text-white">
                        Appelez-Moi
                      </h1>
                      <p class="text-sm text-gray-500 dark:text-gray-400">
                        +221 78 282 09 98
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
<script>
import HelloWorld from "@/components/HelloWorld.vue";
import Footer from "@/components/Footer.vue";
import emailjs from "@emailjs/browser";
export default {
  components: {
    HelloWorld,
    Footer,
  },
  data() {
    return {
      from_name: "",
      email_id: "",
      message: "",
      entreprise: "",
      site: "",
      showMenu: false,
      secteur_name: "",
    }
  },
  methods: {
    sendEmail() {

      emailjs
        .sendForm(
          "service_lu388b8",
          "template_y62spnf",
          this.$refs.form,
          "y9_Q7y_CoCEaO-Ms9",
          {
            from_name: this.from_name,
            email_id: this.email_id,
            message: this.message,
            entreprise: this.entreprise,


          }
        )

        .then(
          (result) => {
            console.log(result);
            this.$moshaToast("message envoyé...", {
              showIcon: true,
              type: "success",

            });
          },
          (error) => {
            console.log(error);
            this.$moshaToast(
              "un erreur est survenu veuillez essayer plutard...",
              {
                showIcon: true,
                type: "danger",
              }
            );
          }
        );
      this.from_name = "";
      this.email_id = "";
      this.message = "";
      (this.entreprise = "");
    },
  }
};
</script>
