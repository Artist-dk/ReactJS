import React, { Component } from 'react'
import './style/SCTutorial.scss';
import './style/SCTutorialContent.scss';

export default class SCTutorial extends Component {
  render() {
    return (
      <>
        <div className="editTutorial">
          <div className="topNav">
            <p>TopNav</p>
          </div>
          <div className="leftNav">
            <p>LeftNav</p>
            <button>btn</button>
            <button>btn</button>
            <button>btn</button>
          </div>
          <div className="workspace">
            <div className="mid">
              <div className="Article">
                <div className="heading1">Heading 1</div>
                <div className="paragraph">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium nostrum molestiae quis sed eum expedita harum optio dolore, ex mollitia,  
                     <span className="highlight">fuga</span>
                    officia fugit consequatur aperiam quaerat quo. Consequuntur, aut illum.
                  </p>
                </div>  
                <div className="heading2">Heading 2</div>
                <div className="paragraph">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium nostrum molestiae quis sed eum expedita harum optio dolore, ex mollitia,  
                     <span className="highlight">fuga</span>
                    officia fugit consequatur aperiam quaerat quo. Consequuntur, aut illum.
                  </p>
                </div>  
                <div className="heading3">Heading 3</div>
                <div className="paragraph">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium nostrum molestiae quis sed eum expedita harum optio dolore, ex mollitia,  
                     <span className="highlight">fuga</span>
                    officia fugit consequatur aperiam quaerat quo. Consequuntur, aut illum.
                  </p>
                </div>  
                <div className="heading4">Heading 4</div>
                <div className="paragraph">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium nostrum molestiae quis sed eum expedita harum optio dolore, ex mollitia,  
                     <span className="highlight">fuga</span>
                    officia fugit consequatur aperiam quaerat quo. Consequuntur, aut illum.
                  </p>
                </div>  
                <div className="heading5">Heading 5</div>
                <div className="paragraph">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium nostrum molestiae quis sed eum expedita harum optio dolore, ex mollitia,  
                     <span className="highlight">fuga</span>
                    officia fugit consequatur aperiam quaerat quo. Consequuntur, aut illum.
                  </p>
                </div>  
                <div className="heading6">Heading 6</div>
                <div className="paragraph">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium nostrum molestiae quis sed eum expedita harum optio dolore, ex mollitia,  
                     <span className="highlight">fuga</span>
                    officia fugit consequatur aperiam quaerat quo. Consequuntur, aut illum.
                  </p>
                </div>  
                {/*
                heading1
                heading2
                heading3
                heading4
                heading5
                heading6

                list - ordered
                list - unordered

                highlighters

                links

                tables

                badges

                code boxes

                */}
                <div className="orderedList-enNum">
                  <ol>
                    <li>Option 1</li>
                    <li>Option 2</li>
                    <li>Option 3</li>
                    <li>Option 4</li>
                  </ol>
                </div>
                <div className="unOrderedList-disc">
                  <ul>
                    <li>Option 1</li>
                    <li>Option 2</li>
                    <li>Option 3</li>
                    <li>Option 4</li>
                  </ul>
                </div>
                <span className='link'>link</span>

                <table>
                  <thead>
                    <tr>
                      <th>Parameter	</th>
                      <th>Type</th>
                      <th>Description</th>
                      <th>Head</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>id</td>
                      <td>string</td>
                      <td>Required. Id of item to fetch</td>
                      <td>tdata</td>
                    </tr>
                  </tbody>
                </table>
                <div className="exBox">
                  This is an Example... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eveniet temporibus illo perferendis dolorum consequatur perspiciatis expedita eligendi, libero non molestiae fuga voluptatibus vero nesciunt veniam esse ut molestias! Repellat.
                </div>
                <div className="sectionA">
                  This is sectionA
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus error consequatur similique? Exercitationem sint eos nihil, natus ducimus quos iusto rem aliquam, praesentium officia repellat unde repudiandae. In, quae necessitatibus!
                </div>
                <div className="sectionB">
                  This is sectionB
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident totam harum non explicabo quas eum ut at magni, quam excepturi vero numquam debitis, sed natus aut repudiandae distinctio! Maxime, nam.
                </div>
                <div className="sectionC">
                  This is sectionC Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia accusantium quam suscipit minus impedit aspernatur vel nam minima laboriosam aut maxime, debitis natus. Qui ipsum perferendis, itaque quam mollitia impedit.
                </div>
                <div className="sectionD">
                  This is sectionD Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente quo, vero eveniet laboriosam sunt aliquam ipsum distinctio repellat deserunt nam voluptatum blanditiis ipsam dolore quaerat voluptate excepturi. Sunt, nostrum minus.
                </div>
                <div className="sectionE">
                  This is sectionE Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam officiis aspernatur illum ea quos. Nam aliquam repellat minima quos officiis facere totam, perferendis suscipit, obcaecati ipsum maiores at, dolores vero?
                </div>
                {/* tutorialWrapper */}
              </div>
            </div>
          </div>
          <div className="rightNav">
            <p>RightNav</p>
          </div>
          <div className="bottomStatusBar"></div>
        </div>
      </>
    )
  }
}
