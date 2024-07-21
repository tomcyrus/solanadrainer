/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PreOrderWhereInput } from "./PreOrderWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { PreOrderOrderByInput } from "./PreOrderOrderByInput";

@ArgsType()
class PreOrderFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PreOrderWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => PreOrderWhereInput, { nullable: true })
  @Type(() => PreOrderWhereInput)
  where?: PreOrderWhereInput;

  @ApiProperty({
    required: false,
    type: [PreOrderOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [PreOrderOrderByInput], { nullable: true })
  @Type(() => PreOrderOrderByInput)
  orderBy?: Array<PreOrderOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { PreOrderFindManyArgs as PreOrderFindManyArgs };