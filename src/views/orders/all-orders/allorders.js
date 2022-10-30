import React from 'react'
import {
  CCard,
  CButton,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'
import CIcon from '@coreui/icons-react'

import { cilCloudDownload } from '@coreui/icons'

const Tables = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <CRow>
              <CCol sm={5}>
                <h4 id="traffic" className="card-title mb-0">
                  All Orders
                </h4>
              </CCol>
              <CCol sm={7} className="d-none d-md-block">
                <CButton color="primary" className="float-end">
                  <CIcon icon={cilCloudDownload} />
                </CButton>
              </CCol>
            </CRow>
          </CCardHeader>
          <CCardBody>
            <CTable striped>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">Order Id</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Name</CTableHeaderCell>{' '}
                  <CTableHeaderCell scope="col">Number</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                  {/* <CTableHeaderCell scope="col">User Info</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Ordered Items</CTableHeaderCell> */}
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow>
                  <CTableHeaderCell scope="row">54335</CTableHeaderCell>
                  <CTableDataCell>VectorCrop</CTableDataCell>
                  <CTableDataCell>1234567890</CTableDataCell>
                  <CTableDataCell>12/11/2022</CTableDataCell>
                  <CTableDataCell>✔️ Delivered</CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">76546</CTableHeaderCell>
                  <CTableDataCell>Mishab</CTableDataCell>
                  <CTableDataCell>1234567890</CTableDataCell>
                  <CTableDataCell>12/11/2022</CTableDataCell>
                  <CTableDataCell>✔️ Delivered</CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">21323</CTableHeaderCell>
                  <CTableDataCell>Shabeer</CTableDataCell>
                  <CTableDataCell>1234567890</CTableDataCell>
                  <CTableDataCell>12/11/2022</CTableDataCell>
                  <CTableDataCell>❌ Cancelled</CTableDataCell>
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
