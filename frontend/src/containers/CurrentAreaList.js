import { connect } from 'react-redux'
import AreaList from '../components/AreaList'
import { getSubAreasFor, getRoutesFor } from '../actions/areaAction'

const mapStateToProps = state => {
  return {
    areas: getSubAreasFor(state.routing.locationBeforeTransitions.pathname),
    routes: getRoutesFor(state.routing.locationBeforeTransitions.pathname),
  }
}

export default connect(mapStateToProps)(AreaList)
