<template>
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-4 p-6">
      <h2 class="text-2xl text-purple-600 font-semibold text-center mb-4">{{ bookToEdit ? 'Edit Book' : 'Add a New Book' }}</h2>
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <label for="title" :class="['label-input']">Title:</label>
          <input type="text" id="title" v-model="title" :class="['input-items']" required >
          <p v-if="errors.title" class="error">{{ errors.title[0] }}</p>
        </div>
        <div class="mb-4">
          <label for="author" :class="['label-input']">Author:</label>
          <input type="text" id="author" v-model="author" :class="['input-items']" required>
          <p v-if="errors.author" class="error">{{ errors.author[0] }}</p>
        </div>
        <div class="mb-4">
          <label for="category" :class="['label-input']">Category:</label>
          <select id="category" v-model="category" :class="['input-items']" required>
            <option value="" disabled>Select a category</option>
            <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
          </select>
          <p v-if="errors.category" class="error">{{ errors.category[0] }}</p>
        </div>
        <div class="mb-4">
          <label for="rating" :class="['label-input']">Rating (1-5):</label>
          <input type="number" id="rating" v-model="rating" min="1" max="5" :class="['input-items']" required>
          <p v-if="errors.rating" class="error">{{ errors.rating[0] }}</p>
        </div>
        <div class="mb-4">
          <label for="description" :class="['label-input']">Description:</label>
          <textarea id="description" v-model="description" :class="['input-items']" required></textarea>
          <p v-if="errors.description" class="error">{{ errors.description[0] }}</p>
        </div>
        <div class="flex items-center justify-between">
          <button type="submit" class="btn">
            {{ bookToEdit ? 'Update' : 'Add' }}
          </button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    props:{
      bookToEdit:{
        type : Object,
        default :null,
      }
    },
    data() {
      return {
        title: '',
        author: '',
        category: '',
        rating: 1,
        description: '',
        categories: ['Adventure', 'Biopic', 'Fantasy', 'Mystery', 'Science Fiction'],
        errors: {}
      };
    },
    watch: {
    bookToEdit(newBook) {
      if (newBook) {
        this.populateForm(newBook);
      }
    }
  },
    methods: {
      async submitForm() {
        try {
          let formData = {
            title: this.title,
            author: this.author,
            category: this.category,
            rating: this.rating,
            description: this.description
          };
          this.errors = {};
          if (this.bookToEdit){
            await this.$emit('update-book',{index:this.bookToEdit.index,formData});
          }
          else{
            await this.$emit('form-submitted', formData);
          }
          this.$router.push('/');
          this.clearForm();
        } catch (error) {
          if (error.response && error.response.status === 422) {
            this.errors = error.response.data.errors;
          } else {
            console.error('An error occurred:', error);
          }
        }
      },
      clearForm() {
        this.title = '';
        this.author = '';
        this.category = '';
        this.rating = 1;
        this.description = '';
        this.errors = {};
      },
      populateForm(book) {
      this.title = book.title;
      this.author = book.author;
      this.category = book.category;
      this.rating = book.rating;
      this.description = book.description;
    },
      handleFormError(errors) {
        this.errors = errors;
      }
    }
  };
  </script>
  
  <style scoped>
  .btn{
    @apply bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded
  }
  .label-input {
    @apply block text-gray-700 text-sm font-bold mb-2;
  }
  .input-items {
    @apply shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight;
  }
  .error{
    @apply text-red-500 text-xs 
  }
  </style>
  