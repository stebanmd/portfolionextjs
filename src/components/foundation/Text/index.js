import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { propToStyle } from '../../../theme/utils/propToStyle';
import Link from '../../common/Link';

export const TextStyleVariantsMap = {
  title: css`
    font-size: ${({ theme }) => theme.typographyVariants.title.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.title.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.title.lineHeight};
  `,
  titleXS: css`
    font-size: ${({ theme }) => theme.typographyVariants.titleXS.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.titleXS.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.titleXS.lineHeight};
  `,
  subTitle: css`
    font-size: ${({ theme }) => theme.typographyVariants.subTitle.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.subTitle.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.subTitle.lineHeight};
  `,
  paragraph1: css`
    font-size: ${({ theme }) => theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.paragraph1.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.paragraph1.lineHeight};
  `,
  smallestException: css`
    font-size: ${({ theme }) => theme.typographyVariants.smallestException.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.smallestException.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.smallestException.lineHeight};
  `,
};

const TextBase = styled.span`
  ${({ variant }) => TextStyleVariantsMap[variant]}
  color: ${(props) => get(props.theme, `colors.${props.color}.color`)};
  ${propToStyle('textAlign')}
  ${propToStyle('marginBottom')}
  ${propToStyle('fontWeight')}
`;

export function Text({
  tag,
  variant,
  children,
  href,
  ...props
}) {
  if (href) {
    return (
      <TextBase
        variant={variant}
        as={Link}
        href={href}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      >
        {children}
      </TextBase>
    );
  }

  return (
    <TextBase
      variant={variant}
      as={tag}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </TextBase>
  );
}

Text.propTypes = {
  tag: PropTypes.string,
  href: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.node,
};

Text.defaultProps = {
  tag: 'span',
  href: '',
  variant: 'paragraph1',
  children: null,
};
