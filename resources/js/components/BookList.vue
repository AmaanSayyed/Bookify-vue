<template>
    <div v-for="(book,index) in books" :key="index" >
        <div
      class="hover:bg-purple-200 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-4 block">
        
            <div class="flex">
                <div class="p-8 flex-grow">
                    <h2 class="block mt-1 text-lg leading-tight font-bold text-violet-700">{{ book.title }}</h2>
                    <div class="flex justify-between mt-2 mb-4">
                        <div class="flex flex-col">
                            <span class="font-semibold text-yellow-400">{{ book.author }}</span>
                            <span class="text-black">Ratings: {{ book.rating }}</span>
                        </div>     
                        <span class="text-slate-400">{{ book.category }}</span>
                    </div>
                    <router-link :to="{name:'ViewBook',params:{index}}" class="btn ">View</router-link>
                </div>
            </div>
        </div>
</div>
</template>

<script>
export default{
    props:{
        books:{
            type:Array,
            required:true,
        }
    }
}
</script>