const getSubAreasFor = (area) => {
  ///go make api call below is bullshit
  if (area == '/Area/4' || area == '/') {
    return [
      {id:1, name: 'Wall Street'},
      {id:2, name: 'Iced cream parlor'},
      {id:3, name: 'Fischer Towers'},
    ]
  }
  return []
}

const getRoutesFor = (area) =>{
  ///go make api call below is bullshit
  if (area == '/Area/4' || area == '/'){
    return []
  }
  return [
    {id:1, name:'30 seconds over potash'},
    {id:2, name:'that classic finger crack'},
    {id:3, name:'fingers for days'},
  ]
}

export { getSubAreasFor, getRoutesFor }
