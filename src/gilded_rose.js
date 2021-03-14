class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      this.qualityUpdate(i);
      this.notSul(i);
      this.sellinNegative(i);
    }

    return this.items;
  }

  qualityUpdate(i) {
    if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
      if (this.items[i].quality > 0 && this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].quality -= 1;
        if(this.items[i].name == 'Conjured'){
          this.items[i].quality -= 1;
        }
      }
    } else {
      this.qualityLessThanFiftyThenUpdateQuality(i);
    }
  }

  qualityLessThanFiftyThenUpdateQuality(i) {
    if (this.items[i].quality < 50) {
      this.items[i].quality += 1;

      this.backstageQualityLessThanEleven(i);
      this.backstageQualityLessThanSix(i);
    }
  }

  backstageQualityLessThanEleven(i) {
    if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert' && this.items[i].sellIn < 11 && this.items[i].quality < 50) {
      this.items[i].quality += 1;
    }
  }

  backstageQualityLessThanSix(i) {
    if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert' && this.items[i].sellIn < 6 && this.items[i].quality < 50) {
      this.items[i].quality += 1;
    }
  }

  notSul(i) {
    if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
      this.items[i].sellIn -= 1;
    }
  }

  sellinNegative(i) {
    if (this.items[i].sellIn < 0) {
      this.ifSellinLessThanZero(i);
    }
  }

  ifSellinLessThanZero(i) {
    if (this.items[i].name != 'Aged Brie') {
      if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        this.qualityGreaterThanZeroNotSulfras(i);
      } else {
        this.items[i].quality = 0;
      }
    } else {
      this.qualityLessThanFifty(i);
    }
  }

  qualityGreaterThanZeroNotSulfras(i) {
    if (this.items[i].quality > 0 && this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
      this.items[i].quality -= 1;
    }
  }

  qualityLessThanFifty(i) {
    if (this.items[i].quality < 50) {
      this.items[i].quality += 1;
    }
  }
}

module.exports = {
  Item,
  Shop
}