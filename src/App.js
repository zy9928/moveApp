import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Loading from './page/loading/loading';
import routes from './router';
import TableBar from './component/tableBar/TableBar';
import './style/style.scss'
import './style/global.scss'

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>{renderRoutes(routes)}</Suspense>
      <TableBar/>
    </BrowserRouter>
  );
}

export default App;
