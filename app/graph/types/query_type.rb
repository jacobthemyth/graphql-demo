GAME = {
  scores: [
    {initials: 'SDL', score: 134812},
    {initials: '_TY', score: 897243},
    {initials: 'AAA', score: 348234},
    {initials: '_LK', score: 903244},
    {initials: '_JK', score: 890324},
    {initials: 'GLH', score: 248721},
    {initials: '_JS', score: 257893},
    {initials: 'Y~Z', score: 752323},
    {initials: 'J/D', score: 982354},
    {initials: 'L!B', score: 252432},
    {initials: 'N*S', score: 982523},
    {initials: '*DS', score: 278347},
    {initials: '+AZ', score: 178954},
    {initials: 'FC;', score: 897252},
    {initials: '#BK', score: 547840},
  ],
}

QueryType = GraphQL::ObjectType.define do
  name "Query"
  description "The query root for this schema"

  field :game do
    type GameType
    resolve -> () { GAME }
  end

  field :node, field: NodeIdentification.field
end
