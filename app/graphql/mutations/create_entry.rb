# frozen_string_literal: true

module Mutations
  class CreateEntry < Mutations::BaseMutation
    # arguments passed to the `resolve` method
    argument :clock_in, String, required: true
    argument :user_name, String, required: true

    # return type from the mutation
    type Types::EntryType

    def resolve(clock_in:, user_name:)
      entry = Entry.create!(
        clock_in: clock_in,
        clock_out: nil,
        user_name: user_name
      )
      if entry.present?
        entry
      else
        {
          entry: nil,
          errors: entry.errors.full_messages
        }
      end
    end
  end
end
