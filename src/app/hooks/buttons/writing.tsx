import { createWriteSession } from "@/api/set/learning/learning";
import { v4 } from "uuid";

const useWritingButton = (router: any, id: string) => {
  const handleClick = () => {
    const uuid = v4();
    createWriteSession(id, uuid);

    router.push(`/write/${id}?sessionUUID=${uuid}`);
  };

  return handleClick;
};

const WritingButton: React.FC<{ router: any; id: string }> = ({
  router,
  id,
}) => {
  const handleWriting = useWritingButton(router, id);
  return (
    <button
      onClick={handleWriting}
      className="w-32 py-2 font-bold rounded-md bg-black hover:opacity-85"
    >
      Learn
    </button>
  );
};

export default WritingButton;
