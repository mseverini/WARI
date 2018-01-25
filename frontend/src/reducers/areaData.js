import initialState from '../data/initialState'

const areaData = (state = initialState, action) => {
  switch (action.type) {
    case 'AREA_CLICKED':
      // go out to api and get area data and populate the state with it
      //for now just mockng a return
      return {
        routes: [
          {id:1, name:'30 seconds over potash'},
          {id:2, name:'that classic finger crack'},
          {id:3, name:'fingers for days'},
        ],
        area: {id: 1, name: 'Wall Street'}
      }
    case 'ROUTE_CLICKED':
    // go out to api and get area data and populate the state with it
    //for now just mockng a return
      return {
        bolts: [
          {id: 1, position: 1, type: 'expansion', year_placed: 2018},
          {id: 2, position: 2, type: 'expansion', year_placed: 2018},
          {id: 3, position: 3, type: 'expansion', year_placed: 2018},
          {id: 4, position: 4, type: 'expansion', year_placed: 2018},
        ],
        route: {id:1, name:'30 seconds over potash'},
      }
    default:
      return state
  }
}

export default areaData
