import React from 'react';
import { NavLink } from 'react-router-dom';
import './clock.scss'

const Clock = function Clock () {
  return (
    <div className="page clockPage" >
      <div className="pageHeader">
        <NavLink to="/clock/findWitch" className="findWitchIco">
          <img src="/asset/find_wtach.png" alt="手表" />
        </NavLink>
        <span>计时器</span>
        <NavLink to="/clock/add" className="addIco">
          <img src="/asset/add.png" alt="add" />
        </NavLink>
        <NavLink to="/active" className="activeIco">
          <img src="/asset/message.png" alt="通知" />
        </NavLink>
      </div>
    </div>
  )
}

export default Clock;