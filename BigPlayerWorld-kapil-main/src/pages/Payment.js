import React, { useEffect, useState } from 'react'


function Payment({}) {
    
    const [html, setHTML] = useState({__html: ""});
    useEffect(() => {
        createMarkup().then(result => setHTML(result));
      },[]);
      async function createMarkup() {
        let response;
        const data = {amount: '100'}
        const a  = JSON.parse(localStorage.getItem('token'))
        const b = "bearer ".concat(a)
        console.log(b)
        response = await fetch('https://win99x.com/public/api/auth/recharge', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            authorization: b,
          },
          body: (JSON.stringify(data)),
        });
         const backendHtmlString = await response.text()
  
         console.log(backendHtmlString)
         return {__html: backendHtmlString};
      }
    
      return <div dangerouslySetInnerHTML={html} />;

}

export default Payment
