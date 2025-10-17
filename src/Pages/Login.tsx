import { useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { gsap } from "gsap";

type LoginInputs = {
  email: string;
  password: string;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginInputs>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = (data: LoginInputs) => {
    console.log("Login data:", data);
    alert("Login Successful!");
  };

  useEffect(() => {
    if (formRef.current) {
      gsap.from(formRef.current, {
        y: -40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    }
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500 p-6">
      <form
        ref={formRef}
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md space-y-6 border border-white/30"
      >
        <h2 className="text-3xl font-bold text-center text-white mb-4 drop-shadow-md">
          Welcome Back
        </h2>

        {/* Email */}
        <div>
          <label className="block text-white font-medium mb-1">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
              },
            })}
            className="w-full p-3 rounded-lg bg-white/80 text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          {errors.email && (
            <p className="text-yellow-200 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="block text-white font-medium mb-1">Password</label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "At least 6 characters required" },
            })}
            className="w-full p-3 rounded-lg bg-white/80 text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          {errors.password && (
            <p className="text-yellow-200 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!isValid}
          className={`w-full p-3 rounded-lg font-semibold text-white shadow-lg transition duration-300 ${
            isValid
              ? "bg-indigo-600 hover:bg-indigo-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Login
        </button>

        {/* Signup Link */}
        <p className="text-center text-white/90 text-sm mt-4">
          Don’t have an account?{" "}
          <span
            className="text-yellow-300 font-semibold cursor-pointer hover:underline"
            onClick={() => (window.location.href = "/signup")}
          >
            Sign Up
          </span>
        </p>
      </form>
    </div>
  );
}
