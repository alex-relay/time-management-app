# frozen_string_literal: true

require 'test_helper'

class Mutations::CreateEntryTest < ActiveSupport::TestCase
  def perform(user: nil, **args)
    Mutations::CreateEntry.new(object: nil, field: nil, context: {}).resolve(args)
  end

  test 'create a new entry' do
    entry = perform(
      user_name: 'Testing',
      clock_in: '12/12/2022'
    )

    assert entry.persisted?
    assert_equal entry.user_name, 'Testing'
    assert_equal entry.clock_in, '12/12/2022'
  end
end
