import { Field, InputType } from '@nestjs/graphql';
import { ProfileCreateOrConnectWithoutUserInput } from './profile-create-or-connect-without-user.input';
import { ProfileCreateWithoutUserInput } from './profile-create-without-user.input';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';

@InputType()
export class ProfileUncheckedCreateOneWithoutUserInput {
  @Field(() => ProfileCreateWithoutUserInput, {
    nullable: true
  })
  create?: ProfileCreateWithoutUserInput;

  @Field(() => ProfileCreateOrConnectWithoutUserInput, {
    nullable: true
  })
  connectOrCreate?: ProfileCreateOrConnectWithoutUserInput;

  @Field(() => ProfileWhereUniqueInput, {
    nullable: true
  })
  connect?: ProfileWhereUniqueInput;
}
