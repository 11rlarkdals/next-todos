"use client";

import Todo from "@/components/todo";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export type UserType = {
  id: number;
  name: string;
  email: string;
  photoUrl: string;
};

export default function Home() {
  return (
    <div>
      <Todo />
    </div>
  );
}
