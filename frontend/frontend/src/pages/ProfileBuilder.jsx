import { useState } from "react";

function ProfileBuilder() {
  const [input, setInput] = useState("");
  const [skills, setSkills] = useState([]);

  const handleGenerate = () => {
    let detectedSkills = [];

    if (input.toLowerCase().includes("react")) {
      detectedSkills.push("React");
    }
    if (input.toLowerCase().includes("javascript")) {
      detectedSkills.push("JavaScript");
    }
    if (input.toLowerCase().includes("node")) {
      detectedSkills.push("Node.js");
    }

    setSkills(detectedSkills);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6">

      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-2xl">

        <h1 className="text-3xl font-bold mb-4 text-center">
          🤖 AI Profile Builder
        </h1>

        <p className="text-gray-600 text-center mb-6">
          Describe your experience and let AI structure your profile
        </p>

        <textarea
          className="w-full p-4 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-black"
          rows="4"
          placeholder="e.g. I built a React project using JavaScript and Node.js"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          onClick={handleGenerate}
          className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Generate Profile
        </button>

        {/* Output Section */}
        {skills.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-3">
              Detected Skills
            </h2>

            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-black text-white px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

      </div>

    </div>
  );
}

export default ProfileBuilder;