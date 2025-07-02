import { z } from "zod"

export const inquirySchema = z.object({
     name: z.string().min(1, 'Name is required'),
     mobile_number: z.string().min(10, 'Mobile number is required'),
     email: z.string().email('Invalid email'),
     city: z.string().min(1, 'City is required'),
     no_of_adult: z.string().min(1, 'Please select number of adults'),
     no_of_children: z.string().min(1, 'Please select number of children'),
     no_of_infant: z.string().min(1, 'Please select number of infants'),
     date_of_travel: z.string().min(1, 'Please select a travel date'),
       // New field for just the textarea input
     extra_details: z.string().optional(),
     // This won't be part of the form, just part of the final payload
     package_details: z
          .object({
               package_name: z.string(),
               budget: z.number(),
               extra_details: z.string().optional(),
               date_of_travel: z.string().optional(),
          })
          .optional(),

     // Optional Fields
     company: z.string().optional(),
     branch: z.string().optional(),
     customer_type: z.string().optional(),
     salutation: z.string().optional(),
     address: z.string().optional(),
     alternate_mobile_number: z.string().optional(),
     trip_type: z.string().optional(),
     lead_priority: z.string().optional(),
     lead_source: z.string().optional(),
     tags: z.array(z.string()).optional(),
     enquiry_type: z.string().optional(),
})

export type InquiryFormValues = z.infer<typeof inquirySchema>