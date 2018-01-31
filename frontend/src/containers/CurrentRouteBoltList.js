import { connect } from 'react-redux'
import { compose, branch, renderComponent } from 'recompose';
import CreateBolts from "../components/CreateBolts"

import BoltList from '../components/BoltList'
import { getBoltsFor } from '../actions/routeActions'

const mapStateToProps = state => {
  return {
    bolts: getBoltsFor(state.routing.locationBeforeTransitions.pathname),
  }
}

const enhance = compose(
  connect(mapStateToProps),
  branch(
    props => props.bolts.length == 0,
    renderComponent(CreateBolts),
  ),
);

export default enhance(BoltList)
