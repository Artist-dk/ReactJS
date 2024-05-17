import React from 'react'
import FormValidation from './FormValidation'

export default function Form() {
  return (
    <>
    <form ref={formRef} data-validation="1">
        <div className="msg">
            Log in your account
        </div>
        <div className="i-cont">
        </div>
        <div className="inputBox">
            <div>
                <input name="firstname" type="text" autoComplete="off" required data-a="0" data-msg="Please enter a valid name" data-name="First Name" />
                <span className="input-label" >First Name</span>
                <i className="input-bg"></i>
                <p className="error-msg">Required</p>
            </div>
        </div>
        <div className="inputBox">
            <div>
                <input type="text" name="lastname" autoComplete="off" required data-a="0" data-msg="Please enter a valid name" data-name="Last Name" />
                <span className="input-label">Last Name</span>
                <i className="input-bg"></i>
                <p className="error-msg">Required</p>
            </div>
        </div>
        <div className="inputBox">
            <div>
                <input type="text" name="phoneno" autoComplete="off" required data-a="1" data-msg="Please enter a valid phone number" data-name="Phone No." />
                <span className="input-label">Phone No.</span>
                <i className="input-bg"></i>
                <p className="error-msg">Required</p>
            </div>
        </div>
        <div className="inputBox">
            <div>
                <input type="text" name="emialid" autoComplete="off" required data-a="2" data-msg="Please enter a valid Email ID" data-name="Email Id" />
                <span className="input-label">Phone No.</span>
                <i className="input-bg"></i>
                <p className="error-msg">Required</p>
            </div>
        </div>
        <div className="textareaBox">
            <div>
                <textarea name="contactmsg" data-a="5" data-msg="Please enter a valid Message" data-name="Message" required></textarea>
                <span className="textarea-label">Message</span>
                <i className="textarea-bg"></i>
                <p className="error-msg">Required</p>
            </div>
        </div>
        <div className="inputBox">
            <div>
                <input type="submit" />
            </div>
        </div>
    </form>
    </>
  )
}
