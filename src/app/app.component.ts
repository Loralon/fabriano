import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fabriano';

  config: any;
  fullpage_api: any;
  fullPageRef: any;
  status: any;
  element:any;
  elementHome:any;
  fotoH01:any;
  fotoH02:any;
  fotoH03:any;
  bigID:any;
  test:any;
  constructor() {

    
    // this is just an example => for more details on config please visit fullPage.js docs
    this.config = {
      licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
      sectionsColor: ['#000000', 'whitesmoke', '#7BAABE', 'whitesmoke', '#7BAABE'],
      anchors: ['home', 'product1', 'product2', 'product3', 'footer'],
      navigation: true,
      navigationPosition: 'right',
      scrollingSpeed:900,
      // events callback
      afterLoad: (destination:any, origin:any) => {
        console.log('afterLoad'+this.status);
        this.element = document.getElementById('fp-nav');
        if (origin.anchor=="home") {
          this.element.classList.add('disabled');
        } else if (origin.anchor!="home") {
          this.element.classList.remove('disabled')
          
        }
        
      },
      afterRender: () => {
         console.log('afterRender');
         this.elementHome = document.getElementById('homeid');
         this.elementHome.classList.add('homespecial');
      },
      afterResize: () => {
        // console.log('afterResize' + width + ' ' + height);
      },
      afterSlideLoad: () => {
         console.log('afterSlideLoad');
      },
      onLeave: (destination:any, origin:any, section:any, direction:any) => {
        console.log('onLeave');
        console.log('DEST: '+destination.anchor);
        console.log('ORIG: '+origin.anchor);
        console.log('SECT: '+section);
        console.log('DIREC: '+direction);

        this.status=origin.anchor;
        //this.element = document.getElementById(origin.anchor+"id");fp-nav
        //console.log(this.element);
        //this.element.className = 'acceso';
     }
    };
  }

  ngOnInit() {
    this.fotoH01 = document.getElementById('foto1homearea');  
    this.fotoH02 = document.getElementById('foto2homearea');
    this.fotoH03 = document.getElementById('foto3homearea');
  }

  getRef(fullPageRef:any) {
    this.fullpage_api = fullPageRef;
  }

  swappa (bigID:any) {
    console.log ('BigID= '+bigID.target.id)
    this.test=bigID.target.id;
    /*
    if (bigID.target.id==='foto1homearea') {
      this.fotoH01.classList.add('fotobig');
      this.fotoH02.classList.add('fotosmall');
      this.fotoH03.classList.add('fotosmall');
      
    } else if (bigID.target.id==='foto2homearea') {
      this.fotoH01.classList.add('fotosmall');
      this.fotoH02.classList.add('fotobig');
      this.fotoH03.classList.add('fotosmall');
      
    }*/
  }

  swappaback () {
    this.test='fuori';
}
}
