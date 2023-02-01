function animateFrom( elem, direction ) {
    // eslint-disable-next-line no-bitwise
    direction = direction | 1;

    let x = 0;
    let y = direction * 100;

    if ( elem.classList.contains( 'text-reveal-left' ) ) {
        x = -100;
        y = 0;
    } else if ( elem.classList.contains( 'text-reveal-right' ) ) {
        x = 100;
        y = 0;
    }

    gsap.fromTo( elem, {
        x: x,
        y: y,
        autoAlpha: 0,
    }, {
        duration: 1.5,
        x: 0,
        y: 0,
        autoAlpha: 1,
        overwrite: 'auto',
        force3D: true,
    } );
}

function hide( elem ) {
    gsap.killTweensOf( elem );
    gsap.set( elem, { autoAlpha: 0 } );
}

function hideKill( elem ) {
    gsap.killTweensOf( elem );
    gsap.to( elem, { duration: 1.5, autoAlpha: 0, y: 100 } );
}
// start scroll trigger animations
const $elemsToReveal = document.querySelectorAll( '.text-reveal' );

gsap.utils.toArray( $elemsToReveal ).forEach( ( elem ) => {
    hide( elem );
    ScrollTrigger.create( {
        trigger: elem,
        onEnter: () => animateFrom( elem ),
        onEnterBack: () => animateFrom( elem, -1 ),
        onLeave: () => hide( elem ),
        onLeaveBack: () => hideKill( elem ),
    } );
} );