# frozen_string_literal: true

module Types
  class EntryType < Types::BaseObject
    field :id, ID, null: false
    field :clock_in, String, null: true
    field :clock_out, String, null: true
    field :user_name, String, null: true
  end
end
