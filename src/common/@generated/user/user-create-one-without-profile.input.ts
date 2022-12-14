import { Field, InputType } from '@nestjs/graphql';
import { UserCreateOrConnectWithoutProfileInput } from './user-create-or-connect-without-profile.input';
import { UserCreateWithoutProfileInput } from './user-create-without-profile.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateOneWithoutProfileInput {
  @Field(() => UserCreateWithoutProfileInput, {
    nullable: true
  })
  create?: UserCreateWithoutProfileInput;

  @Field(() => UserCreateOrConnectWithoutProfileInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutProfileInput;

  @Field(() => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput;
}
