import React from 'react';
import styled from 'styled-components';
import { defaultBorderRadius, defaultBoxShadow } from '@lapidist/design-tokens';
import { defaultTheme } from '@lapidist/theme-provider';

export interface PanelProps {
    /** The Panel's id. */
    readonly id?: string;
    /** The Panel's classname. */
    readonly className?: string;
    /** The Panel's children. */
    readonly children?: React.ReactNode;
    /** The Panel's elevated state. Gives a box shadow. */
    readonly elevated?: boolean;
    /** The Panel's rounded state. Gives a rounded border. */
    readonly rounded?: boolean;
    /** The Panel's outline state. Gives an outline border. */
    readonly outline?: boolean;
    /** The Panel's color. */
    readonly color?: string;
}

const Panel: React.FC<PanelProps> = styled.div<PanelProps>`
    ${({ elevated = false }): string => (elevated ? defaultBoxShadow() : '')};
    ${({ rounded = false }): string => (rounded ? defaultBorderRadius() : '')};
    ${({ outline = false, color = defaultTheme.colors.greys.base }): string =>
        outline
            ? `background: transparent; border: ${defaultTheme.sizing.xxxs} ${color}`
            : `background: ${color}; border: ${defaultTheme.sizing.xxxs} transparent`};
`;

export default Panel;