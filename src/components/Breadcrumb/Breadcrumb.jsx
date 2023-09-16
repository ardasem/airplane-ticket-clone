import React from 'react';
import './Breadcrumb.scss'

function Breadcrumb({ path }) {
  return (
    <nav aria-label="breadcrumb">
      <ul className="breadcrumb">
        {path.map((item, index) => (
          <li key={index} className={`breadcrumb-item ${index === path.length - 1 ? 'active' : ''}`}>
            {index === path.length - 1 ? (
              item.label
            ) : (
              <a href={item.url}>{item.label}{' >'}</a>
            )} 
          </li>
          
        ))}
      </ul>
    </nav>
  );
}

export default Breadcrumb;