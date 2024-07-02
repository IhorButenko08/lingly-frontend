interface StatisticProps {
  upHeader: string;
  downHeader: string;
  content: string;
}

const StatisticElement: React.FC<StatisticProps> = ({ upHeader, downHeader, content }) => {
  return (
    <div className="bg-Background/Element rounded-Primary">
      <div className="p-4">
        <div className="text-Text/Primary/Grey font-medium">{upHeader}</div>
        <div className="text-Text/Primary/Grey font-medium">{downHeader}</div>
        <div className="text-Overview/header font-bold text-Text/Primary/White">{content}</div>
      </div>
    </div>
  );
}

export default StatisticElement;
