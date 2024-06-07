"use client";

import React, { useState, useEffect } from "react";
import getSetById from "@/api/set/findById";
import Sidebar from "@/app/components/sidebar";
import useWindowSize from "@/app/hooks/window/useWindowSize";
import SetSwiper from "@/app/components/setSwiper";
import flashcard from "@/app/interfaces/flashcard";
import WritingButton from "@/app/hooks/buttons/writing";
import { useRouter } from "next/navigation";
import LoadingScreen from "@/app/components/loadingScreen";

interface FlashcardSet {
  name: string;
  set: flashcard[];
}

export default function Set({ params }: { params: { id: string } }) {
  const [set, addSet] = useState<FlashcardSet | null>(null);
  const size = useWindowSize();
  const router = useRouter();

  useEffect(() => {
    const fetchSet = async () => {
      try {
        const fetchedSet = await getSetById(params.id);
        addSet(fetchedSet);
      } catch (error) {
        console.error("Error fetching set:", error);
      }
    };

    fetchSet();
  }, [params.id]);

  return (
    <div className="bg-white grid min-h-screen w-full grid-cols-7 grid-rows-5 font-gilory overflow-hidden">
      {size.width > 640 && <Sidebar />}
      <div className="col-span-5 row-span-5">
        {set ? (
          <>
            <div className="w-full pl-44 my-16 text-header font-bold">
              <span className="text-Text/Black">{set.name}</span>
            </div>
            <SetSwiper set={set.set} />
            <div>
              <div className="w-full pl-44 mt-16">
                <WritingButton router={router} id={params.id} />
              </div>
            </div>
          </>
        ) : (
          <LoadingScreen />
        )}
      </div>
      <div className="row-span-5 col-start-7 bg-orange"></div>
    </div>
  );
}
