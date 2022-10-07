import React from 'react';
import PropTypes from 'prop-types';
import './header.scss';

const Header = props => {
  const { showForm, switchOnToday, switchOnPreviousWeek, switchOnNextWeek, currentMonth } = props;

  return (
    <header className="header">
      <button className="button create-event-btn" onClick={showForm}>
        <i className="fas fa-plus create-event-btn__icon"></i>Create
      </button>
      <div className="navigation">
        <button className="navigation__today-btn button" onClick={switchOnToday}>
          Today
        </button>
        <button className="icon-button navigation__nav-icon" onClick={switchOnPreviousWeek}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="icon-button navigation__nav-icon" onClick={switchOnNextWeek}>
          <i className="fas fa-chevron-right"></i>
        </button>
        <span className="navigation__displayed-month">{currentMonth}</span>
      </div>
    </header>
  );
};

Header.propTypes = {
  showForm: PropTypes.func.isRequired,
  switchOnToday: PropTypes.func.isRequired,
  switchOnPreviousWeek: PropTypes.func.isRequired,
  switchOnNextWeek: PropTypes.func.isRequired,
  currentMonth: PropTypes.string.isRequired,
};

export default Header;
