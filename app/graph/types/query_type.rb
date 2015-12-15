GAME = OpenStruct.new(
  scores: [
    OpenStruct.new({initials: 'SDL', score: 134812}),
    OpenStruct.new({initials: '_TY', score: 897243}),
    OpenStruct.new({initials: 'AAA', score: 348234}),
    OpenStruct.new({initials: '_LK', score: 903244}),
    OpenStruct.new({initials: '_JK', score: 890324}),
    OpenStruct.new({initials: 'GLH', score: 248721}),
    OpenStruct.new({initials: '_JS', score: 257893}),
    OpenStruct.new({initials: 'Y~Z', score: 752323}),
    OpenStruct.new({initials: 'J/D', score: 982354}),
    OpenStruct.new({initials: 'L!B', score: 252432}),
    OpenStruct.new({initials: 'N*S', score: 982523}),
    OpenStruct.new({initials: '*DS', score: 278347}),
    OpenStruct.new({initials: '+AZ', score: 178954}),
    OpenStruct.new({initials: 'FC;', score: 897252}),
    OpenStruct.new({initials: '#BK', score: 547840}),
  ],
)

QueryType = GraphQL::ObjectType.define do
  name "Query"
  description "The query root for this schema"

  field :game do
    type GameType
    resolve -> (obj, args, ctx) { GAME }
  end

  field :node, field: NodeIdentification.field
end
