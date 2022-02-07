export class CreateWishlistDto {
  productList: [
    {
      price: string;
      image: string;
      brand: string;
      id: string;
      title: string;
      reviewScore: string;
    },
  ];
}
