require 'json'

def ensure_location_exists(location)
  botomlevel = Area.where(name:location.last).first
  if location.length == 1 && !botomlevel.present?
    a = Area.new
    a.name = location[0]
    a.save(validate:false)
    return a
  elsif !botomlevel.present?
    a = Area.new
    a.name = location.last
    a.parent = ensure_location_exists(location.take(location.length-1))
    a.save
    return a
  else
    return botomlevel
  end
end


file = File.read('example.json')

hash = JSON.parse(file)

hash['routes'].each { |route|
  route_model = ClimbingRoute.new
  route_model.name = route['name']
  route_model.area = ensure_location_exists(route['location'])
  route_model.protection_type = route['type']
  route_model.pitches = route['pitches']&.to_i || 1
  route_model.save!
}
