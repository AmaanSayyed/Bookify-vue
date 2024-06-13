import { createRouter, createWebHashHistory } from "vue-router";
import BooksViewer from "./components/BooksViewer.vue";
import CreateBooks from "./components/CreateBooks.vue";
import BookDetails from "./components/BookDetails.vue";
import BookList from "./components/BookList.vue";
import PageNotFound from "./components/PageNotFound.vue"
const routes = [
  {path: "/",
    redirect: "/books"
  },
  {
    path: "/books",
    name: "Home",
    component: BookList, // Display BooksViewer on the home route
    props : true

  },
  {
    path: "/books/create",
    name: "CreateBook",
    component: CreateBooks // Render CreateBooks component for creating a new book
  },
  {
    path: "/books/:index/edit",
    name: "EditBook",
    component: CreateBooks, // Render CreateBooks component for editing a book
    props: true // Pass route params as props
  },
  {
    path: "/books/:index/view",
    name:"ViewBook",
    component:BookDetails,
    props:true
  },
  {
    path:"/books/manage",
    name:"ManageBook",
    component:BooksViewer,
  },
  {
    path:"/:catchAll(.*)",
    name:"NotFound",
    component: PageNotFound
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
