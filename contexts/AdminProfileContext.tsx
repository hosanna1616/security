// contexts/AdminProfileContext.tsx
"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

export interface AdminProfile {
  fullName: string;
  email: string;
  avatar?: string;
  role?: string;
  lastLogin?: string;
}

interface AdminProfileContextType {
  adminProfile: AdminProfile | null;
  setAdminProfile: (profile: AdminProfile) => void;
  updateProfile: (updates: Partial<AdminProfile>) => void;
  userInitial: string;
}

const AdminProfileContext = createContext<AdminProfileContextType | undefined>(
  undefined
);

export const useAdminProfile = () => {
  const context = useContext(AdminProfileContext);
  if (context === undefined) {
    throw new Error(
      "useAdminProfile must be used within an AdminProfileProvider"
    );
  }
  return context;
};

interface AdminProfileProviderProps {
  children: ReactNode;
}

export const AdminProfileProvider: React.FC<AdminProfileProviderProps> = ({
  children,
}) => {
  const [adminProfile, setAdminProfileState] = useState<AdminProfile | null>(
    null
  );
  const [userInitial, setUserInitial] = useState<string>("A");

  // Load admin profile from localStorage on component mount
  useEffect(() => {
    const loadAdminProfile = () => {
      try {
        const savedProfile = localStorage.getItem("admin-profile");
        if (savedProfile) {
          const profile: AdminProfile = JSON.parse(savedProfile);
          setAdminProfileState(profile);
          updateUserInitial(profile.fullName);
        }
      } catch (error) {
        console.error("Failed to load admin profile:", error);
      }
    };

    loadAdminProfile();
  }, []);

  const updateUserInitial = (fullName?: string) => {
    if (fullName && fullName.trim().length > 0) {
      const initial = fullName.trim().charAt(0).toUpperCase();
      setUserInitial(initial);
    } else {
      setUserInitial("A");
    }
  };

  const setAdminProfile = (profile: AdminProfile) => {
    setAdminProfileState(profile);
    updateUserInitial(profile.fullName);
    localStorage.setItem("admin-profile", JSON.stringify(profile));
  };

  const updateProfile = (updates: Partial<AdminProfile>) => {
    if (adminProfile) {
      const updatedProfile = { ...adminProfile, ...updates };
      setAdminProfile(updatedProfile);
    } else {
      const newProfile = {
        fullName: updates.fullName || "Admin User",
        email: updates.email || "",
        ...updates,
      };
      setAdminProfile(newProfile);
    }
  };

  return (
    <AdminProfileContext.Provider
      value={{
        adminProfile,
        setAdminProfile,
        updateProfile,
        userInitial,
      }}
    >
      {children}
    </AdminProfileContext.Provider>
  );
};
