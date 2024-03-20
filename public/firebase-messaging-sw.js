self.addEventListener("install", function (e) {
    console.log("fcm sw install..");
    self.skipWaiting();
  });  
 
  self.addEventListener('push', function (event) {
    if (event.data) {
      // 알림 메세지일 경우엔 event.data.json().notification;
      const data = event.data.json().data;
      const options = {
        body: data.body,
        icon: data.icon,
        image: data.image,
        badge:'3.jpg',
        vibrate:[200,100,300],
        data: {
          click_action: data.click_action, // 이 필드는 밑의 클릭 이벤트 처리에 사용됨
        },
        tag:'abc'
       }

      event.waitUntil(self.registration.showNotification(data.title, options));
    } else {
      console.log('This push event has no data.');
    }
  });
 
  self.addEventListener('notificationclick', function (event) {
    event.preventDefault();
    event.notification.close();
 
    const urlToOpen = event.notification.data.click_action;
 
    // 클라이언트에 해당 사이트가 열려있는지 체크
    const promiseChain = clients
      .matchAll({
        type: 'window',
        includeUncontrolled: true,
      })
      .then(function (windowClients) {
        let matchingClient = null;
 
        for (let i = 0; i < windowClients.length; i++) {
          const windowClient = windowClients[i];
          if (windowClient.url.includes(urlToOpen)) {
            matchingClient = windowClient;
            break;
          }
        }
 
        // 열려있다면 focus, 아니면 새로 open
        if (matchingClient) {
          return matchingClient.focus();
        } else {
          return clients.openWindow(urlToOpen);
        }
      });
 
    event.waitUntil(promiseChain);
  });
