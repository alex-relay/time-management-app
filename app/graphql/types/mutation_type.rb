# frozen_string_literal: true

module Types
  class MutationType < Types::BaseObject
    field :create_entry, mutation: Mutations::CreateEntry
    field :update_entry, mutation: Mutations::UpdateEntry
    field :complete_entry, mutation: Mutations::CompleteEntry
  end
end
