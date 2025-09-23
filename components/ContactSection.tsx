'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'
import MultiStepContactForm from './MultiStepContactForm'
import SuccessPopup from './SuccessPopup'
import { type CompleteFormData } from '../lib/formValidation'

export default function ContactSection() {
  const [showSuccessPopup, setShowSuccessPopup] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [formKey, setFormKey] = useState(0)

  const handleFormSubmit = async (data: CompleteFormData) => {
    // Prevent multiple submissions
    if (isSubmitting || hasSubmitted) return
    
    try {
      setIsSubmitting(true)
      
      // Here you would typically send the data to your backend
      console.log('Form submitted with data:', data)
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Mark as submitted and show success popup
      setHasSubmitted(true)
      setShowSuccessPopup(true)
      
      // Reset form by changing key (forces component re-render)
      setFormKey(prev => prev + 1)
      
    } catch (error) {
      console.error('Form submission error:', error)
      // Handle error here - could show error popup
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleNewSubmission = () => {
    // Reset for a new submission (if needed)
    setHasSubmitted(false)
    setFormKey(prev => prev + 1)
  }

  const handleBookConsultation = () => {
    // Open Calendly in new tab
    window.open('https://calendly.com/catherinesamy/new-meeting?month=2025-09', '_blank')
    setShowSuccessPopup(false)
  }

  const handleSeeServices = () => {
    // Here you would scroll to services section or navigate to services page
    console.log('Scrolling to services...')
    setShowSuccessPopup(false)
    
    // Scroll to services section
    const servicesSection = document.getElementById('services')
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <section id="contact" className="py-20 bg-slate-50">
        <div className="max-w-7xl container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-primary">Get in Touch</h2>
            <p className="text-lg mb-8 text-secondary">
              Ready to start your AI transformation journey? Fill out our quick application form below.
            </p>
          </div>

          {/* Three Column Layout with Larger Center */}
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
              {/* Contact Information - Left Side (Compact) */}
              <div className="lg:col-span-3">
                <div className="contact-form">
                  <h3 className="text-lg font-semibold mb-4 text-primary">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Mail className="contact-icon w-4 h-4" />
                      <span className="text-secondary text-sm">hello@clevertask.com</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="contact-icon w-4 h-4" />
                      <span className="text-secondary text-sm">+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="contact-icon w-4 h-4" />
                      <span className="text-secondary text-sm">Alexandria, Egypt</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Multi-Step Form - Center (Larger) */}
              <div className="lg:col-span-6">
                <div className="w-full max-w-3xl mx-auto">
                  <MultiStepContactForm 
                    key={formKey}
                    onSubmit={handleFormSubmit} 
                    isSubmitting={isSubmitting}
                    hasSubmitted={hasSubmitted}
                  />
                </div>
              </div>

              {/* What Happens Next - Right Side (Compact) */}
              <div className="lg:col-span-3">
                <div className="contact-form">
                  <h4 className="text-lg font-semibold text-primary mb-4">What happens next?</h4>
                  <ul className="text-sm text-secondary space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary-light-blue mr-2 text-xs">•</span>
                      <span>Review within 24 hours</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-light-blue mr-2 text-xs">•</span>
                      <span>Free consultation call</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-light-blue mr-2 text-xs">•</span>
                      <span>Discuss your needs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-light-blue mr-2 text-xs">•</span>
                      <span>Custom proposal</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Popup */}
      <SuccessPopup
        isOpen={showSuccessPopup}
        onClose={() => setShowSuccessPopup(false)}
        onBookConsultation={handleBookConsultation}
        onSeeServices={handleSeeServices}
      />
    </>
  )
}