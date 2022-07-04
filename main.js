'use atrict';

{
  class Panel {
    constructor() {
      const section = document.createElement('section'); //tao the section cua html
      section.classList.add('panel');    //them class voi ten la 'panel' cho the section vua tao 

      this.img = document.createElement('img');  //tao the 'img' trong the 'section'
      this.img.src = this.getRandomImage(); //them duong link 'src' dan toi hinh anh cho the 'img' (random image)

      this.timeoutId = undefined; //tao thoi gian tat khi nhan 

      this.stop = document.createElement('div');  //tao the 'div' trong the 'section'
      this.stop.textContent = 'STOP';   //tai bien this.stop them gia tri la 'STOP' 
      this.stop.classList.add('stop', 'inactive'); //tai the 'div' tao class la 'stop'
      this.stop.addEventListener('click', () => { //click vao 'STOP' tat 'SPIN'
        if (this.stop.classList.contains('inactive')) { //
          return;
        }
        this.stop.classList.add('inactive');
        clearTimeout(this.timeoutId);   //tat 'SPIN'
        panelsLeft--;
        
        if (panelsLeft === 0) {
          spin.classList.remove('inactive');   //chay lai khi bang 0 'SPIN'
          panelsLeft = 3;
          checkResult();
        }
      });

      section.appendChild(this.img);  //hien thi 'this.img'
      section.appendChild(this.stop);  //hien thi 'this.stop'

      const main = document.querySelector('main'); //gan cho bien 'main' voi gia tri trong 'main' cua html
      main.appendChild(section);    //hien thi 'section' cua html
    }

    getRandomImage() { //tao ham random image   (1)
      const images = [
        'japan.png',
        'tea.png',
        'ticket.png',
        'japan.png',
        'tiger.png',
        'rose.png',
        'japan.png',
        'japan.png',
        'tea.png',
        'ticket.png',
        'japan.png',
        'tea.png',
        'ticket.png',
        'japan.png',
      ];
      return images[Math.floor(Math.random() * images.length)]; //ket qua tra ve cua ham 'getRamdomImages'
    }

    spin() {
      this.img.src = this.getRandomImage();    //ham 'spin' se lay gia tri khi ham 'getRandomImages' tra ve
      this.timeoutId = setTimeout(() => {  //tao thoi gian dung cho moi lan random (1)
        this.spin();    //sau khi random dung thi lai tiep tuc lap lai random
      }, 50);    //thoi gian dung random la 5/100s
    }

    isUnmatched(p1, p2) {
      // return this.img.src !== p1.img.src && this.img.src !== p2.img.src;
     if (this.img.src !== p1.img.src && this.img.src !== p2.img.src) {
      return;
     }
    //  else {
    //    console.log("あたり！");
    //  }
      // if (panels[0] === panels[1] && panels[0] === panels[2]) {
      //  console.log("あたり！");
      // }
    }
  
    unmatch() {
      this.img.classList.add('unmatched');
    }
    
    activate() {
      this.img.classList.remove('unmatched');
      this.stop.classList.remove('inactive');
    }
  }

  function checkResult() {   //ket qua
    if (panels[0].isUnmatched(panels[1], panels[2])) {
      panels[0].unmatch();
    }
    if (panels[1].isUnmatched(panels[0], panels[2])) {
      panels[1].unmatch();
    }
    if (panels[2].isUnmatched(panels[0], panels[1])) {
      panels[2].unmatch();
    }
    if (panels[0] === panels[1] && panels[0] === panels[2]) {
      console.log("あたり！");
    }
  }

  const panels = [
    new Panel(), //hien thi anh 1 cho the 'section'    (1)
    new Panel(), //hien thi anh 2 cho the 'section'
    new Panel(), //hien thi anh 3 cho the 'section'
  ];
  let panelsLeft = 3;
  const spin = document.getElementById('spin'); //tao bien 'spin' voi gia tri la noi dung trong id 'spin' cua html
  spin.addEventListener('click', () => {   //nhan vao 'spin'  (1)
    if (spin.classList.contains('inactive')) {
      return;
    } 
    spin.classList.add('inactive');
    panels.forEach(panel => {     //lan luot chay panles
      panel.activate();     //
      panel.spin();    //lay gia tri tu ham 'spin' duoc viet o doan tren
    });
  });
}



//初回のみモーダルをすぐ出す判定。flagがモーダル表示のstart_open後に代入され       
// var access = $.cookie('access')
// if(!access){
//     flag = true;
//     $.cookie('access', false);
// }else{
//     flag = false;
// }

