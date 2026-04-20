import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useLocation} from '@docusaurus/router';
import {translate} from '@docusaurus/Translate';
import {mergeSearchStrings, useHistorySelector} from '@docusaurus/theme-common';
import DropdownNavbarItem from '@theme/NavbarItem/DropdownNavbarItem';
import IconLanguage from '@theme/Icon/Language';
import styles from './styles.module.css';

/**
 * Given the current pathname, strip any known locale prefix and return
 * the "bare" path (always starts with '/').
 *
 * Examples (siteBaseUrl = '/'):
 *   /en/docs/intro  -> /docs/intro
 *   /ja/            -> /
 *   /docs/intro     -> /docs/intro   (zh-Hans default, no prefix)
 */
function getBarePath(
  pathname: string,
  locales: string[],
  defaultLocale: string,
): string {
  for (const locale of locales) {
    if (locale === defaultLocale) continue; // default locale has no prefix
    const prefix = `/${locale}`;
    if (pathname === prefix || pathname.startsWith(prefix + '/')) {
      return pathname.slice(prefix.length) || '/';
    }
  }
  return pathname;
}

export default function LocaleDropdownNavbarItem({
  mobile,
  dropdownItemsBefore = [],
  dropdownItemsAfter = [],
  queryString,
  ...props
}: {
  mobile?: boolean;
  dropdownItemsBefore?: unknown[];
  dropdownItemsAfter?: unknown[];
  queryString?: string;
  [key: string]: unknown;
}) {
  const {
    i18n: {currentLocale, defaultLocale, locales, localeConfigs},
  } = useDocusaurusContext();

  const {pathname} = useLocation();
  const search = useHistorySelector((h: {location: {search: string}}) => h.location.search);
  const hash = useHistorySelector((h: {location: {hash: string}}) => h.location.hash);

  // Strip any locale prefix to get the page-relative path
  const barePath = getBarePath(pathname, locales, defaultLocale!);

  function getLocaleHref(locale: string): string {
    // Default locale: /bare/path
    // Other locales:  /locale/bare/path
    const isDefault = locale === defaultLocale;
    const root = isDefault ? barePath : `/${locale}${barePath === '/' ? '' : barePath}`;
    const finalSearch = mergeSearchStrings([search, queryString ?? ''], 'append');
    return `pathname://${root}${finalSearch}${hash}`;
  }

  const localeItems = locales.map((locale: string) => {
    const localeConfig = localeConfigs[locale];
    return {
      label: localeConfig.label,
      lang: localeConfig.htmlLang,
      to: getLocaleHref(locale),
      target: '_self',
      autoAddBaseUrl: false,
      className:
        locale === currentLocale
          ? mobile
            ? 'menu__link--active'
            : 'dropdown__link--active'
          : '',
    };
  });

  const items = [...dropdownItemsBefore, ...localeItems, ...dropdownItemsAfter];

  const dropdownLabel = mobile
    ? translate({
        message: 'Languages',
        id: 'theme.navbar.mobileLanguageDropdown.label',
        description: 'The label for the mobile language switcher dropdown',
      })
    : localeConfigs[currentLocale]?.label ?? currentLocale;

  return (
    <DropdownNavbarItem
      {...props}
      mobile={mobile}
      label={
        <>
          <IconLanguage className={styles.iconLanguage} />
          {dropdownLabel}
        </>
      }
      items={items}
    />
  );
}
