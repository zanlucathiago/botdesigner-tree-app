const Tooltip = ({ text }: { text: string }) => {
  return (
    <div className="relative">
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-2 whitespace-nowrap">
        <div className="bg-white text-gray-800 rounded-lg p-2 shadow-md relative">
          {text}
        </div>
        <div className="absolute w-3 h-3 bg-white transform rotate-45 -translate-x-1/2 bottom-full left-1/2 -mb-1"></div>
      </div>
    </div>
  );
};

export default Tooltip;
