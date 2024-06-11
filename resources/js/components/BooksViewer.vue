<template>
<div v-for="(book,index) in books" :key="index" >
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-4">
        <div class="flex">
        <div class="p-8 flex-grow">
            <h2 class="block mt-1 text-lg leading-tight font-bold text-violet-700">{{ book.title }}</h2>
            <div class="flex justify-between mt-2">
                <div class="flex flex-col">
                    <span class="font-semibold text-yellow-400">{{ book.author }}</span>
                    <span class="text-black">Ratings: {{ book.rating }}</span>
                    <span>{{ index }}</span>
                </div>
                
                <span class="text-slate-400">{{ book.category }}</span>
            </div>
            <p class="mt-2 text-gray-500">{{ book.description }}</p>
        </div>
        </div>
        <div class="flex  px-8 pb-4">
            <div>
                
                <!-- <router-link :to="`/books/${index}/edit`" class="items-center min-w-14 ring-1 ring-black rounded px-2 py-1.4 bg-purple-50 hover:bg-purple-100 me-4"  @click="editBook(book,index)">Edit</router-link> -->
                <button type="button" class="items-center min-w-14 ring-1 ring-black rounded px-2 py-1.4 bg-purple-50 hover:bg-purple-100 me-4"  @click="editBook(book,index)">Edit </button>
            </div>
            <div>
                <button type="button" class="items-center min-w-14 ring-1 ring-black rounded px-2 py-1.4 bg-purple-50 hover:bg-purple-100" @click="deleteBook(index)" >Delete</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default{
    props: {
    books: {
        type: Object,
        required: true
        }
    
    },
    data() {
        return {
        };
    },
    methods: {
        editBook(book,index){
            const payload = { book: book, index: index };
            console.log('Emitting edit-book event with payload:', payload);
            this.$emit('edit-book', payload);
        },
        deleteBook(index){
            this.$emit('delete-book', index);
        }
    }
};
</script>

<style scoped>

</style>
