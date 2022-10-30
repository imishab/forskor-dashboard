import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormFeedback,
  CFormLabel,
  CFormSelect,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'

const BrowserDefaults = () => {
  const [validated, setValidated] = useState(false)
  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
  }
  return (
    <CForm className="row g-3 needs-validation" validated={validated} onSubmit={handleSubmit}>
      <CCol md={12}>
        <CFormInput type="text" id="inputEmail4" label="Item Name" />
      </CCol>
      <CCol md={6}>
        <CFormInput type="number" id="number" label="Original Price" />
      </CCol>
      <CCol md={6}>
        <CFormInput type="number" id="number" label="Offer Price" />
      </CCol>
      <CCol xs={12}>
        <CFormInput id="Description" label="Description" placeholder="" />
      </CCol>

      <CCol md={6}>
        <CFormSelect id="inputState" label="State">
          <option>Choose...</option>
          <option>...</option>
        </CFormSelect>
      </CCol>
      <CCol md={6}>
        <CFormSelect id="inputState" label="State">
          <option>Choose...</option>
          <option>...</option>
        </CFormSelect>
      </CCol>
      <CCol md={12}>
        <CInputGroup className="mt-3">
          <CInputGroupText component="label" htmlFor="inputGroupFile01">
            Image
          </CInputGroupText>
          <CFormInput type="file" id="inputGroupFile01" />
        </CInputGroup>
      </CCol>

      <CCol xs={12} className="d-grid gap-12" style={{ marginTop: '35px' }}>
        <CButton type="submit">Add Item</CButton>
      </CCol>
    </CForm>
  )
}

const Validation = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <CRow>
              <CCol sm={5}>
                <h5 id="traffic" className="card-title mb-0">
                  Add Items
                </h5>
              </CCol>
              <CCol sm={7} className="d-none d-md-block">
                <Link to="/items/manage">
                  <CButton color="primary" className="float-end">
                    <h6 className="card-title mb-0">Manage Items</h6>
                  </CButton>
                </Link>
              </CCol>
            </CRow>
          </CCardHeader>
          <CCardBody>{BrowserDefaults()}</CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Validation
