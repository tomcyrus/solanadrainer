import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CryptoPaymentModuleBase } from "./base/cryptoPayment.module.base";
import { CryptoPaymentService } from "./cryptoPayment.service";
import { CryptoPaymentController } from "./cryptoPayment.controller";
import { CryptoPaymentResolver } from "./cryptoPayment.resolver";

@Module({
  imports: [CryptoPaymentModuleBase, forwardRef(() => AuthModule)],
  controllers: [CryptoPaymentController],
  providers: [CryptoPaymentService, CryptoPaymentResolver],
  exports: [CryptoPaymentService],
})
export class CryptoPaymentModule {}
