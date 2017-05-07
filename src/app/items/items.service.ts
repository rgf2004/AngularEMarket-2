import { Injectable } from '@angular/core';

import { ItemModule } from './item';

import { ShoppingCartService } from  '../shopping-cart/shopping-cart.service' ;

@Injectable()
export class ItemsService {

  private items : ItemModule[] = [];

  constructor(private shoppingCartService : ShoppingCartService)
  {
    this.items = this.getMockData();
  }

  getItemsCountByCategory(category? : number) : number 
  {
    if (category == 0)
      return this.items.length;

    let count : number = 0;
    for (let tempItem of this.items)
    {
      for (let categoryid of tempItem.getCategoriesIds())
      {
        if (categoryid == category)
          count++;
      }
    }
    return count;
  }

  getItemsByCategory(category? : number) : ItemModule[]
  {
    if (category == 0)
      return this.items.slice();

    let tempItems : ItemModule[] = [];  

    for (let tempItem of this.items)
    {
      for (let categoryid of tempItem.getCategoriesIds())
      {
        if (categoryid == category)
          tempItems.push(tempItem);
      }
    }
    return tempItems;
  }

  getItemsByTitle(searchKeyword : string) : ItemModule[]
  {

    if(searchKeyword === '')
    {
      return this.items.slice();
    }

    let tempItems : ItemModule[] = [];  

    for (let tempItem of this.items)
    {
      if (tempItem.getTitle().toLowerCase().includes(searchKeyword.toLowerCase()))
      {
        tempItems.push(tempItem);
      }
    }
    return tempItems;
  }

  getItemById(id : number ) : ItemModule 
  {
    for (let tempItem of this.items)
    {
      if (tempItem.getId() == id)
      {
        return tempItem;
      }
    }
  }

  addToShoppingCart(item : ItemModule)
  {
    this.shoppingCartService.addToShoppingCart(item);
  }

