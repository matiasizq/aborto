"use client";

import dynamic from "next/dynamic";
import { use, useEffect } from "react";
import { type ActiveTab } from "../../App";

const App = dynamic(() => import("../../App"), { ssr: false });

// Map URL paths to tabs
const pathToTab: Record<string, ActiveTab> = {
    'inicio': 'about',
    'elite-pack': 'products',
    'platinum-pack': 'platinum',
    'tienda': 'store',
    'checkout': 'checkout',
    'ultraworkflow': 'ultra',
};

export default function CatchAllPage({ params }: { params: Promise<{ slug?: string[] }> }) {
    const resolvedParams = use(params);
    const slugArray = resolvedParams.slug || [];

    // Handle root route (slugArray is empty)
    if (slugArray.length === 0) {
        return <App initialTab="products" />;
    }

    const primarySlug = slugArray[0];

    // Handle product routes: /producto/nombre-del-producto
    if (primarySlug === 'producto' && slugArray[1]) {
        return <App initialTab="detail" initialProductId={slugArray[1]} />;
    }

    // Handle section routes: /inicio, /tienda, etc.
    const initialTab = pathToTab[primarySlug] || 'products';

    return <App initialTab={initialTab} />;
}
