import {Component, Input, EventEmitter, Output} from 'angular2/core';

@Component({
    selector: 'like',
    templateUrl: 'app/like.template.html',
    styles: [`
    .glyphicon-heart {
        color: #ccc;
        cursor: pointer;
    }
    `]
})

export class LikeComponent{
    @Input() isLiked = false;
    @Input() totalLikes = 0;

    onClick(){
        this.isLiked = !this.isLiked;
        this.totalLikes += this.isLiked ? 1 : -1;
    }
}