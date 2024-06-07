"use client";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import socket, { answer } from "@/api/set/learning/learning";
import ResultSection from "./resultSection";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import Sidebar from "@/app/components/sidebar";

const WritingSection: React.FC<{ response: string; id: string }> = ({
  response,
  id,
}) => {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState<null | string>(null);
  const onSubmit = (data: any) => answer(id, data);
  const searchParams = useSearchParams();
  const uuid = searchParams.get("sessionUUID");

  useEffect(() => {
    const handleResult = (result: string) => setResult(result);
    socket.on("write:result", handleResult);

    return () => {
      socket.off("write:result", handleResult);
    };
  }, [socket]);

  if (result) {
    return <ResultSection result={result} uuid={uuid as string} />;
  } else {
    return (
      <div className="bg-white min-h-screen w-full grid grid-cols-1 md:grid-cols-7 md:grid-rows-5 gap-0 font-gilory">
        <Sidebar />
        <main className="col-span-1 md:col-span-5 row-span-5 h-sreen">
          <div className="h-screen flex items-center justify-center">
            <div className="w-full ml-16">
              <div className="text-header font-bold">
                <span className="text-Text/Black">{response}</span>
              </div>
              <div className="mt-8">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    {...register(`answer`)}
                    className="border-none h-full w-full text-header bg-transparent focus:outline-none shadow-none p-0 m-0 text-base placeholder-transparent text-main placeholder:text-Placeholder/Primary text-Text/Black font-bold"
                    placeholder="Your answer"
                  />
                  <div className="h-[2px] w-full bg-Border/Primary mt-2 rounded-full"></div>
                  <div className="w-full mt-8">
                    <button
                      type="submit"
                      className="w-32 bg-black p-2 rounded-md font-bold hover:opacity-85 mr-4"
                    >
                      Answer
                    </button>
                    <button
                      type="submit"
                      className="w-32 text-black border border-Border/Primary p-2 rounded-md font-bold hover:opacity-85"
                    >
                      Don't know
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
};

export default WritingSection;
