"use client";

import dynamic from "next/dynamic";
import { type ActiveTab } from "@/App";

const AppComponent = dynamic<any>(() => import("@/App"), { ssr: false });

export default function Page() {
    return <AppComponent initialTab="products" />;
}