  private getMockData() {
    return [
        new ItemModule(
                          1,
                          'Apple iPhone 6 Plus with FaceTime - 16GB, 4G LTE, Space Gray',
                          'https://cf2.s3.souqcdn.com/item/2014/09/14/72/78/38/4/item_XL_7278384_5621674.jpg',
                          'The Apple iPhone 6s Plus is a wonderful device that can help improve daily productivity. This smartphone features the new 3D Touch technology which lets you perform tasks quickly. A large 5.5inch Retina touchscreen makes this smartphone easy to use on an everyday basis. iOS 9 makes using the various features of this phone on a continual basis intuitive. The Apple A9 chipset lets you enjoy incredible performance on an everyday basis.',
                          1000,
                          2,
                          [2]
                        ),
          new ItemModule(
                          2,
                          'Samsung Galaxy S7 Edge - 32GB, 4G LTE',
                          'http://www.gulfdeals.com/media/catalog/product/cache/1/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/i/t/item_xl_10156721_12508919_1.jpg',
                          'The Samsung Galaxy S7 Edge is a high tech smartphone that boasts a slim, lightweight, and water cum dust resistant design. The entire unit is 7.7mm thick and weighs a mere 157g. This phone’s sleek black color is sure to elicit wows. Its 5.5inch Super AMOLED capacitive curved edge touchscreen produces dazzling 1440 x 2560 pixels resolution images that are a joy to behold. Equipped with a 12MP rear camera, this phone snaps up eye popping pictures and videos with every click. Since the device is IP68 rated, you can even shoot footage while under 1.5m of water. The phone comes embedded with a Exynos 8890 Octa Core processor that provides the right amount of power to keep all the applications operating at a smooth and even pace. Its 32GB of storage easily lets you store volumes of data. This device comes installed with the beautiful, immersive, and easy to use Android v6.0 Marshmallow operating system. You can access the Internet while you are on the move via its 4G LTE support or the built in WiFi adapter.',
                          800,
                          2,
                          [2]
                        ),
          new ItemModule(
                          3,
                          'TOUCHMATE Bluetooth Headphone with Touch Control (TM-BTH600)',
                          'http://www.gulfdeals.com/media/catalog/product/cache/1/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/b/t/bth6001.jpg',
                          'Ultimate Touch Sensor Technology Headset with Touch Control Functions, Noise-Free, X-Bass Technology & Hands Free Communication',
                          99,
                          1,
                          [1]
                        ),
          new ItemModule(
                          4,
                          'MediaCom MCI 3300 Pro DVD Karaoke Player with Wireless Mics',
                          'http://www.gulfdeals.com/media/catalog/product/cache/1/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/m/c/mci_3300_pro_dvd.jpg',
                          'A product that is beneficial in social gatherings, religious activities and talent booster events. Mediacom 3300 DVD Pro Karaoke Machine has been designed to experience music in different genres and ages containing standards songs and latest songs. It has innovative features in a reasonable and affordable price. A user friendly karaoke machine that will surely bring superb and memorable experience with your friends and families.',
                          780,
                          4,
                          [1]
                        ),
          new ItemModule(
                          5,
                          'Apple iPad Mini 3 - 7.9", 16GB, WiFi',
                          'http://www.gulfdeals.com/media/catalog/product/cache/1/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/a/p/apple_mgp32ll_a_128gb_ipad_mini_with_1086725_1__1.jpg',
                          'Presenting the elegant and classy Apple iPad Mini 3, which sports the signature space gray color. Running on the advanced iOS 8 operating system, this tablet provides access to a variety of useful applications from the App Store. The iPad Mini 3 features the amazing Touch ID technology, which makes use of your fingerprints to unlock itself. Whether you are on a business trip or a family vacation, you can work on your official documents easily using the Continuity application. This tablet comes with the powerful iSight and Face Time HD cameras that provide you with high resolution imagery. What’s more, you can also enjoy some excellent quality video calls with all your friends and family using the front camera. You can also share your favorite books or some foot tapping dance tracks with your family using this tablet, which features the cool Family Sharing application. With a built in memory of 16GB, you have ample space to store your applications. Social media addicts can stay constantly connected to the Internet using this seamless device, which features built in WiFi connectivity.',
                          1079,
                          2,
                          [3]
                        ),
          new ItemModule(
                          6,
                          'HP DeskJet 2130 All-in-One Printer',
                          'http://www.gulfdeals.com/media/catalog/product/cache/1/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/c/0/c05198937.png',
                          'Make your everyday printing, scanning, and copying easy with an HP DeskJet all-in-one that simply works—right out of the box. Save money with optional high-yield ink cartridges. Plus, save space with an all-in-one designed to fit where you need it. ',
                          128,
                          3,
                          [5]
                        ),
          new ItemModule(
                          7,
                          'Panasonic 1-Blade Wet/Dry Travel Shaver (ES3831)',
                          'http://www.gulfdeals.com/media/catalog/product/cache/1/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/e/s/es3831_4.jpg',
                          'Single Blade Cutting System Reciprocating Blade, provides an optimum close shave. Floating Head, follows facial contours to provide a comfortable shave Clean, Refreshing Shaving',
                          120,
                          3,
                          [1]
                        ),
          new ItemModule(
                          8,
                          'TOUCHMATE LED SMART BULB WITH SPEAKER. Wirelessly Play music and change LED light with your smartphone, Simple and easy to control by APP',
                          'http://www.gulfdeals.com/media/catalog/product/cache/1/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/2/d/2d679d67-e036-4e46-9ced-db23a04b0750_copy_.png',
                          'TOUCHMATE Bluetooth Smart Speaker With Colorful Smart LED Bulb Allows You To Combine Music & Light in Room, Play Your Mobile Music & Navigate 16 Million Colors Through App.',
                          60,
                          3,
                          [1]
                        ),
          new ItemModule(
                          9,
                          'HP Notebook 15-ay004ne (Core i3, 4GB, 1TB, 15.6" WXGA, 2GB RadeOn, Win10) (X3M69EA) - Silver',
                          'http://www.gulfdeals.com/media/catalog/product/cache/1/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/x/3/x3m69ea_3.png',
                          'Tackle all your daily tasks with an affordable laptop that comes packed with all the features you need. Get all the power you want with confidence in a trusted name like HP.',
                          1599,
                          3,
                          [4]
                        ),
          new ItemModule(
                          10,
                          'NOKIA 130 DS ARABIC (NOK130_DS)',
                          'http://www.gulfdeals.com/media/catalog/product/cache/1/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/r/e/red_2.jpg',
                          'Watch your favourite clips anytime, anywhere. With the Nokia 130, the excitement, laughter or drama that comes with a good movie lasts a long time – you get up to 16 hours of video playback on a single charge. Turn free time into entertainment time.',
                          199,
                          2,
                          [2]
                        ),
          new ItemModule(
                          11,
                          'Apple Smart Watch 38mm Stainless Steel Case with White Sport Band (MJ2T2)',
                          'http://www.gulfdeals.com/media/catalog/product/cache/1/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/t/e/testing.jpg',
                          'The Apple Watch with a 38mm Stainless Steel Case is a functional tool that can help improve the quality of your life while you are on the move. This smartwatch has the Watch OS developed by Apple, which serves to equip it for novel purposes. A Retina display vividly  casts images that look like they have been painted on the touch screen. This smartwatch can be used by tapping the touchscreen with  Force Touch functionality or by rotating the crown.Look at the time differently with customizable wrist watch complications and different  dial faces. Integrated with the iPhone and Siri, this watch can accept commands spoken to it when raised to be near the mouth. It  connects to an iPhone by means of WiFi or Bluetooth.',
                          1069,
                          2,
                          [2,3]
                        ),
          new ItemModule(
                          12,
                          'HTC U Play Dual SIM - 64GB, 4GB RAM, 4G LTE, Brilliant Black',
                          'https://cf1.s3.souqcdn.com/item/2017/01/18/13/22/71/12/item_XXL_13227112_19539155.jpg',
                          "HTC U mobile is your travel, work, and entertainment partner. This HTC 4G smartphone has a 5.2inch FHD screen, 64GB HDD, 2500mAh battery, and 4GB RAM. Big on entertainment and seamless in its workings, the HTC U Play smartphone is the new thing that is taking the electronic world by a storm. You don't need to use it to get impressed, a look at it is enough! Crafted out of metal and glass, it looks beyond extraordinary in its suave black color and incredibly soft and color reflective surface. It has stunning contoured sides and a thin frame. Whatever you do, this mobile will always be at the center of things with its fast, lag free performance, highly interactive interface, and supremely intelligent HTC Sense Companion. It gets charged fast and provides long hours of usage with its powerful and 2500mAh battery. It turns your entertainment from good to best with its 5.2inch FHD screen, HTC USonic speakers and dual microphone with noise cancellation",
                          500,
                          3,
                          [2]
                        )

        ];
  }

}
