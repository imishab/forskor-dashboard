import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBurger,
  cilLibraryAdd,
  cilLayers,
  cilSpeedometer,
  cilApps,
  cilBasket,
  cilUser,
} from '@coreui/icons'
import { CNavGroup, CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // },
  },
  {
    component: CNavGroup,
    name: 'Orders',
    icon: <CIcon icon={cilBasket} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Pending Orders',
        to: '/orders/pending',
        badge: {
          color: 'danger',
          text: '231',
        },
      },
      {
        component: CNavItem,
        name: 'Confirmed Orders',
        to: '/orders/confirmed',
        badge: {
          color: 'warning',
          text: '120',
        },
      },
      {
        component: CNavItem,
        name: 'Cooked',
        to: '/orders/cooking',
        badge: {
          color: 'secondary',
          text: '89',
        },
      },
      {
        component: CNavItem,
        name: 'All Orders',
        to: '/orders/all-orders',
        badge: {
          color: 'info',
          text: '403',
        },
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Items',
    to: '/base',
    icon: <CIcon icon={cilBurger} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Add Items',
        to: '/items/add-item',
        icon: <CIcon icon={cilLibraryAdd} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Manage Products',
        to: '/items/manage',
        icon: <CIcon icon={cilLayers} customClassName="nav-icon" />,
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Category',
    to: '/category',
    icon: <CIcon icon={cilApps} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Add Category',
        to: '/category/add-cat',
      },
      {
        component: CNavItem,
        name: 'Add Sub-Category',
        to: '/category/add-sub-cat',
      },
      {
        component: CNavItem,
        name: 'Manage Category',
        to: '/category/manage-cat',
      },
      {
        component: CNavItem,
        name: 'Manage Sub Category',
        to: '/category/manage-sub-cat',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Manage Users',
    to: '/users/manage-users',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
]

export default _nav
