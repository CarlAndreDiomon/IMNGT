import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";
import toast from "react-hot-toast";

export const useAuthStore = create((set, get) =>({
    authUser: null,
    isSigningUp: false,
    isLoggingIn: false,
    isCheckingAuth: true,


    checkAuth: async () => {
        try {
        const res = await axiosInstance.get("/validate_token.php");
        set({ authUser: res.data });
        } catch (error) {
        if (error.response) {
            console.log("Error response:", error.response);
        } else if (error.request) {
            console.log("No response received:", error.request);
        } else {
            console.log("Error setting up request:", error.message);
        }
        set({ authUser: null });
        } finally {
        set({ isCheckingAuth: false });
        }
    },

        
    signupAdmin: async (data) => {
        set({ isSigningUp: true });
        try {
        const res = await axiosInstance.post("/register.php", data);
        set({ authUser: res.data });
        toast.success("Account created successfully");
        get().connectSocket();
        } catch (error) {
        toast.error(error.response.data.message);
        } finally {
        set({ isSigningUp: false });
        }
    },

    login: async (data) => {
        set({ isLoggingIn: true });
        try {
        const res = await axiosInstance.post("/login.php", data);
        set({ authUser: res.data });
        toast.success("Logged in successfully");
        } catch (error) {
        if (error.response) {
            // Backend responded with error (ex: 401 invalid credentials)
            toast.error(error.response.data.message);
        } else if (error.request) {
            // No response received (server might be down)
            toast.error("Can't connect to server. Please try again later.");
        } else {
            // Error setting up the request
            toast.error("Something went wrong. Please try again.");
        }
        } finally {
        set({ isLoggingIn: false });
        }
    },

    logout: async () => {
        try {
        await axiosInstance.post("/logout.php");
        set({ authUser: null });
        toast.success("Logged out successfully");
        } catch (error) {
        toast.error(error.response.data.message);
        }
    },

}));