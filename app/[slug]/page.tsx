"use client";

import dynamic from "next/dynamic";
import { use } from "react";
import { type ActiveTab } from "@/App";

const AppComponent = dynamic<any>(() => import("@/App"), { ssr: false });

const pathToTab: Record<string, ActiveTab> = {
    'inicio': 'about',
    'elite-pack': 'products',
    'platinum-pack': 'platinum',
    'tienda': 'store',
    'checkout': 'checkout',
    'ultraworkflow': 'ultra',
};

export default function SectionPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = use(params);
    const slug = resolvedParams.slug;
    const initialTab = pathToTab[slug] || 'products';

    return <AppComponent initialTab={initialTab} />;
}
