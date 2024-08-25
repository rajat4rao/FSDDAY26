import React from 'react';

function DataItem({ label, value }) {
  return (
    <div className="d-flex justify-content-between mb-1">
      <strong className="me-2">{label}:</strong>
      <span className="text-end" style={{ wordBreak: 'break-word' }}>{value}</span>
    </div>
  );
}

export default DataItem;