"use client";

import React, { useState, useEffect, useCallback } from "react";
import socket, { writeSessionRequest } from "@/api/set/learning/learning";
import WritingSection from "../components/writingSection";
import { useSearchParams } from "next/navigation";

interface Response {
  termsLeft: any[];
  currentTerm: {
    meaning: string;
  };
}

export default function Writing() {
  const [response, setResponse] = useState<Response | null>(null);
  const searchParams = useSearchParams();
  const uuid = searchParams.get("sessionUUID");

  useEffect(() => {
    if (uuid) {
      writeSessionRequest(uuid);
    }
  }, [uuid]);

  const handleSocketResponse = useCallback((response: Response) => {
    setResponse(response);
  }, []);

  useEffect(() => {
    socket.on("write:response", handleSocketResponse);

    return () => {
      socket.off("write:response", handleSocketResponse);
    };
  }, [handleSocketResponse]);

  if (!response) {
    return <h1>No response ._.</h1>;
  }

  if (response.termsLeft.length > 0) {
    return (
      <WritingSection
        id={uuid as string}
        response={response.currentTerm.meaning}
      />
    );
  } else if (response.termsLeft.length === 0) {
    console.log(response);
    return <h1>Complete!</h1>;
  } else {
    return <h1>No response ._.</h1>;
  }
}
