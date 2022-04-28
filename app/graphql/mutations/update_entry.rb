# frozen_string_literal: true

module Mutations
  class UpdateEntry < BaseMutation
    # arguments passed to the `resolve` method
    argument :clock_in, String, required: false
    argument :clock_out, String, required: false
    argument :entry_id, ID, required: true

    type Types::EntryType

    def resolve(clock_in:, clock_out:, entry_id:)
      entry = Entry.find(entry_id)
      entry.update(clock_in: clock_in, clock_out: clock_out)
      entry
    end
  end
end
