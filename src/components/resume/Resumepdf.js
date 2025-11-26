import resumePDF from "../../assets/Gezu_Gudisa_Resume.pdf"; // your PDF file path

const ProfessionalResume = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">
        Gezu Gudisa 
      </h1>

      <iframe
        src={resumePDF}
        title="Gezu Gudisa Resume"
        width="100%"
        height="800px"
        className="border-2 border-blue-500 rounded-lg shadow-lg"
      />
    </div>
  );
};

export default ProfessionalResume;
