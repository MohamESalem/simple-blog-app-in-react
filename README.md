# React Blog App with Routing

A dynamic, multi-page blog application built with React, TypeScript, and React Router. This project demonstrates fetching data from a live API and managing navigation between a main post list and detailed post views with comments.

---

## Features

* **Post List:** Fetches and displays a list of all blog posts from the JSONPlaceholder API.
* **Post Detail View:** Clicking on a post navigates the user to a dedicated page showing the full post content and its associated comments.
* **Client-Side Routing:** Uses `react-router-dom` to provide seamless navigation between pages without a full browser reload, including working back/forward buttons.
* **Dynamic Data Fetching:** The detail page dynamically fetches the correct post and comments based on the post ID in the URL.
* **Loading & Error States:** Provides clear feedback to the user while data is being fetched or if an error occurs.
* **Modern UI:** A clean, responsive, and professional user interface built with modern CSS.

---

## Core Concepts Implemented

This project showcases a solid understanding of intermediate React concepts:

* **React Router:**
    * Configuring routes with `<Routes>` and `<Route>`.
    * Navigating with the `<Link>` component.
    * Reading URL parameters with the `useParams` hook.
* **Advanced `useEffect`:**
    * Fetching data on initial component mount with an empty dependency array `[]`.
    * Re-fetching data dynamically when a URL parameter changes by adding it to the dependency array `[postId]`.
* **TypeScript:** Using interfaces to define data structures for type safety.
* **Component Architecture:** Structuring the app into logical "page" components.
* **Async/Await:** Handling asynchronous API calls in a clean and readable way.

---

## How to Run This Project

1.  **Clone the repository.**
2.  **Navigate into the project directory**:
    ```bash
    cd simple-blog-app-in-react
    ```
3.  **Install dependencies**:
    ```bash
    npm install
    ```
4.  **Start the development server**:
    ```bash
    npm run dev
    ```
5.  Open your browser and go to `http://localhost:5173` (or the port specified in your terminal).
