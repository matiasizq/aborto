export interface Product {
    id: string;
    shopifyId: string;
    nodeId: string;
    name: string;
    oldPrice: string;
    newPrice: string;
    mediaUrl: string;
    isVideo: boolean;
    link: string;
    isBestSeller?: boolean;
    customAction?: 'elite' | 'platinum' | 'ultra' | 'detail';
    description?: string;
}

export const getProducts = (t: (key: string) => string): Product[] => [
    {
        id: 'ultimate-2026',
        shopifyId: '8476233466031',
        nodeId: 'product-component-ultimate-2026',
        name: t('product.ultimate_name'),
        oldPrice: '690',
        newPrice: '29.99',
        mediaUrl: 'https://raw.githubusercontent.com/clashivfx-creator/MEDIA/68188fbd934f38239f153e8e3066141a6d392dba/aaaaaaaaaxa%20(0-00-00-00).00_00_00_00.Imagen%20fija001.png',
        isVideo: false,
        link: 'https://clashivfx.myshopify.com/products/2026-ultimate-editing-pack',
        isBestSeller: true,
        customAction: 'elite'
    },
    { id: 'platinum-luts', shopifyId: '8480949338287', nodeId: 'product-component-1770349141842', name: t('product.platinum_name'), oldPrice: '590', newPrice: '9', mediaUrl: 'https://raw.githubusercontent.com/clashivfx-creator/MEDIA/df400ef6c01fa19845ba4ac2d823b7a0c3e2424b/Gemini_Generated_Image_415qgo415qgo415q%20(0-00-00-00).png', isVideo: false, link: 'https://clashivfx.myshopify.com/products/platinum-luts-pack', isBestSeller: true, customAction: 'platinum' },
    { id: 'pack-avanzado', shopifyId: '8170902323375', nodeId: 'product-component-1770243396499', name: t('product.advanced_name'), oldPrice: '79.99', newPrice: '19.99', mediaUrl: 'https://raw.githubusercontent.com/clashivfx-creator/MEDIA/8e004d4cbb88eb3ab02efcadff921b2d21cbb8ab/VIDEOPAGINA1500X1500_TERMINAENBUCLE%20(1).gif', isVideo: false, link: 'https://clashivfx.myshopify.com/products/pack-de-efectos-esenciales', isBestSeller: true, customAction: 'detail', description: t('product.advanced_desc') },
    { id: 'reel-editable', shopifyId: '8239170584751', nodeId: 'product-component-1770348980660', name: t('product.reel_name'), oldPrice: '49.99', newPrice: '19.99', mediaUrl: 'https://raw.githubusercontent.com/clashivfx-creator/MEDIA/b1df4397a668b7c7fba94d7ea0d9a25bcc506486/ssstik.io__clashivfx_1765467778171%20(1).gif', isVideo: false, link: 'https://clashivfx.myshopify.com/products/reel-editable-proyecto', customAction: 'detail', description: t('product.reel_desc') },
    { id: 'mixed-media', shopifyId: '8211512656047', nodeId: 'product-component-1770243459634', name: t('product.mixed_name'), oldPrice: '49.99', newPrice: '14.99', mediaUrl: 'https://raw.githubusercontent.com/clashivfx-creator/MEDIA/68188fbd934f38239f153e8e3066141a6d392dba/yafue_1_0b1b8d6c-1b1d-4f93-9932-59313a4563bd.gif', isVideo: false, link: 'https://clashivfx.myshopify.com/products/proyecto-mixed-media', customAction: 'detail', description: t('product.mixed_desc') },
    { id: 'yeat-project-renamed', shopifyId: '8448020152495', nodeId: 'product-component-yeat-renamed', name: t('product.yeat_name'), oldPrice: '49.99', newPrice: '19.99', mediaUrl: 'https://raw.githubusercontent.com/clashivfx-creator/MEDIA/68188fbd934f38239f153e8e3066141a6d392dba/h264%20(2).gif', isVideo: false, link: 'https://clashivfx.myshopify.com/products/proyecto-mixed-media-copia', customAction: 'detail', description: t('product.yeat_desc') },
    { id: 'shakes', shopifyId: '8476755034287', nodeId: 'product-component-1770243514859', name: t('product.shakes_name'), oldPrice: '49.99', newPrice: '9.99', mediaUrl: 'https://raw.githubusercontent.com/clashivfx-creator/MEDIA/68188fbd934f38239f153e8e3066141a6d392dba/CENTRALCEEFT.LILBABY-BAND4BAND_MUSICVIDEO__1%20(1).gif', isVideo: false, link: 'https://clashivfx.myshopify.com/products/shakes', customAction: 'detail', description: t('product.shakes_desc') },
    { id: 'titulo-3d', shopifyId: '8277720498351', nodeId: 'product-component-1770243528146', name: t('product.title3d_name'), oldPrice: '19.99', newPrice: '4.99', mediaUrl: 'https://raw.githubusercontent.com/clashivfx-creator/MEDIA/8e004d4cbb88eb3ab02efcadff921b2d21cbb8ab/AdobeExpress-Comp1_1%20(1).gif', isVideo: false, link: 'https://clashivfx.myshopify.com/products/pack-avanzado-copia', customAction: 'detail', description: t('product.title3d_desc') },
    { id: 'ultraworkflow', shopifyId: '8473627754671', nodeId: 'product-component-1770243547561', name: t('product.workflow_name'), oldPrice: '50.00', newPrice: '39.99', mediaUrl: 'https://raw.githubusercontent.com/clashivfx-creator/MEDIA/68188fbd934f38239f153e8e3066141a6d392dba/videonashhh%20(1).gif', isVideo: false, link: 'https://e08ff1-xx.myshopify.com/products/pack-avanzado-copia-1', customAction: 'ultra', description: t('product.workflow_desc') }
];
