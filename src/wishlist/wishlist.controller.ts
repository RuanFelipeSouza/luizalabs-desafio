import {
  Controller,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { WishlistService } from './wishlist.service';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('wishlist')
export class WishlistController {
  constructor(private readonly wishlistService: WishlistService) {}
  @UseGuards(JwtAuthGuard)
  @Post(':id/:productId')
  create(@Param('id') id: string, @Param('productId') productId: string) {
    return this.wishlistService.create(id, productId);
  }
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateWishlistDto: UpdateWishlistDto,
  ) {
    return this.wishlistService.update(id, updateWishlistDto);
  }
  @UseGuards(JwtAuthGuard)
  @Delete(':id/:productId')
  remove(@Param('id') id: string, @Param('productId') productId: string) {
    return this.wishlistService.remove(id, productId);
  }
}
