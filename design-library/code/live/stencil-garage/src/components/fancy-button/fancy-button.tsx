import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
    tag: 'fancy-button',
    styleUrl: 'fancy-button.css',
    shadow: true
})
export class FancyButton {

    /**
   * Pass a string value which will be used for the button text
   */

    @Prop() buttontext:string = "Click Me!";

    @Event() buttonWasClicked: EventEmitter;

    onButtonClick(){
        console.log("Clicked in component")
        this.buttonWasClicked.emit();
    }

    render() {
        return (
            <Host>
                <div class="button" onClick={()=>this.onButtonClick()}>{this.buttontext}</div>
            </Host>
        );
    }

}
