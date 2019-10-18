import { Component, Host, h } from '@stencil/core';

@Component({
    tag: 'fancy-button',
    styleUrl: 'fancy-button.css',
    shadow: true
})
export class FancyButton {



    render() {
        return (
            <Host>
                <a href="#" class="button">Hover me</a>
            </Host>
        );
    }

}
