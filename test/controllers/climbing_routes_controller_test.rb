require 'test_helper'

class ClimbingRoutesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @climbing_route = climbing_routes(:one)
  end

  test "should get index" do
    get climbing_routes_url
    assert_response :success
  end

  test "should get new" do
    get new_climbing_route_url
    assert_response :success
  end

  test "should create climbing_route" do
    assert_difference('ClimbingRoute.count') do
      post climbing_routes_url, params: { climbing_route: { area_id: @climbing_route.area_id, name: @climbing_route.name, picture: @climbing_route.picture, pitches: @climbing_route.pitches, protection_type: @climbing_route.protection_type } }
    end

    assert_redirected_to climbing_route_url(ClimbingRoute.last)
  end

  test "should show climbing_route" do
    get climbing_route_url(@climbing_route)
    assert_response :success
  end

  test "should get edit" do
    get edit_climbing_route_url(@climbing_route)
    assert_response :success
  end

  test "should update climbing_route" do
    patch climbing_route_url(@climbing_route), params: { climbing_route: { area_id: @climbing_route.area_id, name: @climbing_route.name, picture: @climbing_route.picture, pitches: @climbing_route.pitches, protection_type: @climbing_route.protection_type } }
    assert_redirected_to climbing_route_url(@climbing_route)
  end

  test "should destroy climbing_route" do
    assert_difference('ClimbingRoute.count', -1) do
      delete climbing_route_url(@climbing_route)
    end

    assert_redirected_to climbing_routes_url
  end
end
