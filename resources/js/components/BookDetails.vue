<template>
  <h1 class="my-5 text-3xl text-center text-purple-700 font-medium">Book Details</h1>
  <div v-if="book" class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-4">
    <div class="flex">
      <div class="p-8 flex-grow">
        <h2 class="block mt-1 text-lg leading-tight font-bold text-violet-700">{{ book.title }}</h2>
        <div class="flex justify-between mt-2">
          <div class="flex flex-col">
            <span class="font-semibold text-yellow-400">{{ book.author }}</span>
            <span class="text-black">Ratings: {{ book.rating }}</span>
          </div>
          <span class="text-slate-400">{{ book.category }}</span>
        </div>
        <p class="mt-4 text-slate-500 text-base">{{ book.description }}</p>
      </div>
    </div>
  </div>
  <div v-else class="text-center text-gray-500">
    Loading book details...
  </div>
</template>



<script>
export default {
  props: {
    books: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      book: null,
    };
  },
  watch: {
    '$route.params.index': {
      immediate: true,
      handler(index) {
        this.book = this.books[index] || null;
      },
    },
  },
}
</script>
