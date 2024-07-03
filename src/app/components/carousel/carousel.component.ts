import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

interface caroulseImage {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent implements OnInit {

  @Input() images: caroulseImage[] = [];
  @Input() showIndicator: boolean = true
  @Input() showNavigators: boolean = true
  @Input() animationSpeed: number = 500;
  @Input() autoPlay: boolean = true;
  @Input() autoPlayInterval: number = 3000;
  selectedIndex = 0;
  hidden = false;


  next() {
    let selectedIndex = (this.selectedIndex + 1) % this.images.length;
    this.jumpToSlide(selectedIndex);
  }
  previous() {
    let selectedIndex =
      (this.selectedIndex - 1 + this.images.length) % this.images.length;
    this.jumpToSlide(selectedIndex);
  }
  jumpToSlide(index: number) {
    this.hidden = true;
    setTimeout(() => {
      this.selectedIndex = index;
      this.hidden = false;
    }, this.animationSpeed);
  }
  ngOnInit() {
    if(this.autoPlay){
      setInterval(() => {
        this.next();
      }, this.autoPlayInterval);
    }
  }
}
