import axios, { AxiosResponse } from "axios";

interface flashcard {
  meaning: string;
  term: string;
}

interface FlashcardSet {
  name: string;
  set: flashcard[];
}

const getSetById = async (id: string): Promise<FlashcardSet> => {
  try {
    const response = await axios.get(`http://localhost:3030/set/${id}`);
    return response.data;
  } catch {
    throw new Error("Error fetching set");
  }
};

export default getSetById;
