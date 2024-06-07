"use client";

import { useForm, useFieldArray } from "react-hook-form";
import postSet from "../../../api/set/create";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/app/components/sidebar";
import useWindowSize from "@/app/hooks/window/useWindowSize";
import LoadingScreen from "@/app/components/loadingScreen";

export default function CreateSet() {
  const router = useRouter();
  const size = useWindowSize();
  const { register, handleSubmit, control } = useForm();
  const { fields, remove, append } = useFieldArray({
    control,
    name: "set",
  });

  const [loading, setLoading] = useState(false);
  const lastCardRef = useRef<HTMLDivElement>(null);

  const onSubmit = async (data: any) => {
    setLoading(true);
      await postSet(data, router);
      setLoading(false);
  };

  useEffect(() => {
    append({});
  }, []);

  useEffect(() => {
    if (lastCardRef.current) {
      lastCardRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [fields]);

  return (
    <div className="bg-white min-h-screen w-full grid grid-cols-1 md:grid-cols-7 md:grid-rows-5 gap-0 font-gilory">
      {size.width > 640 && <Sidebar />}
      <main className="col-span-1 md:col-span-5 row-span-5">
        {loading && <LoadingScreen />}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="min-h-16 min-w-2">
            <div className="ml-4 md:ml-16 mt-4 md:mt-8">
              <input
                {...register("name")}
                className="border-none h-full w-full text-header bg-transparent focus:outline-none shadow-none p-0 m-0 text-base placeholder-transparent lg:text-header sm:header/sm placeholder:text-Placeholder/Primary text-Text/Black font-bold"
                placeholder="Untitled Set"
              />
              <div className="h-[2px] w-full bg-Border/Primary mt-2 rounded-full"></div>
            </div>
          </div>
          <div className="w-full">
            {fields.map((field, index) => (
              <div className="flex flex-col justify-center h-full" key={index}>
                <div
                  ref={index === fields.length - 1 ? lastCardRef : null}
                  className="h-80 border border-Border/Primary md:ml-16 sm:mt-8 mt-4 md:mt-6 rounded-md flex flex-col justify-center"
                >
                  <div className="flex flex-col p-6">
                    <label className="pl-4 text-Text/Black font-bold">
                      English (US)
                    </label>
                    <input
                      {...register(`set[${index}].term`)}
                      className="border-none bg-transparent focus:outline-none shadow-none p-0 m-0 text-base placeholder-transparent text-header placeholder:text-Placeholder/Primary text-Text/Black font-bold ml-4"
                      placeholder="Enter term"
                    />
                  </div>
                  <div className="w-full px-8">
                    <div className="h-[2px] w-full bg-Border/Primary rounded-full"></div>
                  </div>
                  <div className="flex flex-col p-6 sm:p-6">
                    <label className="pl-4 font-bold text-Text/Subcolor">
                      Ukrainian
                    </label>
                    <input
                      {...register(`set[${index}].meaning`)}
                      className="border-none bg-transparent focus:outline-none shadow-none p-0 m-0 text-base placeholder-transparent text-header placeholder:text-Placeholder/Subcolor text-Text/Subcolor font-bold ml-4"
                      placeholder="Введіть означення"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full mt-4 md:mt-6 font-bold mb-4 md:mb-6">
            <button
              type="button"
              onClick={() => {
                append({});
              }}
              className="h-full w-32 bg-black ml-4 md:ml-16 mr-4 md:mr-8 rounded-md py-2"
            >
              Add card
            </button>
            <button
              type="submit"
              className="h-full w-32 bg-white border text-Text/Black border-Border/Primary rounded-md py-2"
            >
              Create Set
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
