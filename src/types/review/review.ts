export type Review = {
     _id?: string;
     name: string;
     title: string;
     description: string;
     date: string;
     rating: number;
     tags?: string[];
     status: boolean;
     created_by?: string;
     createdAt?: string;
     updatedAt?: string;
     __v?: number;
}