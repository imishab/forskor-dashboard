import React from 'react'
import { Link } from 'react-router-dom'
import CIcon from '@coreui/icons-react'

import {
  CCard,
  CButton,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CFormSelect,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { cilBasket, cilPencil, cilTrash } from '@coreui/icons'

const Tables = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <CRow>
              <CCol sm={5}>
                <h5 id="traffic" className="card-title mb-0">
                  Manage Sub-Categories
                </h5>
              </CCol>
              <CCol sm={7} className="d-none d-md-block">
                <Link to="/category/add-sub-cat">
                  <CButton color="primary" className="float-end">
                    <h6 className="card-title mb-0">Add Sub Categories</h6>
                  </CButton>
                </Link>
              </CCol>
            </CRow>
          </CCardHeader>
          <CCardBody>
            <CTable bordered>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">Cat Id</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Image</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Parant Main Category</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
                  {/* <CTableHeaderCell scope="col">User Info</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Ordered Items</CTableHeaderCell> */}
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow>
                  <CTableHeaderCell scope="row">54335</CTableHeaderCell>
                  <CTableDataCell>
                    <img
                      src={require('../../../assets/images/angular.jpg')}
                      style={{ width: '150px' }}
                    />
                  </CTableDataCell>
                  <CTableDataCell>Menu 1</CTableDataCell>
                  <CTableDataCell>/Food</CTableDataCell>

                  <CTableDataCell>
                    <CFormSelect aria-label="Default select example">
                      <option value="1">✔️ Active</option>
                      <option value="2">❌ Disable</option>
                    </CFormSelect>
                  </CTableDataCell>
                  <Link to="/items/manage">
                    <CIcon
                      icon={cilPencil}
                      customClassName="nav-icon"
                      style={{ width: '25px', marginTop: '10px', color: 'black' }}
                    />
                  </Link>
                  <Link to="/items/manage">
                    <CIcon
                      icon={cilTrash}
                      customClassName="nav-icon"
                      style={{ width: '25px', marginTop: '10px', color: 'black' }}
                    />
                  </Link>
                </CTableRow>
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Tables

{
  /* <CTableDataCell>
                    <CButton color="primary" className="">
                      <h6 id="traffic" className="card-title mb-0">
                        view
                      </h6>
                    </CButton>
                  </CTableDataCell> */
}
{
  /* <CTableDataCell>
                    <CButton color="warning" className="">
                      <h6 id="traffic" className="card-title mb-0">
                        view
                      </h6>
                    </CButton>
                  </CTableDataCell> */
}
