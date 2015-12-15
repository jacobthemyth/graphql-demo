ScoreType = GraphQL::ObjectType.define do
  name 'Score'
  field :initials, !types.String
  field :score, !types.Int
end

