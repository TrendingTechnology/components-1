import React from 'react';
import styled from 'styled-components';
import { defaultTheme } from '../theme-provider';

export interface LayoutProps {
    /** The Layout's id. */
    readonly id?: string;
    /** The Layout's classname. */
    readonly className?: string;
    /** The Layout's children. */
    readonly children?: React.ReactNode | React.ReactNode[];
    /** The Layout's header. */
    readonly header?: React.ReactNode;
    /** The Layout's sidebar. */
    readonly sidebar?: React.ReactNode;
    /** The Layout's main content. */
    readonly main?: React.ReactNode;
    /** The Layout's footer. */
    readonly footer?: React.ReactNode;
}

const generateWrapper: React.FC<LayoutProps & { type: string }> = ({
    id,
    className,
    children,
    type
}) => {
    return React.createElement(
        type,
        {
            id,
            className
        },
        [children]
    );
};

const HeaderWrapper: React.FC<LayoutProps> = ({ id, className, header }) =>
    generateWrapper({ type: 'header', id, className, children: [header] });

const SidebarWrapper: React.FC<LayoutProps> = ({ id, className, sidebar }) =>
    generateWrapper({ type: 'aside', id, className, children: [sidebar] });

const MainWrapper: React.FC<LayoutProps> = ({
    id,
    className,
    children,
    main
}) =>
    generateWrapper({
        type: 'main',
        id,
        className,
        children: [main, children]
    });

const FooterWrapper: React.FC<LayoutProps> = ({ id, className, footer }) =>
    generateWrapper({ type: 'footer', id, className, children: [footer] });

const SectionWrapper: React.FC<LayoutProps> = ({ id, className, children }) =>
    generateWrapper({ type: 'section', id, className, children });

const Header: React.FC<LayoutProps> = styled(HeaderWrapper)`
    flex: 0 0 auto;
    height: ${defaultTheme.sizing.xxl};
    padding: ${defaultTheme.sizing.xxxs};
    line-height: ${defaultTheme.sizing.xxl};
`;

const Sidebar: React.FC<LayoutProps> = styled(SidebarWrapper)`
    flex: 0 0 auto;
    position: relative;
    min-width: 0;
`;

const Main: React.FC<LayoutProps> = styled(MainWrapper)`
    flex: auto;
    min-height: 0;
`;

const Footer: React.FC<LayoutProps> = styled(FooterWrapper)`
    padding: ${defaultTheme.sizing.m};
`;

const Section: React.FC<LayoutProps> = styled(SectionWrapper)`
    display: flex;
    flex: auto;
    flex-direction: ${({ sidebar }): string => (sidebar ? 'row' : 'column')};
    min-height: 0;
`;

export const Layout: React.FC<LayoutProps> = ({
    id,
    className,
    children,
    header,
    sidebar,
    main,
    footer
}) => (
    <div id={id} className={className}>
        {header && <Header key="header" header={header} />}
        {sidebar ? (
            <Section key="section" sidebar={sidebar}>
                <Sidebar key="sidebar" sidebar={sidebar} />
                <Main key="main" main={main}>
                    {children}
                </Main>
            </Section>
        ) : (
            <Main key="main" main={main}>
                {children}
            </Main>
        )}
        {footer && <Footer key="footer" footer={footer} />}
    </div>
);

Layout.displayName = 'Layout';