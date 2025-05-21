import { Package } from "../package/package";

export type Offer = {
     _id?: string;
     title: string;
     value: number;
     start_date: string;
     end_date: string;
     packages: Package[];
     status: boolean;
     created_by?: string;
     createdAt?: string;
     updatedAt?: string;
     __v?: number;
}