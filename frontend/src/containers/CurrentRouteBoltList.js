import { connect } from 'react-redux'
import BoltList from '../components/BoltList'
import { getBoltsFor } from '../actions/routeActions'

const mapStateToProps = state => {
  return {
    bolts: getBoltsFor(state.routing.locationBeforeTransitions.pathname),
  }
}

export default connect(mapStateToProps)(BoltList)
