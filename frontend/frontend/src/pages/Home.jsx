function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-5">
        <h1 className="text-2xl font-bold">AI Recruiter</h1>
        <button className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition">
          Login
        </button>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center mt-24 px-6">
        <h1 className="text-6xl font-bold leading-tight max-w-4xl">
          Hire Smarter with AI-Powered Profiles
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-xl">
          Replace outdated resumes with structured, AI-generated candidate profiles.
        </p>

        <button className="mt-8 bg-black text-white px-8 py-3 rounded-xl text-lg hover:bg-gray-800 transition">
          Get Started
        </button>
      </div>

      {/* Features Section */}
      <div className="mt-32 px-10 grid md:grid-cols-3 gap-10 text-center">
        
        <div className="p-6 border rounded-xl">
          <h3 className="text-xl font-semibold mb-2">AI Profile Builder</h3>
          <p className="text-gray-600">
            Create structured profiles with AI instead of uploading resumes.
          </p>
        </div>

        <div className="p-6 border rounded-xl">
          <h3 className="text-xl font-semibold mb-2">Smart Skill Detection</h3>
          <p className="text-gray-600">
            Automatically identify skills and experience from user input.
          </p>
        </div>

        <div className="p-6 border rounded-xl">
          <h3 className="text-xl font-semibold mb-2">Recruiter Friendly</h3>
          <p className="text-gray-600">
            Easily compare candidates with structured and clean data.
          </p>
        </div>

      </div>

    </div>
  );
}

export default Home;