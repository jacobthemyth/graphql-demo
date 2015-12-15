GameType = GraphQL::ObjectType.define do
  name 'Game'
  field :scores do
    type !GraphQL::ListType.new(of_type: ScoreType)
    argument :numToShow, !types.Int
    argument :sortDirection, !types.String
    resolve -> (game, args, ctx) {
      num_to_show = args[:numToShow] || game[:scores].length
      sort_direction = args[:sortDirection] == 'asc' ? 1 : -1
      game[:scores].sort do |a, b|
        sort_direction * (a[:score] - b[:score])
      end.slice(0, num_to_show)
    }
  end
end
