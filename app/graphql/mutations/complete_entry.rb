# frozen_string_literal: true

module Mutations
  class CompleteEntry < BaseMutation
    argument :clock_out, String, required: false
    argument :entry_id, ID, required: true

    type Types::EntryType

    def resolve(clock_out:, entry_id:)
      entry = Entry.find(entry_id)
      entry.update(clock_out: clock_out)
      entry
    end
  end
end
