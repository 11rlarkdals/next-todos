"use client";
// import Dstructuring from "./destructuring/page";
import { useEffect, useState } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { IoLogOutOutline } from "react-icons/io5";
import { TbLogin } from "react-icons/tb";
import { BsCalendar2Date } from "react-icons/bs";

type TodoType = {
  id: string;
  todo: string;
  done: boolean;
  size?: number;
};

export default function Home() {
  const [input, setInput] = useState<string>("");

  const [todos, setTodos] = useState<TodoType[]>(() => {
    if (typeof window !== "undefined") {
      const savedTodos = window.localStorage.getItem("myTodos");
      return savedTodos ? JSON.parse(savedTodos) : [];
    } else {
      return [];
    }
  });

  // const [deleteId, setDeleteId] = useState<number | null>(null);

  const addButtonHandle = () => {
    console.log(input.replace(/\s/g, "").length);
    if (input.replace(/\s/g, "") !== "") {
      const addTodo = [
        ...todos,
        { id: String(new Date()), todo: input, done: false },
      ];
      if (typeof window !== "undefined") {
        window.localStorage.setItem("myTodos", JSON.stringify(addTodo));
      }
      setTodos(addTodo);
      setInput("");
    }
  };

  const deleteHandle = (e: any, param: string) => {
    console.log(param);
    const filtered = todos.filter((todo) => todo.id !== param);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("myTodos", JSON.stringify(filtered));
    }
    setTodos(filtered);
  };

  const doneHandle = (e: any, param: string) => {
    const editTodos = todos.map((todo) =>
      todo.id === param ? { ...todo, done: !todo.done } : { ...todo }
    );
    if (typeof window !== "undefined") {
      window.localStorage.setItem("myTods", JSON.stringify(editTodos));
    }
    setTodos(editTodos);
  };

  useEffect(() => {}, []);

  return (
    <div className="flex ">
      {/* <div className="m-8 mt-32">
        <Dstructuring array={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10000000]} />
      </div> */}
      <div className=" items-start  ">
        <div className="title text-[5rem] font-extrabold mt-20 m-6 mx-24  borderw">
          Todo
        </div>
        <div className="border-red-500">
          <input
            type="text"
            value={input}
            placeholder="여기에 입력하세요"
            className="text-black text-3xl p-2 max-w-[20rem] mx-10 me-[1050px]"
            onChange={(e) => setInput(e.target.value)}
          />

          {/* <button
          className="border bg-white text-black m-2 p-2 rounded-lg"
          onClick={() => {
            setInput("");
          }}
        >
          클리어
        </button> */}
        </div>

        <button
          className="border bg-white text-black m-2 p-2 rounded-lg max-w-[16rem] mx-[95px]  min-w-[13rem] "
          onClick={addButtonHandle}
        >
          할일 추가
        </button>
        <div className="text-[2rem] items-center">
          {todos?.map((item, index) => {
            return (
              <div key={index} className="relative">
                <div
                  onClick={(e) => doneHandle(e, item.id)}
                  className={`border w-[40rem] m-4 p-5 cursor-pointer mb-4 rounded-3xl relat${
                    item.size && ""
                  } ${item.done && "line-through opacity-50"}`}
                >
                  {item.todo}
                </div>
                <FaDeleteLeft
                  onClick={(e) => deleteHandle(e, item.id)}
                  className="absolute right-auto left-[600px] top-4"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const todos: string[] = ["동해물과", "백두산이"];

const ex = { todos: ["동해물과", "백두산이"] };

function addText(글자: string) {
  console.log("클릭");
  todos.push(글자);
}
