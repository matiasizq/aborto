"use client";

import dynamic from "next/dynamic";
import { use } from "react";

const AppComponent = dynamic<any>(() => import("@/App"), { ssr: false });

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params);
    const id = resolvedParams.id;

    return <AppComponent initialTab="detail" initialProductId={id} />;
}
