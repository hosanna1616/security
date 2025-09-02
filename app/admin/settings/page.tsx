"use client";

import { useState, useEffect } from "react";

interface AdminProfile {
  id: string;
  fullName: string;
  email: string;
  avatar: string | null;
  role: string;
  lastLogin: string;
  createdAt: string;
}

interface SecuritySettings {
  twoFactorEnabled: boolean;
  passwordLastChanged: string;
  loginAlerts: boolean;
}

interface SystemPreferences {
  theme: "dark" | "light" | "system";
  emailNotifications: boolean;
  autoBackup: boolean;
  backupFrequency: "daily" | "weekly" | "monthly";
}

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<"profile" | "security" | "system">(
    "profile"
  );
  const [profile, setProfile] = useState<AdminProfile>({
    id: "admin-001",
    fullName: "Admin User",
    email: "admin@securesystems.com",
    avatar: null,
    role: "Super Administrator",
    lastLogin: "2025-08-30T14:30:00Z",
    createdAt: "2024-01-15T09:00:00Z",
  });

  const [security, setSecurity] = useState<SecuritySettings>({
    twoFactorEnabled: false,
    passwordLastChanged: "2025-07-15T10:00:00Z",
    loginAlerts: true,
  });

  const [system, setSystem] = useState<SystemPreferences>({
    theme: "dark",
    emailNotifications: true,
    autoBackup: true,
    backupFrequency: "weekly",
  });

  const [profileForm, setProfileForm] = useState(profile);
  const [securityForm, setSecurityForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    twoFactorEnabled: security.twoFactorEnabled,
    loginAlerts: security.loginAlerts,
  });
  const [systemForm, setSystemForm] = useState(system);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(
    profile.avatar
  );
  const [messages, setMessages] = useState<{
    type: string;
    text: string;
  } | null>(null);

  // Load settings from localStorage on component mount
  useEffect(() => {
    const loadSettings = () => {
      try {
        const savedProfile = localStorage.getItem("admin-profile");
        const savedSecurity = localStorage.getItem("admin-security");
        const savedSystem = localStorage.getItem("admin-system");

        if (savedProfile) setProfile(JSON.parse(savedProfile));
        if (savedSecurity) setSecurity(JSON.parse(savedSecurity));
        if (savedSystem) setSystem(JSON.parse(savedSystem));
      } catch (error) {
        console.error("Failed to load settings:", error);
      }
    };

    loadSettings();
  }, []);

  // Update form states when profile/security/system changes
  useEffect(() => {
    setProfileForm(profile);
    setSecurityForm((prev) => ({
      ...prev,
      twoFactorEnabled: security.twoFactorEnabled,
      loginAlerts: security.loginAlerts,
    }));
    setSystemForm(system);
    setAvatarPreview(profile.avatar);
  }, [profile, security, system]);

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSecurityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setSecurityForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSystemChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setSystemForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setAvatarPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const saveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedProfile = { ...profileForm, avatar: avatarPreview };
    setProfile(updatedProfile);
    localStorage.setItem("admin-profile", JSON.stringify(updatedProfile));
    setMessages({ type: "success", text: "Profile updated successfully!" });
    setTimeout(() => setMessages(null), 3000);
  };

  const saveSecurity = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      securityForm.newPassword &&
      securityForm.newPassword !== securityForm.confirmPassword
    ) {
      setMessages({ type: "error", text: "New passwords do not match!" });
      setTimeout(() => setMessages(null), 3000);
      return;
    }

    const updatedSecurity = {
      twoFactorEnabled: securityForm.twoFactorEnabled,
      loginAlerts: securityForm.loginAlerts,
      passwordLastChanged: new Date().toISOString(),
    };

    setSecurity(updatedSecurity);
    localStorage.setItem("admin-security", JSON.stringify(updatedSecurity));
    setSecurityForm((prev) => ({
      ...prev,
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    }));
    setMessages({
      type: "success",
      text: "Security settings updated successfully!",
    });
    setTimeout(() => setMessages(null), 3000);
  };

  const saveSystem = (e: React.FormEvent) => {
    e.preventDefault();
    setSystem(systemForm);
    localStorage.setItem("admin-system", JSON.stringify(systemForm));
    setMessages({
      type: "success",
      text: "System preferences updated successfully!",
    });
    setTimeout(() => setMessages(null), 3000);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="p-4 sm:p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-white text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
        Admin Settings
      </h1>

      {/* Status Message */}
      {messages && (
        <div
          className={`mb-6 p-3 rounded-lg text-center font-medium ${
            messages.type === "success"
              ? "bg-green-900/30 text-green-300 border border-green-500/50"
              : "bg-red-900/30 text-red-300 border border-red-500/50"
          }`}
        >
          {messages.text}
        </div>
      )}

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 justify-center">
        <button
          onClick={() => setActiveTab("profile")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
            activeTab === "profile"
              ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/30"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
          }`}
        >
          Profile
        </button>
        <button
          onClick={() => setActiveTab("security")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
            activeTab === "security"
              ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/30"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
          }`}
        >
          Security
        </button>
        <button
          onClick={() => setActiveTab("system")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
            activeTab === "system"
              ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/30"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
          }`}
        >
          System
        </button>
      </div>

      {/* Content */}
      <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/30 shadow-xl">
        {activeTab === "profile" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-white">
                Profile Settings
              </h2>
              <span className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-xs font-medium">
                {profile.role}
              </span>
            </div>

            <form onSubmit={saveProfile} className="space-y-6">
              {/* Avatar Upload */}
              <div className="flex flex-col items-center sm:flex-row sm:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full bg-gray-700 border-2 border-gray-600 flex items-center justify-center overflow-hidden">
                    {avatarPreview ? (
                      <img
                        src={avatarPreview}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-2xl text-gray-400">
                        {profile.fullName.charAt(0).toUpperCase()}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex-grow">
                  <label className="block mb-2 text-gray-300">
                    Profile Photo
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarChange}
                    className="w-full text-gray-300 bg-gray-700 px-4 py-2 rounded-lg border border-gray-600/50 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-medium file:bg-blue-500 file:text-white hover:file:bg-blue-600"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    JPG, PNG or GIF. Max 5MB.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 text-gray-300">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={profileForm.fullName}
                    onChange={handleProfileChange}
                    className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600/50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-300">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={profileForm.email}
                    onChange={handleProfileChange}
                    className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600/50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-400">
                <div>
                  <span className="block mb-1">Member Since</span>
                  <span className="text-gray-300">
                    {formatDate(profile.createdAt)}
                  </span>
                </div>
                <div>
                  <span className="block mb-1">Last Login</span>
                  <span className="text-gray-300">
                    {formatDate(profile.lastLogin)}
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
              >
                Save Profile
              </button>
            </form>
          </div>
        )}

        {activeTab === "security" && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-white">
              Security Settings
            </h2>

            <form onSubmit={saveSecurity} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-300">
                    Password Management
                  </h3>

                  <div>
                    <label className="block mb-2 text-gray-300">
                      Current Password
                    </label>
                    <input
                      type="password"
                      name="currentPassword"
                      value={securityForm.currentPassword}
                      onChange={handleSecurityChange}
                      className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600/50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-gray-300">
                      New Password
                    </label>
                    <input
                      type="password"
                      name="newPassword"
                      value={securityForm.newPassword}
                      onChange={handleSecurityChange}
                      className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600/50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-gray-300">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={securityForm.confirmPassword}
                      onChange={handleSecurityChange}
                      className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600/50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                  </div>

                  <div className="text-sm text-gray-400">
                    <span className="block mb-1">Last Changed</span>
                    <span className="text-gray-300">
                      {formatDate(security.passwordLastChanged)}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-300">
                    Security Features
                  </h3>

                  <div className="flex items-center gap-3 p-4 bg-gray-700/50 rounded-lg border border-gray-600/30">
                    <input
                      type="checkbox"
                      name="twoFactorEnabled"
                      checked={securityForm.twoFactorEnabled}
                      onChange={handleSecurityChange}
                      className="w-4 h-4 text-blue-500 bg-gray-600 border-gray-400 rounded focus:ring-blue-500"
                    />
                    <div>
                      <label className="text-gray-200 font-medium">
                        Two-Factor Authentication
                      </label>
                      <p className="text-sm text-gray-400 mt-1">
                        Add an extra layer of security to your account
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-gray-700/50 rounded-lg border border-gray-600/30">
                    <input
                      type="checkbox"
                      name="loginAlerts"
                      checked={securityForm.loginAlerts}
                      onChange={handleSecurityChange}
                      className="w-4 h-4 text-blue-500 bg-gray-600 border-gray-400 rounded focus:ring-blue-500"
                    />
                    <div>
                      <label className="text-gray-200 font-medium">
                        Login Alerts
                      </label>
                      <p className="text-sm text-gray-400 mt-1">
                        Get notified of new sign-ins
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
              >
                Update Security Settings
              </button>
            </form>
          </div>
        )}

        {activeTab === "system" && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-white">
              System Preferences
            </h2>

            <form onSubmit={saveSystem} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block mb-2 text-gray-300">Theme</label>
                    <select
                      name="theme"
                      value={systemForm.theme}
                      onChange={(e) =>
                        handleSystemChange(
                          e as React.ChangeEvent<HTMLSelectElement>
                        )
                      }
                      className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600/50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    >
                      <option value="dark">Dark</option>
                      <option value="light">Light</option>
                      <option value="system">System Default</option>
                    </select>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-gray-700/50 rounded-lg border border-gray-600/30">
                    <input
                      type="checkbox"
                      name="emailNotifications"
                      checked={systemForm.emailNotifications}
                      onChange={handleSystemChange}
                      className="w-4 h-4 text-blue-500 bg-gray-600 border-gray-400 rounded focus:ring-blue-500"
                    />
                    <div>
                      <label className="text-gray-200 font-medium">
                        Email Notifications
                      </label>
                      <p className="text-sm text-gray-400 mt-1">
                        Receive important system notifications
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-gray-700/50 rounded-lg border border-gray-600/30">
                    <input
                      type="checkbox"
                      name="autoBackup"
                      checked={systemForm.autoBackup}
                      onChange={handleSystemChange}
                      className="w-4 h-4 text-blue-500 bg-gray-600 border-gray-400 rounded focus:ring-blue-500"
                    />
                    <div>
                      <label className="text-gray-200 font-medium">
                        Automatic Backups
                      </label>
                      <p className="text-sm text-gray-400 mt-1">
                        Automatically backup system data
                      </p>
                    </div>
                  </div>

                  {systemForm.autoBackup && (
                    <div>
                      <label className="block mb-2 text-gray-300">
                        Backup Frequency
                      </label>
                      <select
                        name="backupFrequency"
                        value={systemForm.backupFrequency}
                        onChange={(e) =>
                          handleSystemChange(
                            e as React.ChangeEvent<HTMLSelectElement>
                          )
                        }
                        className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600/50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      >
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="monthly">Monthly</option>
                      </select>
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-700/30">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
                >
                  Save Preferences
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
