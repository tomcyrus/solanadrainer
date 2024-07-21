import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PaystackPaymentModuleBase } from "./base/paystackPayment.module.base";
import { PaystackPaymentService } from "./paystackPayment.service";
import { PaystackPaymentController } from "./paystackPayment.controller";
import { PaystackPaymentResolver } from "./paystackPayment.resolver";

@Module({
  imports: [PaystackPaymentModuleBase, forwardRef(() => AuthModule)],
  controllers: [PaystackPaymentController],
  providers: [PaystackPaymentService, PaystackPaymentResolver],
  exports: [PaystackPaymentService],
})
export class PaystackPaymentModule {}
