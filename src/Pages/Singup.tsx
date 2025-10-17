import { useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { gsap } from "gsap";

type Inputs = {
  name: string;
  dob: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<Inputs>({
    mode: "onChange",
    defaultValues: {
      name: "",
      dob: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const password = watch("password");
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = (data: Inputs) => {
    console.log("Form submitted:", data);
    alert("Signup Successful!");
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
        className="bg-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md space-y-5 border border-white/30"
      >
        <h2 className="text-3xl font-bold text-center text-white mb-4 drop-shadow-md">
          Create Your Account
        </h2>

        {/* Name */}
        <div>
          <label className="block text-white font-medium mb-1">Name</label>
          <input
            {...register("name", { required: "Name is required" })}
            className="w-full p-3 rounded-lg bg-white/80 text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          {errors.name && (
            <p className="text-yellow-200 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* DOB */}
        <div>
          <label className="block text-white font-medium mb-1">Date of Birth</label>
          <input
            type="date"
            {...register("dob", { required: "DOB is required" })}
            className="w-full p-3 rounded-lg bg-white/80 text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          {errors.dob && (
            <p className="text-yellow-200 text-sm mt-1">{errors.dob.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-white font-medium mb-1">Phone</label>
          <input
            type="tel"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Enter a valid 10-digit number",
              },
            })}
            className="w-full p-3 rounded-lg bg-white/80 text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          {errors.phone && (
            <p className="text-yellow-200 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-white font-medium mb-1">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email",
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
              minLength: { value: 6, message: "At least 6 characters" },
            })}
            className="w-full p-3 rounded-lg bg-white/80 text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          {errors.password && (
            <p className="text-yellow-200 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-white font-medium mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            {...register("confirmPassword", {
              required: "Please confirm password",
              validate: (value) => value === password || "Passwords do not match",
            })}
            className="w-full p-3 rounded-lg bg-white/80 text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          {errors.confirmPassword && (
            <p className="text-yellow-200 text-sm mt-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={!isValid}
          className={`w-full p-3 rounded-lg font-semibold text-white shadow-lg transition duration-300 ${
            isValid
              ? "bg-indigo-600 hover:bg-indigo-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
