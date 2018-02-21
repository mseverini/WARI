import { connect } from 'react-redux'
import { compose, branch, renderComponent } from 'recompose';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import BoltList from '../components/BoltList'

const listBolts = gql`query RouteQuery($route_id: ID!) {
  route(id:$route_id){
    name
    pitches
    bolts{
      number
      pitch
    }
    anchors{
      pitch
    }
  }
}`

const mapStateToProps = state => {
  return {
    route_id: state.routing.locationBeforeTransitions.pathname.replace( /^\D+/g, ''),
  }
}

export default connect(mapStateToProps)(graphql(listBolts)(BoltList))
