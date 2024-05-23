"use client"

import Profile from "@/components/Profile";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

const UserProfile = ({ params }) => {
  const [userPosts, setUserPosts] = useState([]);
  const searchParams = useSearchParams();
  const username = searchParams.get("name");
  const fetchUserPosts = async () => {
    const response = await fetch(`/api/users/${params?.id}/posts`);
    const data = await response.json();
    setUserPosts(data);
  }
  useEffect(() => {
    fetchUserPosts();
  }, [params.id])


  return (
    <Profile
      name={username}
      desc={`Welcome to ${username}'s personalized profile page`}
      data={userPosts}
    />
  )
}

export default UserProfile