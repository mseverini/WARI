import { connect } from 'react-redux'
import { compose, branch, renderComponent } from 'recompose';
import CreateBolts from "../components/CreateBolts"

import BoltList from '../components/BoltList'
import { getBoltsFor } from '../actions/routeActions'

const mapStateToProps = state => {
  return {
    route_id: state.routing.locationBeforeTransitions.pathname.replace( /^\D+/g, ''),
  }
}

export default connect(mapStateToProps)(BoltList)
