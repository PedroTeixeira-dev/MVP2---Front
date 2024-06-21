// src/api/types.ts
export interface Custumer {
    id: string;
    name: string;
    email: string;
    cep: string;
    uf: string;
    city: string;
    street: string;
    number: number;
    complement?: string;
  }

  export interface CustumerPostSchema {
    name: string;
    email: string;
    cep: string;
    uf: string;
    city: string;
    street: string;
    number: number;
    complement?: string;
  }

  export interface CustumerDeleteSchema {
    email: string;
  }
