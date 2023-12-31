
    var docStyle = document.createElement('style');
docStyle.innerHTML = `*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  
}

.visible {
  visibility: visible
}

.fixed {
  position: fixed
}

.absolute {
  position: absolute
}

.relative {
  position: relative
}

.inset-0 {
  inset: 0px
}

.bottom-3 {
  bottom: 0.75rem
}

.left-0 {
  left: 0px
}

.top-0 {
  top: 0px
}

.right-0 {
  right: 0px
}

.bottom-6 {
  bottom: 1.5rem
}

.bottom-4 {
  bottom: 1rem
}

.z-50 {
  z-index: 50
}

.m-4 {
  margin: 1rem
}

.flex {
  display: flex
}

.hidden {
  display: none
}

.h-8 {
  height: 2rem
}

.h-6 {
  height: 1.5rem
}

.h-12 {
  height: 3rem
}

.h-10 {
  height: 2.5rem
}

.h-96 {
  height: 24rem
}

.h-32 {
  height: 8rem
}

.h-full {
  height: 100%
}

.max-h-96 {
  max-height: 24rem
}

.w-14 {
  width: 3.5rem
}

.w-fit {
  width: -moz-fit-content;
  width: fit-content
}

.w-full {
  width: 100%
}

.w-screen {
  width: 100vw
}

.w-16 {
  width: 4rem
}

.w-10 {
  width: 2.5rem
}

.w-8 {
  width: 2rem
}

.w-1 {
  width: 0.25rem
}

.w-6 {
  width: 1.5rem
}

.w-7 {
  width: 1.75rem
}

.w-12 {
  width: 3rem
}

.w-96 {
  width: 24rem
}

.w-32 {
  width: 8rem
}

.w-1\\/2 {
  width: 50%
}

.w-4\\/5 {
  width: 80%
}

.max-w-4xl {
  max-width: 56rem
}

.max-w-7xl {
  max-width: 80rem
}

.max-w-5xl {
  max-width: 64rem
}

.max-w-full {
  max-width: 100%
}

.flex-shrink {
  flex-shrink: 1
}

.flex-grow {
  flex-grow: 1
}

@keyframes spin {
  to {
    transform: rotate(360deg)
  }
}

.animate-spin {
  animation: spin 1s linear infinite
}

@keyframes pulse {
  50% {
    opacity: .5
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite
}

.cursor-pointer {
  cursor: pointer
}

.flex-row {
  flex-direction: row
}

.flex-col {
  flex-direction: column
}

.items-center {
  align-items: center
}

.justify-end {
  justify-content: flex-end
}

.justify-center {
  justify-content: center
}

.justify-between {
  justify-content: space-between
}

.justify-around {
  justify-content: space-around
}

.space-x-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.5rem * var(--tw-space-x-reverse));
  margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)))
}

.space-y-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse))
}

.overflow-y-auto {
  overflow-y: auto
}

.rounded-xl {
  border-radius: 0.75rem
}

.rounded-full {
  border-radius: 9999px
}

.rounded {
  border-radius: 0.25rem
}

.rounded-t-xl {
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem
}

.border {
  border-width: 1px
}

.border-2 {
  border-width: 2px
}

.border-solid {
  border-style: solid
}

.border-none {
  border-style: none
}

.border-white {
  --tw-border-opacity: 1;
  border-color: rgb(255 255 255 / var(--tw-border-opacity))
}

.bg-comfy-light {
  --tw-bg-opacity: 1;
  background-color: rgb(53 53 53 / var(--tw-bg-opacity))
}

.bg-gray-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(107 114 128 / var(--tw-bg-opacity))
}

.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity))
}

.bg-comfy-dark {
  --tw-bg-opacity: 1;
  background-color: rgb(34 34 34 / var(--tw-bg-opacity))
}

.object-cover {
  -o-object-fit: cover;
     object-fit: cover
}

.p-2 {
  padding: 0.5rem
}

.px-1 {
  padding-left: 0.25rem;
  padding-right: 0.25rem
}

.px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem
}

.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem
}

.text-center {
  text-align: center
}

.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem
}

.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem
}

.text-xs {
  font-size: 0.75rem;
  line-height: 1rem
}

.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem
}

.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem
}

.font-semibold {
  font-weight: 600
}

.text-gray-300 {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity))
}

.text-black {
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity))
}

.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity))
}

.underline {
  text-decoration-line: underline
}

.no-underline {
  text-decoration-line: none
}

.opacity-0 {
  opacity: 0
}

.opacity-100 {
  opacity: 1
}

.outline-none {
  outline: 2px solid transparent;
  outline-offset: 2px
}

.outline-0 {
  outline-width: 0px
}

.ring-0 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)
}

.blur {
  --tw-blur: blur(8px);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)
}

.filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)
}

.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms
}

.transition {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms
}

.transition-opacity {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms
}

.duration-300 {
  transition-duration: 300ms
}

.ease-in-out {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)
}

@keyframes Gradient {
  0%{
    background-position: 0% 50%
  }

  50%{
    background-position: 100% 50%
  }

  100%{
    background-position: 0% 50%
  }
}

.animated-background{
  background: linear-gradient(270deg, #d53369, #daae51);
  background-size: 200% 200%;
  animation: Gradient 2s ease infinite;
}

.hover\\:bg-gray-500:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(107 114 128 / var(--tw-bg-opacity))
}

.focus\\:outline-none:focus {
  outline: 2px solid transparent;
  outline-offset: 2px
}
`;
document.head.appendChild(docStyle);
    