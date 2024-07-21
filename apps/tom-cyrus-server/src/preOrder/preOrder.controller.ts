import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PreOrderService } from "./preOrder.service";
import { PreOrderControllerBase } from "./base/preOrder.controller.base";

@swagger.ApiTags("preOrders")
@common.Controller("preOrders")
export class PreOrderController extends PreOrderControllerBase {
  constructor(
    protected readonly service: PreOrderService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
