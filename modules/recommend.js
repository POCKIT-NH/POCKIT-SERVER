const ContentBasedRecommender = require('content-based-recommender');
const { OrderProduct, Product } = require('../../models');

module.exports = async (user, page) => {
  const recommender = new ContentBasedRecommender({
    minScore: 0.1,
    maxSimilarDocuments: 100,
  });

  // order테이블의 user_idx=1 인 order_idx =6
  // order-product 테이블에서 order_idx = 6인 product_idx들을 가져옴
  let orderList = await OrderProduct.findAll(

    { where: { idx: 6 } });
  // product 테이블에서 product_idx에 해당하는 category 를 가진 다른 음식들 추천

  // documents를 
  // start training
  recommender.train(documents);

  //get top 10 similar items to document
  const similarDocuments = recommender.getSimilarDocuments(user._id, 0, 10);
  console.log(similarDocuments);

  return result.slice(0, page);
};
