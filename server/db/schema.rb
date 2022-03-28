# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_03_27_134356) do

  create_table "active_storage_attachments", charset: "utf8mb3", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", charset: "utf8mb3", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.string "service_name", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "companies", charset: "utf8mb3", force: :cascade do |t|
    t.string "company_name"
    t.text "company_address"
    t.text "company_overview"
    t.string "company_num_of_emp"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id"
    t.string "companyImage"
    t.string "company_image"
    t.index ["user_id"], name: "index_companies_on_user_id"
  end

  create_table "company_teches", charset: "utf8mb3", force: :cascade do |t|
    t.bigint "company_id", null: false
    t.bigint "techcategory_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["company_id"], name: "index_company_teches_on_company_id"
    t.index ["techcategory_id"], name: "index_company_teches_on_techcategory_id"
  end

  create_table "images", charset: "utf8mb3", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "incomes", charset: "utf8mb3", force: :cascade do |t|
    t.integer "company_id", null: false
    t.integer "user_id", null: false
    t.integer "income", null: false
    t.string "content", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "likes", charset: "utf8mb3", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "company_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["company_id"], name: "index_likes_on_company_id"
    t.index ["user_id"], name: "index_likes_on_user_id"
  end

  create_table "selections", charset: "utf8mb3", force: :cascade do |t|
    t.integer "company_id", null: false
    t.integer "user_id", null: false
    t.integer "selection_category", null: false
    t.string "content", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "techcategories", charset: "utf8mb3", force: :cascade do |t|
    t.string "category_name", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "techstack_categories", charset: "utf8mb3", force: :cascade do |t|
    t.bigint "techstack_id", null: false
    t.bigint "techcategory_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["techcategory_id"], name: "index_techstack_categories_on_techcategory_id"
    t.index ["techstack_id"], name: "index_techstack_categories_on_techstack_id"
  end

  create_table "techstacks", charset: "utf8mb3", force: :cascade do |t|
    t.integer "company_id", null: false
    t.integer "user_id", null: false
    t.integer "tech_category", null: false
    t.string "content", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", charset: "utf8mb3", force: :cascade do |t|
    t.string "provider", default: "email", null: false
    t.string "uid", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.boolean "allow_password_change", default: false
    t.datetime "remember_created_at"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email"
    t.string "name"
    t.integer "company_id"
    t.string "newgra_or_midcar"
    t.string "eng_category"
    t.boolean "admin", default: false
    t.boolean "recruiter", default: false
    t.string "image"
    t.string "email"
    t.text "tokens"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["uid", "provider"], name: "index_users_on_uid_and_provider", unique: true
  end

  create_table "welfares", charset: "utf8mb3", force: :cascade do |t|
    t.integer "company_id", null: false
    t.integer "user_id", null: false
    t.string "content", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "companies", "users"
  add_foreign_key "company_teches", "companies"
  add_foreign_key "company_teches", "techcategories"
  add_foreign_key "likes", "companies"
  add_foreign_key "likes", "users"
  add_foreign_key "techstack_categories", "techcategories"
  add_foreign_key "techstack_categories", "techstacks"
end
