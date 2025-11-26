// // import React from "react";
//  import ProfessionalResume from "./Resumepdf";

// const App = () => {
//   const handleDownloadPDF = () => {
//     const link = document.createElement("a");
//     link.href = "/Gezu_Gudisa_Resume.pdf"; 
//     link.download = "Gezu_Gudisa_Resume.pdf";
//     link.click();
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
//       <h1 className="text-3xl font-bold text-blue-700 mb-4">
//         Gezu Gudisa 
//       </h1>

//       {/* Embedded Resume */}
//       <div className="w-full md:w-4/5 mb-6">
//         <iframe
//           src="/Gezu_Gudisa_Resume.pdf"
//           title="Gezu Gudisa Resume"
//           width="100%"
//           height="800px"
//           className="border-2 border-blue-600 rounded-lg shadow-lg mb-6"
//         ></iframe>
//       </div>

//       {/* Download Button */}
//       <button
//         onClick={handleDownloadPDF}
//         className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all"
//       >
//         📄 Download Resume (PDF)
//       </button>
//     </div>
//   );
// };

// export default App;
