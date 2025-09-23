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
            <h2 className="text-4xl font-bold mb-6 text-primary">Ready to Transform Your Business?</h2>
            <p className="text-lg mb-8 text-secondary">
            Contact us today to discuss your specific needs and learn how CleverTask can help your business thrive.            </p>
          </div>

          {/* Two Column Layout: Left Info (30%) + Right Form (70%) */}
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-10 gap-8 lg:gap-12">
              {/* Left Side - Contact Info + What Happens Next (30%) */}
              <div className="lg:col-span-3 space-y-8 ">
                {/* Contact Information */}
                <div className="contact-form">
                  <h3 className="text-xl font-semibold mb-6 text-primary">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="contact-icon w-5 h-5" />
                      <span className="text-secondary">hello@clevertask.com</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="contact-icon w-5 h-5" />
                      <span className="text-secondary">+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="contact-icon w-5 h-5" />
                      <span className="text-secondary">Alexandria, Egypt</span>
                    </div>
                  </div>
                </div>

                {/* What Happens Next */}
                <div className="contact-form">
                  <h4 className="text-xl font-semibold text-primary mb-6">What happens next?</h4>
                  <ul className="text-base text-secondary space-y-3">
                    <li className="flex items-start">
                      <span className="text-primary-light-blue mr-3">•</span>
                      <span>Review within 24 hours</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-light-blue mr-3">•</span>
                      <span>Free consultation call</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-light-blue mr-3">•</span>
                      <span>Discuss your needs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-light-blue mr-3">•</span>
                      <span>Custom proposal</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Side - Multi-Step Form (70%) */}
              <div className="lg:col-span-7">
                <div className="w-full">
                  <MultiStepContactForm 
                    key={formKey}
                    onSubmit={handleFormSubmit} 
                    isSubmitting={isSubmitting}
                    hasSubmitted={hasSubmitted}
                  />
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