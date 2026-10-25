# Assignment 6 - Post Dashboard

## Description
This project is a React Post Dashboard built with Vite.

The application fetches posts from an API and allows users
to filter posts by title.

## Features
- Fetch posts using Fetch API
- Manage asynchronous state with useReducer
- Fetch data on mount using useEffect
- Filter posts using a controlled input and useState
- Display loading, error, and empty states
- Render posts using reusable React components

## File Organization
- src/api/postsApi.js: Fetches posts from the API
- src/reducers/postsReducer.js: Manages asynchronous state
- src/components/Post.jsx: Displays a single post
- src/components/PostList.jsx: Displays the list of posts
- src/components/FilterForm.jsx: Provides the title filter
- src/App.jsx: Connects components and manages state

## Challenges
The main challenges were managing asynchronous data,
handling loading and error states, and organizing components.

I also fixed an import path issue related to postsApi.js.

## Technologies
- React
- JavaScript
- Vite
- CSS