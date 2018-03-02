import { connect } from 'react-redux'
import AreaList from '../components/AreaList'


const mapStateToProps = (state)=> {}

const mapDispatchToProps = (dispatch, ownProps) => {
  const route_area_id = ownProps.location.pathname.replace( /^\D+/g, '')
  return {
    area_id: route_area_id ? route_area_id : 1,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AreaList)
