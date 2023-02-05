function animateFrom3( elem, direction ) {
    // eslint-disable-next-line no-bitwise
    direction = direction | 20;

    let x = direction * 150;
    let y = 0;

    if ( elem.classList.contains( 'text-reveal3-left' ) ) {
        x = 0;
        y = -100;
    } else if ( elem.classList.contains( 'text-reveal3-right' ) ) {
        x = 0;
        y = 100;
    }

    gsap.fromTo( elem, {
        x: x,
        y: y,
        autoAlpha: 0,
    }, {
        duration: 1,
        x: 0,
        y: 0,
        autoAlpha: 1,
        overwrite: 'auto',
        force3D: true,
    } );
}

function hide( elem ) {
    gsap.killTweensOf( elem );
    gsap.set( elem, {autoAlpha: 0 } );
}

function hideKill( elem ) {
    gsap.killTweensOf( elem );
    gsap.to( elem, { duration: 1.5, autoAlpha: 0, y: 100 } );
}
// start scroll trigger animations
const $elemsToReveal3 = document.querySelectorAll( '.text-reveal3' );

gsap.utils.toArray( $elemsToReveal3 ).forEach( ( elem ) => {
    hide( elem );
    ScrollTrigger.create( {
        trigger: elem,
        onEnter: () => animateFrom3( elem ),
        onEnterBack: () => animateFrom3( elem),
        onLeave: () => hide( elem ),
        onLeaveBack: () => hideKill( elem ),
    } );
} );