import { useState } from 'react';
import {
  SfButton,
  SfIconShoppingCart,
  SfIconFavorite,
  SfIconPerson,
  SfIconExpandMore,
  SfInput,
  SfIconSearch,
  SfIconMenu,
} from '@storefront-ui/react';

export default function Nav_mob() {

  return (
    <header className="flex justify-center w-full py-2 px-4 lg:py-5 lg:px-6 text-white bg-main-color border-0 bg-primary-700">
      <div className="flex flex-wrap lg:flex-nowrap items-center flex-row justify-start h-full max-w-[1536px] w-full">
        <a
          href="#"
          aria-label="SF Homepage"
          className="inline-block mr-4 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm shrink-0"
        >
          <picture>
            <source srcSet="https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/vsf_logo_white.svg" media="(min-width: 768px)" />
            <img
              src="https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/vsf_logo_sign_white.svg"
              alt="Sf Logo"
              className="w-8 h-8 md:h-6 md:w-[176px] lg:w-[12.5rem] lg:h-[1.75rem]"
            />
          </picture>
        </a>
        <SfButton
          aria-label="Open categories"
          className="lg:hidden order-first lg:order-1 mr-4 text-white hover:text-white active:text-white hover:bg-primary-800 active:bg-primary-900"
          square
          variant="tertiary"
        >
          <SfIconMenu />
        </SfButton>
        <SfButton
          className="hidden lg:flex lg:mr-4 text-white hover:text-white active:text-white hover:bg-primary-800 active:bg-primary-900"
          type="button"
          variant="tertiary"
          slotSuffix={<SfIconExpandMore className="hidden lg:block" />}
        >
          <span className="hidden lg:flex whitespace-nowrap">Browse products</span>
        </SfButton>
      </div>
    </header>
  );
}