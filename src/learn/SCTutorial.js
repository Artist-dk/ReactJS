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
              <div className="tutorialWrapper">
                <div className="heading1">Heading 1</div>
                <div className="paragraph">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium nostrum molestiae quis sed eum expedita harum optio dolore, ex mollitia,  
                     <span className="highlight">fuga</span>
                    officia fugit consequatur aperiam quaerat quo. Consequuntur, aut illum.
                  </p>
                </div>  
                <div className="heading2">Heading 2</div>
                <div className="heading3">Heading 3</div>
                <div className="heading4">Heading 4</div>
                <div className="heading5">Heading 5</div>
                <div className="heading6">Heading 6</div>
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
