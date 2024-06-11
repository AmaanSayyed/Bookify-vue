<template>
    <nav class="bg-white shadow-md">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div class="flex justify-between h-16">
          <div class="flex">
            <div class="shrink-0 flex items-center">
                <span class="ml-3 text-xl font-semibold text-purple-900">E-Books</span>
            </div>
            <div class="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
              <router-link
              to="/" 
              class="text-gray-900 hover:text-purple-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium">
              Home
              </router-link>
              <router-link
              to="/books/create" 
              class="text-gray-900 hover:text-purple-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium">
              Create Books
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
   
  };
  </script>
  
  <style scoped>
  /* Add any additional styles if necessary */
  </style>
  