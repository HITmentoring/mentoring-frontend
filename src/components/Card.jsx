const ProgramCard = ({ image, title, description }) => {
  return (
    <div className="p-3 border rounded-lg shadow-lg bg-white">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-t-lg" />
      <h3 className="text-xl font-bold mt-4">{title}</h3>
      <p className="mt-2">{description}</p>
    </div>
  );
};

export default ProgramCard;
