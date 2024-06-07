import Writing from "../[id]/page";

const ResultSection: React.FC<{ result: any; uuid: string }> = ({
  result,
  uuid,
}) => {
  if (result.isCorrect === true) {
    return <Writing />;
  } else {
    return <h1>Not Correct -_- {result.correctTerm}</h1>;
  }
};

export default ResultSection;
