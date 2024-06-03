const ProgramCard = ({ image, title, description }) => {
  return (
    <div className="p-3 border rounded-lg shadow-lg bg-white flex flex-col items-center">
      <div className="w-full h-40 flex items-center justify-center">
        <img src={image} alt={title} className="h-24 object-contain" />
      </div>
      <h3 className="text-xl font-bold mt-4 text-center">{title}</h3>
      <p className="mt-2 text-center">{description}</p>
    </div>
  );
};

export default ProgramCard;
