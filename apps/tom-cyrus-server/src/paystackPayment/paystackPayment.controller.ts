import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PaystackPaymentService } from "./paystackPayment.service";
import { PaystackPaymentControllerBase } from "./base/paystackPayment.controller.base";

@swagger.ApiTags("paystackPayments")
@common.Controller("paystackPayments")
export class PaystackPaymentController extends PaystackPaymentControllerBase {
  constructor(
    protected readonly service: PaystackPaymentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
