import { ArgsType, Field, Int } from '@nestjs/graphql';
import { UserOrderByInput } from './user-order-by.input';
import { UserScalarFieldEnum } from './user-scalar-field.enum';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserWhereInput } from './user-where.input';

@ArgsType()
export class FindFirstUserArgs {
  @Field(() => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput;

  @Field(() => [UserOrderByInput], {
    nullable: true
  })
  orderBy?: Array<UserOrderByInput>;

  @Field(() => UserWhereUniqueInput, {
    nullable: true
  })
  cursor?: UserWhereUniqueInput;

  @Field(() => Int, {
    nullable: true
  })
  take?: number;

  @Field(() => Int, {
    nullable: true
  })
  skip?: number;

  @Field(() => [UserScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<UserScalarFieldEnum>;
}
