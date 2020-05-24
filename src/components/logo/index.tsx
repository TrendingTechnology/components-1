import React from 'react';
import styled, {
    css,
    DefaultTheme,
    FlattenInterpolation,
    ThemeProps
} from 'styled-components';
import {
    slideRight,
    slideDown,
    slideUpLeft,
    stripUnit,
    relative,
    thinking
} from '../design-tokens';
import { defaultTheme } from '../theme-provider';

export interface LogoProps {
    /** The Logo's id. */
    readonly id?: string;
    /** The Logo's classname. */
    readonly className?: string;
    /** The Logo's top left triangle color. */
    readonly bUpColor?: string;
    /** The Logo's bottom left triangle color. */
    readonly bDownColor?: string;
    /** The Logo's right triangle color. */
    readonly dColor?: string;
    /** The Logo's size. */
    readonly size: string;
    /** The Logo's animated state. */
    readonly animated?: boolean;
    /** The Logo's thinking state. */
    readonly thinking?: boolean;
}

const bUp = (offset: number): string =>
    `0,0 0,${offset * 0.5} ${offset * 0.5},${offset * 0.5}`;

const bDown = (offset: number): string =>
    `0,${offset * 0.5} 0,${offset} ${offset * 0.5},${offset}`;

const d = (offset: number): string =>
    `${offset * 0.5},0 ${offset * 0.5},${offset} ${offset},${offset * 0.5}`;

export interface TriangleProps {
    readonly points: string;
    readonly color: string;
    readonly animated: boolean;
    readonly thinking: boolean;
}

export const logoAnimation = (
    props: TriangleProps,
    slideAnimation: FlattenInterpolation<
        ThemeProps<DefaultTheme>
    > | null = null,
    thinkingAnimation: FlattenInterpolation<
        ThemeProps<DefaultTheme>
    > | null = null,
    delay = '0'
): FlattenInterpolation<ThemeProps<DefaultTheme>> => css`
    ${props.animated && !props.thinking && slideAnimation};
    ${props.thinking && thinkingAnimation};
    animation-delay: ${delay};
`;

const Triangle: React.FC<TriangleProps> = styled.polygon<TriangleProps>`
    fill: ${(props): string => props.color};
`;

const BUp: React.FC<TriangleProps> = styled(Triangle)`
    ${(props): FlattenInterpolation<ThemeProps<DefaultTheme>> =>
        logoAnimation(props, slideRight(), thinking())}
`;

const BDown: React.FC<TriangleProps> = styled(Triangle)`
    ${(props): FlattenInterpolation<ThemeProps<DefaultTheme>> =>
        logoAnimation(props, slideUpLeft(), thinking(), '0.1s')}
`;

const D: React.FC<TriangleProps> = styled(Triangle)`
    ${(props): FlattenInterpolation<ThemeProps<DefaultTheme>> =>
        logoAnimation(props, slideDown(), thinking(), '0.2s')}
`;

const SVGLogo: React.FC<LogoProps> = ({
    id,
    className,
    bUpColor = defaultTheme.colors.greens.base,
    bDownColor = defaultTheme.colors.blues.base,
    dColor = defaultTheme.colors.yellows.base,
    size = defaultTheme.sizing.l,
    animated = false,
    thinking = false
}) => (
    <svg id={id} className={className}>
        <BUp
            points={bUp(stripUnit(size))}
            color={bUpColor}
            animated={animated}
            thinking={thinking}
        />
        <BDown
            points={bDown(stripUnit(size))}
            color={bDownColor}
            animated={animated}
            thinking={thinking}
        />
        <D
            points={d(stripUnit(size))}
            color={dColor}
            animated={animated}
            thinking={thinking}
        />
    </svg>
);

export const Logo: React.FC<LogoProps> = styled(SVGLogo)<LogoProps>`
    ${relative()};

    display: block;
    width: ${(props): string => props.size};
    height: ${(props): string => props.size};
`;

Logo.displayName = 'Logo';