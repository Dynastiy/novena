<template>
  <div class="bg-gray-100 text-gray-100 px-8 py-12">
    <div
      class="px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-8 mx-auto bg-white text-gray-900 rounded-lg shadow-sm"
    >
      <div class="flex flex-col justify-between">
        <div>
          <h2 class="text-4xl lg:text-5xl font-bold leading-tight">{{ $t('contact.header') }}</h2>
          <!-- <div class="text-gray-700 mt-8">
                Hate forms? Send us an <a class="underline" href="mail-to:#">email</a> instead.
              </div> -->
        </div>
        <div class="mt-8 text-center">
          <img src="@/assets/img/contact.svg" alt="" />
        </div>
      </div>
      <div class="">
        <VForm @submit="submitForm" v-slot="{ meta }">
          <!-- <form @submit.prevent="submitForm"> -->
          <div>
            <span class="uppercase text-sm text-gray-600 font-bold">{{
              $t('contact.full-name')
            }}</span>
            <!-- <input
              class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder=""
              v-model="formData.name"
            /> -->
            <Field
              name="name"
              class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              placeholder="John Doe"
              type="text"
              rules="required"
            />
            <ErrorMessage name="name" class="text-xs text-error-500 text-semibold"></ErrorMessage>
          </div>
          <div class="mt-4">
            <span class="uppercase text-sm text-gray-600 font-bold">{{ $t('contact.email') }}</span>
            <!-- <input
              class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="email"
              v-model="formData.email"
            /> -->
            <Field
              name="email"
              class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              placeholder="jane@gmail.com"
              type="email"
              rules="email"
            />
            <ErrorMessage name="email" class="text-xs text-error-500 text-semibold"></ErrorMessage>
          </div>
          <div class="mt-4">
            <span class="uppercase text-sm text-gray-600 font-bold">{{
              $t('contact.message')
            }}</span>
            <Field name="message" v-slot="{ field }" rules="required">
              <textarea
                v-bind="field"
                class="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              ></textarea>
            </Field>
            <ErrorMessage name="message" class="text-xs text-error-500 text-semibold"></ErrorMessage>
          </div>
          <div class="mt-8">
            <button
              class="uppercase flex justify-center gap-2 items-center text-sm font-bold tracking-wide text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
              :disabled="isLoading || !meta.valid"
              :class="[
                isLoading
                  ? 'bg-neutral-600 text-neutral-800'
                  : meta.valid
                    ? 'bg-secondary'
                    : 'bg-neutral-600 text-neutral-800'
              ]"
            >
              <span class="flex justify-center" v-if="isLoading">
                <Icon icon="line-md:loading-alt-loop" class="text-[20px]" />
              </span>
              <span class="font-bold"> Send </span>
            </button>
          </div>
        </VForm>
      </div>
    </div>
  </div>
</template>

<script>
// import { ref } from 'vue';
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import firebaseApp from '@/axios/firebase' // Import your Firebase configuration file

export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      },
      isLoading: false
    }
  },
  methods: {
    async submitForm(values, { resetForm }) {
      this.isLoading = true
      try {
        const db = getFirestore(firebaseApp)
        await addDoc(collection(db, 'contactMessages'), {
          name: values.name,
          email: values.email,
          message: values.message,
          timestamp: new Date().toISOString()
        })
        // alert('Message sent successfully!')
        this.$toastify({
          text: 'Message sent successfully!',
          duration: 3000,
          className: 'info',
          style: {
            background: '#333',
            fontSize: '12px',
            borderRadius: '5px'
          }
        }).showToast()
        // Clear form data after submission
        resetForm()
      } catch (error) {
        console.error('Error sending message:', error)
        console.log(error)
        alert('An error occurred while sending the message. Please try again later.')
      } finally {
        this.isLoading = false
      }
    }
  }
}
</script>

<!-- <script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    async submitForm() {
      try {
        let res = await this.$axios.post(
          'https://novena--consult-default-rtdb.firebaseio.com/contact.json',
          this.formData
        )
        console.log(res)
      } catch (error) {
        console.log(error)
      }


    }
  }
}
</script> -->

<style></style>
