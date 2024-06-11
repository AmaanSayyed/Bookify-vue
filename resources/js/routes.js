import { createRouter, createWebHashHistory } from "vue-router";
import BooksViewer from "./components/BooksViewer.vue";
import CreateBooks from "./components/CreateBooks.vue";

const routes = [
  {path: "/",
    redirect: "/books"
  },
  {
    path: "/books",
    name: "Home",
    component: BooksViewer, // Display BooksViewer on the home route
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
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
