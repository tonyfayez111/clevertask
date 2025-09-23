'use client'

import { X, Calendar, Eye } from 'lucide-react'
import { useEffect } from 'react'
import Portal from './Portal'

interface SuccessPopupProps {
  isOpen: boolean
  onClose: () => void
  onBookConsultation: () => void
  onSeeServices: () => void
}

export default function SuccessPopup({ 
  isOpen, 
  onClose, 
  onBookConsultation, 
  onSeeServices 
}: SuccessPopupProps) {
  // Handle escape key press and body scroll
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      // Prevent body scroll when popup is open
      document.body.classList.add('popup-open')
      document.documentElement.style.overflow = 'hidden'
    } else {
      // Restore body scroll when popup is closed
      document.body.classList.remove('popup-open')
      document.documentElement.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.classList.remove('popup-open')
      document.documentElement.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <Portal>
      <div className="popup-overlay ">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm transition-opacity "
        onClick={onClose}
      />
      
      {/* Popup Content */}
      <div className="popup-content">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-background-secondary transition-colors"
        >
          <X className="w-5 h-5 text-text-secondary" />
        </button>

        {/* Content */}
        <div className="p-8 text-center">
          {/* Success Icon */}
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          {/* Success Message */}
          <h3 className="text-2xl font-bold text-primary mb-4">
            Application Submitted Successfully! 🎉
          </h3>
          <p className="text-secondary mb-6 leading-relaxed">
            Thank you for your interest in CleverTask! Our AI specialists will review your application and get back to you within 24 hours.
          </p>
          
          {/* Next Steps */}
          <div className="bg-background-secondary rounded-lg p-4 mb-6">
            <h4 className="font-semibold text-primary mb-2 text-sm">What happens next?</h4>
            <ul className="text-xs text-secondary space-y-1 text-left">
              <li>✓ Application review within 24 hours</li>
              <li>✓ Personalized consultation scheduling</li>
              <li>✓ Custom AI solution proposal</li>
              <li>✓ Implementation roadmap discussion</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={onBookConsultation}
              className="w-full flex items-center justify-center space-x-3 bg-primary-light-blue text-brand-dark-text py-3 px-6 rounded-lg font-semibold hover:bg-accent-teal transition-all duration-200 transform hover:scale-105"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Your Free Consultation</span>
            </button>

            <button
              onClick={onSeeServices}
              className="w-full flex items-center justify-center space-x-3 border-2 border-border-color text-text-primary py-3 px-6 rounded-lg font-semibold hover:bg-background-secondary transition-all duration-200"
            >
              <Eye className="w-5 h-5" />
              <a href="#services">See Our Services</a>
            </button>
          </div>

          {/* Additional Info */}
          <div className="mt-6 pt-6 border-t border-border-color">
            <p className="text-sm text-text-secondary">
              Questions? Email us at{' '}
              <a 
                href="mailto:hello@clevertask.com" 
                className="text-primary-light-blue hover:underline"
              >
                hello@clevertask.com
              </a>
            </p>
          </div>
        </div>
      </div>
      </div>
    </Portal>
  )
}

