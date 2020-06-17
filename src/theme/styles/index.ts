import * as CSS from 'csstype';

import { Color, NumberOrString, Theme, ThemeObject } from '../theme';
import withBase from './base';
import withBreakpoints from './breakpoints';
import withNesting from './nesting';

export interface Styles {
    readonly fontSize?: CSS.FontSizeProperty<NumberOrString>;
    readonly fontFamily?: CSS.FontFamilyProperty;
    readonly fontWeight?: CSS.FontWeightProperty;
    readonly lineHeight?: CSS.LineHeightProperty<NumberOrString>;
    readonly letterSpacing?: CSS.LetterSpacingProperty<NumberOrString>;
    readonly borderRadius?: CSS.BorderRadiusProperty<NumberOrString>;
    readonly borderWidth?: CSS.BorderWidthProperty<NumberOrString>;
    readonly borderTopWidth?: CSS.BorderTopWidthProperty<NumberOrString>;
    readonly borderRightWidth?: CSS.BorderRightWidthProperty<NumberOrString>;
    readonly borderBottomWidth?: CSS.BorderBottomWidthProperty<NumberOrString>;
    readonly borderLeftWidth?: CSS.BorderLeftWidthProperty<NumberOrString>;
    readonly borderColor?: Color;
    readonly borderTopColor?: Color;
    readonly borderRightColor?: Color;
    readonly borderBottomColor?: Color;
    readonly borderLeftColor?: Color;
    readonly backgroundColor?: Color;
    readonly textColor?: Color;
    readonly boxShadow?: CSS.BoxShadowProperty;
    readonly width?: CSS.WidthProperty<NumberOrString>;
    readonly minWidth?: CSS.WidthProperty<NumberOrString>;
    readonly maxWidth?: CSS.WidthProperty<NumberOrString>;
    readonly containerWidth?: CSS.WidthProperty<NumberOrString>;
    readonly sizeWidth?: CSS.WidthProperty<NumberOrString>;
    readonly height?: CSS.HeightProperty<NumberOrString>;
    readonly minHeight?: CSS.HeightProperty<NumberOrString>;
    readonly maxHeight?: CSS.HeightProperty<NumberOrString>;
    readonly containerHeight?: CSS.HeightProperty<NumberOrString>;
    readonly sizeHeight?: CSS.HeightProperty<NumberOrString>;
    readonly textAlign?: CSS.TextAlignProperty;
    readonly margin?: CSS.MarginProperty<NumberOrString>;
    readonly marginX?: CSS.MarginProperty<NumberOrString>;
    readonly marginY?: CSS.MarginProperty<NumberOrString>;
    readonly marginTop?: CSS.MarginTopProperty<NumberOrString>;
    readonly marginRight?: CSS.MarginRightProperty<NumberOrString>;
    readonly marginBottom?: CSS.MarginBottomProperty<NumberOrString>;
    readonly marginLeft?: CSS.MarginLeftProperty<NumberOrString>;
    readonly padding?: CSS.PaddingProperty<NumberOrString>;
    readonly paddingX?: CSS.PaddingProperty<NumberOrString>;
    readonly paddingY?: CSS.PaddingProperty<NumberOrString>;
    readonly paddingTop?: CSS.PaddingTopProperty<NumberOrString>;
    readonly paddingRight?: CSS.PaddingRightProperty<NumberOrString>;
    readonly paddingBottom?: CSS.PaddingBottomProperty<NumberOrString>;
    readonly paddingLeft?: CSS.PaddingLeftProperty<NumberOrString>;
    readonly cursor?: CSS.CursorProperty;
    readonly overflow?: CSS.OverflowProperty;
    readonly overflowX?: CSS.OverflowXProperty;
    readonly overflowY?: CSS.OverflowYProperty;
    readonly breakpoints?: ThemeObject<Styles>;
    readonly pseudo?: ThemeObject<Styles>;
}

export interface PropsWithStyles {
    readonly styles?: Styles;
    readonly as?: keyof JSX.IntrinsicElements;
}

export const withStyles = (theme: Theme, styles?: Styles): string =>
    styles
        ? `
        ${withBase(theme, styles)}
        ${withBreakpoints(theme, styles)}
        ${withNesting(theme, styles)}
`
        : '';