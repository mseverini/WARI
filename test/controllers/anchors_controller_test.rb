require 'test_helper'

class AnchorsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @anchor = anchors(:one)
  end

  test "should get index" do
    get anchors_url
    assert_response :success
  end

  test "should get new" do
    get new_anchor_url
    assert_response :success
  end

  test "should create anchor" do
    assert_difference('Anchor.count') do
      post anchors_url, params: { anchor: { bolt_type: @anchor.bolt_type, chain_type: @anchor.chain_type, climbing_route_id: @anchor.climbing_route_id, number_of_bolts: @anchor.number_of_bolts, pitch: @anchor.pitch, year_placed: @anchor.year_placed } }
    end

    assert_redirected_to anchor_url(Anchor.last)
  end

  test "should show anchor" do
    get anchor_url(@anchor)
    assert_response :success
  end

  test "should get edit" do
    get edit_anchor_url(@anchor)
    assert_response :success
  end

  test "should update anchor" do
    patch anchor_url(@anchor), params: { anchor: { bolt_type: @anchor.bolt_type, chain_type: @anchor.chain_type, climbing_route_id: @anchor.climbing_route_id, number_of_bolts: @anchor.number_of_bolts, pitch: @anchor.pitch, year_placed: @anchor.year_placed } }
    assert_redirected_to anchor_url(@anchor)
  end

  test "should destroy anchor" do
    assert_difference('Anchor.count', -1) do
      delete anchor_url(@anchor)
    end

    assert_redirected_to anchors_url
  end
end
