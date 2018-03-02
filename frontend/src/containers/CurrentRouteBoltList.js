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
      id
      number
      pitch
    }
    anchors{
      id
      pitch
    }
  }
}`

const mapStateToProps = (state)=> {}

const mapDispatchToProps = (dispatch, ownProps) => {
  const route_area_id = ownProps.location.pathname.replace( /^\D+/g, '')
  return {
    route_id: route_area_id ? route_area_id : 1,
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(graphql(listBolts)(BoltList))
