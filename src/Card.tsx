type CardProps = {
  size: "small" | "medium" | "large";
  text: string | number;
};

function Card(props: CardProps) {
  const { text, size } = props;
  return (
    <div className="flex-auto box-border h-32 w-24 border-4 border-gray-400 rounded overflow-hidden shadow-lg">
      <div className="px-6 py-10">
        <div className="font-bold text-xl mb-2">{text}</div>
      </div>
    </div>
  );
}

export default Card;
