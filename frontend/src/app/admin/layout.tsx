import type { Metadata } from "next";
import SessionProvider from "@/components/SessionProvider";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Administración | Lightball Blog",
  description: "Panel de administración del blog",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <div className="min-h-screen bg-gray-100">
        {children}
      </div>
    </SessionProvider>
  );
} 