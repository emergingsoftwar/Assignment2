const {Shop, Item} = require("../src/gilded_rose");

describe("First Test Suite", function() {
  
  it("sellin value and quality test", function() {
    const gildedRose = new Shop([new Item("foo", 2, 2)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(1);
    expect(items[0].quality).toBe(1)
  });

  it("Once the sell by date has passed, Quality degrades twice as fast", function() {
    const gildedRose = new Shop([new Item("Past sell date", 0, 40)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(38);
  });

  it("The Quality of an item is never negative", function() {
    const gildedRose = new Shop([new Item("Never negative", 5, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });

  it("Aged Brie actually increases in Quality the older it gets", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 2, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(1);
    expect(items[0].sellIn).toBe(1);
  });
  
  it("degrade in Quality when selling <0", function() {
    const gildedRose = new Shop([new Item("any", -1, 1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
});

});



describe("Quality negative", function() {
  it("Quality negative", function() {
    const gildedRose = new Shop([new Item("Aged Brie", -1, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(12);
  });
});

describe("The Quality of an item is never more than 50", function() {
  it("Quality", function() {
    const gildedRose = new Shop([new Item("Aged Brie", -1, 49)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });
  it("The Quality never more than 50", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 20, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });
});


describe("Backstage passes", function() {
  it("increases in Quality as its SellIn value approaches", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 20, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(21);
});

  it("Backstage pass test", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 40)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(43);
  });

  it("Backstage pass test 2", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 40)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(42);
  });
 
  it("Backstage pass test 3", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 40)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });

  it("selling <11 Quality max 50", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });

  it("selling <6 Quality max 50", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 48)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
});

});

describe("Sulfuras", function() {
  it("being a legendary item, never has to be sold or decreases in Quality", function() {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 0, 30)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(30);
    expect(items[0].sellIn).toBe(0);
  });

  it("constant in Quality when selling <0", function() {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", -1, 80)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(80);
  }); 
  
});

describe("Sellin", function() {
  it("Less than 0", function() {
    const gildedRose = new Shop([new Item("Bread", -1, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(8);

  });
});

describe("Conjure", function() {
  it("degrade", function() {
    const gildedRose = new Shop([new Item("Conjured", 10, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(8);
    expect(items[0].sellIn).toBe(9);

  });
});