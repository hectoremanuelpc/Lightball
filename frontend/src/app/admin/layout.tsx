import type { Metadata } from "next";
import { SessionProvider } from '@/components/SessionProvider';
import "@/app/globals.css";
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: "Administración | Lightball Blog",
  description: "Panel de administración del blog",
};

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <SessionProvider>
      <div className="min-h-screen bg-gray-100">
        {children}
      </div>
    </SessionProvider>
  );
} 