export type Package = {
     _id?: string;
     package_name: string;
     category: string;
     sub_category: string;
     base_package: string;
     navbar: {
          name: string;
          img: any;
     };
     seo_info: {
          meta_title: string;
          meta_description: any;
          meta_keywords: any;
     };
     basic_info: {
          about_description: string;
          days: number;
          night: number;
          img: any;
     };
     overview: {
          places: string[];
          days_overview: {
               title: string;
               description: string;
          }[];
          meals: {
               name: string;
               value: number;
          }[];
          accomodation: string[];
     };
     itinerary: {
          title: string;
          img: any;
          activities: {
               title: string;
               description: string;
          }[];
     }[];
     inclusions: string[];
     exclusions: string[];
     hotels: string[];
     price: number;
     services: string[];
     seo: {
          meta_title: string;
          meta_description: string;
          meta_keywords: string[];
     }
     visa_checklist: {
          title: string;
          description: string[];
     }[];
     is_publish?: boolean;
     createdAt?: string;
     updatedAt?: string;
     __v?: number;
     created_by?: string;
     active_offer?: unknown;
     discounted_price?: number;
     difference_price?: number;
};