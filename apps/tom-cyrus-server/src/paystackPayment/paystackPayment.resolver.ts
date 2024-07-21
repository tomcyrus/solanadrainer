import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PaystackPaymentResolverBase } from "./base/paystackPayment.resolver.base";
import { PaystackPayment } from "./base/PaystackPayment";
import { PaystackPaymentService } from "./paystackPayment.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PaystackPayment)
export class PaystackPaymentResolver extends PaystackPaymentResolverBase {
  constructor(
    protected readonly service: PaystackPaymentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
