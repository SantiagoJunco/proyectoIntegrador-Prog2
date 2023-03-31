const productController = {
    product: function(req, res) {
        return res.render('product');
      },
    agregarProducto:  function(req, res) {
        return res.render('product-add');
      },
    detalle:  function(req, res) {
        return res.render('search-results');
      }
}
module.exports = productController