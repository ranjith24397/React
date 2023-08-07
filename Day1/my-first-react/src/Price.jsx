import React from 'react'
import'./Price.css'
import {FaCheck,FaTimes} from 'react-icons/fa'


function Price() {

  return (
    <div className='container'>
      <div className='card'>
      {React.createElement("p",{className:"para1"},"Free")}
      {React.createElement("p",{className:"heading"},"$0/",React.createElement("span",{className:"span1"},"Month"))}
      {React.createElement("hr",null)}
      {React.createElement("ul",{className:"order"},
      React.createElement("li",{className:"listItem"},<span className='icon'><FaCheck/></span>,"Single User"),
      React.createElement("li",{className:"listItem"},<span className='icon'><FaCheck/></span>,"5Gb Storage"),
      React.createElement("li",{className:"listItem"},<span className='icon'><FaCheck/></span>,"Unlimited Public Projects"),
      React.createElement("li",{className:"listItem"},<span className='icon'><FaCheck/></span>,"Community Access"),
      React.createElement("li",{className:"listItem1"},<span className='icon'><FaTimes/></span>,"Dedicated Phone Support"),
      React.createElement("li",{className:"listItem1"},<span className='icon'><FaTimes/></span>,"Free Subdomain"),
      React.createElement("li",{className:"listItem1"},<span className='icon'><FaTimes/></span>,"Monthly Status Reports"))}
      {React.createElement("button",{className:"btn1"},"Button")}
      </div>
      <div className='card'>
      {React.createElement("p",{className:"para1"},"Plus")}
      {React.createElement("p",{className:"heading"},"$9/",React.createElement("span",{className:"span1"},"Month"))}
      {React.createElement("hr",null)}
      {React.createElement("ul",{className:"order"},
      React.createElement("li",{className:"listItem"},<span className='icon'><FaCheck/></span>,"5 Users"),
      React.createElement("li",{className:"listItem"},<span className='icon'><FaCheck/></span>,"50Gb Storage"),
      React.createElement("li",{className:"listItem"},<span className='icon'><FaCheck/></span>,"Unlimited Public Projects"),
      React.createElement("li",{className:"listItem"},<span className='icon'><FaCheck/></span>,"Community Access"),
      React.createElement("li",{className:"listItem"},<span className='icon'><FaCheck/></span>,"Dedicated Phone Support"),
      React.createElement("li",{className:"listItem"},<span className='icon'><FaCheck/></span>,"Free Subdomain"),
      React.createElement("li",{className:"listItem1"},<span className='icon'><FaTimes/></span>,"Monthly Status Reports"))}
      {React.createElement("button",{className:"btn1"},"Button")}
      </div>
      <div className='card'>
      {React.createElement("p",{className:"para1"},"Pro")}
      {React.createElement("p",{className:"heading"},"$49/",React.createElement("span",{className:"span1"},"Month"))}
      {React.createElement("hr",null)}
      {React.createElement("ul",{className:"order"},
      React.createElement("li",{className:"listItem"},<span className='icon'><FaCheck/></span>,"Unlimited User"),
      React.createElement("li",{className:"listItem"},<span className='icon'><FaCheck/></span>,"150Gb Storage"),
      React.createElement("li",{className:"listItem"},<span className='icon'><FaCheck/></span>,"Unlimited Public Projects"),
      React.createElement("li",{className:"listItem"},<span className='icon'><FaCheck/></span>,"Community Access"),
      React.createElement("li",{className:"listItem"},<span className='icon'><FaCheck/></span>,"Dedicated Phone Support"),
      React.createElement("li",{className:"listItem"},<span className='icon'><FaCheck/></span>,"Unlimited Free Subdomain"),
      React.createElement("li",{className:"listItem"},<span className='icon'><FaCheck/></span>,"Monthly Status Reports"))}
      {React.createElement("button",{className:"btn1"},"Button")}
      </div>
    </div>
  );
}

export default Price