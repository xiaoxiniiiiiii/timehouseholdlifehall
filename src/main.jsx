import { useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const products = [
  ['Warm Loom Rug', '地毯', '暖陶土几何编织地毯', 299, 'rug.webp'],
  ['Sage Linen Pair', '抱枕', '鼠尾草绿亚麻抱枕套装', 129, 'pillows.webp'],
  ['Golden Weave Trivet', '厨房用品', '金色棋盘编织隔热垫', 49, 'trivet.webp'],
  ['Mango Wood Bowl', '厨房用品', '芒果木浅口果盘', 169, 'fruit-bowl.webp'],
  ['Quiet Pantry Jars', '厨房用品', '素色陶瓷调味罐三件套', 119, 'spice-jars.webp'],
  ['Countertop Shelf', '厨房用品', '黑色金属双层厨房置物架', 199, 'kitchen-rack.webp'],
  ['Clay Woven Curtain', '浴室用品', '陶土色棉质浴帘', 239, 'shower-curtain.webp'],
  ['Cloudstep Bath Mat', '浴室用品', '雾蓝厚绒浴室防滑垫', 99, 'bath-mat.webp'],
  ['Brass Towel Rail', '浴室用品', '拉丝黄铜毛巾架', 149, 'towel-rail.webp'],
  ['Oak Edge Shelf', '浴室用品', '橡木边框浴室置物架', 179, 'bath-shelf.webp'],
  ['Vanity Duo Tray', '浴室用品', '奶油色陶瓷洗漱收纳盘', 89, 'vanity-tray.webp'],
  ['Seagrass Handled Basket', '收纳用品', '天然海草双耳收纳篮', 139, 'storage-basket.webp'],
].map(([name, category, description, price, image], index) => ({ id: index + 1, name, category, description, price, image }))

function App() {
  const [category, setCategory] = useState('全部商品')
  const [cartCount, setCartCount] = useState(0)
  const categories = ['全部商品', ...new Set(products.map((product) => product.category))]
  const visibleProducts = useMemo(() => category === '全部商品' ? products : products.filter((product) => product.category === category), [category])

  return (
    <div className="page-shell">
      <header className="site-header">
        <a className="brand" href="/">TIME HOUSEHOLD <span>LIFE HALL</span></a>
        <div className="header-note">把日常过得更舒服</div>
        <button className="cart-button" onClick={() => setCartCount((count) => count + 1)} aria-label="购物车">购物车 <b>{cartCount}</b></button>
      </header>

      <main>
        <section className="intro">
          <p className="eyebrow">NEW DAILY EDIT</p>
          <h1>给生活添一点<br /><em>柔软与秩序</em></h1>
          <p className="intro-copy">从厨房到浴室，精选一组实用、耐看的家居小物，让每一个角落都更从容。</p>
        </section>

        <section className="catalog" aria-label="家居商品目录">
          <div className="catalog-bar">
            <div><span className="catalog-label">新增商品</span><span className="catalog-count">{visibleProducts.length} 件</span></div>
            <nav className="filters" aria-label="商品分类">
              {categories.map((item) => <button className={category === item ? 'active' : ''} key={item} onClick={() => setCategory(item)}>{item}</button>)}
            </nav>
          </div>
          <div className="product-grid">
            {visibleProducts.map((product) => (
              <article className="product-card" key={product.id}>
                <div className="product-image"><img src={`/products/${product.image}`} alt={product.description} loading="lazy" /><span>{String(product.id).padStart(2, '0')}</span></div>
                <div className="product-info"><div><p className="product-category">{product.category}</p><h2>{product.name}</h2><p className="description">{product.description}</p></div><div className="product-bottom"><strong>¥{product.price}</strong><button onClick={() => setCartCount((count) => count + 1)}>加入购物车</button></div></div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <footer><span>TIME HOUSEHOLD LIFE HALL</span><span>EVERYDAY OBJECTS, CONSIDERED.</span></footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
