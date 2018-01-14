require 'test_helper'

class BoltsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @bolt = bolts(:one)
  end

  test "should get index" do
    get bolts_url
    assert_response :success
  end

  test "should get new" do
    get new_bolt_url
    assert_response :success
  end

  test "should create bolt" do
    assert_difference('Bolt.count') do
      post bolts_url, params: { bolt: { bolt_type: @bolt.bolt_type, climbing_route_id: @bolt.climbing_route_id, number: @bolt.number, pitch: @bolt.pitch, year_placed: @bolt.year_placed } }
    end

    assert_redirected_to bolt_url(Bolt.last)
  end

  test "should show bolt" do
    get bolt_url(@bolt)
    assert_response :success
  end

  test "should get edit" do
    get edit_bolt_url(@bolt)
    assert_response :success
  end

  test "should update bolt" do
    patch bolt_url(@bolt), params: { bolt: { bolt_type: @bolt.bolt_type, climbing_route_id: @bolt.climbing_route_id, number: @bolt.number, pitch: @bolt.pitch, year_placed: @bolt.year_placed } }
    assert_redirected_to bolt_url(@bolt)
  end

  test "should destroy bolt" do
    assert_difference('Bolt.count', -1) do
      delete bolt_url(@bolt)
    end

    assert_redirected_to bolts_url
  end
end
