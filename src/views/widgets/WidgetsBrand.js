import React from 'react'
import PropTypes from 'prop-types'
import { CWidgetStatsD, CRow, CCol } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilBurger, cilCart, cilApps, cilUser } from '@coreui/icons'

const WidgetsBrand = () => {
  return (
    <CRow>
      <CCol sm={6} lg={3}>
        <CWidgetStatsD
          className="mb-4"
          icon={<CIcon icon={cilCart} height={52} className="my-4 text-white" />}
          values={[{ title: 'Total Order', value: '12k+' }]}
          style={{
            '--cui-card-cap-bg': '#3b5998',
          }}
        />
      </CCol>

      <CCol sm={6} lg={3}>
        <CWidgetStatsD
          className="mb-4"
          icon={<CIcon icon={cilBurger} height={52} className="my-4 text-white" />}
          values={[{ title: 'Total Items', value: '132' }]}
          style={{
            '--cui-card-cap-bg': '#00aced',
          }}
        />
      </CCol>

      <CCol sm={6} lg={3}>
        <CWidgetStatsD
          className="mb-4"
          icon={<CIcon icon={cilApps} height={52} className="my-4 text-white" />}
          values={[
            { title: 'Category', value: '21' },
            { title: 'Sub Category', value: '12' },
          ]}
          style={{
            '--cui-card-cap-bg': '#4875b4',
          }}
        />
      </CCol>

      <CCol sm={6} lg={3}>
        <CWidgetStatsD
          className="mb-4"
          color="warning"
          icon={<CIcon icon={cilUser} height={52} className="my-4 text-white" />}
          values={[{ title: 'Total Users', value: '500+' }]}
        />
      </CCol>
    </CRow>
  )
}

WidgetsBrand.propTypes = {
  withCharts: PropTypes.bool,
}

export default WidgetsBrand
