import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Redirect,
  Req,
  Res
} from "@nestjs/common";
import { TimeZoneDto } from "./dto/time-zone.dto";
import { TimeService } from "./time.service";
import { CreateProductDto } from "../products/dto/create-product.dto";

@Controller("time")
export class TimeController {
  constructor(private readonly time: TimeService) {
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header("Cache-Control", "none")
  newTime(@Body() date: TimeZoneDto) {
    return this.time.newTime(date);
  }
}
