import React, { useState } from 'react'
// import Main from './SSChatApp/Main';
import './SSChatApp/style.scss';
import Lsidebar from './SSChatApp/Lsidebar';


function open(e) {
  e = e.currentTarget;
  var lsb = document.querySelector(".lsidebar")
    if(e.classList.value.match("active-icon")) {
        e.classList.remove('active-icon')
        lsb.classList.remove('lsidebar-show')
    } else {
        e.classList.toggle('active-icon')
        lsb.classList.toggle('lsidebar-show')
    }
}


export default function Student() {
  return (
    <>
    
<div class="body-flex">
    <div class="head">
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
    <div class="body">
        <Lsidebar />
        <div class="main">
            {/* <div class="aaaaab1 var container-main" id="aaazaa1">
                <div class="settings-main">
                    <div class="form-cont">
                        <div class="heading">
                            <h2>Personal Details:</h2>
                        </div>
                        <form action="signin.php" method="post">
                            <div class="inputBox">
                                <input type="text" name="fname" id="" required />
                                <span class="input-label">Fname</span>
                                <i class="input-bg"></i>
                            </div>
                            <div class="inputBox">
                                <input type="text" name="lname" id="" required />
                                <span class="input-label">Lname</span>
                                <i class="input-bg"></i>
                            </div>
                            <div class="inputBox">
                                <input type="text" name="username" id="" required />
                                <span class="input-label">Username</span>
                                <i class="input-bg"></i>
                            </div>
                            <div class="inputBox">
                                <input type="text" name="gender" id="" required />
                                <span class="input-label">Gender</span>
                                <i class="input-bg"></i>
                            </div>
                            <div class="inputBox">
                                <input type="text" name="phone" id="" required />
                                <span class="input-label">Phone</span>
                                <i class="input-bg"></i>
                            </div>
                            <div class="inputBox">
                                <input type="file" name="profile-pic" id="" />
                                <span class="input-label">Profile picture: </span>
                                <i class="input-bg"></i>
                            </div>
                            <!--
                            <div class="inputBox">
                                <input  type="submit" value="Save" id="" />
                            </div>--> 
                            <br />
                            <br />
                            <hr />
                            <div class="link">
                                <span class=" ">Public profile</span>
                            </div>
                            <div class="link">
                                <span class=" ">Personal details</span>
                            </div>
                            <div class="link">
                                <span class="">Manage account</span>
                            </div>
                            <div class="link">
                                <span class="">Theme</span>
                            </div>
                            <div class="link">
                                <span class="">Privacy</span>
                            </div>
                            <div class="link">
                                <span class="">Help</span>
                            </div>
                            <div class="link">
                                <span class=" _logout">Log out</span>
                            </div>
                            <div class="link">
                                <span class="">Switch to other account</span>
                            </div>
                            <div class="link">
                                <span class="">About</span>
                            </div>
                        </form>
                    </div>
                </div>
            </div> */}


            <div class="aaaaab1 hidden container-main info-main" id="aaaaaa1"></div>


            <div class="container-main">
                <div class="chat-main-psudo hidden">
                    <h1>Welcome in ChatAPP!</h1>
                </div>
                <div class="chat-main">
                    <div class="chat-head">
                        <div class="grid-1">
                            <div class="img-cont">
                                <img src="" alt="" />
                            </div>
                            <div class="name-cont">
                            </div>
                        </div>
                        <div>
                            <img src="" alt="" />
                        </div>
                    </div>
                    <div class="chat-body">
                    </div>
                    <div class="chat-footer">
                        <div class="inputs">
                            <input type="text" placeholder="Message" ame="text" id="_msg" />
                            <button id="_sendMsg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M3.4 20.4l17.45-7.48c.81-.35.81-1.49 0-1.84L3.4 3.6c-.66-.29-1.39.2-1.39.91L2 9.12c0 .5.37.93.87.99L17 12 2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91z"/></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
  )
}
