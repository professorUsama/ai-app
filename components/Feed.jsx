"use client"

import PromptCard from "./PromptCard";
import { useState, useEffect } from "react";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {
        data.map((post) => (
          <PromptCard
            key={post.id}
            post={post}
            handleTagClick={handleTagClick}
          />
        ))
      }
    </div>
  )
}

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResult, setSearchedResult] = useState([]);
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch("/api/prompt");
    const data = await response.json();
    setPosts(data)
  }
  useEffect(() => {
    fetchPosts();
  }, [])


  const filterPrompts = (searchtext) => {

    const regex = new RegExp(searchtext, "i");
    return posts.filter(
      (item) => regex.test(item.creator.username) || regex.test(item.tag) || regex.test(item.prompt)
    )
  }

  const handleSearchChange = (e) => {
    clearTimeout(e.target.value);
    setSearchText(e.target.value);
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts(e.target.value);
        setSearchedResult(searchResult);
      }, 500)
    )
  }
  const handleTagClick = (tagName) => {
    setSearchText(tagName);
    const searchResult = filterPrompts(tagName);
    setSearchedResult(searchResult);
  }

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input type="text"
          placeholder="Search Prompts..."
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      {
        searchText ? (
          <PromptCardList data={searchedResult} handleTagClick={handleTagClick} />
        ) : (
          <PromptCardList data={posts} handleTagClick={handleTagClick} />
        )
      }
    </section>
  )
}

export default Feed