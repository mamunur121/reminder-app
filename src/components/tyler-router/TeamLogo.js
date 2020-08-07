import React from 'react'
import PropTypes from 'prop-types'

const logos = {
  power:
      <span className='text-danger'><i className="far fa-lightbulb fa-4x"/>
        <span className='d-block'>Electricity</span>
      </span>,
  gas:
      <span className='text-warning'><i className="fas fa-burn fa-4x " />
        <span className='d-block'>Gas</span>
      </span>,
  wifi:
      <span className='text-info'><i className="fas fa-wifi fa-4x" />
        <span className='d-block'>WiFi</span>
      </span>
};

TeamLogo.propTypes = {
  id: PropTypes.string.isRequired,
};

TeamLogo.defaultProps = {
  width: '200px'
};

export default function TeamLogo (props) {
  return (
      <li
          style={{ listStyleType: "none", marginLeft: 10 }}
          {...props}>
        {logos[props.id]}
      </li>
  )
}