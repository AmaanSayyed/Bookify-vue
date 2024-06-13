<template>
  <navbar/>
  <router-view v-slot="{ Component }">
    <component 
      :is="Component"
      :books="books"
      :book-to-edit="bookToEdit"
      @form-submitted="addBook"
      @update-book="updateBook"
      @delete-book="removeBook"
      @edit-book="editBook"
      @form-error="handleFormError"
      ref="createBooksComponent"
    />
  </router-view>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      books: [],
      bookToEdit:null,
      api: 'http://127.0.0.1:8000/api/books',
    };
  },
  mounted() {
    this.axios.get(this.api).then((res) => {
      this.books = res.data;
    });
  },
  methods: {
    async addBook(formData) {
      try {
        const res = await this.axios.post(this.api, formData);
        this.books.push(res.data);
      } catch (error) {
        if (error.response && error.response.status === 422) {
          this.$refs.createBooksComponent.handleFormError(error.response.data.errors);
        } else {
          console.error('An error occurred:', error);
        }
      }
    },
    async removeBook(index) {
      try {
        const bookId = this.books[index].id;
        console.log(bookId,index)
        await this.axios.delete(`${this.api}/${bookId}`);
        this.books.splice(index, 1);
      } catch (error) {
        console.error('An error occurred while deleting the book:', error);
      }
    },
    async updateBook({index,formData}){
      try {
        const bookId = this.books[index].id;
        const res = await this.axios.put(`${this.api}/${bookId}`, formData);
        this.books[index] = res.data;
        this.bookToEdit = null;
      } catch (error) {
        if (error.response && error.response.status === 422) {
          this.$refs.createBooksComponent.handleFormError(error.response.data.errors);
        } else {
          console.error('An error occurred while updating the book:', error);
        }
      }
    },
    handleFormError(errors) {
      this.$refs.createBooksComponent.handleFormError(errors);
    },
    editBook(payload){
      this.bookToEdit = payload.book;
      this.bookToEdit.index = payload.index; // Set the index here
      this.$router.push(`/books/${payload.index}/edit`).then(() => {
         this.$refs.createBooksComponent.populateForm(this.bookToEdit);
      });
    },
  },
};
</script>
