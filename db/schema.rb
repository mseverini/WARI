# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180212165710) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "anchors", force: :cascade do |t|
    t.integer "number_of_bolts"
    t.string "chain_type"
    t.string "bolt_type"
    t.integer "year_placed"
    t.bigint "climbing_route_id"
    t.integer "pitch"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["climbing_route_id"], name: "index_anchors_on_climbing_route_id"
  end

  create_table "areas", force: :cascade do |t|
    t.string "name"
    t.integer "year_established"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "parent_id"
    t.index ["parent_id"], name: "index_areas_on_parent_id"
  end

  create_table "bolt_ratings", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "bolt_id"
    t.integer "rating"
    t.string "picture"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["bolt_id"], name: "index_bolt_ratings_on_bolt_id"
    t.index ["user_id"], name: "index_bolt_ratings_on_user_id"
  end

  create_table "bolts", force: :cascade do |t|
    t.integer "number"
    t.string "bolt_type"
    t.integer "year_placed"
    t.bigint "climbing_route_id"
    t.integer "pitch"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["climbing_route_id"], name: "index_bolts_on_climbing_route_id"
  end

  create_table "climbing_routes", force: :cascade do |t|
    t.string "name"
    t.bigint "area_id"
    t.string "protection_type"
    t.integer "pitches"
    t.string "picture"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["area_id"], name: "index_climbing_routes_on_area_id"
  end

  create_table "locations", force: :cascade do |t|
    t.integer "latitude"
    t.integer "longitude"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "email", null: false
    t.string "password_digest", limit: 128, null: false
    t.string "confirmation_token", limit: 128
    t.string "remember_token", limit: 128, null: false
    t.index ["email"], name: "index_users_on_email"
    t.index ["remember_token"], name: "index_users_on_remember_token"
  end

  add_foreign_key "anchors", "climbing_routes"
  add_foreign_key "bolt_ratings", "bolts"
  add_foreign_key "bolt_ratings", "users"
  add_foreign_key "bolts", "climbing_routes"
  add_foreign_key "climbing_routes", "areas"
end
