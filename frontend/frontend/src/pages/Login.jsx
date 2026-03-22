function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">

      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        
        <h2 className="text-2xl font-bold mb-6 text-center">
          Login to AI Recruiter
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-3 border rounded-lg"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-3 border rounded-lg"
        />

        <button className="w-full bg-black text-white py-3 rounded-lg">
          Login
        </button>

      </div>

    </div>
  );
}

export default Login;