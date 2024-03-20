"use client";

import { getClientToken } from "@/lib/firebaseInit";
import axios from "axios";
import { useEffect } from "react";

export default function Home() {

  function clientPermission(){
    Notification.requestPermission().then(permission => {
      if (permission !== 'granted') {alert('푸시 거부됨');}
      else {alert('푸시 승인됨');}
    });
  };

  async function msgTest(){
    const token = await getClientToken();    
    console.log(token);

    const message = {
      data: {
        title:'fcm test',
        body:'fcm.......',
        icon:'https://cdn-icons-png.flaticon.com/512/660/660026.png',
        image: 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/quick-actions/remove-background-before-qa1.png',
        click_action:'https://www.naver.com',
      },
      token
    };

    axios({
      method: 'POST',
      url:'/api',
      data: { message },
    });


  }

  useEffect(()=>{
    if('navigator' in window){
      navigator.serviceWorker.register('/firebase-messaging-sw.js',{scope:'/firebase-cloud-messaging-push-scope'})
    }
  },[])


  return (
    <div>
      <h2> FCM TEST </h2>
      <button onClick={clientPermission}>권한허용</button>
      <button onClick={msgTest}>토큰발행</button>
    </div>
  );
}
