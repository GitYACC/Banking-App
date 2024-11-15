"use client"

import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const router = useRouter()
    const [user, setUser] = useState<any>(undefined)

    useEffect(() => {
        const caller = async () => {
            const loggedIn = await getLoggedInUser();
            //if (!loggedIn) router.push("/sign-in");
            setUser(loggedIn)
        };
        caller()
    }, []);
    

    return (
        <main className="flex h-screen w-full font-inter">
            <Sidebar user={user} />

            <div className="flex size-full flex-col">
                <div className="root-layout">
                    <Image
                        src="/icons/logo.svg"
                        width={30}
                        height={30}
                        alt="logo"
                    />
                    <div>
                        <MobileNav user={user} />
                    </div>
                </div>
                {children}
            </div>
        </main>
    );
}
