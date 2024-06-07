import axios from "axios";
import { AxiosResponse } from "axios";

const postSet = (set: { name: string; set: [] }, router: any) => {
  axios
    .post("http://localhost:3030/set/", {
      name: set.name,
      set: set.set,
    })
    .then((response: AxiosResponse<{ id: string }>) => {
      const setId = response.data.id;
      const route = `/set/${setId}`;
      router.push(route);
    });
};

export default postSet;
