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
  CFormInput,
  CFormLabel,
  CFormTextarea,
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
                  Confirmed Orders (For Chef)
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
                  <CTableHeaderCell scope="col">Order Id</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                  {/* <CTableHeaderCell scope="col">User Info</CTableHeaderCell> */}
                  <CTableHeaderCell scope="col">Ordered Items</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Confirm</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Other</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow>
                  <CTableHeaderCell scope="row">45801</CTableHeaderCell>
                  <CTableDataCell scope="row">VectorCrop</CTableDataCell>
                  {/* <CTableDataCell>{VerticallyCentered()}</CTableDataCell> */}
                  <CTableDataCell>{VerticallyCentered2()}</CTableDataCell>
                  <CTableDataCell>
                    <CButton color="success" className="" size="sm" style={{ color: 'white' }}>
                      <h6 id="traffic" className="card-title mb-0">
                        ✔️ Cooked
                      </h6>
                    </CButton>
                  </CTableDataCell>
                  <CTableDataCell>
                    <CButton color="danger" className="" size="sm" style={{ color: 'white' }}>
                      <h6 id="traffic" className="card-title mb-0">
                        ❌ Cancel Order
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

// const VerticallyCentered = () => {
//   const [visible, setVisible] = useState(false)
//   return (
//     <>
//       <CButton
//         onClick={() => setVisible(!visible)}
//         size="sm"
//         style={{ color: 'black', backgroundColor: '#FF9722', borderColor: '#FF9722' }}
//       >
//         View User Info
//       </CButton>
//       <CModal alignment="center" visible={visible} onClose={() => setVisible(false)}>
//         <CModalHeader>
//           <CModalTitle>VectorCrop</CModalTitle>
//         </CModalHeader>
//         <CModalBody>
//           <CForm>
//             <div className="mb-3">
//               <CFormLabel htmlFor="exampleFormControlInput1">Address :</CFormLabel>
//               <CTableDataCell scope="row" style={{ color: '#023020', fontWeight: 'bold' }}>
//                 132, My Street, Bigtown BG23 4YZ England
//               </CTableDataCell>
//             </div>

//             <div className="mb-3">
//               <CFormLabel htmlFor="exampleFormControlInput1">Place :</CFormLabel>
//               <CTableDataCell scope="row" style={{ color: '#023020', fontWeight: 'bold' }}>
//                 Bigtown
//               </CTableDataCell>
//             </div>

//             <div className="mb-3">
//               <CFormLabel htmlFor="exampleFormControlInput1">Pin Code :</CFormLabel>
//               <CTableDataCell scope="row" style={{ color: '#023020', fontWeight: 'bold' }}>
//                 BG23
//               </CTableDataCell>
//             </div>

//             <div className="mb-3">
//               <CFormLabel htmlFor="exampleFormControlInput1">Mobile Number :</CFormLabel>
//               <CTableDataCell scope="row" style={{ color: '#023020', fontWeight: 'bold' }}>
//                 12345678910
//               </CTableDataCell>
//             </div>
//           </CForm>
//         </CModalBody>
//         <CModalFooter>
//           <CButton color="secondary" onClick={() => setVisible(false)}>
//             Close
//           </CButton>
//         </CModalFooter>
//       </CModal>
//     </>
//   )
// }

///------------------- modal for ordered itmes---------------------------------////

const VerticallyCentered2 = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CButton
        onClick={() => setVisible(!visible)}
        size="sm"
        style={{ color: 'black', backgroundColor: '#E8C800', borderColor: '#E8C800' }}
      >
        View Ordered Items
      </CButton>
      <CModal alignment="center" visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>VectorCrop Ordered :</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CTable bordered>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">#</CTableHeaderCell>
                <CTableHeaderCell scope="col">Item Name</CTableHeaderCell>
                <CTableHeaderCell scope="col">Quatity</CTableHeaderCell>
                <CTableHeaderCell scope="col">Price</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              <CTableRow>
                <CTableHeaderCell scope="row">1</CTableHeaderCell>
                <CTableDataCell>Chicken Biriyani</CTableDataCell>
                <CTableDataCell>1</CTableDataCell>
                <CTableDataCell>150/-</CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
          <CButton color="primary" className="float-end">
            <h5 id="traffic" className="card-title mb-0">
              Total : 120/-
            </h5>
          </CButton>
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
