import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';

const routes = [
  {
    path: '/',
    exact: true,
    component: lazy(()=>import('../page/clock/clock'))
  },
  // 计时器
  {
    path: '/clock',
    component: lazy(()=>import('../page/clock/clock'))
  },
  // club
  {
    path: '/club',
    component: lazy(()=>import('../page/club/club'))
  },
  // 运动
  {
    path: '/exercise',
    component: lazy(()=>import('../page/exercise/exercise'))
  },
  // 活动
  {
    path: '/active',
    component: lazy(()=>import('../page/active/active'))
  },
  // 我的
  {
    path: '/mine',
    component: lazy(()=>import('../page/mine/mine'))
  },
  // 错误页面，路径错误
  {
    path: '/error',
    component: lazy(()=>import('../page/notFound/notFound'))
  },
  {
    path: '/not-match',
    component: lazy(()=>import('../page/notFound/notFound'))
  },
  {
    path: '**',
    render: ()=>(<Redirect to="/not-match" />)
  }
];

export default routes;