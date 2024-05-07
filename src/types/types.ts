export interface Gadget {
    name: string;
    price: number;
    discountPrice?: number;
    guarantee: number;
    rating: number;
    isAvailable: true;
    storeAddress?: string;
    color: string;
    brand: string;
    country: string;
}

export interface Tablet {
    tablet: {
        screenSize: number;
        screenName: string;
        memoryGB: number;
        ramGB: number;
    };
    gadget: Gadget;
}

export interface Phone {
    phone: {
        screenSize: number;
        screenName: string;
        memoryGB: number;
        ramGB: number;
        camera: string;
    };
    gadget: Gadget;
}

export interface Headphones {
    headphones: {
        isNoiseReductionAvailable: boolean;
    };
    gadget: Gadget;
}

export interface Computer {
    computer: {
        screenSize: number;
        memoryGB: number;
        ramGB: number;
        OS: string;
        CPU: string
    };
    gadget: Gadget;
}

export interface Accessories {
    accessories: {
        forWhatKindsOfDevises: string
    };
    gadget: Gadget;
}