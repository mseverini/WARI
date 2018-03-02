Types::UserType = GraphQL::ObjectType.define do
  name "User"
  field :id, !types.ID, hash_key: :uuid
  field :email, !types.String

end
