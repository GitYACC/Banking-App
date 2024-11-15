"use client";

import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Home = () => {
    const router = useRouter();
    const [user, setUser] = useState<any>(undefined)

    useEffect(() => {
        const caller = async () => {
            const loggedIn = await getLoggedInUser();

            setUser(loggedIn)
        };
        caller()
    }, []);

    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox
                        type="greeting"
                        title="Welcome"
                        user={user?.name || "Guest"}
                        subtext="Access and manage your account and transactions efficiently"
                    />

                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1250.35}
                    />
                </header>
                RECENT TRANSCATIONS
            </div>

            <RightSidebar
                user={user}
                transcations={[]}
                banks={[{ currentBalance: 123.5 }, { currentBalance: 500.5 }]}
            />
        </section>
    );
};

export default Home;
