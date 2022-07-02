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
        'tiger.png',
        'rose.png',
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
