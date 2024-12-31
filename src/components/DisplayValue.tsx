// components/DisplayValue.tsx
import React from 'react';

const DisplayValue = ({ value }: { value: any }) => {
  // Handle undefined or null
  if (value === undefined || value === null) {
    return '';
  }

  // Handle React elements
  if (React.isValidElement(value)) {
    return value;
  }

  // Handle arrays
  if (Array.isArray(value)) {
    return (
      <>
        {value.map((item, index) => (
          <span key={index}>
            <DisplayValue value={item} />
            {index < value.length - 1 ? ', ' : ''}
          </span>
        ))}
      </>
    );
  }

  // Handle objects (excluding React elements)
  if (typeof value === 'object') {
    try {
      return JSON.stringify(value, null, 2);
    } catch (e) {
      return '[Complex Object]';
    }
  }

  // Handle primitive values
  return String(value);
};

export default DisplayValue;