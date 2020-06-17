import React from 'react';
import deepMerge from 'lodash.merge';
import styled from 'styled-components';
import { Box, BoxProps } from '../box';

export type Ratio = { x: number | string; y: number | string };

export interface AspectRatioProps {
    readonly ratio?: string | Ratio;
}

const splitRatio = (ratioProp: string): Ratio => ({
    x: ratioProp.split('/')[0],
    y: ratioProp.split('/')[1] || 1
});

const ratio = (ratioProp: string | Ratio): Ratio =>
    Object.prototype.hasOwnProperty.call(ratioProp, 'x') &&
    Object.prototype.hasOwnProperty.call(ratioProp, 'y')
        ? (ratioProp as Ratio)
        : splitRatio(`${ratioProp}`);

const padding = (ratioProp: string | Ratio): string =>
    `padding-bottom: calc(100% / (${ratio(ratioProp).x} / ${
        ratio(ratioProp).y
    }))`;

const AspectRatioBox: React.FC<
    BoxProps & AspectRatioProps & React.HTMLProps<HTMLDivElement>
> = styled(Box)<BoxProps & AspectRatioProps>`
    position: relative;
    overflow-y: scroll;
    height: 100%;

    :before {
        ${({ ratio }): string => padding(ratio || '16/9')};
        display: block;
        content: '';
    }

    > :first-child {
        position: absolute;
        object-fit: scale-down;
        object-position: 50% 50%;
        top: 0;
        bottom: 0;
        left: 0;
        width: 100%;
    }

    > img {
        height: auto;
    }
`;

export const AspectRatio: React.FC<
    BoxProps & AspectRatioProps & React.HTMLProps<HTMLDivElement>
> = ({ as = 'div', styles, ...restProps }) => (
    <>
        <AspectRatioBox as={as} styles={deepMerge({}, styles)} {...restProps} />
    </>
);

AspectRatio.displayName = 'AspectRatio';