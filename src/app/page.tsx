"use client";
import FeedList from "newsfeed/components/FeedList";
import { useAuthStore } from "newsfeed/store/auth";

export default function Home() {
  const { user, logout } = useAuthStore();

  return (
    <div className="w-[100dvw] h-[100dvh] flex flex-col justify-center items-center">
      <nav className="fixed w-[100dvw] px-4 h-[80px] flex justify-between items-center top-0 left-0 bg-gray-300">
        <h1>Hello, {user?.name}</h1>
        <button
          onClick={logout}
          className="px-4 py-3 bg-red-400 border-[1px] border-black cursor-ponter hover:bg-white rounded-[8px]"
        >
          Logout
        </button>
      </nav>
      <FeedList />
    </div>
  );
}
