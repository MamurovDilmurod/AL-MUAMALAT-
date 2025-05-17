import { createContext, useEffect, useState } from "react";
import { request } from "../services/request";

const defaultProvider = {
    loading: true,
    setLoading: () => Boolean,
    register: () => Promise.resolve(),
};

const AuthContext = createContext(defaultProvider);

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true); // boshlanishda true

    //  loadingni render paytida emas, faqat bir marta o'zgartirish
    useEffect(() => {
        setLoading(false);
    }, []);

    const handleRegister = (submitData) => {
        setLoading(true); // register boshlanishida true qilish mumkin
        request.post("/auth/signup", submitData)
            .then((response) => {
                console.log(response?.data?.data);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const value = {
        loading,
        register: handleRegister,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
