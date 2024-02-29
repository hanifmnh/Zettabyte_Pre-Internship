import { Injectable } from '@angular/core';
import { Liquid } from '../interface/liquid.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LiquidService {
  private liquid: Liquid[] = [
    {
      name: 'Switch It Pod Friendly Series',
      producer: 'Upods',
      imageUrl:
        'https://img.id.my-best.com/product_images/f14dec5fb94d567cc23addb1581fdf55.png?ixlib=rails-4.3.1&q=70&lossless=0&w=240&h=240&fit=fill&fill=solid&fill-color=FFFFFF&s=d124ddb5bd36a2be444c7104a640da1a',
      description:
        'Beragam varian liquid pods friendly, liquid fruity hingga creamy untuk pemula pods',
      type: 'Pods friendly',
      content: '30 ml',
      flavour:
        'Melon, Kiwi, Grape, Ice Blast, Strawberry, Real Mint, Kretek, Mild, Strawberry Jam, Blueberry Jam, Ice Tea, Pop Corn, Pineapple, Kacang Ijo, Cheesecake, Peach, Mango, Cola Soda, Lemon Soda, Orange Soda, Grape Soda, Cherry, Apple, Watermelon, Ice Grape, Ice Mango, Ice Strawberry, Mix Lychee Pineapple, Mix Peach Blueberry, Mix Peach Strawberry, Mix Grape Orange, Mix Passion Pineapple',
      nic: '10 mg',
      price: 57900,
    },
    {
      name: 'Bananalicious',
      producer: 'EMKAY',
      imageUrl:
        'https://img.id.my-best.com/product_images/33b7ff99e3ba0109a6e1dd2f2b0eba32.jpg?ixlib=rails-4.3.1&q=70&lossless=0&w=800&h=800&fit=clip&s=79a67bf28717e502ff1c242ccc28647c',
      description: 'Liquid creamy banana terenak! Rasa pisangnya paling tebal',
      type: 'Freebase',
      content: '60 ml',
      flavour: 'Banana Cream Strawberry',
      nic: '3 mg, 6 mg',
      price: 150000,
    },
    {
      name: 'Blunanarilla',
      producer: 'Indonesia Juice Cartel',
      imageUrl:
        'https://img.id.my-best.com/product_images/e3712479d5953e691226c056b0b46ee0.png?ixlib=rails-4.3.1&q=70&lossless=0&w=800&h=800&fit=clip&s=7c84909d113a4fa22c8f9cd7712aa237',
      description:
        'The best blueberry liquid vape! Rasa blueberry dan banana-nya smooth!',
      type: 'Pods friendly',
      content: '30 ml',
      flavour: 'Blueberry Banana Smoothies',
      nic: '12 mg',
      price: 80000,
    },
    {
      name: 'Muffin & XES',
      producer: 'Ora Brewery x Ybrap',
      imageUrl:
        'https://img.id.my-best.com/product_images/c8c7dbea0e775ffd91129f6c6e58f663.png?ixlib=rails-4.3.1&q=70&lossless=0&w=800&h=800&fit=clip&s=f59a77c1a8f3aca9fd848f8c4f80343c',
      description: 'Liquid viral dari Reza Arap yang rasanya original',
      type: 'Pods friendly',
      content: '30 ml, 60 ml',
      flavour:
        'Cake Muffin Strawberry Cream (V1), Blackberry Muffin Cream (V2), Banana Cream Muffin (V3)',
      nic: '3 mg, 6 mg',
      price: 79000,
    },
    {
      name: 'KUY Liquid Menthol Series Nicsal99+',
      producer: 'Movi',
      imageUrl:
        'https://img.id.my-best.com/product_images/9c45bdbb3f6d0b34a6f63f4b4f4c0f94.png?ixlib=rails-4.3.1&q=70&lossless=0&w=800&h=800&fit=clip&s=20d9aefcd291c9ed757f4f1270a5c31c',
      description:
        'Seri liquid salt nic fruity yang tidak gatal di tenggorokan',
      type: 'Saltnic',
      content: '15 ml, 30 ml',
      flavour:
        'Soursoup, Cantaloupe, Pomegranate, Watermelon Frost, Mango Frost, Mint Blast',
      nic: '12 mg, 24 mg, 30 mg',
      price: 50000,
    },
    {
      name: 'Maadfoom Ice Dessert Series - Corn Ice Cream',
      producer: 'Foom x Maadtwins',
      imageUrl:
        'https://img.id.my-best.com/product_images/bc2c73a52095d61cf6c4f3cc5f4e7a91.png?ixlib=rails-4.3.1&q=70&lossless=0&w=800&h=800&fit=clip&s=995ac4b244ddb0e3569c3aba41e805b3',
      description:
        'Liquid salt nic yang memadukan rasa dingin dan gurih es krim jagung',
      type: 'Saltnic',
      content: '30 ml',
      flavour: 'Corn Ice Cream',
      nic: '30 mg',
      price: 110000,
    },
    {
      name: 'Beverage Series',
      producer: 'FOOM',
      imageUrl:
        'https://img.id.my-best.com/product_images/2334188936903b5c35966a5f36338686.png?ixlib=rails-4.3.1&q=70&lossless=0&w=800&h=800&fit=clip&s=5bd259c077e9d5821c84423beecf971d',
      description: 'Hadirkan pilihan rasa minuman favorit Anda!',
      type: 'Saltnic',
      content: '30 ml',
      flavour: 'Iced Tea, Iced Capuccino, Fresh Cola',
      nic: '30 mg',
      price: 110000,
    },
    {
      name: 'Kleporn',
      producer: 'Vernand x Elf Factory',
      imageUrl:
        'https://img.id.my-best.com/product_images/98465f7f4e5f3b3ee0f8a4ab1faaf384.png?ixlib=rails-4.3.1&q=70&lossless=0&w=800&h=800&fit=clip&s=18ecbe1d112f99f09704f433c943e7c0',
      description:
        'Sensasi manis dan legitnya seperti makan kue klepon sungguhan!',
      type: 'Freebase',
      content: '60 ml',
      flavour: 'Klepon',
      nic: '3 mg, 6 mg',
      price: 115000,
    },
    {
      name: 'Oat Drips V7 Oat Raisin',
      producer: 'SteamQueen x JVS',
      imageUrl:
        'https://img.id.my-best.com/product_images/cef3e75fdb9e6932441c67335aaafd84.png?ixlib=rails-4.3.1&q=70&lossless=0&w=800&h=800&fit=clip&s=e06dae76b370cdbbd215c02bd65cdea4',
      description:
        'Rasa terbaru Oat Drips yang memanjakan penggemar liquid manis dan creamy',
      type: 'Freebase',
      content: '60 ml',
      flavour: 'Oat Raisin',
      nic: '3 mg, 6 mg',
      price: 80000,
    },
    {
      name: 'Prediksi Liquid',
      producer: 'FOOM x The Prediksi',
      imageUrl:
        'https://img.id.my-best.com/product_images/fbcd417df14b8c9e80efcdcdeba30975.png?ixlib=rails-4.3.1&q=70&lossless=0&w=800&h=800&fit=clip&s=51a88bbe703e408d2649de068f22adc7',
      description:
        'Rasa terbaru Oat Drips yang memanjakan penggemar liquid manis dan creamy',
      type: 'Saltnic',
      content: '30 ml',
      flavour: 'El Gope, El Gaple, El Baper, El Monto',
      nic: '30 mg',
      price: 110000,
    },
  ];

  private liquidSubject = new BehaviorSubject<Liquid[]>(this.liquid);
  liquid$ = this.liquidSubject.asObservable();

  private selectedLiquidSubject = new BehaviorSubject<Liquid | null>(null);
  selectedLiquid$ = this.selectedLiquidSubject.asObservable();

  private cartProductSubject = new BehaviorSubject<
    { products: Liquid; quantity: number }[]
  >([]);
  cartProduct$ = this.cartProductSubject.asObservable();

  constructor() {}

  getLiquid(): void {
    this.liquidSubject.next(this.liquid);
  }

  setSelectedLiquid(product: Liquid | null): void {
    this.selectedLiquidSubject.next(product);
  }

  addToCart(product: Liquid): void {
    const currentProduct = this.cartProductSubject.getValue();
    const existingItem = currentProduct.find(
      (item) => item.products.name === product.name
    );

    if (existingItem) {
      existingItem.quantity++;
      this.cartProductSubject.next(currentProduct);
    } else {
      const updatedProduct = [
        ...currentProduct,
        { products: product, quantity: 1 },
      ];
      this.cartProductSubject.next(updatedProduct);
    }
  }

  removeFromCart(product: { products: Liquid; quantity: number }): void {
    const currentProduct = this.cartProductSubject.getValue();
    const updatedItems = currentProduct.filter(
      (cartItem) => cartItem.products !== product.products
    );
    this.cartProductSubject.next(updatedItems);
  }

  decreaseQuantity(product: { products: Liquid; quantity: number }): void {
    const currentItems = this.cartProductSubject.getValue();
    const existingItem = currentItems.find(
      (cartItem) => cartItem.products === product.products
    );

    if (existingItem && existingItem.quantity > 1) {
      existingItem.quantity--;
      this.cartProductSubject.next(currentItems);
    } else {
      this.removeFromCart(product);
    }
  }
}
