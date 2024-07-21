import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CryptoPaymentResolverBase } from "./base/cryptoPayment.resolver.base";
import { CryptoPayment } from "./base/CryptoPayment";
import { CryptoPaymentService } from "./cryptoPayment.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CryptoPayment)
export class CryptoPaymentResolver extends CryptoPaymentResolverBase {
  constructor(
    protected readonly service: CryptoPaymentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
