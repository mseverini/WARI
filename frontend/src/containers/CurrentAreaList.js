import { connect } from 'react-redux'
import AreaList from '../components/AreaList'


const mapStateToProps = state => {
  const route_area_id = state.routing.locationBeforeTransitions.pathname.replace( /^\D+/g, '')
  return {
    area_id: route_area_id ? route_area_id : 1,
  }
}

export default connect(mapStateToProps)(AreaList)
