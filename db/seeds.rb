# frozen_string_literal: true

Entry.create!([
                {
                  clock_in: DateTime.new(2022, 2, 3, 4, 5, 6),
                  clock_out: DateTime.new(2022, 2, 4, 5, 6, 6),
                  user_name: 'atilatti'
                },
                {
                  clock_in: DateTime.new(2022, 3, 3, 4, 5, 6),
                  clock_out: DateTime.new(2022, 3, 4, 4, 5, 6),
                  user_name: 'atilatti'
                }
              ])
