import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const login = async (email, password) => {
        setIsLoading(true);
        try {
            // Burada gerçek login işlemi yapılacak
            // Şimdilik mock data kullanıyoruz
            const mockUser = {
                id: '1',
                email,
                name: 'Test User'
            };
            setUser(mockUser);
            return { success: true, user: mockUser };
        } catch (error) {
            return { success: false, error: error.message };
        } finally {
            setIsLoading(false);
        }
    };

    const logout = () => {
        setUser(null);
    };

    const register = async (email, password, name) => {
        setIsLoading(true);
        try {
            // Burada gerçek register işlemi yapılacak
            const mockUser = {
                id: '1',
                email,
                name
            };
            setUser(mockUser);
            return { success: true, user: mockUser };
        } catch (error) {
            return { success: false, error: error.message };
        } finally {
            setIsLoading(false);
        }
    };

    const value = {
        user,
        isLoading,
        login,
        logout,
        register,
        isAuthenticated: !!user
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

