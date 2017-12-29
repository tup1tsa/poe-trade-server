export namespace Currency {
    export interface Quantity {
        name: string;
        value: number;
    }
}

export namespace Modifiers {
    export interface Modifier {
        name: string;
        active: boolean;
        type: string;
    }
}