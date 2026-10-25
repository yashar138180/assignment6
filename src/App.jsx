import PostList from "./components/PostList";
import FilterForm from "./components/FilterForm";
import { useEffect, useReducer, useState } from "react";
import { fetchPosts } from "./api/postsApi";
import { initialState, postsReducer } from "./reducers/postsReducer";

function App() {
  const [state, dispatch] = useReducer(postsReducer, initialState);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    let active = true;

    async function loadPosts() {
      dispatch({ type: "FETCH_START" });

      try {
        const posts = await fetchPosts(controller.signal);

        if (active) {
          dispatch({
            type: "FETCH_SUCCESS",
            payload: posts,
          });
        }
      } catch (error) {
        if (active && error.name !== "AbortError") {
          dispatch({
            type: "FETCH_ERROR",
            payload: error.message,
          });
        }
      }
    }

    loadPosts();

    return () => {
      active = false;
      controller.abort();
    };
  }, []);

  const filteredPosts = state.posts.filter((post) =>
    post.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Post Dashboard</h1>

    <FilterForm filter={filter} setFilter={setFilter} />

      {state.loading && <p>Loading posts...</p>}

      {state.error && <p>Error: {state.error}</p>}

      {!state.loading && !state.error && filteredPosts.length === 0 && (
        <p>No posts found.</p>
      )}

      {!state.loading && !state.error && (
        <PostList posts={filteredPosts} />
      )}
    </div>
  );
}

export default App;