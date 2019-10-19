import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
    tag: 'fancy-button',
    styleUrl: 'fancy-button.css',
    shadow: true
})
export class FancyButton {
    /**
        The text to display on the button
    */
    @Prop()text: string = "click"; 

    @Event()clicked: EventEmitter;

    onButtonClick(){
        this.clicked.emit();
    }

    render() {
        return (
            <Host>
                <div class="button" onClick={()=>this.onButtonClick()}>{this.text}</div>
            </Host>
        );
    }

}
