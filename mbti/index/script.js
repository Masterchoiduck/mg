// script.js
document.querySelectorAll('.reply').forEach(reply => {
    reply.addEventListener('click', () => {
        alert("눌린 답변!");
    });
});


var viewportWidth = window.innerWidth;

// .character-image img 요소의 너비를 가져오는 함수
function getImageWidth() {
    // .character-image img 요소를 가져옵니다.
    var imageElement = document.querySelector('.character-image img');
    
    // .character-image img 요소의 너비를 반환합니다.
    console.log(`이미지 너비${imageElement.offsetWidth}`);
    return imageElement.offsetWidth;
  }
  
  // .message-bubble 너비 설정 함수
  function setMessageBubbleWidth() {
    // 이미지의 너비를 가져옵니다.
    var imageWidth = getImageWidth();
    
    // 이미지 너비의 80%를 계산합니다.
    var bubbleWidth = imageWidth * 0.8;
    
    // .message-bubble 요소를 가져옵니다.
    var messageBubble = document.querySelector('.message-bubble');
    
    // .message-bubble 요소의 너비를 설정합니다.
    console.log(viewportWidth);
    if (viewportWidth >= 768){
        messageBubble.style.width = bubbleWidth + 'px';
        console.log(`버블 너비${messageBubble.style.width}`);
    } else {
        messageBubble.style = ''
    }
  }
  
  // 페이지가 로드될 때 초기화
  window.onload = function() {
        setMessageBubbleWidth();
    };
  
  // 창 크기가 변경될 때마다 다시 설정
  window.onresize = function() {
        viewportWidth = window.innerWidth;
        setMessageBubbleWidth();
        console.log(viewportWidth);
    };
  