import React from 'react'

export default function Head() {
  return (
    <div className='head'>
      <div class="head-cont">
            <div class="title-cont">
                <div>
                    <span class="title-bg"></span>
                    <span class="title"><h2>CHATAPP</h2></span>
                </div>
            </div>
            <div class="nav">
                <span class="aaaaaa1 var" onclick="aaaaaa(event, 'aaaaab1')">Home</span>
                <span class="aaaaaa1 var" onclick="aaaaaa(event, 'aaaaab1')">Messages</span>
                <span class="aaaaaa1 active" id="_setting" onclick="aaaaaa(event, 'aaazaa1')">Settings</span>
                <span class="aaaaaa1 var" id="_info" onclick="aaaaaa(event, 'aaaaaa1')">Profile</span>
                <span class="aaaaaa1 var" id="_info" onclick="aaaaaa(event, 'aaaaaa1')">Notifications</span>
                <span class="aaaaaa1 var" id="_info" onclick="aaaaaa(event, 'aaaaaa1')">Shorts</span>
            </div>
        </div>
    </div>
  )
}
