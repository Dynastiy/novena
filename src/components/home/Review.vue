<template>
  <div class="">
    <div class="bg-gray-100 text-gray-100 py-12">
      <div class="container">
        <div
          class="px-8 md:px-12 lg:px-16 xl:px-32 py-8 mx-auto bg-white text-gray-900 rounded-lg shadow-sm"
        >
          <h2 class="text-2xl lg:text-4xl font-bold leading-tight">
            <!-- {{ $t('contact.header') }} -->
            Please leave a review
          </h2>

          <VForm @submit="submitForm" v-slot="{ meta }" class="grid gap-4 grid-cols-1 mt-4">
            <div class="">
              <span class="uppercase text-sm block text-gray-600 font-bold">Rating</span>
              <div>
                <Rating v-bind="field" v-model="formData.rating" :cancel="false" />
              </div>
            </div>

            <div>
              <span class="uppercase text-sm text-gray-600 font-bold">Title of your review</span>
              <!-- <input
                class="w-full bg-gray-300 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder=""
                v-model="formData.title"
              /> -->
              <Field
                name="title"
                class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                placeholder=""
                type="text"
                rules="required"
              />
              <ErrorMessage
                name="title"
                class="text-xs text-error-500 text-semibold"
              ></ErrorMessage>
            </div>

            <div class="">
              <span class="uppercase text-sm text-gray-600 font-bold">Your review</span>
              <Field name="review" v-slot="{ field }" rules="required">
                <textarea
                  v-bind="field"
                  class="w-full h-32 bg-gray-300 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                ></textarea>
              </Field>
              <ErrorMessage
                name="review"
                class="text-xs text-error-500 text-semibold"
              ></ErrorMessage>
            </div>

            <div class="">
              <span class="uppercase text-sm block text-gray-600 font-bold">Name</span>
              <!-- <input
                class="w-full bg-gray-300 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                v-model="formData.name"
              /> -->
              <Field
                name="name"
                class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                placeholder=""
                type="text"
                rules="required"
              />
              <ErrorMessage name="name" class="text-xs text-error-500 text-semibold"></ErrorMessage>
            </div>

            <div class="">
              <span class="uppercase text-sm block text-gray-600 font-bold">Email</span>
              <Field
                name="email"
                class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                placeholder=""
                type="email"
                rules="required"
              />
              <ErrorMessage
                name="email"
                class="text-xs text-error-500 text-semibold"
              ></ErrorMessage>
              <!-- <input
                class="w-full bg-gray-300 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                v-model="formData.email"
              /> -->
            </div>

            <div class="mt-8">
              <button
                :disabled="isLoading || !meta.valid"
                :class="[
                  isLoading
                    ? 'bg-neutral-600 text-neutral-800'
                    : meta.valid
                      ? 'bg-secondary'
                      : 'bg-neutral-600 text-neutral-800'
                ]"
                class="uppercase flex items-center gap-2 justify-center text-sm font-bold tracking-wide text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
              >
                <!-- {{ $t('contact.send') }} -->
                <Icon icon="eos-icons:loading" class="text-2xl" v-if="isLoading" />
                Submit your review
              </button>
            </div>
          </VForm>
        </div>
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
        rating: 0,
        name: '',
        email: '',
        review: '',
        title: ''
      },
      isLoading: false
    }
  },
  methods: {
    async submitForm(values, { resetForm }) {
      this.isLoading = true
      try {
        const db = getFirestore(firebaseApp)
        await addDoc(collection(db, 'reviews'), {
          name: values.name,
          email: values.email,
          title: values.title,
          review: values.review,
          rating: Number(this.formData.rating),
          timestamp: new Date().toISOString()
        })
        // alert('Message sent successfully!')
        this.$toastify({
          text: 'Review sent successfully!',
          duration: 3000,
          className: 'info',
          style: {
            background: '#333',
            fontSize: '12px',
            borderRadius: '5px'
          }
        }).showToast()
        // Clear form data after submission
        this.formData.rating = 0
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

<style></style>
