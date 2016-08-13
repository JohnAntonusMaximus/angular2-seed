import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'voter',
    templateUrl: 'app/vote.template.html'
    styles: [`
    .voter {
        width: 20px;
        text-align: center;
        color: #999;
    }

    .vote-button {
        cursor: pointer;
    }

    .highlighted {
        color: yellow;
    }
    `]
})

export class VoterComponent {
    @Input() voteCount = 0;
    @Input() myVote = 0;

    @Output() vote = new EventEmitter();

    upVote(){
        if (this.myVote==1)
            return;
        
        this.myVote++;

        this.vote.emit({myVote = this.myVote});
    }

    downVote(){
        if (this.myVote==-1)
            return;

        this.myVote--;

        this.vote.emit({myVote = this.myVote});
    }

}