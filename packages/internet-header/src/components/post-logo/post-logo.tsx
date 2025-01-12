import { Component, Host, h, State, Element } from '@stencil/core';
import { throttle } from 'throttle-debounce';
import { state } from '../../data/store';

@Component({
  tag: 'post-logo',
  styleUrl: 'post-logo.scss',
  shadow: true,
})
export class PostLogo {
  @State() showFaviconLogo: boolean;
  @Element() host: HTMLPostLogoElement;
  private throttledResize: throttle<() => void>;
  private resizeObserver: ResizeObserver;

  constructor() {
    // Register window resize event listener and a resize observer on the mainnav controls (they change size while controls are being loaded) to display an accurately sized logo
    this.throttledResize = throttle(300, () => this.handleResize());
    window.addEventListener('resize', this.throttledResize, { passive: true });
    this.resizeObserver = new ResizeObserver(this.handleResize.bind(this));

    // Initially call the resize handler
    this.handleResize();
  }

  componentDidLoad() {
    const mainNavControls = this.host.parentElement?.querySelector('.main-navigation-controls');
    if (mainNavControls) {
      this.resizeObserver.observe(mainNavControls);
    }
  }

  disconnectedCallback() {
    window.removeEventListener('resize', this.throttledResize);
    this.resizeObserver.disconnect();
  }

  handleResize() {
    const mainNavControls = this.host.parentElement?.querySelector('.main-navigation-controls');
    const menuButton = this.host.parentElement?.querySelector('.menu-button');
    if (mainNavControls && menuButton)
      this.showFaviconLogo =
        window.innerWidth - (150 + mainNavControls.clientWidth + menuButton.clientWidth) <= 0;
  }

  render() {
    if (state.localizedConfig?.header.logo === undefined) return;
    const config = state.localizedConfig.header.logo;

    return (
      <Host>
        <a href={config.logoLink} class="logo">
          <span class="visually-hidden">{config.logoLinkTitle}</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" aria-hidden="true">
            <g id="Logo">
              <rect fill="#ffcc00" x="0" y="0" width="72" height="72" />
              <polygon
                fill="#ff0000"
                points="34,32.3 34,19 19.7,19 19.7,29.1 10,29.1 10,42.9 19.7,42.9 19.7,53 34,53 34,39.7 30.6,39.7 30.6,49.8 23.1,49.8 23.1,39.7 13.4,39.7 13.4,32.3 23.1,32.3 23.1,22.2 30.6,22.2 30.6,32.3"
              />
              <path d="M53.56234,31.10526c0,2.41272-1.99154,4.29475-4.51723,4.29475H45.2v-8.3h3.84511C51.66802,27.1,53.56234,28.78889,53.56234,31.10526z M50.69666,19H36v34h9.2V42.9h5.49666c6.75131,0,11.9971-5.15137,11.9971-11.8057C62.69376,24.39136,57.35099,19,50.69666,19z" />
            </g>
          </svg>
        </a>
      </Host>
    );
  }
}
