import React from 'react'

const imgUrl = 'https://i.pinimg.com/originals/20/c0/0f/20c00f0f135c950096a54b7b465e45cc.jpg'
export default function Lsidebar() {
  return (
    <div className="lsidebar-cont">
        <div className="friend-li">
            <div className="friend-img-cont">
                <img src={imgUrl} alt="" />
            </div>
            <div className="friend-info-cont">
                <div>
                    <div className="friend-info-name">Sundar pichai</div>
                    <div className="friend-info-id">sundar_p</div>
                </div>
            </div>
        </div>
        <div className="friend-li">
            <div className="friend-img-cont">
                <img src={imgUrl} alt="" />
            </div>
            <div className="friend-info-cont">
                <div>
                    <div className="friend-info-name">Sundar pichai</div>
                    <div className="friend-info-id">sundar_p</div>
                </div>
            </div>
        </div>
    </div>
  )
}
