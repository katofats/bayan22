
'use client'
import { useState } from "react"
import items from './data/al_bayern'

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="mx-auto">
      {items.map((item, index) => (
        <div key={index} className="bg-white shadow-md rounded-b mb-2 border-b border-gray-300">
          {/* Accordion Header */}
          <button 
            onClick={() => toggleAccordion(index)}
            className="flex justify-between items-center w-full px-4 py-3 text-lg font-semibold
             text-gray-800 bg-gray-100 rounded-t-lg hover:bg-gray-200 transition"
          >
            <span className="flex items-center space-x-2">
              {/* Number with background */}
              <span className="w-6 h-6 flex items-center justify-center bg-gray-700 text-white font-bold rounded-full">
                {index + 1}
              </span>
              <span>{item.title}</span>
            </span>
            <span className={`transition-transform ${openIndex === index ? "rotate-180" : ""}`}>
              ▼
            </span>
          </button>

          {/* Accordion Content */}
          <div 
            className={`overflow-hidden transition-all duration-300 ease-in-out text-gray-600`}
            style={{
              maxHeight: openIndex === index ? "450px" : "0",
              opacity: openIndex === index ? "1" : "0",
              padding: openIndex === index ? "16px" : "0 16px"
            }}
          >
            <div className="space-y-2">
              {item.content.map((point, i) => (
                <div key={i} className="py-1">{point}</div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Accordion