//モーダル表示
$(".video-open").modaal({
// start_open:flag, // ページロード時に表示するか
overlay_close:true,//モーダル背景クリック時に閉じるか
type: 'video',
background: '#28BFE7', // 背景色
overlay_opacity:0.8, // 透過具合
before_open:function(){// モーダルが開く前に行う動作
    $('html').css('overflow-y','hidden');/*縦スクロールバーを出さない*/
},
after_close:function(){// モーダルが閉じた後に行う動作
    $('html').css('overflow-y','scroll');/*縦スクロールバーを出す*/
}
});




function H1() {                
  swal({
      title: "Chúc Mừng Sinh Nhật Bích Ngọc", // Tiêu đề của popup
      text: "Chúc em luôn thành đạt trong cuộc sống nhé!",
      button: {
          text: "❤️️",
      },
  });
}
function A1() {                
  swal({
      title: "Chúc Mừng Sinh Nhật Bích Ngọc", // Tiêu đề của popup
      text: "Chúc em có thật nhiều điều may mắn và hạnh phúc trong thời gian sắp tới nhé!",
      button: {
          text: "❤️️",
      },
  });
}
function P1() {                
  swal({
      title: "Chúc Mừng Sinh Nhật Bích Ngọc", // Tiêu đề của popup
      text: "Hãy sống thật hết mình với những đam mê để có một tuổi mới thật ý nghĩa nhé em!",
      button: {
          text: "❤️️",
      },
  });
}
function P2() {                
  swal({
      title: "Chúc Mừng Sinh Nhật Bích Ngọc", // Tiêu đề của popup
      text: "Chúc em có một tương lai thật tươi sáng cùng với những điều tốt đẹp sắp đến nhé",
      button: {
          text: "❤️️",
      },
  });
}
function Y1() {                
  swal({
      title: "Chúc Mừng Sinh Nhật Bích Ngọc", // Tiêu đề của popup
      text: "Vạn vật bỗng trở nên tươi đẹp và tràn đầy sức sống một cách thật kì lạ! Vì đây chính là ngày sinh nhật của em đấy!",
      button: {
          text: "❤️️",
      },
  });
}
function B() {                
  swal({
      title: "Chúc Mừng Sinh Nhật Bích Ngọc", // Tiêu đề của popup
      text: "Hôm nay là một ngày tuyệt vời, ngày em đến với thế giới này trong sự chào đón và vui mừng của mọi người! \n Sinh nhật vui vẻ em nhé!",
      button: {
          text: "❤️️",
      },
  });
}
function I() {                
  swal({
      title: "Chúc Mừng Sinh Nhật Bích Ngọc", // Tiêu đề của popup
      text: "Chúc mọi niềm vui sẽ đến với em để xua tan đi phiền muộn.",
      button: {
          text: "❤️️",
      },
  });
}
function R() {                
  swal({
      title: "Chúc Mừng Sinh Nhật Bích Ngọc", // Tiêu đề của popup
      text: "Chúc em sinh nhật tràn ngập niềm vui và sự yêu thương!",
      button: {
          text: "❤️️",
      },
  });
}
function T() {                
  swal({
      title: "Chúc Mừng Sinh Nhật Bích Ngọc", // Tiêu đề của popup
      text: "Chúc em sức khỏe dồi dào, thu hoạch thêm nhiều thành công rực rỡ!",
      button: {
          text: "❤️️",
      },
  });
}
function H2() {                
  swal({
      title: "Chúc Mừng Sinh Nhật Bích Ngọc", // Tiêu đề của popup
      text: "Hãy làm cho ngày hôm nay trở thành một ngày sinh nhật thật đáng nhớ, chứa đầy những kỉ niệm, niềm vui và tiếng cười nhé!",
      button: {
          text: "❤️️",
      },
  });
}
function D() {                
  swal({
      title: "Chúc Mừng Sinh Nhật Bích Ngọc", // Tiêu đề của popup
      text: "Chúc em có một ngày sinh nhật ý nghĩa! Đây sẽ là một ngày tuyệt vời cùng với những điều bất ngờ nhất và đặc biệt nhất của riêng em!",
      button: {
          text: "❤️️",
      },
  });
}
function A2() {                
  swal({
      title: "Chúc Mừng Sinh Nhật Bích Ngọc", // Tiêu đề của popup
      text: "Sinh nhật chỉ kéo dài vỏn vẹn trong 24 giờ. Vậy hãy cố gắng cảm nhận nó một cách trọn vẹn nhất em nhé!",
      button: {
          text: "❤️️",
      },
  });
}
function Y2() {                
  swal({
      title: "Chúc Mừng Sinh Nhật Bích Ngọc", // Tiêu đề của popup
      text: "Chúc em một tuổi mới thật đẹp, thật tuyệt vời với những điều mới lạ và thú vị trong cuộc sống!",
      button: {
          text: "❤️️",
      },
  });
}
