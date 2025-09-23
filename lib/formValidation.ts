import { z } from 'zod'

// Form validation schemas for each step
export const step1Schema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters').max(50, 'Full name cannot exceed 50 characters'),
  businessEmail: z.string().email('Please enter a valid business email').max(100, 'Email cannot exceed 100 characters'),
  companyName: z.string().min(2, 'Company name must be at least 2 characters').max(100, 'Company name cannot exceed 100 characters'),
  phoneNumber: z.string().optional()
})

export const step2Schema = z.object({
  industry: z.string().min(1, 'Please select your industry').max(50, 'Industry cannot exceed 50 characters'),
  companySize: z.enum(['1-10', '11-50', '51-200', '200+'], {
    message: 'Please select your company size'
  })
})

export const step3Schema = z.object({
  operationalChallenge: z.string().min(10, 'Please describe your challenge (minimum 10 characters)').max(500, 'Description cannot exceed 500 characters'),
  aiGoals: z.array(z.string()).min(1, 'Please select at least one AI goal').max(5, 'Cannot select more than 5 goals'),
  otherGoal: z.string().max(100, 'Other goal cannot exceed 100 characters').optional()
})

export const step4Schema = z.object({
  timeline: z.enum(['asap', '1-3-months', '3-6-months', 'exploring'], {
    message: 'Please select your timeline'
  }),
  budgetAllocated: z.enum(['yes', 'no', 'not-sure'], {
    message: 'Please select your budget status'
  })
})

export const step5Schema = z.object({
  hearAboutUs: z.string().min(1, 'Please tell us how you heard about us').max(50, 'Cannot exceed 50 characters')
})

// Combined form schema
export const completeFormSchema = step1Schema.merge(step2Schema).merge(step3Schema).merge(step4Schema).merge(step5Schema)

// Type inference
export type Step1Data = z.infer<typeof step1Schema>
export type Step2Data = z.infer<typeof step2Schema>
export type Step3Data = z.infer<typeof step3Schema>
export type Step4Data = z.infer<typeof step4Schema>
export type Step5Data = z.infer<typeof step5Schema>
export type CompleteFormData = z.infer<typeof completeFormSchema>

// Form step configuration
export interface FormStep {
  id: number
  title: string
  description: string
  schema: z.ZodSchema<any>
}

export const formSteps: FormStep[] = [
  {
    id: 1,
    title: 'Contact Info',
    description: 'Quick & Easy',
    schema: step1Schema
  },
  {
    id: 2,
    title: 'Business Details',
    description: 'Tell us about your company',
    schema: step2Schema
  },
  {
    id: 3,
    title: 'AI Needs & Goals',
    description: 'What are you looking to achieve?',
    schema: step3Schema
  },
  {
    id: 4,
    title: 'Timeline & Budget',
    description: 'Optional Qualifiers',
    schema: step4Schema
  },
  {
    id: 5,
    title: 'Marketing Feedback',
    description: 'How did you find us?',
    schema: step5Schema
  }
]

// Options for dropdowns and selections
export const industryOptions = [
  'Technology',
  'Healthcare',
  'Finance',
  'Manufacturing',
  'Retail',
  'Education',
  'Real Estate',
  'Consulting',
  'Other'
]

export const aiGoalOptions = [
  { value: 'automate-tasks', label: 'Automate repetitive tasks' },
  { value: 'customer-support', label: 'Improve customer support' },
  { value: 'optimize-workflows', label: 'Optimize workflows' },
  { value: 'sales-marketing', label: 'Increase sales/marketing performance' },
  { value: 'other', label: 'Other' }
]

export const hearAboutUsOptions = [
  'Google search',
  'LinkedIn',
  'Referral',
  'Social Media',
  'Other'
]

// Utility function to validate a specific step
export function validateStep(stepNumber: number, data: any): { isValid: boolean; errors: Record<string, string[]> } {
  const step = formSteps.find(s => s.id === stepNumber)
  if (!step) {
    return { isValid: false, errors: { general: ['Invalid step'] } }
  }

  const result = step.schema.safeParse(data)
  if (result.success) {
    return { isValid: true, errors: {} }
  }

  const errors: Record<string, string[]> = {}
  result.error.issues.forEach(issue => {
    const path = issue.path.join('.')
    if (!errors[path]) {
      errors[path] = []
    }
    errors[path].push(issue.message)
  })

  return { isValid: false, errors }
}

// Utility function to check if all required fields in a step are filled
export function isStepComplete(stepNumber: number, data: any): boolean {
  const { isValid } = validateStep(stepNumber, data)
  return isValid
}
