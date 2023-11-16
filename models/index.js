// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsToCategory(Product, {
  through: {
  model: Category,

},
});

// Categories have many Products
Category.belongsToMany(Product, {
  through: {
    model: Tag, ProductTag, Product, 
    unique: false,
  },
})


// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  though: {
    model: ProductTag
  }
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(ProductTag, {
  through: {
    model: ProductTag,

  },
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
