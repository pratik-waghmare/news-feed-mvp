"use client";
import { useAuthStore } from "newsfeed/store/auth";

export default function Home() {
  const { user, logout } = useAuthStore();

  return (
    <div className="w-[100dvw] h-[100dvh] flex flex-col justify-center items-center">
      <h1>Hello, {user?.name}</h1>
      <button onClick={logout} className="px-4 py-3 bg-red-400 border-[1px] border-black cursor-ponter hover:bg-white">
        Logout
      </button>
    </div>
  );
}
