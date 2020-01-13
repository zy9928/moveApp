import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './table.scss';

const navList = [
  {
    ico: '/asset/clock_Tab_n.png',
    selectIco: '/asset/clock_Tab_a.png',
    isSelect: 'false',
    title: '计时器',
    path: '/clock'
  },
  {
    ico: '/asset/Club_Tab_n.png',
    selectIco: '/asset/Club_Tab_a.png',
    isSelect: 'false',
    title: 'club',
    path: '/Club'
  },
  {
    ico: '/asset/exercise_Tab_n.png',
    selectIco: '/asset/exercise_Tab_a.png',
    isSelect: 'false',
    title: '运动',
    path: '/exercise'
  },
  {
    ico: '/asset/active_Tab_n.png',
    selectIco: '/asset/active_Tab_a.png',
    isSelect: 'false',
    title: '活动',
    path: '/active'
  },
  {
    ico: '/asset/mine_Tab_n.png',
    selectIco: '/asset/mine_Tab_a.png',
    isSelect: 'false',
    title: '我的',
    path: '/mine'
  }
]

const TableBar = function TableBar () {

  const [pageNow, setpageNow] = useState(0);
  
  const handleIsActive = (index) => () => {
    setpageNow(index);
  }

  const navDom = navList.map((item, index)=>{
    return (
      <NavLink
        to={item.path}
        className="navListItem"
        key={index}
        onClick={handleIsActive(index)}
      >
        <img src={index === pageNow ? item.selectIco : item.ico} alt={item.title} />
      </NavLink>
    )
  })

  return (
    <div className="navBarBox">
      {navDom}
    </div>
  )
}

export default TableBar;
