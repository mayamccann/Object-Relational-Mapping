const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products

  try {
    const categories = await Category.findAll({
      include: [{ model: Product}],
    });
  }});


router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

// const newCategory with console.error. define the numbers - why? 
const newCategory = await Category.create(req.body);
res.status .json(newCategory)
 catch (err) {
  console.error(err);
  res.status(500).json(err);
}


router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;