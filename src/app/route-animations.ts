import{
    trigger,
    transition,
    style,
    query,
    group,
    animateChild,
    animate,
    keyframes
} from '@angular/animations';


export const fader = trigger('routeAnimations', [
    transition('* <=> *',[
        query(':enter, :leave',[
            style({
                position:'absolute',
                left:0,
                width: '100%',
                opacity:1,
                transform: 'translateX(100%)',
            })
        ], {optional: true}),
        query(':enter', [
            animate('150ms ease',
                style({transform:'translateX(0)' })
            )
        ], {optional: true})
    ]),
])
