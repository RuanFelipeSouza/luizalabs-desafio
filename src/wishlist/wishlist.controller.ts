import { Controller, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WishlistService } from './wishlist.service';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';

@Controller('wishlist')
export class WishlistController {
  constructor(private readonly wishlistService: WishlistService) {}

  @Post(':id/:productId')
  create(@Param('id') id: string, @Param('productId') productId: string) {
    return this.wishlistService.create(id, productId);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateWishlistDto: UpdateWishlistDto,
  ) {
    return this.wishlistService.update(id, updateWishlistDto);
  }

  @Delete(':id/:productId')
  remove(@Param('id') id: string, @Param('productId') productId: string) {
    console.log('productId', productId);
    return this.wishlistService.remove(id, productId);
  }
}
