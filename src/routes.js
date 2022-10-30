import React from 'react'
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

// orders
const orders = React.lazy(() => import('./views/orders/all-orders/allorders'))
const pending = React.lazy(() => import('./views/orders/pending/pending'))
const confirmed = React.lazy(() => import('./views/orders/confirmed/confirmed'))
const cooking = React.lazy(() => import('./views/orders/cooking/cooking'))

// Items
const additems = React.lazy(() => import('./views/items/add-items/add-item'))
const manageitems = React.lazy(() => import('./views/items/manage/manage-items'))

// Category
const addcat = React.lazy(() => import('./views/category/add-cat/add-cat'))
const addsubcat = React.lazy(() => import('./views/category/add-sub-cat/add-sub-cat'))
const managecat = React.lazy(() => import('./views/category/manage-cat/manage-cat'))
const managesubcat = React.lazy(() => import('./views/category/manage-sub-cat/manage-sub-cat'))

// Users
const manageuser = React.lazy(() => import('./views/users/manage-users/manage-users'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  //-------orders
  { path: '/orders/all-orders', name: 'All Order', element: orders },
  { path: '/orders/pending', name: 'Pending Orders', element: pending },
  { path: '/orders/confirmed', name: 'Confirmed Orders', element: confirmed },
  { path: '/orders/cooking', name: 'Cooked Orders', element: cooking },
  //-------Items
  { path: '/items/add-item', name: 'Add Items', element: additems },
  { path: '/items/manage', name: 'Manage Items', element: manageitems },
  //-------Category
  { path: '/category/add-cat', name: 'Add Category', element: addcat },
  { path: '/category/add-sub-cat', name: 'Add Sub Category', element: addsubcat },
  { path: '/category/manage-cat', name: 'Manage Category', element: managecat },
  { path: '/category/manage-sub-cat', name: 'Manage Sub Category', element: managesubcat },
  //-------Users
  { path: '/users/manage-users', name: 'Manage Users', element: manageuser },
]

export default routes
