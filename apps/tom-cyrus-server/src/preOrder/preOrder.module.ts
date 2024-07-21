import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PreOrderModuleBase } from "./base/preOrder.module.base";
import { PreOrderService } from "./preOrder.service";
import { PreOrderController } from "./preOrder.controller";
import { PreOrderResolver } from "./preOrder.resolver";

@Module({
  imports: [PreOrderModuleBase, forwardRef(() => AuthModule)],
  controllers: [PreOrderController],
  providers: [PreOrderService, PreOrderResolver],
  exports: [PreOrderService],
})
export class PreOrderModule {}
