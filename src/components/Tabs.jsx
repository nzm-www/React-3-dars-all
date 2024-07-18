import React, { useState } from 'react';
import '../App.css'

function Tabs() {

      const [toggle, setToggle] = useState(1)

      const changeTab = (index) => {
            setToggle(index)
      }


      return (
            <div className='tabs'>
                  <div className="block-tabs">
                        <div
                              onClick={() => changeTab(1)}
                              className={toggle === 1 ? 'tab active-tab' : 'tab'}
                        >
                              Tab 1
                        </div>
                        <div
                              onClick={() => changeTab(2)}
                              className={toggle === 2 ? 'tab active-tab' : 'tab'}
                        >
                              Tab 2
                        </div>
                        <div
                              onClick={() => changeTab(3)}
                              className={toggle === 3 ? 'tab active-tab' : 'tab'}
                        >
                              Tab 3
                        </div>
                  </div>
                  <div className="content-tabs">
                        <div className={toggle === 1 ? 'content active-content' : 'content'}>
                              <h2>Content 1</h2>
                              <hr />
                              <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, illum assumenda aut adipisci, consequatur expedita corporis ratione enim quo fuga a minus cupiditate culpa. Velit tempore dolorem, perferendis provident quia magni optio alias, quos consequatur exercitationem dolore possimus adipisci labore.
                              </p>
                        </div>
                        <div className={toggle === 2 ? 'content active-content' : 'content'}>
                              <h2>Content 2</h2>
                              <hr />
                              <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis reiciendis doloremque et, magni enim libero illo, quam nesciunt earum cumque cupiditate quod totam architecto, distinctio quis voluptates similique consequuntur itaque.
                              </p>
                        </div>
                        <div className={toggle === 3 ? 'content active-content' : 'content'}>
                              <h2>Content 3</h2>
                              <hr />
                              <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, ad. Dignissimos debitis ea provident, atque reprehenderit voluptate. Reprehenderit nam iure vero dolorem autem cupiditate iusto distinctio deserunt repellat totam a sunt ducimus hic possimus at eaque labore, dolore, animi magni delectus corrupti neque nisi accusamus. Ipsa repellat sed voluptatem optio.
                              </p>
                        </div>

                  </div>
            </div>
      );
}

export default Tabs;