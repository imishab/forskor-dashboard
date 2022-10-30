import React, { useState } from 'react'

import {
  CCard,
  CButton,
  CCardBody,
  CCardHeader,
  CModal,
  CCol,
  CRow,
  CModalTitle,
  CModalHeader,
  CTable,
  CModalBody,
  CTableBody,
  CModalFooter,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CFormLabel,
  CForm,
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
                <h5 id="traffic" className="card-title mb-0">
                  Manage Users
                </h5>
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
                  <CTableHeaderCell scope="col">User Id</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Total Orders</CTableHeaderCell>
                  <CTableHeaderCell scope="col">User Info</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Delete User</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow>
                  <CTableHeaderCell scope="row">45801</CTableHeaderCell>
                  <CTableDataCell scope="row">VectorCrop</CTableDataCell>
                  <CTableHeaderCell scope="row">34</CTableHeaderCell>
                  <CTableDataCell>{VerticallyCentered()}</CTableDataCell>
                  <CTableDataCell>
                    <CButton color="danger" className="" size="sm" style={{ color: 'white' }}>
                      <h6 id="traffic" className="card-title mb-0">
                        ❌ Delete User
                      </h6>
                    </CButton>
                  </CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

///------------------- modal for user info---------------------------------////

const VerticallyCentered = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CButton
        onClick={() => setVisible(!visible)}
        size="sm"
        style={{ color: 'black', backgroundColor: '#FF9722', borderColor: '#FF9722' }}
      >
        View User Info
      </CButton>
      <CModal alignment="center" visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>VectorCrop</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm>
            <div className="mb-3">
              <CFormLabel htmlFor="exampleFormControlInput1">Address :</CFormLabel>
              <CTableDataCell scope="row" style={{ color: '#023020', fontWeight: 'bold' }}>
                132, My Street, Bigtown BG23 4YZ England
              </CTableDataCell>
            </div>

            <div className="mb-3">
              <CFormLabel htmlFor="exampleFormControlInput1">Place :</CFormLabel>
              <CTableDataCell scope="row" style={{ color: '#023020', fontWeight: 'bold' }}>
                Bigtown
              </CTableDataCell>
            </div>

            <div className="mb-3">
              <CFormLabel htmlFor="exampleFormControlInput1">Pin Code :</CFormLabel>
              <CTableDataCell scope="row" style={{ color: '#023020', fontWeight: 'bold' }}>
                BG23
              </CTableDataCell>
            </div>

            <div className="mb-3">
              <CFormLabel htmlFor="exampleFormControlInput1">Mobile Number :</CFormLabel>
              <CTableDataCell scope="row" style={{ color: '#023020', fontWeight: 'bold' }}>
                12345678910
              </CTableDataCell>
            </div>
          </CForm>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

export default Tables
