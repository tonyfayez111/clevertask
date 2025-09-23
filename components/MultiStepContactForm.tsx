'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Check } from 'lucide-react'
import { 
  formSteps, 
  validateStep, 
  isStepComplete,
  industryOptions,
  aiGoalOptions,
  hearAboutUsOptions,
  type CompleteFormData 
} from '../lib/formValidation'

interface MultiStepContactFormProps {
  onSubmit: (data: CompleteFormData) => void
  isSubmitting?: boolean
  hasSubmitted?: boolean
}

export default function MultiStepContactForm({ onSubmit, isSubmitting = false, hasSubmitted = false }: MultiStepContactFormProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<Partial<CompleteFormData>>({
    aiGoals: []
  })
  const [errors, setErrors] = useState<Record<string, string[]>>({})

  const updateFormData = (stepData: Partial<CompleteFormData>) => {
    const newFormData = { ...formData, ...stepData }
    setFormData(newFormData)
    
    // Validate current step
    const validation = validateStep(currentStep, newFormData)
    setErrors(validation.errors)
  }

  const goToNextStep = () => {
    const validation = validateStep(currentStep, formData)
    if (validation.isValid && currentStep < formSteps.length) {
      setCurrentStep(currentStep + 1)
      setErrors({})
    } else {
      setErrors(validation.errors)
    }
  }

  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      setErrors({})
    }
  }

  const goToStep = (step: number) => {
    // Only allow going to previous steps or current step
    if (step <= currentStep) {
      setCurrentStep(step)
      setErrors({})
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const validation = validateStep(currentStep, formData)
    
    if (validation.isValid && currentStep === formSteps.length) {
      onSubmit(formData as CompleteFormData)
    } else {
      setErrors(validation.errors)
    }
  }

  const isCurrentStepValid = isStepComplete(currentStep, formData)
  const canProceed = isCurrentStepValid && !hasSubmitted

  const handleCheckboxChange = (value: string, checked: boolean) => {
    const currentGoals = formData.aiGoals || []
    const newGoals = checked 
      ? [...currentGoals, value]
      : currentGoals.filter(goal => goal !== value)
    
    updateFormData({ aiGoals: newGoals })
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="form-group">
              <label className="form-label">Full Name *</label>
              <input
                type="text"
                className={`form-input ${errors.fullName ? 'border-red-500' : ''}`}
                value={formData.fullName || ''}
                onChange={(e) => updateFormData({ fullName: e.target.value })}
                placeholder="Enter your full name"
                maxLength={50}
              />
              {errors.fullName && <span className="text-red-500 text-sm">{errors.fullName[0]}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">Business Email *</label>
              <input
                type="email"
                className={`form-input ${errors.businessEmail ? 'border-red-500' : ''}`}
                value={formData.businessEmail || ''}
                onChange={(e) => updateFormData({ businessEmail: e.target.value })}
                placeholder="Enter your business email"
                maxLength={100}
              />
              {errors.businessEmail && <span className="text-red-500 text-sm">{errors.businessEmail[0]}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">Company Name *</label>
              <input
                type="text"
                className={`form-input ${errors.companyName ? 'border-red-500' : ''}`}
                value={formData.companyName || ''}
                onChange={(e) => updateFormData({ companyName: e.target.value })}
                placeholder="Enter your company name"
                maxLength={100}
              />
              {errors.companyName && <span className="text-red-500 text-sm">{errors.companyName[0]}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">Phone Number (optional)</label>
              <input
                type="tel"
                className="form-input"
                value={formData.phoneNumber || ''}
                onChange={(e) => updateFormData({ phoneNumber: e.target.value })}
                placeholder="Enter your phone number"
              />
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div className="form-group">
              <label className="form-label">Industry / Business Type *</label>
              <select
                className={`form-input ${errors.industry ? 'border-red-500' : ''}`}
                value={formData.industry || ''}
                onChange={(e) => updateFormData({ industry: e.target.value })}
              >
                <option value="">Select your industry</option>
                {industryOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              {errors.industry && <span className="text-red-500 text-sm">{errors.industry[0]}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">Company Size *</label>
              <div className="space-y-2">
                {['1-10', '11-50', '51-200', '200+'].map(size => (
                  <label key={size} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="companySize"
                      value={size}
                      checked={formData.companySize === size}
                      onChange={(e) => updateFormData({ companySize: e.target.value as any })}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span className="text-secondary">
                      {size === '1-10' && '1–10 employees'}
                      {size === '11-50' && '11–50 employees'}
                      {size === '51-200' && '51–200 employees'}
                      {size === '200+' && '200+ employees'}
                    </span>
                  </label>
                ))}
              </div>
              {errors.companySize && <span className="text-red-500 text-sm">{errors.companySize[0]}</span>}
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div className="form-group">
              <label className="form-label">What's your biggest operational challenge right now? *</label>
              <textarea
                className={`form-textarea ${errors.operationalChallenge ? 'border-red-500' : ''}`}
                value={formData.operationalChallenge || ''}
                onChange={(e) => updateFormData({ operationalChallenge: e.target.value })}
                placeholder="Describe your main operational challenge..."
                rows={4}
                maxLength={500}
              />
              <div className="text-sm text-secondary mt-1">
                {(formData.operationalChallenge || '').length}/500 characters
              </div>
              {errors.operationalChallenge && <span className="text-red-500 text-sm">{errors.operationalChallenge[0]}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">What are you looking to achieve with AI? *</label>
              <div className="space-y-3">
                {aiGoalOptions.map(option => (
                  <label key={option.value} className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={(formData.aiGoals || []).includes(option.value)}
                      onChange={(e) => handleCheckboxChange(option.value, e.target.checked)}
                      className="w-4 h-4 text-blue-600 mt-1"
                    />
                    <span className="text-secondary">{option.label}</span>
                  </label>
                ))}
              </div>
              {errors.aiGoals && <span className="text-red-500 text-sm">{errors.aiGoals[0]}</span>}
              
              {(formData.aiGoals || []).includes('other') && (
                <div className="mt-4">
                  <input
                    type="text"
                    className="form-input"
                    value={formData.otherGoal || ''}
                    onChange={(e) => updateFormData({ otherGoal: e.target.value })}
                    placeholder="Please specify..."
                    maxLength={100}
                  />
                  {errors.otherGoal && <span className="text-red-500 text-sm">{errors.otherGoal[0]}</span>}
                </div>
              )}
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <div className="form-group">
              <label className="form-label">When do you plan to start? *</label>
              <div className="space-y-2">
                {[
                  { value: 'asap', label: 'ASAP' },
                  { value: '1-3-months', label: '1–3 months' },
                  { value: '3-6-months', label: '3–6 months' },
                  { value: 'exploring', label: 'Just exploring' }
                ].map(option => (
                  <label key={option.value} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="timeline"
                      value={option.value}
                      checked={formData.timeline === option.value}
                      onChange={(e) => updateFormData({ timeline: e.target.value as any })}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span className="text-secondary">{option.label}</span>
                  </label>
                ))}
              </div>
              {errors.timeline && <span className="text-red-500 text-sm">{errors.timeline[0]}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">Do you have a budget allocated for this project? *</label>
              <div className="space-y-2">
                {[
                  { value: 'yes', label: 'Yes' },
                  { value: 'no', label: 'No' },
                  { value: 'not-sure', label: 'Not sure yet' }
                ].map(option => (
                  <label key={option.value} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="budgetAllocated"
                      value={option.value}
                      checked={formData.budgetAllocated === option.value}
                      onChange={(e) => updateFormData({ budgetAllocated: e.target.value as any })}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span className="text-secondary">{option.label}</span>
                  </label>
                ))}
              </div>
              {errors.budgetAllocated && <span className="text-red-500 text-sm">{errors.budgetAllocated[0]}</span>}
            </div>
          </div>
        )

      case 5:
        return (
          <div className="space-y-6">
            <div className="form-group">
              <label className="form-label">How did you hear about us? *</label>
              <select
                className={`form-input ${errors.hearAboutUs ? 'border-red-500' : ''}`}
                value={formData.hearAboutUs || ''}
                onChange={(e) => updateFormData({ hearAboutUs: e.target.value })}
              >
                <option value="">Select an option</option>
                {hearAboutUsOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              {errors.hearAboutUs && <span className="text-red-500 text-sm">{errors.hearAboutUs[0]}</span>}
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="max-w-2xl mx-auto">

   

      {/* Step Header */}
 

      {/* Form Content */}
      <form onSubmit={handleSubmit} className="contact-form">
        {renderStepContent()}
        

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-8 pt-6 border-t border-border-color">
          <button
            type="button"
            onClick={goToPreviousStep}
            disabled={currentStep === 1}
            className={`mt-8 flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
              currentStep === 1
                ? 'bg-background-secondary text-text-secondary cursor-not-allowed'
                : 'bg-background-secondary text-text-primary hover:bg-border-color'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>
          <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-primary mb-2">
          Step {currentStep}: {formSteps[currentStep - 1]?.title}
        </h2>
        <p className="text-secondary">
          {formSteps[currentStep - 1]?.description}
        </p>
      </div>
          {currentStep < formSteps.length ? (
            <button
              type="button"
              onClick={goToNextStep}
              disabled={!canProceed}
              className={`flex items-center space-x-2 px-6 py-2 rounded-lg transition-all mt-8  ${
                canProceed
                  ? 'bg-primary-light-blue text-brand-dark-text hover:bg-accent-teal'
                  : 'bg-background-secondary text-text-secondary cursor-not-allowed'
              }`}
            >
              <span >Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={!canProceed || isSubmitting || hasSubmitted}
              className={`mt-8 px-8 py-2 rounded-lg font-semibold transition-all ${
                canProceed && !isSubmitting && !hasSubmitted
                  ? 'bg-primary-light-blue text-brand-dark-text hover:bg-accent-teal transform hover:scale-105'
                  : hasSubmitted
                  ? 'bg-green-500 text-white cursor-not-allowed'
                  : 'bg-background-secondary text-text-secondary cursor-not-allowed'
              }`}
            >
              {isSubmitting ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-brand-dark-text border-t-transparent rounded-full animate-spin"></div>
                  <span>Submitting...</span>
                </div>
              ) : hasSubmitted ? (
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Application Submitted</span>
                </div>
              ) : (
                'Submit Application'
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  )
}

