
// lib/firebaseInit.ts
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBgAbSkFYdmZZ8dGkl8jjUTHrmMQM2Cchg",
  authDomain: "test3-63f0e.firebaseapp.com",
  projectId: "test3-63f0e",
  storageBucket: "test3-63f0e.appspot.com",
  messagingSenderId: "505112009809",
  appId: "1:505112009809:web:035d3efe1fa1bf5a4fac70",
  measurementId: "G-MPZHQDY1XZ"
};

const app = initializeApp(firebaseConfig);

let messaging:any;

if (typeof window !== "undefined" && typeof window.navigator !== "undefined") {
  messaging = getMessaging(app);  
}

export const getClientToken = async () => {
  
  let currentToken;
  try{
     currentToken = await getToken(messaging,{vapidKey:'BEQwHlviB52V6zKaZjoT9Xq0xlWgM3z6U_kSd04NuJOua5qguWGgbGPRvD3qRVkl-Bj4EQ7F0d6vYHZHgXhJ9P0'})
    .then(res=>{
      console.log(res,'=======gettoken=========')
      return res
    });
  }catch{}
    return currentToken;
  
}

