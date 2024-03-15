import React from 'react'
import PropTypes from 'prop-types'
import SliderToggle from '../../components/SiderToggle'

const Calendar = () => {
  const sliderName = ['Month View', 'Week View']

  const days = ['Mon', 'Tue', 'Web', 'Thu', 'Fri', 'Sat', 'Sun']

  return (
    <div className="bg-slate-50 w-[50rem] rounded-xl p-2 text-slate-700">
      <div className="flex justify-between pt-2 pb-4 items-center">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 cursor-pointer transition duration-300 hover:scale-110"
            onMouseDown={(e) => e.preventDefault()}
          >
            <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path>
          </svg>
          <p
            className="text-sm font-semibold cursor-default"
            onMouseDown={(e) => e.preventDefault()}
          >
            November 2023
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 cursor-pointer transition duration-300 hover:scale-110"
            onMouseDown={(e) => e.preventDefault()}
          >
            <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
          </svg>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center bg-gray-300 p-1 rounded-full">
            <SliderToggle sliderName={sliderName}></SliderToggle>
          </div>
          <button className="flex items-center gap-1 bg-gray-700 px-3 py-2 rounded-full text-slate-50 text-xs font-medium">
            Add Event
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
            </svg>
          </button>
        </div>
      </div>

      <div className="grid gap-1 pb-2">
        {[...Array(1)].map((_, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-7 gap-1">
            {days.map((day, colIndex) => (
              <div
                key={colIndex}
                className="text-center text-sm font-bold bg-slate-100 px-2 py-1 rounded-md cursor-default"
                onMouseDown={(e) => e.preventDefault()}
              >
                {day}
              </div>
            ))}
          </div>
        ))}
        {[...Array(5)].map((_, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-7 gap-1">
            {[...Array(7)].map((_, colIndex) => (
              <div
                key={colIndex}
                className="items-center flex justify-center text-sm font-bold cursor-pointer bg-slate-100 w-full h-16 rounded-md"
                onMouseDown={(e) => e.preventDefault()}
              >
                {colIndex}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

Calendar.propTypes = {}

export default Calendar
